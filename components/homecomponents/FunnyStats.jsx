import React, { useState, useEffect } from 'react';
import PieChartComponent from '@/components/PieChart';

function FunnyStats() {
    const [campusData, setCampusData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
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
                setCampusData([]);
            } finally {
                setLoading(false);
            }
        };

        fetchAllUsers();
    }, []);

    return (
        <div className='bg-white rounded-lg mt-5'>
            <div className='max-w-6xl mx-auto py-14 px-5 2xl:px-14'>
                <div className=''>
                    <h1 className='text-2xl lg:text-3xl font-bold' id="FunnyStats">Funny Stats 📊</h1>
                    <p className=' pt-2 text-gray-600 text-center text-sm font-bold'>
                        Last stargazer:
                    </p>
                    <div className="flex justify-center items-center">
                        {/* last_stargazer_start_JSX */}<a href="https://github.com/mirsella"><img src="https://avatars.githubusercontent.com/u/45905567?v=4&s=250"
                  target="_blank"/></a>{/* last_stargazer_end_JSX */}
                    </div>

                    <p className=' pt-2 text-gray-600 text-center'>
                        Thanks to
                        {/* name_start_JSX */} <a
                            href="https://github.com/mirsella"
                            target="_blank"
                            className='text-[#0D94B6] hover:underline'
                        >mirsella</a> {/* name_end_JSX */}
                        for starring the repository! 🎉
                    </p>
                    <p className=' pt-2 text-gray-600 font-bold '>
                        Star Count: <span className='text-[#0D94B6] font-bold'>{/* stars_start */}752{/* stars_end */}</span> 🌟
                    </p>
                    <p className=' pt-2 text-gray-600 font-bold '>
                        Updates occur hourly. Last update : <span className=' font-normal'> {/* date_start_JSX */}19.08.2024, 17:19:53{/* date_end_JSX */} (CET)</span>
                    </p>
                    <a href="https://github.com/rphlr/42-Evals" target="_blank"><img src="https://api.star-history.com/svg?repos=rphlr/42-Evals&type=Date&" className='mt-5' alt="rphlr's Blue Github Chart" /></a>
                    <p className=' pt-2 text-gray-600 '>
                        More stats are coming soon! 🤖
                    </p>

                    {/* Pie Chart Section */}
                    <hr className='my-5' />
                    <h2 className='text-xl font-semibold mb-4'>Who's using this tool?</h2>
                    {loading ? (
                        <p>Loading chart data...</p>
                    ) : error ? (
                        <p className="text-red-600">Error: {error}</p>
                    ) : campusData.length > 0 ? (
                        <PieChartComponent data={campusData} />
                    ) : (
                        <p>No data available for the chart.</p>
                    )}

                    <hr className='my-5' />
                    <p className=' pt-2 text-gray-600 '>
                        Remember to give a star ⭐ to my repository if it helps you navigate the challenges of 42 School projects. Your support amplifies my reach and aids fellow students in finding this repository with ease. Happy coding, and may your evaluations be ever in your favor! 🚀
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FunnyStats;