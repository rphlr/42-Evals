'use client'
import Link from 'next/link'
import { React, useEffect, useState } from 'react'

function Evolution() {



    const [projectInfo, setProjectInfo] = useState([])
    const [loadingSheet, setLoadingSheet] = useState(true)

    useEffect(() => {
        fetch('/api/sheet')
            .then(res => res.json())
            .then(data => {
                setProjectInfo(data.data)
                setLoadingSheet(false)
            })
    }
        , [])



    return (
        <div className='bg-white mt-5 rounded-lg'>
            <div className='max-w-6xl mx-auto py-20 px-5 2xl:px-14'>
                <div className='px-5 2xl:px-0'>
                    <h1 className='text-2xl font-bold'>Evaluation Status</h1>
                    <p className='text-lg pt-2 text-gray-600'>The table below provides an overview of the evaluation sheet statuses with their date of upload. 😊</p>


                    {/* table 2 comumn */}

                    <table className='w-full mt-10 table table-auto'>
                        <thead>
                            <tr className='bg-[#f0f0f0] text-gray-900 text-center'>
                                <th className='py-3 text-center px-5 font-semibold'>PROJECT</th>
                                <th className='py-3 text-center px-5 font-semibold'>VERSION</th>
                            </tr>
                        </thead>

                        <tbody className='text-center'>
                            {
                                projectInfo.map((project, index) => (
                                    <tr key={index} className='border-b border-gray-200'>
                                        <td className='py-3 px-5 text-[#0D94B6] cursor-pointer'>
                                            <Link href={`/sheets/${project.id}`}>{project.project_title}</Link>
                                        </td>
                                        <td className='py-3 px-5 '>
                                            {
                                                // 26 december 2021 format
                                                new Date(project.updated_at).toLocaleDateString('en-GB', {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric'
                                                })
                                            }
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Evolution