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
    }, [])

    return (
        <div className='bg-white mt-5 rounded-lg'>
            <div className='max-w-6xl mx-auto py-20 px-5 2xl:px-14'>
                <div className='px-5 2xl:px-0'>
                    <h1 className='text-2xl font-bold'>Evaluation Status</h1>
                    <p className='text-lg pt-2 text-gray-600'>The table below provides an overview of the evaluation sheet statuses with their date of upload. 😊</p>

                    {/* table 2 columns */}
                    <table className='w-full mt-10 table table-auto'>
                        <thead>
                            <tr className='bg-[#f0f0f0] text-gray-900 text-center'>
                                <th className='py-3 text-center px-5 font-semibold'>PROJECT</th>
                                <th className='py-3 text-center px-5 font-semibold'>VERSION</th>
                            </tr>
                        </thead>

                        <tbody className='text-center'>
                            {
                                projectInfo.filter(project => project.status === 'active').map((project, index) => (
                                    <tr key={index} className='border-b border-gray-200'>
                                        <td className='py-3 px-5 text-[#0D94B6] cursor-pointer'>
                                            <Link href={`/sheets/${project.id}`}>
                                                <div className="flex justify-center items-center gap-2">
                                                    {project.project_title}
                                                    <span className='text-green-500'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                                            <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </Link>
                                        </td>
                                        <td className='py-3 px-5 '>
                                            {new Date(project.updated_at).toLocaleDateString('en-GB', {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric'
                                            })}
                                        </td>
                                    </tr>
                                ))
                            }

                            {
                                projectInfo.filter(project => project.status !== 'active').map((project, index) => (
                                    <tr key={index} className='border-b border-gray-200'>
                                        <td className='py-3 px-5 text-[#0D94B6] cursor-pointer'>
                                            <Link href={`/sheets/${project.id}`}>
                                                {project.project_title}
                                            </Link>
                                        </td>
                                        <td className='py-3 px-5 '>
                                            {new Date(project.updated_at).toLocaleDateString('en-GB', {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric'
                                            })}
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
