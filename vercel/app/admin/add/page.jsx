'use client'

import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

function page() {


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


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();






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



    // Handle mandatory Sections

    const [numberOfMandatorySections, setNumberOfMandatorySections] = useState(1)

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
                text: 'You need to have at least one mandatory section',
                showConfirmButton: true,
                confirmButtonText: 'OK',
                confirmButtonColor: '#0D94B6'
            })
        }
    }


    // Handle bonus sections

    const [numberOfBonusSections, setNumberOfBonusSections] = useState(1)

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





    // Handle grading options

    const [gradingOptionsData, setGradingOptionsData] = useState([])

    const handleOk = (e) => {
        const ok = e.target.value
        setGradingOptionsData({ ...gradingOptionsData, ok })
    }

    const handleOutstanding = (e) => {
        const outstanding = e.target.value
        setGradingOptionsData({ ...gradingOptionsData, outstanding })
    }

    const handleEmptyWork = (e) => {
        const empty_work = e.target.value
        setGradingOptionsData({ ...gradingOptionsData, empty_work })
    }

    const handleIncompleteWork = (e) => {
        const incomplete_work = e.target.value
        setGradingOptionsData({ ...gradingOptionsData, incomplete_work })
    }

    const handleInvalidCompilation = (e) => {
        const invalid_compilation = e.target.value
        setGradingOptionsData({ ...gradingOptionsData, invalid_compilation })
    }

    const handleNorme = (e) => {
        const norme = e.target.value
        setGradingOptionsData({ ...gradingOptionsData, norme })
    }

    const handleCheat = (e) => {
        const cheat = e.target.value
        setGradingOptionsData({ ...gradingOptionsData, cheat })
    }

    const handleCrash = (e) => {
        const crash = e.target.value
        setGradingOptionsData({ ...gradingOptionsData, crash })
    }

    const handleConcerningSituations = (e) => {
        const concerning_situations = e.target.value
        setGradingOptionsData({ ...gradingOptionsData, concerning_situations })
    }

    const handleLeaks = (e) => {
        const leaks = e.target.value
        setGradingOptionsData({ ...gradingOptionsData, leaks })
    }

    const handleForbiddenFunctions = (e) => {
        const forbidden_functions = e.target.value
        setGradingOptionsData({ ...gradingOptionsData, forbidden_functions })
    }

    const handleCannotSupport = (e) => {
        const cannot_support = e.target.value
        setGradingOptionsData({ ...gradingOptionsData, cannot_support })
    }





    // -------------------- Submit form --------------------

    const createSheet = async (newData, newMandatoryOptionsData, newBonusOptionsData, newGradingOptionsData) => {

        // sweet alert loading until all process is done

        Swal.fire({
            title: 'Creating Sheet',
            html: 'Please wait...',
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
            }
        })

        // send Post request to create a sheet

        fetch('/api/sheet', {
            method: 'POST',
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                console.log('STEP 1: SUCCESS', data.data)

                const sheetId = data.data.id

                // Now create a mandatory options using the sheet id

                fetch(`/api/mandatorySection/${sheetId}`, {
                    method: 'POST',
                    body: JSON.stringify(newMandatoryOptionsData)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('STEP 2: SUCCESS', data.data)

                        // Now create a bonus sections using the sheet id

                        fetch(`/api/bonusSection/${sheetId}`, {
                            method: 'POST',
                            body: JSON.stringify(newBonusOptionsData)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log('STEP 3: SUCCESS', data.data)


                                // Now create a grading options using the sheet id

                                fetch(`/api/gradingOption/${sheetId}`, {
                                    method: 'POST',
                                    body: JSON.stringify(newGradingOptionsData)
                                })
                                    .then(res => res.json())
                                    .then(data => {
                                        console.log('STEP 4: SUCCESS', data.data)

                                        if (data.success) {
                                            Swal.fire({
                                                icon: 'success',
                                                title: 'Sheet created successfully',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
                                        } else {
                                            Swal.fire({
                                                icon: 'error',
                                                title: 'Failed to create sheet',
                                                showConfirmButton: false,
                                                timer: 1500
                                            })
                                        }

                                        // reset the form after successful submission
                                        reset()

                                    })
                            })
                    })


            })
    }



    const submitForm = (data) => {



        const newData = {
            optional_bonus_sections: data.optional_bonus_sections,
            project_title: data.project_title,
            introduction: introductionData,
            attachments: [
                `${data.attachment1Title},${data.attachment1Url}`,
                `${data.attachment2Title},${data.attachment2Url}`,
                `${data.attachment3Title},${data.attachment3Url}`,
                `${data.attachment4Title},${data.attachment4Url}`
            ],
            guidelines: guidelinesData,
            number_of_student: parseInt(data.number_of_student),
        }

        const newMandatoryOptionsData = []

        for (let i = 0; i < numberOfMandatorySections; i++) {
            newMandatoryOptionsData.push({
                title: data.title[i],
                subtitle: data.subtitle[i],
                description: data.description[i],
                yes_no: data.yes_no[i] === 'true' ? true : false
            })
        }

        const newBonusOptionsData = []

        for (let i = 0; i < numberOfBonusSections; i++) {
            newBonusOptionsData.push({
                title: data.bonus_title[i],
                subtitle: data.bonus_subtitle[i],
                description: data.bonus_description[i],
                yes_no: data.bonus_yes_no[i] === 'true' ? true : false
            })
        }


        const newGradingOptionsData = {
            ok: gradingOptionsData.ok === 'true' ? true : false,
            outstanding: gradingOptionsData.outstanding === 'true' ? true : false,
            empty_work: gradingOptionsData.empty_work === 'true' ? true : false,
            incomplete_work: gradingOptionsData.incomplete_work === 'true' ? true : false,
            invalid_compilation: gradingOptionsData.invalid_compilation === 'true' ? true : false,
            norme: gradingOptionsData.norme === 'true' ? true : false,
            cheat: gradingOptionsData.cheat === 'true' ? true : false,
            crash: gradingOptionsData.crash === 'true' ? true : false,
            concerning_situations: gradingOptionsData.concerning_situations === 'true' ? true : false,
            leaks: gradingOptionsData.leaks === 'true' ? true : false,
            forbidden_functions: gradingOptionsData.forbidden_functions === 'true' ? true : false,
            cannot_support: gradingOptionsData.cannot_support === 'true' ? true : false
        }

        createSheet(newData, newMandatoryOptionsData, newBonusOptionsData, newGradingOptionsData)

        // console.log(newData)
        // console.log(newMandatoryOptionsData)
        // console.log(newBonusOptionsData)
        // console.log(newGradingOptionsData)
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
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                    </span>
                    <h1 className='text-3xl '>

                        Add a new sheet
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
                                            {...register('attachment4Url')}
                                            placeholder='Enter attachment URL'
                                            type='text'
                                            id='attachments_url_4'
                                            className='block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                        />
                                    </div>
                                </div>
                            </div>



                            <div className="flex flex-col p-5 lg:p-10 bg-white rounded-xl gap-5 mt-10">
                                <div className='sm:col-span-2'>
                                    <label htmlFor='optional_bonus_sections' className='block font-medium text-gray-700'>
                                        Optional Bonus Sections
                                    </label>
                                    <textarea
                                        rows={5}
                                        placeholder='Enter optional bonus section text'
                                        {...register('optional_bonus_sections')}
                                        id='optional_bonus_sections'
                                        required
                                        className='mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                    ></textarea>
                                    {errors.optional_bonus_sections && <span className='text-red-500'>This field is required</span>}
                                </div>

                            </div>


                            {/* mandatory options: data- title, subtitle, description, yes_no */}

                            <div className="flex flex-col p-5 lg:p-10 bg-white rounded-xl gap-5 mt-10">
                                <di className="flex justify-between items-center">
                                    <label className='block  font-medium text-gray-700'>
                                        Mandatory Sections
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









                            {/* bonus options: data- title, subtitle, description, yes_no */}

                            <div className="flex flex-col p-5 lg:p-10 bg-white rounded-xl gap-5 mt-10">
                                <div className="flex justify-between items-center">
                                    <label className='block  font-medium text-gray-700'>
                                        Bonus Sections
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
                                </div>




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
                                            onChange={(e) => handleOk(e)}
                                            id='ok'

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
                                            onChange={(e) => handleOutstanding(e)}
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
                                            onChange={(e) => handleEmptyWork(e)}
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
                                            onChange={(e) => handleIncompleteWork(e)}
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
                                            onChange={(e) => handleInvalidCompilation(e)}
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
                                            onChange={(e) => handleNorme(e)}
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
                                            onChange={(e) => handleCheat(e)}
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
                                            onChange={(e) => handleCrash(e)}
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
                                            onChange={(e) => handleConcerningSituations(e)}
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
                                            onChange={(e) => handleLeaks(e)}
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
                                            onChange={(e) => handleForbiddenFunctions(e)}
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
                                            onChange={(e) => handleCannotSupport(e)}
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
                                    Save to Database
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