'use client'

import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Swal from 'sweetalert2'

const DynamicPieChart = dynamic(() => import('@/components/PieChart'), {
	ssr: false,
	loading: () => <p>Loading chart...</p>
});

export default function InsightPage() {
	const router = useRouter()
	const [allUsers, setAllUsers] = useState([]);
	const [displayedUsers, setDisplayedUsers] = useState([]);
	const [campuses, setCampuses] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [selectedCampus, setSelectedCampus] = useState('');
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);
	const [zoomedImage, setZoomedImage] = useState<string | null>(null);
	const [totalUsers, setTotalUsers] = useState(0);
	const [limit, setLimit] = useState(10);
	const [isAllLoaded, setIsAllLoaded] = useState(false);
	const [campusData, setCampusData] = useState([]);

	// Retrieve the admin list from environment variable
    const admins = process.env.NEXT_PUBLIC_ADMINS?.split(',');

    // check login status
    useEffect(() => {
        async function checkAdminAccess() {
            const response = await fetch('/api/getUserData');
            const userData = await response.json();

            if (!admins?.includes(userData?.login)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Unauthorized',
                    text: 'You need to be logged in as an admin to access this page.',
                }).then(() => {
                    if (userData?.login) {
                        router.push('/');
                    } else {
                        router.push('/login');
                    }
                });
            }
        }

        checkAdminAccess();
    }, [router, admins]);

	useEffect(() => {
		fetchAllUsers();
	}, []);

	useEffect(() => {
		filterAndPaginateUsers();
	}, [selectedCampus, currentPage, limit, allUsers]);

	const fetchAllUsers = async () => {
		setLoading(true);
		setError(null);
		try {
			const response = await fetch(`/api/getUsers?limit=10000`);
			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.details || 'Failed to fetch users');
			}
			const data = await response.json();
			setAllUsers(data.users);
			setCampuses(data.campuses || []);
			setTotalUsers(data.totalUsers);
			setIsAllLoaded(true);

			// Prepare data for the pie chart
			const chartData = data.campuses
				.filter(campus => campus.count > 0)
				.map(campus => ({
					name: campus.name,
					value: campus.count,
					color: `#${Math.floor(Math.random() * 16777215).toString(16)}`
				}))
				.sort((a, b) => b.value - a.value);
			setCampusData(chartData);
		} catch (error) {
			console.error('Error fetching users:', error);
			setError(error.message);
			setAllUsers([]);
			setCampuses([]);
			setCampusData([]);
		} finally {
			setLoading(false);
		}
	};

	const filterAndPaginateUsers = () => {
		let filteredUsers = allUsers;
		if (selectedCampus) {
			filteredUsers = allUsers.filter(user => user.campus === selectedCampus);
		}
		setTotalPages(Math.ceil(filteredUsers.length / limit));
		const start = (currentPage - 1) * limit;
		const end = start + limit;
		setDisplayedUsers(filteredUsers.slice(start, end));
	};

	const handlePageChange = (newPage) => {
		setCurrentPage(newPage);
	};

	const handleCampusChange = (campus) => {
		setSelectedCampus(campus);
		setCurrentPage(1);
	};

	const handleLimitChange = (newLimit) => {
		setLimit(Number(newLimit));
		setCurrentPage(1);
	};

	const handleImageClick = (imageUrl) => {
		setZoomedImage(imageUrl);
	};

	if (loading) {
		return <div className="text-center p-4">Loading...</div>;
	}

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-3xl font-bold mb-6">User Insights</h1>

			{error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
				<strong className="font-bold">Error:</strong>
				<span className="block sm:inline"> {error}</span>
			</div>}

			{/* Pie Chart */}
			<div className="mb-8 bg-white p-4 rounded shadow">
				<h2 className="text-xl font-semibold mb-4">User Distribution by Campus</h2>
				{loading ? (
					<p>Loading chart data...</p>
				) : campusData.length > 0 ? (
					<DynamicPieChart data={campusData} />
				) : (
					<p>No data available for the chart.</p>
				)}
			</div>

			<div className="mb-4 flex flex-wrap items-center gap-4">
				<div>
					<label htmlFor="campusSelect" className="mr-2">Filter by Campus:</label>
					<select
						id="campusSelect"
						value={selectedCampus}
						onChange={(e) => handleCampusChange(e.target.value)}
						className="p-2 border rounded"
					>
						<option value="">All Campuses ({totalUsers})</option>
						{campuses.map((campus) => (
							<option key={campus.name} value={campus.name}>
								{campus.name} ({campus.count})
							</option>
						))}
					</select>
				</div>
				<div>
					<label htmlFor="limitSelect" className="mr-2">Users per page:</label>
					<select
						id="limitSelect"
						value={limit}
						onChange={(e) => handleLimitChange(e.target.value)}
						className="p-2 border rounded"
					>
						{[5, 10, 50, 100].map((value) => (
							<option key={value} value={value}>{value}</option>
						))}
					</select>
				</div>
			</div>

			{displayedUsers.length > 0 ? (
				<div className="overflow-x-auto">
					<table className="min-w-full bg-white shadow-md rounded">
						<thead className="bg-gray-200">
							<tr>
								<th className="py-2 px-4 text-left">Profile</th>
								<th className="py-2 px-4 text-left">Full Name</th>
								<th className="py-2 px-4 text-left">Login</th>
								<th className="py-2 px-4 text-left">Pool</th>
								<th className="py-2 px-4 text-left">Campus</th>
							</tr>
						</thead>
						<tbody>
							{displayedUsers.map((user) => (
								<tr key={user.id} className="border-b hover:bg-gray-100">
									<td className="py-2 px-4">
										{user.image_url ? (
											<Image
												src={user.image_url}
												alt={user.login}
												width={40}
												height={40}
												className="rounded-full cursor-pointer"
												onClick={() => handleImageClick(user.image_url)}
											/>
										) : (
											<div className="w-10 h-10 bg-gray-300 rounded-full"></div>
										)}
									</td>
									<td className="py-2 px-4">{user.displayname}</td>
									<td className="py-2 px-4">
										<a
											href={`https://profile.intra.42.fr/users/${user.login}`}
											target="_blank"
											rel="noopener noreferrer"
											className="text-blue-600 hover:underline"
										>
											{user.login}
										</a>
									</td>
									<td className="py-2 px-4">{user.pool_year} {user.pool_month}</td>
									<td className="py-2 px-4">{user.campus}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			) : (
				<div className="text-center p-4">No users found.</div>
			)}

			<div className="mt-4 flex justify-center">
				<button
					onClick={() => handlePageChange(currentPage - 1)}
					disabled={currentPage === 1}
					className="px-4 py-2 mr-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
				>
					Previous
				</button>
				<span className="px-4 py-2">
					Page {currentPage} of {totalPages}
				</span>
				<button
					onClick={() => handlePageChange(currentPage + 1)}
					disabled={currentPage === totalPages}
					className="px-4 py-2 ml-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
				>
					Next
				</button>
			</div>

			{zoomedImage && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
					onClick={() => setZoomedImage(null)}
				>
					<div className="max-w-3xl max-h-3xl">
						<Image
							src={zoomedImage}
							alt="Zoomed profile"
							width={300}
							height={300}
							className="rounded-lg"
						/>
					</div>
				</div>
			)}
		</div>
	);
}