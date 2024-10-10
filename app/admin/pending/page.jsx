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

    const [sheetData, setSheetData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/sheet')
            .then(res => res.json())
            .then(data => {
                setSheetData(data.data)
                setLoading(false)
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


    // Handle approve sheet

    const handleApproveSheet = (id) => {

        // show a swall loading message
        Swal.fire({
            title: 'Approving the Sheet',
            html: 'Please wait...',
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
            }
        })

        fetch(`/api/sheet/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status: 'active'
            })
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    Swal.fire(
                        'Approved!',
                        'The sheet has been approved',
                        'success'
                    ).then(() => {
                        setSheetData(sheetData.map(sheet => {
                            if (sheet.id === id) {
                                sheet.status = 'approved'
                            }
                            return sheet
                        }))
                    })
                } else {
                    Swal.fire(
                        'Error!',
                        'Something went wrong',
                        'error'
                    )
                }
            }
            )

    }



    // if (!authorized) {
    //     return (
    //         <div className='bg-gray-100 text-gray-900 min-h-screen px-5 2xl:px-0'>
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
        <div className='bg-white text-gray-900 min-h-screen'>
            <div className="max-w-7xl mx-auto pb-20 pt-10">
                <h1 className='text-3xl text-center font-bold'>Pending Sheets</h1>

                {/* breadcrumps */}

                <div className='mt-5 font-semibold bg-gray-100 px-5 py-2 rounded-lg w-[240px]'>
                    <Link href='/admin' className='text-[#0d829c]'>
                        Admin
                    </Link>
                    <span className='mx-2'>/</span>
                    <span>Pending Sheets</span>
                </div>





                <h2 className='text-2xl mt-10'>All pending sheets</h2>
                <h3 className='text-lg mt-2 italic text-gray-400'>
                    Can be edited, deleted, viewed or approved
                </h3>


                {/* table with sheet data */}

                <table className='w-full mt-10'>
                    <thead>
                        <tr className='bg-[#f0f0f0] text-gray-900'>
                            <th className='py-3 text-left px-5 font-semibold'>Project Title</th>
                            <th className='py-3 text-left px-5 font-semibold'>Number of Student</th>
                            <th className='py-3 text-left px-5 font-semibold'>Status</th>
                            <th className='py-3 text-left px-5 font-semibold'>Actions</th>
                        </tr>
                    </thead>

                    {
                        loading ? <tbody>
                            <tr>
                                <td colSpan='3' className='text-center py-10 w-full'>Loading...</td>
                            </tr>
                        </tbody> :

                            !loading && sheetData.filter(sheet => sheet.status === 'pending').length === 0 ? <tbody>
                                <tr>
                                    <td colSpan='3' className='text-center py-10 w-full'>No pending sheet found</td>
                                </tr>
                            </tbody> :
                                <tbody>
                                    {sheetData.filter(sheet => sheet.status === 'pending').map(sheet => (
                                        <tr key={sheet.id} className='border-b border-gray-200'>
                                            <td className='py-3 px-5 '>{sheet.project_title}</td>
                                            <td className='py-3 px-5 '>{sheet.number_of_student}</td>
                                            <td className='py-3 px-5 '>
                                                <span className='bg-[#c29c04] text-white py-1 px-3 rounded-xl text-sm'>
                                                    {
                                                        sheet.status === 'pending' ? 'Pending' : 'Status Unknown'
                                                    }
                                                </span>
                                            </td>
                                            <td className='py-3 px-5 text-sm flex items-center gap-2'>
                                                <Link href={`/admin/edit/${sheet.id}`}>
                                                    <button className='bg-[#0d94b6] hover:bg-[#0d829c] text-white p-3 rounded-full'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                        </svg>

                                                    </button>
                                                </Link>
                                                <button
                                                    onClick={() => handleDeleteSheet(sheet.id)}
                                                    className='bg-[#b40f0f] hover:bg-[#b11f1f] text-white p-3 rounded-full'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                    </svg>

                                                </button>
                                                <Link href={`/sheets/${sheet.id}`}>
                                                    <button className='bg-indigo-500 hover:bg-indigo-700 text-white p-3 rounded-full'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                                        </svg>
                                                    </button>
                                                </Link>

                                                <button
                                                    onClick={() => handleApproveSheet(sheet.id)}
                                                    className='bg-[#2eaa0f] hover:bg-[#188069] text-white p-3 rounded-full'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
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