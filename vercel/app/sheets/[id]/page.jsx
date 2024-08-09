'use client'
import { useEffect, useState } from 'react'

import Link from 'next/link'
import React from 'react'
import Swal from 'sweetalert2'
export const dynamic = 'force-dynamic'

function page({ params }) {

    const sheetId = params.id


    const [sheetData, setSheetData] = useState({})

    useEffect(() => {
        fetch(`/api/sheet/${sheetId}`)
            .then(res => res.json())
            .then(data => {
                setSheetData(data.data)
            })
    }, [])

    console.log(sheetData)



    return (
        <div className='bg-gray-100 text-gray-900 min-h-screen'>

            {/* Back to all sheets */}
            <div className="flex gap-3 items-center max-w-7xl mx-auto pt-10 px-5 2xl:px-0">
                <Link href='/sheets'>
                    <button
                        className='w-10 h-10 bg-[#0d94b6] hover:bg-[#0d829c] text-white py-3 px-3 rounded-full mt-10 transition duration-200'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </button>
                </Link>
                <h1 className=' mt-10  text-gray-400'>Back to all evaluation sheets</h1>
            </div>




            <div className="max-w-7xl mx-auto pb-20 pt-10 px-5 2xl:px-0">
                <h1 className='text-3xl font-bold text-center'>
                    {sheetData.project_title}
                </h1>
                <p className='pt-4 text-center text-gray-500'>
                    You should evaluate <span className='text-sky-500 font-medium'>
                        {sheetData.number_of_student}
                    </span> student in this team
                </p>



                {/* Sheet details */}

                {/* INTRODUCTION */}
                <div className='mt-10 bg-white p-5 lg:p-10 rounded-lg'>
                    <h2 className='text-2xl font-bold'>
                        Introduction
                    </h2>
                    <p className='pt-2 pb-7'>
                        Please follow the rules below:
                    </p>

                    <p className='pt-5'>
                        {
                            sheetData.introduction ? sheetData.introduction.map((intro, index) => (
                                <p className='pb-5 flex items-center gap-2' key={index}>
                                    <span className='text-[#0D94B6]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>

                                    </span>
                                    {intro}
                                </p>
                            )) : ''
                        }
                    </p>
                </div>

                {/* GUIDELINES */}
                <div className='mt-10 bg-white p-5 lg:p-10 rounded-lg'>
                    <h2 className='text-2xl font-bold'>
                        Guidelines
                    </h2>
                    <p className='pt-2 pb-7'>
                        Please follow the guidelines below:
                    </p>

                    <p className='pt-5'>
                        {
                            sheetData.guidelines ? sheetData.guidelines.map((guideline, index) => (
                                <p className='pb-5  flex items-center gap-2' key={index}>
                                    <span className='text-[#0D94B6]'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>

                                    </span>
                                    {guideline}
                                </p>
                            )) : ''
                        }
                    </p>
                </div>


                {/* ATTACHMENTS */}

                <div className='mt-10 bg-white p-5 lg:p-10 rounded-lg'>
                    <h2 className='text-2xl font-bold'>
                        Attachments
                    </h2>
                    <p className='pt-2 pb-5'>
                        Please download the attachments below:
                    </p>

                    <div className='pt-5'>
                        {
                            sheetData.attachments ? sheetData.attachments.filter((att) => {
                                // if the attachment is only a comma exclude it
                                if (att === ',') {
                                    return false
                                } else {
                                    return true
                                }
                            })
                                .map((attachment, index) => (
                                    <a href={
                                        // after comma
                                        attachment.slice(attachment.indexOf(',') + 1) // get the string after the comma
                                    } target='_blank' className='text-xl font-medium text-sky-500 rounded-lg mb-2 flex gap-2 items-center ' key={index}>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                                            </svg>

                                        </span>
                                        {
                                            // before comma
                                            attachment.slice(0, attachment.indexOf(',')) // get the string before the comma
                                        }</a>
                                )) : ''
                        }
                    </div>
                </div>






            </div>
        </div>
    )
}

export default page