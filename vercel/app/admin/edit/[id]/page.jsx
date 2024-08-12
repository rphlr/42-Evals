'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

function page({ params }) {

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


    // Get the sheet id from the url

    const sheetId = params.id

    // Get the sheet data from the server


    const [sheetDataFromServer, setSheetDataFromServer] = useState({})
    const [loadingSheetData, setLoadingSheetData] = useState(true)

    useEffect(() => {
        fetch(`/api/sheet/${sheetId}`)
            .then(res => res.json())
            .then(data => {
                setSheetDataFromServer(data.data)
                setLoadingSheetData(false)
            }
            )
    }, [])

    // Get the mandatory options data from the server

    const [mandatoryOptionsDataFromServer, setMandatoryOptionsDataFromServer] = useState([])
    const [loadingMandatoryOptionsData, setLoadingMandatoryOptionsData] = useState(true)

    useEffect(() => {
        fetch(`/api/mandatorySection/${sheetId}`)
            .then(res => res.json())
            .then(data => {
                setMandatoryOptionsDataFromServer(data.data)
                setLoadingMandatoryOptionsData(false)
            }
            )
    }, [])


    //Get the Bonus sections data from the server

    const [bonusSectionsDataFromServer, setBonusSectionsDataFromServer] = useState([])
    const [loadingBonusSectionsData, setLoadingBonusSectionsData] = useState(true)

    useEffect(() => {
        fetch(`/api/bonusSection/${sheetId}`)
            .then(res => res.json())
            .then(data => {
                setBonusSectionsDataFromServer(data.data)
                setLoadingBonusSectionsData(false)
            }
            )
    }, [])





    // Get the grading options data from the server

    const [gradingOptionsDataFromServer, setGradingOptionsDataFromServer] = useState([])
    const [loadingGradingOptionsData, setLoadingGradingOptionsData] = useState(true)

    useEffect(() => {
        fetch(`/api/gradingOption/${sheetId}`)
            .then(res => res.json())
            .then(data => {
                setGradingOptionsDataFromServer(data.data)
                setLoadingGradingOptionsData(false)
            }
            )
    }, [])



    // console.log(sheetDataFromServer);
    // console.log(mandatoryOptionsDataFromServer);
    // console.log(gradingOptionsDataFromServer);



    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()



    // handle introduction (separator by a new line and arrange them in an array)

    const [introductionData, setIntroductionData] = useState([])

    const handleIntroduction = (e) => {
        // take the splitted introduction from introduction and create an array of introduction
        const introductionArray = []
        const introduction = e.target.value.split('\n')

        introduction.map(intro => {
            introductionArray.push(intro)
        })

        setIntroductionData(introductionArray)
    }




    // handle guidelines (separate each guideline with a new line and arrange them in an array)

    const [guidelinesData, setGuidelinesData] = useState([])


    const handleGuidelines = (e) => {
        // take the splitted guidelines from guidelines and create an array of string of guidelines (one array only)
        const guidelinesArray = []
        const guidelines = e.target.value.split('\n')

        guidelines.map(guideline => {
            guidelinesArray.push(guideline)
        })

        setGuidelinesData(guidelinesArray)
    }



    // Handle mandatory sections


    const [numberOfMandatorySections, setNumberOfMandatorySections] = useState(1)

    useEffect(() => {
        setNumberOfMandatorySections(mandatoryOptionsDataFromServer.length)
    }, [mandatoryOptionsDataFromServer])



    const addMandatorySection = () => {
        setNumberOfMandatorySections(numberOfMandatorySections + 1)
    }

    const removeMandatorySection = () => {
        if (numberOfMandatorySections > 1) {
            setNumberOfMandatorySections(numberOfMandatorySections - 1)
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Ooops!',
                text: 'You need to have at least one bonus section',
                showConfirmButton: true,
                confirmButtonText: 'OK',
                confirmButtonColor: '#0D94B6'
            })
        }
    }


    // Handle bonus sections

    const [numberOfBonusSections, setNumberOfBonusSections] = useState(1)

    useEffect(() => {
        setNumberOfBonusSections(bonusSectionsDataFromServer.length)
    }, [bonusSectionsDataFromServer])

    const addBonusSection = () => {
        setNumberOfBonusSections(numberOfBonusSections + 1)
    }

    const removeBonusSection = () => {
        if (numberOfBonusSections > 1) {
            setNumberOfBonusSections(numberOfBonusSections - 1)
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Ooops!',
                text: 'You need to have at least one bonus section',
                showConfirmButton: true,
                confirmButtonText: 'OK',
                confirmButtonColor: '#0D94B6'
            })
        }
    }








    // // Handle grading options

    // const [gradingOptionsData, setGradingOptionsData] = useState([])

    // useEffect(() => {
    //     setGradingOptionsData(gradingOptionsDataFromServer[0])
    // }, [gradingOptionsDataFromServer])

    // const handleOk = (e) => {
    //     const ok = e.target.value
    //     setGradingOptionsData({ ...gradingOptionsData, ok })
    //     console.log(gradingOptionsData)
    // }

    // const handleOutstanding = (e) => {
    //     const outstanding = e.target.value
    //     setGradingOptionsData({ ...gradingOptionsData, outstanding })
    //     console.log(gradingOptionsData)
    // }

    // const handleEmptyWork = (e) => {
    //     const empty_work = e.target.value
    //     setGradingOptionsData({ ...gradingOptionsData, empty_work })
    //     console.log(gradingOptionsData)
    // }

    // const handleIncompleteWork = (e) => {
    //     const incomplete_work = e.target.value
    //     setGradingOptionsData({ ...gradingOptionsData, incomplete_work })
    //     console.log(gradingOptionsData)
    // }

    // const handleInvalidCompilation = (e) => {
    //     const invalid_compilation = e.target.value
    //     setGradingOptionsData({ ...gradingOptionsData, invalid_compilation })
    //     console.log(gradingOptionsData)
    // }

    // const handleNorme = (e) => {
    //     const norme = e.target.value
    //     setGradingOptionsData({ ...gradingOptionsData, norme })
    //     console.log(gradingOptionsData)
    // }

    // const handleCheat = (e) => {
    //     const cheat = e.target.value
    //     setGradingOptionsData({ ...gradingOptionsData, cheat })
    //     console.log(gradingOptionsData)
    // }

    // const handleCrash = (e) => {
    //     const crash = e.target.value
    //     setGradingOptionsData({ ...gradingOptionsData, crash })
    //     console.log(gradingOptionsData)
    // }

    // const handleConcerningSituations = (e) => {
    //     const concerning_situations = e.target.value
    //     setGradingOptionsData({ ...gradingOptionsData, concerning_situations })
    //     console.log(gradingOptionsData)
    // }

    // const handleLeaks = (e) => {
    //     const leaks = e.target.value
    //     setGradingOptionsData({ ...gradingOptionsData, leaks })
    //     console.log(gradingOptionsData)
    // }

    // const handleForbiddenFunctions = (e) => {
    //     const forbidden_functions = e.target.value
    //     setGradingOptionsData({ ...gradingOptionsData, forbidden_functions })
    //     console.log(gradingOptionsData)
    // }

    // const handleCannotSupport = (e) => {
    //     const cannot_support = e.target.value
    //     setGradingOptionsData({ ...gradingOptionsData, cannot_support })
    //     console.log(gradingOptionsData)
    // }



    // Get all the mandatory options data from the server

    const [allMandatoryOptionsDataFromServer, setAllMandatoryOptionsDataFromServer] = useState([])

    useEffect(() => {
        fetch(`/api/mandatorySection`)
            .then(res => res.json())
            .then(data => {
                setAllMandatoryOptionsDataFromServer(data.data)
            }
            )
    }, [])

    // Find the mandatory options data from the server for the sheet id

    const findMandatoryOptionsData = (id) => {
        const mandatoryOptionsData = allMandatoryOptionsDataFromServer.filter(data => data.sheetId === id)
        return mandatoryOptionsData
    }

    // get the mandatory options data id

    const mandatoryOptionsDataId = findMandatoryOptionsData(sheetId)[0]?.id

    // console.log('Mandatory options data id', mandatoryOptionsDataId)



    // Get all the grading options data from the server

    const [allGradingOptionsDataFromServer, setAllGradingOptionsDataFromServer] = useState([])

    useEffect(() => {
        fetch(`/api/gradingOption`)
            .then(res => res.json())
            .then(data => {
                setAllGradingOptionsDataFromServer(data.data)
            }
            )
    }, [])

    // Find the grading options data from the server for the sheet id

    const findGradingOptionsData = (id) => {
        const gradingOptionsData = allGradingOptionsDataFromServer.filter(data => data.sheetId === id)
        return gradingOptionsData
    }


    // get the grading options data id

    const gradingOptionsDataId = findGradingOptionsData(sheetId)[0]?.id

    // console.log('Grading options data id', gradingOptionsDataId)





    // -------------------- Submit form --------------------

    const updateSheet = async (newData, newMandatoryOptionsData, newBonusOptionsData, newGradingOptionsData) => {

        // sweet alert loading until all process is done

        Swal.fire({
            title: 'Updating Sheet',
            html: 'Please wait...',
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
            }
        })

        // send Post request to create a sheet

        fetch(`/api/sheet/${sheetId}`, {
            method: 'PUT',
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Step 1: Updating sheet data SUCCESS', data.data)

                // Now update mandatory options using the sheet id

                fetch(`/api/mandatorySection/${sheetId}`, {
                    method: 'PUT',
                    body: JSON.stringify(newMandatoryOptionsData)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('Step 2: Updating mandatory options SUCCESS', data.data)

                        // Now update bonus sections using the sheet id

                        fetch(`/api/bonusSection/${sheetId}`, {
                            method: 'PUT',
                            body: JSON.stringify(newBonusOptionsData)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log('Step 3: Updating bonus sections SUCCESS', data.data)


                                // Now update grading options using the sheet id

                                fetch(`/api/gradingOption/${gradingOptionsDataId}`, {
                                    method: 'PUT',
                                    body: JSON.stringify(newGradingOptionsData)
                                })
                                    .then(res => res.json())
                                    .then(data => {
                                        console.log('Step 3: Updating grading options SUCCESS', data.data)

                                        if (data.success) {
                                            Swal.fire({
                                                icon: 'success',
                                                title: 'Sheet updated successfully',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
                                        } else {
                                            Swal.fire({
                                                icon: 'error',
                                                title: 'Failed to update sheet',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
                                        }

                                        // window.location.reload()

                                    })
                            })
                    })


            })
    }


    // console.log('Sheet data from server - INTRODUCTION', sheetDataFromServer.introduction)
    // console.log('Sheet data from server - GUIDELINES', sheetDataFromServer.guidelines)
    // console.log('INTRDUCTION DATA', introductionData)



    const submitForm = (data) => {

        const newData = {
            optional_bonus_sections: data.optional_bonus_sections || sheetDataFromServer.optional_bonus_sections,
            project_title: data.project_title || sheetDataFromServer.project_title,
            introduction: introductionData.length === 0 ? sheetDataFromServer.introduction : introductionData,
            attachments: [
                `${data.attachment1Title},${data.attachment1Url}`,
                `${data.attachment2Title},${data.attachment2Url}`,
                `${data.attachment3Title},${data.attachment3Url}`,
                `${data.attachment4Title},${data.attachment4Url}`
            ],
            guidelines: guidelinesData.length === 0 ? sheetDataFromServer.guidelines : guidelinesData,
            number_of_student: parseInt(data.number_of_student) || sheetDataFromServer.number_of_student,
        }

        // const newMandatoryOptionsData = {
        //     title: mandatoryOptionsData.title || mandatoryOptionsDataFromServer[0].title,
        //     description: mandatoryOptionsData.description ? mandatoryOptionsData.description : mandatoryOptionsDataFromServer[0].description,
        //     yes_no: mandatoryOptionsData.yes_no === 'true' ? true : false
        // }

        const newMandatoryOptionsData = []

        for (let i = 0; i < numberOfMandatorySections; i++) {
            newMandatoryOptionsData.push({
                ids: mandatoryOptionsDataFromServer[i].id,
                title: data.title[i] || mandatoryOptionsDataFromServer[i].title,
                subtitle: data.subtitle[i] || mandatoryOptionsDataFromServer[i].subtitle,
                description: data.description[i] || mandatoryOptionsDataFromServer[i].description,
                yes_no: data.yes_no[i] == 'true' ? true : false
            })
        }

        const newBonusOptionsData = []

        for (let i = 0; i < numberOfBonusSections; i++) {
            newBonusOptionsData.push({
                ids: bonusSectionsDataFromServer[i].id,
                title: data.bonus_title[i] || bonusSectionsDataFromServer[i].title,
                subtitle: data.bonus_subtitle[i] || bonusSectionsDataFromServer[i].subtitle,
                description: data.bonus_description[i] || bonusSectionsDataFromServer[i].description,
                yes_no: data.bonus_yes_no[i] == 'true' ? true : false
            })
        }

        const newGradingOptionsData = {
            ok: data.ok === "true" ? true : false,
            outstanding: data.outstanding === "true" ? true : false,
            empty_work: data.empty_work === "true" ? true : false,
            incomplete_work: data.incomplete_work === "true" ? true : false,
            invalid_compilation: data.invalid_compilation === "true" ? true : false,
            norme: data.norme === "true" ? true : false,
            cheat: data.cheat === "true" ? true : false,
            crash: data.crash === "true" ? true : false,
            concerning_situations: data.concerning_situations === "true" ? true : false,
            leaks: data.leaks === "true" ? true : false,
            forbidden_functions: data.forbidden_functions === "true" ? true : false,
            cannot_support: data.cannot_support === "true" ? true : false,





        }


        console.log('New data', newData)
        console.log('New mandatory options data', newMandatoryOptionsData)
        console.log('New bonus options data', newBonusOptionsData)
        console.log('New grading options data', newGradingOptionsData)


        updateSheet(newData, newMandatoryOptionsData, newBonusOptionsData, newGradingOptionsData)


    }



    if (loadingSheetData || loadingMandatoryOptionsData || loadingGradingOptionsData) {
        return (
            <div className='bg-gray-100 text-gray-900 min-h-screen'>
                <div className="max-w-7xl mx-auto pb-20 px-5 md:px-14 lg:px-20 2xl:px-32">

                    {/* Back to admin */}
                    <div className="flex gap-3 items-center">
                        <Link href='/admin'>
                            <button
                                className='w-10 h-10 bg-[#0d94b6] hover:bg-[#0d829c] text-white py-3 px-3 rounded-full mt-10 transition duration-200'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                </svg>
                            </button>
                        </Link>
                        <h1 className=' mt-10  text-gray-400'>Back to dashboard</h1>
                    </div>

                    <div className='mt-10 flex justify-center items-center min-h-[65vh]'>
                        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                    </div>
                </div>
            </div>
        )
    }




    return (
        <div className='bg-gray-100 text-gray-900'>
            <div className="max-w-7xl mx-auto pb-20 px-5 md:px-14 lg:px-20 2xl:px-32">

                {/* Back to admin */}
                <div className="flex gap-3 items-center">
                    <Link href='/admin'>
                        <button
                            className='w-10 h-10 bg-[#0d94b6] hover:bg-[#0d829c] text-white py-3 px-3 rounded-full mt-10 transition duration-200'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                        </button>
                    </Link>
                    <h1 className=' mt-10  text-gray-400'>Back to dashboard</h1>
                </div>



                <div className="flex mt-10 items-center gap-2">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>


                    </span>
                    <h1 className='text-3xl '>

                        Edit Sheet
                    </h1>
                </div>

                <div>
                    <form onSubmit={handleSubmit(submitForm)} className='mt-10'>
                        <div className=''>

                            <div className="flex flex-col p-5 lg:p-10 bg-white rounded-xl gap-5">
                                <div>
                                    <label htmlFor='project_title' className='block text-sm font-medium text-gray-700'>
                                        Project Title
                                    </label>
                                    <input
                                        defaultValue={sheetDataFromServer?.project_title}
                                        placeholder='Enter project title'
                                        type='text'
                                        id='project_title'
                                        {...register('project_title', { required: true })}
                                        className='mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                    />
                                    {errors.project_title && <span className='text-red-500'>This field is required</span>}
                                </div>

                                <div>
                                    <label htmlFor='number_of_student' className='block text-sm font-medium text-gray-700'>
                                        Number of Student
                                    </label>
                                    <input
                                        defaultValue={sheetDataFromServer?.number_of_student}
                                        placeholder='Enter number of student'
                                        type='number'
                                        id='number_of_student'
                                        {...register('number_of_student', { required: true })}
                                        className='mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                    />
                                    {errors.number_of_student && <span className='text-red-500'>This field is required</span>}
                                </div>

                                <div className='sm:col-span-2'>
                                    <label htmlFor='introduction' className='block text-sm font-medium text-gray-700'>
                                        Introduction
                                    </label>
                                    <textarea
                                        defaultValue={
                                            sheetDataFromServer?.introduction ? sheetDataFromServer?.introduction.join('\n') : ''
                                        }
                                        rows={5}
                                        placeholder='Enter introduction text separated by a new line'
                                        id='introduction'
                                        required
                                        onChange={(e) => handleIntroduction(e)}
                                        className='mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                    ></textarea>

                                    <p className='mt-2 text-sm text-gray-500'>NOTE: Please separate each introduction with a new line</p>
                                </div>

                                <div className='sm:col-span-2'>
                                    <label htmlFor='guidelines' className='block text-sm font-medium text-gray-700'>
                                        Guidelines
                                    </label>
                                    <textarea
                                        defaultValue={
                                            sheetDataFromServer?.guidelines ? sheetDataFromServer?.guidelines.join('\n') : ''
                                        }
                                        rows={5}
                                        placeholder='Enter guidelines text separated by a new line'
                                        onChange={(e) => handleGuidelines(e)}
                                        id='guidelines'
                                        required
                                        className='mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                    />

                                    <p className='mt-2 text-sm text-gray-500'>NOTE: Please separate each guideline with a new line</p>
                                </div>
                            </div>


                            <div className="flex flex-col p-5 lg:p-10 bg-white rounded-xl mt-10">
                                <label htmlFor='attachments' className='block font-medium text-gray-700'>
                                    Attachments
                                </label>

                                {/* Attachment 1 */}
                                <div
                                    className='mt-2 flex flex-col lg:flex-row gap-5 items-center w-full mb-5'>
                                    <div className='w-full'>
                                        <label htmlFor='title' className='block text-sm text-gray-500 mb-1'>
                                            Attachment 1 Title:
                                        </label>
                                        <input
                                            defaultValue={
                                                sheetDataFromServer?.attachments ? sheetDataFromServer.attachments[0].split(',')[0] : ''
                                            }
                                            {...register('attachment1Title', { required: true })}
                                            placeholder='Enter attachment title'
                                            type='text'
                                            id='attachments_title_1'
                                            className=' block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                        />
                                    </div>

                                    <div className='w-full'>
                                        <label htmlFor='url' className='block text-sm text-gray-500 mb-1'>
                                            Attachment 1 URL:
                                        </label>
                                        <input
                                            defaultValue={
                                                sheetDataFromServer?.attachments ? sheetDataFromServer.attachments[0].split(',')[1] : ''
                                            }
                                            {...register('attachment1Url')}
                                            placeholder='Enter attachment URL'
                                            type='text'
                                            id='attachments_url_1'
                                            className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                        />
                                    </div>
                                </div>

                                {/* Attachment 2 */}
                                <div
                                    className='mt-2 flex flex-col lg:flex-row gap-5 items-center w-full mb-5'>
                                    <div className='w-full'>
                                        <label htmlFor='title' className='block text-sm text-gray-500 mb-1'>
                                            Attachment 2 Title:
                                        </label>
                                        <input
                                            defaultValue={
                                                sheetDataFromServer?.attachments ? sheetDataFromServer.attachments[1].split(',')[0] : ''
                                            }
                                            {...register('attachment2Title')}
                                            placeholder='Enter attachment title'
                                            type='text'
                                            id='attachments_title_2'
                                            className=' block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                        />
                                    </div>

                                    <div className='w-full'>
                                        <label htmlFor='url' className='block text-sm text-gray-500 mb-1'>
                                            Attachment 2 URL:
                                        </label>
                                        <input
                                            defaultValue={
                                                sheetDataFromServer?.attachments ? sheetDataFromServer.attachments[1].split(',')[1] : ''
                                            }
                                            {...register('attachment2Url')}
                                            placeholder='Enter attachment URL'
                                            type='text'
                                            id='attachments_url_2'
                                            className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                        />
                                    </div>
                                </div>

                                {/* Attachment 3 */}
                                <div
                                    className='mt-2 flex flex-col lg:flex-row gap-5 items-center w-full mb-5'>
                                    <div className='w-full'>
                                        <label htmlFor='title' className='block text-sm text-gray-500 mb-1'>
                                            Attachment 3 Title:
                                        </label>
                                        <input
                                            defaultValue={
                                                sheetDataFromServer?.attachments ? sheetDataFromServer.attachments[2].split(',')[0] : ''
                                            }
                                            {...register('attachment3Title')}
                                            placeholder='Enter attachment title'
                                            type='text'
                                            id='attachments_title_3'
                                            className=' block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                        />
                                    </div>

                                    <div className='w-full'>
                                        <label htmlFor='url' className='block text-sm text-gray-500 mb-1'>
                                            Attachment 3 URL:
                                        </label>
                                        <input
                                            defaultValue={
                                                sheetDataFromServer?.attachments ? sheetDataFromServer.attachments[2].split(',')[1] : ''
                                            }
                                            {...register('attachment3Url')}
                                            placeholder='Enter attachment URL'
                                            type='text'
                                            id='attachments_url_3'
                                            className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                        />
                                    </div>
                                </div>

                                {/* Attachment 4 */}
                                <div
                                    className='mt-2 flex flex-col lg:flex-row gap-5 items-center w-full mb-5'>
                                    <div className='w-full'>
                                        <label htmlFor='title' className='block text-sm text-gray-500 mb-1'>
                                            Attachment 4 Title:
                                        </label>
                                        <input
                                            defaultValue={
                                                sheetDataFromServer?.attachments ? sheetDataFromServer.attachments[3].split(',')[0] : ''
                                            }
                                            {...register('attachment4Title')}
                                            placeholder='Enter attachment title'
                                            type='text'
                                            id='attachments_title_4'
                                            className=' block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                        />
                                    </div>

                                    <div className='w-full'>
                                        <label htmlFor='url' className='block text-sm text-gray-500 mb-1'>
                                            Attachment 4 URL:
                                        </label>
                                        <input
                                            defaultValue={
                                                sheetDataFromServer?.attachments ? sheetDataFromServer.attachments[3].split(',')[1] : ''
                                            }
                                            {...register('attachment4Url')}
                                            placeholder='Enter attachment URL'
                                            type='text'
                                            id='attachments_url_4'
                                            className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                        />
                                    </div>
                                </div>
                            </div>



                            {/* <div className="flex flex-col p-5 lg:p-10 bg-white rounded-xl gap-5 mt-10">
                                <div className='sm:col-span-2'>
                                    <label htmlFor='optional_bonus_sections' className='block font-medium text-gray-700'>
                                        Optional Bonus Sections
                                    </label>
                                    <textarea
                                        defaultValue={sheetDataFromServer?.optional_bonus_sections}
                                        rows={5}
                                        placeholder='Enter optional bonus section text'
                                        {...register('optional_bonus_sections')}
                                        id='optional_bonus_sections'
                                        required
                                        className='mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                    ></textarea>
                                    {errors.optional_bonus_sections && <span className='text-red-500'>This field is required</span>}
                                </div>

                            </div> */}


                            {/* mandatory options: data- title, subtitle, description, yes_no */}

                            <div className="flex flex-col p-5 lg:p-10 bg-white rounded-xl gap-5 mt-10">
                                <di className="flex justify-between items-center">
                                    <label className='block  font-medium text-gray-700'>
                                        Mandatory Part
                                    </label>

                                    <div className='flex gap-2'>

                                        <button type='button' onClick={removeMandatorySection} className='bg-[#666666] hover:bg-[#525252] text-white py-3 px-5 rounded-full transition duration-200'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                            </svg>

                                        </button>
                                        <button type='button' onClick={addMandatorySection} className='bg-[#0d94b6] hover:bg-[#0d829c] text-white py-3 px-5 rounded-full transition duration-200'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                            </svg>

                                        </button>

                                    </div>
                                </di>




                                {[...Array(numberOfMandatorySections)].map((_, index) => (
                                    <div key={index} className='mt-5'>
                                        {/* title */}
                                        <div>
                                            <div className='mt-3 mb-7 border-sky-500 ' >
                                                <h1 className='text-xl font-medium text-gray-700'>Mandatory Section {index + 1}</h1>
                                            </div>
                                            <label htmlFor='title' className='block text-sm text-gray-500 mb-1'>
                                                Title of the evaluation criteria:
                                            </label>
                                            <input
                                                defaultValue={
                                                    mandatoryOptionsDataFromServer[index]?.title ? mandatoryOptionsDataFromServer[index]?.title : ''
                                                }
                                                {...register(`title.${index}`, { required: true })}
                                                placeholder='Enter a title'
                                                type='text'
                                                className=' block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                            />
                                        </div>

                                        {/* subtitle */}

                                        <div>
                                            <label htmlFor='subtitle' className='block text-sm text-gray-500 mt-5 mb-1'>
                                                Subtitle:
                                            </label>
                                            <input
                                                defaultValue={
                                                    mandatoryOptionsDataFromServer[index]?.subtitle ? mandatoryOptionsDataFromServer[index]?.subtitle : ''
                                                }
                                                {...register(`subtitle.${index}`, { required: true })}
                                                placeholder='Enter a subtitle (optional)'
                                                type='text'
                                                className=' block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                            />
                                        </div>

                                        {/* description */}
                                        <div>
                                            <label htmlFor='description' className='block text-sm text-gray-500 mt-5 mb-1'>
                                                Detailed dscription:
                                            </label>

                                            <textarea
                                                defaultValue={
                                                    mandatoryOptionsDataFromServer[index]?.description ? mandatoryOptionsDataFromServer[index]?.description : ''
                                                }
                                                {...register(`description.${index}`, { required: true })}
                                                rows={5}
                                                placeholder='Enter detailed description separated by a new line'
                                                className=' block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                            />
                                            < p className='mt-2 text-sm text-gray-500' > NOTE: Please separate each description with a new line</p>
                                        </div>

                                        {/* yes_no */}
                                        <div>
                                            <label htmlFor='yes_no' className='block text-sm text-gray-500 mt-5 mb-1'>
                                                Yes/No button or slider:
                                            </label>

                                            <select
                                                defaultValue={
                                                    mandatoryOptionsDataFromServer[index]?.yes_no === true ? 'true' : 'false'
                                                }
                                                {...register(`yes_no.${index}`, { required: true })}
                                                className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                            >
                                                <option value={null}>Select one</option>
                                                <option value={true}>Yes/No button</option>
                                                <option value={false}>Slider with value</option>
                                            </select>
                                        </div>
                                    </div>
                                ))}

                            </div>



                            {/* Bonus options: data- title, subtitle, description, yes_no */}

                            <div className="flex flex-col p-5 lg:p-10 bg-white rounded-xl gap-5 mt-10">
                                <di className="flex justify-between items-center">
                                    <label className='block  font-medium text-gray-700'>
                                        Bonus Part
                                    </label>

                                    <div className='flex gap-2'>

                                        <button type='button' onClick={removeBonusSection} className='bg-[#666666] hover:bg-[#525252] text-white py-3 px-5 rounded-full transition duration-200'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                            </svg>

                                        </button>
                                        <button type='button' onClick={addBonusSection} className='bg-[#0d94b6] hover:bg-[#0d829c] text-white py-3 px-5 rounded-full transition duration-200'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                            </svg>

                                        </button>

                                    </div>
                                </di>




                                {[...Array(numberOfBonusSections)].map((_, index) => (
                                    <div key={index} className='mt-5'>
                                        {/* title */}
                                        <div>
                                            <div className='mt-3 mb-7 border-sky-500 ' >
                                                <h1 className='text-xl font-medium text-gray-700'>Bonus Section {index + 1}</h1>
                                            </div>
                                            <label htmlFor='bonus_title' className='block text-sm text-gray-500 mb-1'>
                                                Title of the evaluation criteria:
                                            </label>
                                            <input
                                                defaultValue={
                                                    bonusSectionsDataFromServer[index]?.title ? bonusSectionsDataFromServer[index]?.title : ''
                                                }
                                                {...register(`bonus_title.${index}`, { required: true })}
                                                placeholder='Enter a title'
                                                type='text'
                                                className=' block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                            />
                                        </div>

                                        {/* subtitle */}

                                        <div>
                                            <label htmlFor='bonus_subtitle' className='block text-sm text-gray-500 mt-5 mb-1'>
                                                Subtitle:
                                            </label>
                                            <input
                                                defaultValue={
                                                    bonusSectionsDataFromServer[index]?.subtitle ? bonusSectionsDataFromServer[index]?.subtitle : ''
                                                }
                                                {...register(`bonus_subtitle.${index}`, { required: true })}
                                                placeholder='Enter a subtitle (optional)'
                                                type='text'
                                                className=' block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                            />
                                        </div>

                                        {/* description */}
                                        <div>
                                            <label htmlFor='bonus_description' className='block text-sm text-gray-500 mt-5 mb-1'>
                                                Detailed dscription:
                                            </label>

                                            <textarea
                                                defaultValue={
                                                    bonusSectionsDataFromServer[index]?.description ? bonusSectionsDataFromServer[index]?.description : ''
                                                }
                                                {...register(`bonus_description.${index}`, { required: true })}
                                                rows={5}
                                                placeholder='Enter detailed description separated by a new line'
                                                className=' block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                            />
                                            < p className='mt-2 text-sm text-gray-500' > NOTE: Please separate each description with a new line</p>
                                        </div>

                                        {/* yes_no */}
                                        <div>
                                            <label htmlFor='bonus_yes_no' className='block text-sm text-gray-500 mt-5 mb-1'>
                                                Yes/No button or slider:
                                            </label>

                                            <select
                                                defaultValue={
                                                    bonusSectionsDataFromServer[index]?.yes_no === true ? 'true' : 'false'
                                                }
                                                {...register(`bonus_yes_no.${index}`, { required: true })}
                                                className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                            >
                                                <option value={null}>Select one</option>
                                                <option value={true}>Yes/No button</option>
                                                <option value={false}>Slider with value</option>
                                            </select>
                                        </div>
                                    </div>
                                ))}

                            </div>











                            <div className="flex flex-col p-5 lg:p-10 bg-white rounded-xl gap-5 mt-10">
                                <label htmlFor='grading_options' className='block text-sm font-medium text-gray-700'>
                                    Grading Options (select yes to add in the sheet)
                                </label>

                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5">
                                    <div>
                                        <label htmlFor='ok' className='block text-sm text-gray-500 mt-5 mb-1'>
                                            OK:
                                        </label>
                                        <select
                                            {...register('ok')}
                                            id='ok'
                                            defaultValue={
                                                gradingOptionsDataFromServer ? gradingOptionsDataFromServer[0].ok : null
                                            }
                                            className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                        >
                                            <option value={null}>Select one</option>
                                            <option value={true}>Yes</option>
                                            <option value={false}>No</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor='outstanding' className='block text-sm text-gray-500 mt-5 mb-1'>
                                            Outstanding:
                                        </label>
                                        <select
                                            defaultValue={
                                                gradingOptionsDataFromServer ? gradingOptionsDataFromServer[0].outstanding : null
                                            }
                                            {...register('outstanding')}
                                            id='outstanding'
                                            className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                        >
                                            <option value={null}>Select one</option>
                                            <option value={true}>Yes</option>
                                            <option value={false}>No</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor='empty_work' className='block text-sm text-gray-500 mt-5 mb-1'>
                                            Empty Work:
                                        </label>
                                        <select
                                            defaultValue={
                                                gradingOptionsDataFromServer ? gradingOptionsDataFromServer[0].empty_work : null
                                            }
                                            {...register('empty_work')}
                                            id='empty_work'
                                            className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                        >
                                            <option value={null}>Select one</option>
                                            <option value={true}>Yes</option>
                                            <option value={false}>No</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor='incomplete_work' className='block text-sm text-gray-500 mt-5 mb-1'>
                                            Incomplete Work:
                                        </label>
                                        <select
                                            defaultValue={
                                                gradingOptionsDataFromServer ? gradingOptionsDataFromServer[0].incomplete_work : null
                                            }
                                            {...register('incomplete_work')}
                                            id='incomplete_work'
                                            className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                        >
                                            <option value={null}>Select one</option>
                                            <option value={true}>Yes</option>
                                            <option value={false}>No</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor='invalid_compilation' className='block text-sm text-gray-500 mt-5 mb-1'>
                                            Invalid Compilation:
                                        </label>
                                        <select
                                            defaultValue={
                                                gradingOptionsDataFromServer ? gradingOptionsDataFromServer[0].invalid_compilation : null
                                            }
                                            {...register('invalid_compilation')}
                                            id='invalid_compilation'
                                            className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                        >
                                            <option value={null}>Select one</option>
                                            <option value={true}>Yes</option>
                                            <option value={false}>No</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor='norme' className='block text-sm text-gray-500 mt-5 mb-1'>
                                            Norme:
                                        </label>
                                        <select
                                            defaultValue={
                                                gradingOptionsDataFromServer ? gradingOptionsDataFromServer[0].norme : null
                                            }
                                            {...register('norme')}
                                            id='norme'
                                            className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                        >
                                            <option value={null}>Select one</option>
                                            <option value={true}>Yes</option>
                                            <option value={false}>No</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor='cheat' className='block text-sm text-gray-500 mt-5 mb-1'>
                                            Cheat:
                                        </label>
                                        <select
                                            defaultValue={
                                                gradingOptionsDataFromServer ? gradingOptionsDataFromServer[0].cheat : null
                                            }
                                            {...register('cheat')}
                                            id='cheat'
                                            className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                        >
                                            <option value={null}>Select one</option>
                                            <option value={true}>Yes</option>
                                            <option value={false}>No</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor='crash' className='block text-sm text-gray-500 mt-5 mb-1'>
                                            Crash:
                                        </label>
                                        <select
                                            defaultValue={
                                                gradingOptionsDataFromServer ? gradingOptionsDataFromServer[0].crash : null
                                            }
                                            {...register('crash')}
                                            id='crash'
                                            className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                        >
                                            <option value={null}>Select one</option>
                                            <option value={true}>Yes</option>
                                            <option value={false}>No</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor='concerning_situations' className='block text-sm text-gray-500 mt-5 mb-1'>
                                            Concerning Situations:
                                        </label>
                                        <select
                                            defaultValue={
                                                gradingOptionsDataFromServer ? gradingOptionsDataFromServer[0].concerning_situations : null
                                            }
                                            {...register('concerning_situations')}
                                            id='concerning_situations'
                                            className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                        >
                                            <option value={null}>Select one</option>
                                            <option value={true}>Yes</option>
                                            <option value={false}>No</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor='leaks' className='block text-sm text-gray-500 mt-5 mb-1'>
                                            Leaks:
                                        </label>
                                        <select
                                            defaultValue={
                                                gradingOptionsDataFromServer ? gradingOptionsDataFromServer[0].leaks : null
                                            }
                                            {...register('leaks')}
                                            id='leaks'
                                            className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                        >
                                            <option value={null}>Select one</option>
                                            <option value={true}>Yes</option>
                                            <option value={false}>No</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor='forbidden_functions' className='block text-sm text-gray-500 mt-5 mb-1'>
                                            Forbidden Functions:
                                        </label>
                                        <select
                                            defaultValue={
                                                gradingOptionsDataFromServer ? gradingOptionsDataFromServer[0].forbidden_functions : null
                                            }
                                            {...register('forbidden_functions')}
                                            id='forbidden_functions'
                                            className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                        >
                                            <option value={null}>Select one</option>
                                            <option value={true}>Yes</option>
                                            <option value={false}>No</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor='cannot_support' className='block text-sm text-gray-500 mt-5 mb-1'>
                                            Cannot Support:
                                        </label>
                                        <select
                                            defaultValue={
                                                gradingOptionsDataFromServer ? gradingOptionsDataFromServer[0].cannot_support : null
                                            }
                                            {...register('cannot_support')}
                                            id='cannot_support'
                                            className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                        >
                                            <option value={null}>Select one</option>
                                            <option value={true}>Yes</option>
                                            <option value={false}>No</option>
                                        </select>
                                    </div>
                                </div>

                            </div>




                            < div className='mt-5'>
                                <button type='submit' className='bg-[#0d94b6] hover:bg-[#0d829c] text-white py-3 px-10 rounded mt-10 transition duration-200'>
                                    Update Sheet
                                </button>
                                <div div className='mt-5'>
                                </div>

                            </div>

                        </div>
                    </form>

                </div>






            </div>
        </div>
    )
}

export default page