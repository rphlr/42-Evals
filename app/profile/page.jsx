'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import Image from 'next/image';

export default function ProfilePage() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [selectedCursusIndex, setSelectedCursusIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    fetchUserData();
  }, [router]);

  const fetchUserData = async () => {
    try {
      const response = await fetch('/api/getUserData');
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        // Set the default selected cursus to the most recent one
        if (data.cursus_users && data.cursus_users.length > 0) {
          const sortedCursus = [...data.cursus_users].sort((a, b) =>
            new Date(b.begin_at) - new Date(a.begin_at)
          );
          setSelectedCursusIndex(data.cursus_users.indexOf(sortedCursus[0]));
        }
      } else if (response.status === 401) {
        throw new Error('User not logged in');
      } else {
        throw new Error('Failed to fetch user data');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.message || 'Failed to load user data. Please try logging in again.',
      });
      router.push('/login');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStats = async () => {
    setUpdating(true);
    try {
      const response = await fetch('/api/updateUserStats', { method: 'POST' });
      if (response.ok) {
        await fetchUserData();
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Your stats have been updated!',
        });
      } else {
        throw new Error('Failed to update stats');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.message || 'Failed to update stats. Please try again.',
      });
    } finally {
      setUpdating(false);
    }
  };

  const handleGoBackHome = () => {
    router.push('/');
  };

  const handleGoToSheetsList = () => {
    router.push('/sheets');
  };

  const handleLogout = async () => {
    try {
        // Make a request to the logout API to delete the cookie
        const response = await fetch('/api/logout');
      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Logged out successfully',
          text: 'You have been logged out successfully.',
        });
        router.push('/login');
      } else {
        throw new Error('Logout failed');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to logout. Please try again.',
      });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>No user data available. Please log in.</div>;
  }

  const hasCursusUsers = userData.cursus_users && userData.cursus_users.length > 0;

  const selectedCursus = hasCursusUsers
    ? userData.cursus_users[selectedCursusIndex]
    : { cursus_name: 'No cursus available', grade: 'N/A', level: 0 };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome, {userData.login}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          {userData.image_url && (
            <div className="mb-4">
              <Image src={userData.image_url} alt="Profile" width={100} height={100} className="rounded-full" />
            </div>
          )}
          <p><strong>Name:</strong> {userData.displayname}</p>
          <p><strong>Login:</strong> {userData.login}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Campus:</strong> {userData.campus}</p>
          <p><strong>Pool Year:</strong> {userData.pool_year}</p>
          <p><strong>Pool Month:</strong> {userData.pool_month}</p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">42 Stats</h2>
          {hasCursusUsers && (
            <div className="mb-4">
              <label htmlFor="cursusSelect" className="block mb-2">Select Cursus:</label>
              <select
                id="cursusSelect"
                value={selectedCursusIndex}
                onChange={(e) => setSelectedCursusIndex(Number(e.target.value))}
                className="w-full p-2 border rounded"
              >
                {userData.cursus_users.map((cursus, index) => (
                  <option key={cursus.cursus_id} value={index}>
                    {cursus.cursus_name}
                  </option>
                ))}
              </select>
            </div>
          )}
          <p><strong>Wallet:</strong> {userData.wallet}</p>
          <p><strong>Correction Points:</strong> {userData.correction_point}</p>
          <p><strong>Grade:</strong> {selectedCursus.grade || 'N/A'}</p>
          <p><strong>Level:</strong> {selectedCursus.level?.toFixed(2) || 'N/A'}</p>
          <p><strong>Cursus:</strong> {selectedCursus.cursus_name}</p>
          <p><strong>Blackholed At:</strong> {selectedCursus.blackholed_at ? new Date(selectedCursus.blackholed_at).toLocaleDateString() : 'N/A'}</p>
          <p><strong>Begin Date:</strong> {selectedCursus.begin_at ? new Date(selectedCursus.begin_at).toLocaleDateString() : 'N/A'}</p>
          <p><strong>End Date:</strong> {selectedCursus.end_at ? new Date(selectedCursus.end_at).toLocaleDateString() : 'N/A'}</p>
        </div>

        <div className="mb-6">
          <button
            onClick={handleUpdateStats}
            disabled={updating}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {updating ? 'Updating...' : 'Update Stats'}
          </button>
        </div>

        <div className="mt-6 flex space-x-4">
          <button
            onClick={handleGoBackHome}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Go Back Home
          </button>
          <button
            onClick={handleGoToSheetsList}
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Go to Sheets List
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="mt-8 p-4 bg-yellow-100 text-yellow-900 rounded">
        <p><strong>Experimental:</strong> This page is still under development. Some information may not be fully loaded or accurate at the moment. Updates will be coming soon!</p>
      </div>
      <div className="mt-4 p-4 bg-blue-100 text-blue-900 rounded">
        <p><strong>Coming Soon:</strong> This page will soon allow you to create a linked account to your 42 profile. This will let you log in even when you're frozen or when the API is not functioning.</p>
      </div>
    </div>
  );
}
