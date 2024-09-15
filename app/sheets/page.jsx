'use client'
import { useEffect, useState } from 'react'
import LoadingSpinner from '../../components/LoadingSpinner'
import Link from 'next/link'
import React from 'react'
import Swal from 'sweetalert2'
export const dynamic = 'force-dynamic'

function page() {


    const [sheetData, setSheetData] = useState([])
    const [loadingSheet, setLoadingSheet] = useState(true)

    //check if the user is logged in

    const [admin, setAdmin] = useState(false)

    useEffect(() => {
        //from local storage
        const admin = localStorage.getItem('admin')
        if (admin) {
            setAdmin(true)
        }


    }, [])


    useEffect(() => {
        fetch('/api/sheet')
            .then(res => res.json())
            .then(data => {
                setSheetData(data.data)
                setLoadingSheet(false)
            })
    }, [])

    if (loadingSheet) {
        return (
            <LoadingSpinner title='All Evaluation Sheets' />
        )
    }


    return (
        <div className='bg-gray-100 text-gray-900 min-h-screen'>
            <div className="max-w-7xl mx-auto pb-20 pt-10">
                <h1 className='text-3xl text-center font-semibold'>All Evaluation Sheets</h1>



                {/* Sheet list */}

                <div className='mt-10 grid grid-cols-1 gap-3'>
                    {sheetData.map(sheet => (
                        <div className='bg-white px-7 py-4 rounded-lg flex justify-between items-center' key={sheet.id}>
                            <div className="flex items-center gap-3">
                                <span className='text-[#0D94B6]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                    </svg>
                                </span>

                                <h2 className='text-xl'>{sheet.project_title}</h2>

                                {/* Date */}
                                <div className='flex items-center gap-2 ml-5 opacity-70 text-sm'>
                                    {/* <span className='text-[#0D94B6] '>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                        </svg>

                                    </span> */}
                                    <p>
                                        {
                                            new Date(sheet.updated_at).toLocaleDateString('en-GB', {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric'
                                            })
                                        }
                                    </p>
                                </div>
                            </div>
                            <div className='flex items-center gap-2'>
                                {
                                    admin && <Link href={`/admin/edit/${sheet.id}`}>
                                        <button className='bg-[#0d94b6] hover:bg-[#0d829c] text-white p-3 rounded-full'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                            </svg>

                                        </button>
                                    </Link>
                                }
                                <Link href={`/sheets/${sheet.id}`}>
                                    <button className='bg-[#0d94b6] hover:bg-[#0d829c] text-white p-3 rounded-full'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>
                                    </button>
                                </Link>

                            </div>
                        </div>
                    ))}

                </div>




            </div>
        </div>
    )
}

export default page