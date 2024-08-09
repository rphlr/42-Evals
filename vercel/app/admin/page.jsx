'use client'
import { useEffect, useState } from 'react'

import Link from 'next/link'
import React from 'react'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'
export const dynamic = 'force-dynamic'



function page() {

    const router = useRouter()

    // check login status

    useEffect(() => {
        if (sessionStorage.getItem('admin') !== 'true' && localStorage.getItem('admin') !== 'true') {
            Swal.fire({
                icon: 'error',
                title: 'Unauthorized',
                text: 'You need to login first'
            }).then(() => {
                window.location.href = '/admin/login'
            })
        }
    }, [])




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






    return (
        <div className='bg-white text-gray-900 min-h-screen'>
            <div className="max-w-7xl mx-auto pb-20 pt-10">
                <h1 className='text-3xl text-center'>Admin Panel</h1>

                <Link href='/admin/add'>
                    <button className='bg-[#0d94b6] hover:bg-[#0d829c] text-white py-3 px-4 rounded mt-10 transition duration-200'>
                        + Add New Evaluation Sheet
                    </button>
                </Link>

                <h2 className='text-2xl mt-10'>All Sheets</h2>

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
                        loading ? <tbody>
                            <tr>
                                <td colSpan='3' className='text-center py-5'>Loading...</td>
                            </tr>
                        </tbody> :
                            <tbody>
                                {sheetData.map(sheet => (
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