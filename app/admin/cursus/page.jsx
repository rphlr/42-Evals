'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

function page() {


    // get all cursus

    const [cursusData, setCursusData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/cursus')
            .then(res => res.json())
            .then(data => {
                setCursusData(data.data)
                setLoading(false)
            })
    }, [])




    // delete cursus

    const deleteCursus = (id) => {

        // Swal confirmation

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0d94b6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                // loading swal

                Swal.fire({
                    title: 'Deleting...',
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    allowEnterKey: false
                })



                fetch(`/api/cursus/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.success) {
                            Swal.fire(
                                'Deleted!',
                                'Cursus has been deleted.',
                                'success'
                            )

                            // remove the deleted cursus from the state
                            setCursusData(cursusData.filter(cursus => cursus.id !== id))
                        } else {
                            Swal.fire(
                                'Failed!',
                                'Cursus deletion failed.',
                                'error'
                            )
                        }
                    })

            }

        })

    }








    return (
        <div>
            {/* all cursus list with an add cursus button */}

            <div className='bg-gray-100 text-gray-900 min-h-screen px-5 2xl:px-0'>
                <div className="max-w-7xl mx-auto pb-20 pt-10">
                    <h1 className='text-3xl text-center font-semibold'>All Cursus</h1>

                    {/* breadcrumps */}

                    <div className='mt-5 font-semibold bg-gray-200 px-5 py-2 rounded-lg w-[300px]'>
                        <Link href='/admin' className='text-[#0d829c]'>
                            Admin
                        </Link>
                        <span className='mx-2'>/</span>
                        <span className=''>
                            Cursus
                        </span>

                    </div>

                    <div className="flex flex-col gap-2">
                        <Link href='/admin/cursus/add'>
                            <button className='bg-[#0d94b6] hover:bg-[#0d829c] text-white py-3 px-4 rounded mt-10 transition duration-200 flex justify-center gap-2 items-center w-[300px]'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>

                                </span>
                                Add New Cursus
                            </button>
                        </Link>
                    </div>

                    <div className='mt-10'>
                        <table className='w-full table-auto'>
                            <thead>
                                <tr className='bg-[#f0f0f0] text-gray-900 text-center'>
                                    <th className='py-3 text-center px-5 font-semibold'>Cursus Name</th>
                                    <th className='py-3 text-center px-5 font-semibold'>Cursus ID</th>
                                    <th className='py-3 text-center px-5 font-semibold'>Action</th>
                                </tr>
                            </thead>

                            <tbody className='text-center'>

                                {
                                    cursusData.length > 0 && !loading ?
                                        cursusData.map((cursus, index) => (
                                            <tr key={index} className='border-b border-gray-200'>
                                                <td className='py-3 px-5 text-[#0D94B6] cursor-pointer'>
                                                    {cursus.cursus_name}
                                                </td>
                                                <td className='py-3 px-5 '>
                                                    {cursus.cursus_id}
                                                </td>
                                                <td className='py-3 px-5 '>
                                                    {/* Delete */}
                                                    <button onClick={() => deleteCursus(cursus.id)} className='bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded'>
                                                        Delete
                                                    </button>

                                                </td>
                                            </tr>
                                        )) : (
                                            <tr className='text-center flex justify-center'>
                                                <td>
                                                    No Cursus Found
                                                </td>
                                            </tr>
                                        )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page