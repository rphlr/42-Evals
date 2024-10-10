'use client'
import { useEffect, useState } from 'react'

import Link from 'next/link'
import React from 'react'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'
export const dynamic = 'force-dynamic'



function page() {

    const router = useRouter()

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

    // Fetch all cursus data

    const [cursusData, setCursusData] = useState([])
    const [loadingCursus, setLoadingCursus] = useState(true)

    useEffect(() => {
        fetch('/api/cursus')
            .then(res => res.json())
            .then(data => {
                setCursusData(data.data)
                setLoadingCursus(false)
            })
    }, [])






    const [sheetData, setSheetData] = useState([])
    const [loadingSheetData, setLoadingSheetData] = useState(true)

    useEffect(() => {
        fetch('/api/sheet')
            .then(res => res.json())
            .then(data => {
                setSheetData(data.data)
                setLoadingSheetData(false)
            })
    }, [])


    // ------------------------------------- Delete Sheet ------------------------------------------

    const deleteSheet = (id) => {
        fetch(`/api/sheet/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    Swal.fire(
                        'Deleted!',
                        'The sheet has been deleted from the database.',
                        'success'
                    ).then(() => {
                        setSheetData(sheetData.filter(sheet => sheet.id !== id))
                    })
                } else {
                    Swal.fire(
                        'Error!',
                        'Something went wrong',
                        'error'
                    )
                }
            })
    }

    const handleDeleteSheet = (id) => {

        // Swal confirmation
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                // Swal processing message
                Swal.fire({
                    title: 'Deleting the Sheet',
                    html: 'Please wait...',
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                    }
                })

                deleteSheet(id)
            }
        })
    }


    // if (!authorized) {
    //     return (
    //         <div className='bg-gray-100 text-gray-900 min-h-screen'>
    //             <div className="max-w-7xl mx-auto pb-20 pt-10">
    //                 <h1 className='text-3xl text-center font-bold'>
    //                     Checking Authorization
    //                 </h1>
    //                 <div className='text-center mt-10'>
    //                     <p className='text-lg'>
    //                         Please wait...
    //                     </p>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }






    return (
        <div className='bg-white text-gray-900 min-h-screen px-5 2xl:px-0'>
            <div className="max-w-7xl mx-auto pb-20 pt-10">
                <h1 className='text-3xl text-center font-bold'>Admin Dashboard</h1>



                <div>
                    {/* Stats */}
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mt-10'>
                        <div className=' bg-orange-500 text-white rounded-lg py-7 px-5'>
                            <h2 className='text-xl font-semibold'>Total Sheets</h2>
                            <p className='text-4xl font-bold'>
                                {
                                    loadingSheetData ? '--' : sheetData.length
                                }
                            </p>
                        </div>

                        <div className='bg-[#0d94b6] text-white rounded-lg py-7 px-5'>
                            <h2 className='text-xl font-semibold'>Pending Sheets</h2>
                            <p className='text-4xl font-bold'>
                                {
                                    loadingSheetData ? '--' :
                                        sheetData.filter(sheet => sheet.status === 'pending').length
                                }
                            </p>
                        </div>

                        <div className='bg-green-500 text-white rounded-lg py-7 px-5'>
                            <h2 className='text-xl font-semibold'>Approved Sheets</h2>
                            <p className='text-4xl font-bold'>
                                {
                                    loadingSheetData ? '--' :
                                        sheetData.filter(sheet => sheet.status === 'active').length
                                }
                            </p>
                        </div>
                        <div className=' bg-rose-500 text-white rounded-lg py-7 px-5'>
                            <h2 className='text-xl font-semibold'>Cursus</h2>
                            <p className='text-4xl font-bold'>
                                {
                                    loadingCursus ? '--' :
                                        cursusData?.length
                                }
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3  gap-2 mt-5">
                    <Link href='/admin/add'>
                        <button className='bg-[#0d94b6] hover:bg-[#0d829c] bg-opacity-20 hover:text-white py-3 px-4 rounded transition duration-200 flex gap-2 items-center w-full'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>

                            </span>
                            Add New Evaluation Sheet
                        </button>
                    </Link>
                    <Link href='/admin/pending'>
                        <button className=' bg-indigo-500 hover:bg-indigo-700 bg-opacity-20 hover:text-white py-3 px-4 rounded transition duration-200 flex gap-2 items-center w-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002" />
                            </svg>

                            See Pending Sheets
                        </button>
                    </Link>
                    <Link href='/admin/cursus'>
                        <button className='bg-rose-500 hover:bg-rose-700 bg-opacity-20 hover:text-white py-3 px-4 rounded transition duration-200 flex gap-2 items-center w-full'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>

                            </span>
                            Add New Cursus
                        </button>
                    </Link>
                </div>

                <h2 className='text-2xl mt-10'>All Approved Sheets</h2>

                {/* table with sheet data */}

                <table className='w-full mt-10'>
                    <thead>
                        <tr className='bg-[#f0f0f0] text-gray-900'>
                            <th className='py-3 text-left px-5 font-semibold'>Project Title</th>
                            <th className='py-3 text-left px-5 font-semibold'>Number of Student</th>
                            <th className='py-3 text-left px-5 font-semibold'>Actions</th>
                        </tr>
                    </thead>

                    {
                        loadingSheetData || loadingCursus ? <tbody>
                            <tr>
                                <td colSpan='3' className='text-center py-5'>Loading...</td>
                            </tr>
                        </tbody> :
                            <tbody>
                                {
                                    sheetData.filter(sheet => sheet.status === 'active').length === 0 ? <tr>
                                        <td colSpan='3' className='text-center py-5'>No Approved sheet found</td>
                                    </tr> :

                                        sheetData.filter(sheet => sheet.status === 'active').map(sheet => (
                                            <tr key={sheet.id} className='border-b border-gray-200'>
                                                <td className='py-3 px-5 '>{sheet.project_title}</td>
                                                <td className='py-3 px-5 '>{sheet.number_of_student}</td>
                                                <td className='py-3 px-5 text-sm flex items-center gap-2'>
                                                    <Link href={`/admin/edit/${sheet.id}`}>
                                                        <button className='bg-[#0d94b6] hover:bg-[#0d829c] text-white py-2 px-5 rounded'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                            </svg>

                                                        </button>
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDeleteSheet(sheet.id)}
                                                        className='bg-[#b40f0f] hover:bg-[#b11f1f] text-white py-2 px-5 rounded'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                        </svg>

                                                    </button>
                                                    <button
                                                        onClick={() => router.push(`/sheets/${sheet.id}`)}
                                                        className='bg-[#0eb18d] hover:bg-[#188069] text-white py-2 px-5 rounded'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                                        </svg>


                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                            </tbody>
                    }
                </table>
            </div>
        </div>
    )
}

export default page