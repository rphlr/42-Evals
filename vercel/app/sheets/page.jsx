'use client'
import { useEffect, useState } from 'react'

import Link from 'next/link'
import React from 'react'
import Swal from 'sweetalert2'
export const dynamic = 'force-dynamic'

function page() {


    const [sheetData, setSheetData] = useState([])

    useEffect(() => {
        fetch('/api/sheet')
            .then(res => res.json())
            .then(data => {
                setSheetData(data.data)
            })
    }, [])



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
                            </div>
                            <div className=''>
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