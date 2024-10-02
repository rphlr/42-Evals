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


    useEffect(() => {
        fetch('/api/sheet')
            .then(res => res.json())
            .then(data => {
                setSheetData(data.data)
                setLoadingSheet(false)
            })
    }, [])




    // Get all cursus

    const [cursus, setCursus] = useState([])
    const [loadingCursus, setLoadingCursus] = useState(true)

    useEffect(() => {
        fetch('/api/cursus')
            .then(res => res.json())
            .then(data => {
                setCursus(data.data)
                setLoadingCursus(false)
            }
            )
    }, [])



    const [selectedCursus, setSelectedCursus] = useState('all')

    const handleCursusChange = (e) => {
        setSelectedCursus(e.target.value)
    }

    // Filter sheets based on cursus

    const filteredSheets = sheetData.filter(sheet => {
        if (selectedCursus === 'all') {
            return true
        }
        return sheet.cursus_id === selectedCursus
    })














    if (loadingSheet) {
        return (
            <LoadingSpinner title='All Evaluation Sheets' />
        )
    }


    return (
        <div className='bg-gray-100 text-gray-900 min-h-screen px-5 2xl:px-0'>
            <div className="max-w-7xl mx-auto pb-20 pt-10">
                <h1 className='text-3xl text-center font-semibold'>Approved Evaluation Sheets</h1>

                <div className="flex flex-col gap-2">
                    <Link href='/request-sheet'>
                        <button className='bg-[#0d94b6] hover:bg-[#0d829c] text-white py-3 px-4 rounded mt-10 transition duration-200 flex gap-2 items-center'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>

                            </span>
                            Add New Sheet Request
                        </button>
                    </Link>
                </div>



                {/* categorize based on cursus selection */}

                <div className='mt-10'>
                    <h2 className='text-xl font-semibold'>Cursus</h2>

                    <select className='w-full bg-white p-3 rounded-lg mt-2'
                        value={selectedCursus}
                        onChange={handleCursusChange}
                    >
                        <option value='all'>All</option>
                        {cursus.map(cursus => (
                            <option value={cursus.cursus_id} key={cursus.cursus_id}>{cursus.cursus_name}</option>
                        ))}
                    </select>
                </div>









                {/* Sheet list */}

                <div className='mt-10 grid grid-cols-1 gap-3'>
                    {
                        filteredSheets.length === 0 ? <div className='bg-white px-7 py-4 rounded-lg text-center'>
                            <p className=''>
                                No sheets to display for the selected cursus
                            </p>
                        </div> :
                            filteredSheets.filter(sheet => sheet.status === 'active').map(sheet => (
                                <div className='bg-white px-7 py-4 rounded-lg flex justify-between items-center' key={sheet.id}>
                                    <div className="flex flex-col lg:flex-row items-center gap-3">
                                        <span className='text-[#0D94B6] hidden lg:block'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                            </svg>
                                        </span>

                                        <div className='flex gap-2 items-center'>
                                            <h2 className='text-xl'>
                                                {sheet.project_title}
                                            </h2>
                                            <span className='text-green-500'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                                    <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                                </svg>

                                            </span>

                                        </div>

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
                                            <Link href={`/admin/edit/${sheet.id}`}>
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