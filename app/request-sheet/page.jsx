'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import InfoModal from '@/components/InfoModal';

function page() {


    const router = useRouter()

    const [isLogged, setIsLogged] = useState(null)

        // Check if user is logged in, admin or not
        useEffect(() => {
            async function checkLoginStatus() {
                try {
                    const response = await fetch('/api/getUserData');
                    const userData = await response.json();

                    if (userData?.login) {
                        // Set isLogged to true if the user is logged in
                        setIsLogged(true);
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Unauthorized',
                            text: 'You need to login to access this page.',
                        }).then(() => {
                            router.push('/login');
                        });
                    }
                } catch (error) {
                    console.error('Error fetching user data:', error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Something went wrong while checking login status.',
                    });
                }
            }

            checkLoginStatus();
        }, [router]);


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    // Get all cursus

    const [cursusData, setCursusData] = useState([])

    useEffect(() => {
        fetch('/api/cursus')
            .then(res => res.json())
            .then(data => {
                setCursusData(data.data)
            })
    }, [])

    const [selectedCursus, setSelectedCursus] = useState('')

    const handleSelectCursus = (e) => {
        const cursus_id = e.target.value
        setSelectedCursus(cursus_id)
    }





    // handle introduction (separator by a new line and arrange them in an array)

    const [introductionData, setIntroductionData] = useState([
        "- Remain polite, courteous, respectful, and constructive throughout the evaluation process. The community's well-being depends on it.",
        "- Work with the student or group being evaluated to identify potential issues in their project. Take time to discuss and debate the problems identified.",
        "- Understand that there may be differences in how peers interpret the project instructions and scope. Always keep an open mind and grade as honestly as possible. Pedagogy is effective only when peer evaluations are taken seriously."
    ])

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

    const [guidelinesData, setGuidelinesData] = useState([
        "- Only grade the work submitted to the **Git repository** of the evaluated student or group.",
        "- Double-check that the **Git repository** belongs to the student(s) and that the project is the one expected. Ensure that **git clone** is used in an empty folder.",
        "- Carefully verify that no malicious aliases are used to deceive the evaluator into grading non-official content.",
        "- If applicable, review any **scripts** used for testing or automation together with the student.",
        "- If you haven’t completed the assignment you’re evaluating, read the entire subject before starting the evaluation.",
        "- Use the available flags to report an empty repository, a non-functioning program, a **Norm** error, or cheating. The evaluation process ends with a final grade of 0 (or -42 for cheating). However, except in cases of cheating, students are encouraged to review the work together to identify mistakes to avoid in the future.",
        "- Remember that no **segfaults** or other unexpected program terminations will be tolerated during the evaluation. If this occurs, the final grade is 0. Use the appropriate flag.",
        "- You should not need to edit any files except the configuration file, if it exists. If editing a file is necessary, explain the reasons to the evaluated student and ensure mutual agreement.",
        "- Verify the absence of **memory leaks.** All memory allocated on the heap must be properly freed before the program ends.",
        "- You may use tools like leaks, **valgrind,** or **e_fence** to check for memory leaks. If memory leaks are found, tick the appropriate flag."
    ])


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
        Swal.fire({
            icon: 'success',
            position: 'top-end',
            title: 'New mandatory section added',
            showConfirmButton: false,
            timer: 1000
        })
    }

    const removeMandatorySection = () => {
        if (numberOfMandatorySections > 1) {
            setNumberOfMandatorySections(numberOfMandatorySections - 1)
            Swal.fire({
                icon: 'success',
                position: 'top-end',
                title: 'Mandatory section removed',
                showConfirmButton: false,
                timer: 1000
            })
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

    const [numberOfBonusSections, setNumberOfBonusSections] = useState(0)

    const addBonusSection = () => {
        setNumberOfBonusSections(numberOfBonusSections + 1)
        Swal.fire({
            icon: 'success',
            position: 'top-end',
            title: 'New bonus section added',
            showConfirmButton: false,
            timer: 1000
        })
    }

    const removeBonusSection = () => {

        if (numberOfBonusSections > 0) {
            setNumberOfBonusSections(numberOfBonusSections - 1)
            Swal.fire({
                icon: 'success',
                position: 'top-end',
                title: 'Bonus section removed',
                showConfirmButton: false,
                timer: 1000
            })
        }

    }


    // Guidelines Jodit Editor

    // const [guidelineContents, setGuidelineContents] = useState('')

    // const guidelineEditor = useRef(null);


    // const config =
    // {
    //     readonly: false,
    //     placeholder: 'Start typing guidelines...'
    // }

    // const handleGuidelinesContent = (newContent) => {
    //     setGuidelineContents(newContent)
    // }






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

    const createSheet = async (newData, newMandatoryOptionsData, newBonusOptionsDatacheck, newGradingOptionsData) => {

        // sweet alert loading until all process is done

        Swal.fire({
            title: 'Creating Sheet Request',
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

                        // Now create a grading options using the sheet id

                        fetch(`/api/gradingOption/${sheetId}`, {
                            method: 'POST',
                            body: JSON.stringify(newGradingOptionsData)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log('STEP 3: SUCCESS', data.data)

                                if (data.success) {
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Sheet request created successfully',
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

                        // Now create a bonus sections using the sheet id only if there is a bonus section

                        if (newBonusOptionsDatacheck !== null) {
                            fetch(`/api/bonusSection/${sheetId}`, {
                                method: 'POST',
                                body: JSON.stringify(newBonusOptionsDatacheck)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    console.log('STEP 4: SUCCESS', data.data)
                                })
                        }

                        //redirect to home
                        router.push('/')


                    })


            })
    }



    const submitForm = (data) => {



        const newData = {
            optional_bonus_sections: data.optional_bonus_sections,
            project_title: data.project_title,
            status: 'pending',
            introduction: introductionData,
            attachments: [
                `${data.attachment1Title},${data.attachment1Url}`,
                `${data.attachment2Title},${data.attachment2Url}`,
                `${data.attachment3Title},${data.attachment3Url}`,
                `${data.attachment4Title},${data.attachment4Url}`
            ],
            guidelines: guidelinesData,
            number_of_student: parseInt(data.number_of_student),
            cursus_id: selectedCursus
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
            ok: gradingOptionsData.ok === 'false' ? false : true,
            outstanding: gradingOptionsData.outstanding === 'false' ? false : true,
            empty_work: gradingOptionsData.empty_work === 'false' ? false : true,
            incomplete_work: gradingOptionsData.incomplete_work === 'false' ? false : true,
            invalid_compilation: gradingOptionsData.invalid_compilation === 'false' ? false : true,
            norme: gradingOptionsData.norme === 'false' ? false : true,
            cheat: gradingOptionsData.cheat === 'false' ? false : true,
            crash: gradingOptionsData.crash === 'false' ? false : true,
            concerning_situations: gradingOptionsData.concerning_situations === 'false' ? false : true,
            leaks: gradingOptionsData.leaks === 'false' ? false : true,
            forbidden_functions: gradingOptionsData.forbidden_functions === 'false' ? false : true,
            cannot_support: gradingOptionsData.cannot_support === 'false' ? false : true

        }

        const newBonusOptionsDatacheck = newBonusOptionsData.length > 0 ? newBonusOptionsData : null



        createSheet(newData, newMandatoryOptionsData, newBonusOptionsDatacheck, newGradingOptionsData)

        console.log(newData)
        console.log(newMandatoryOptionsData)
        console.log(newBonusOptionsDatacheck)
        console.log(newGradingOptionsData)
    }



    const defaultValues = {

        introduction: `- Remain polite, courteous, respectful, and constructive throughout the evaluation process. The community's well-being depends on it.
- Work with the student or group being evaluated to identify potential issues in their project. Take time to discuss and debate the problems identified.
- Understand that there may be differences in how peers interpret the project instructions and scope. Always keep an open mind and grade as honestly as possible. Pedagogy is effective only when peer evaluations are taken seriously.`,
        guidelines: `- Only grade the work submitted to the **Git repository** of the evaluated student or group.
- Double-check that the **Git repository** belongs to the student(s) and that the project is the one expected. Ensure that **git clone** is used in an empty folder.
- Carefully verify that no malicious aliases are used to deceive the evaluator into grading non-official content.
- If applicable, review any **scripts** used for testing or automation together with the student.
- If you haven’t completed the assignment you’re evaluating, read the entire subject before starting the evaluation.
- Use the available flags to report an empty repository, a non-functioning program, a **Norm** error, or cheating. The evaluation process ends with a final grade of 0 (or -42 for cheating). However, except in cases of cheating, students are encouraged to review the work together to identify mistakes to avoid in the future.
- Remember that no **segfaults** or other unexpected program terminations will be tolerated during the evaluation. If this occurs, the final grade is 0. Use the appropriate flag.
- You should not need to edit any files except the configuration file, if it exists. If editing a file is necessary, explain the reasons to the evaluated student and ensure mutual agreement.
- Verify the absence of **memory leaks.** All memory allocated on the heap must be properly freed before the program ends.
- You may use tools like leaks, **valgrind,** or **e_fence** to check for memory leaks. If memory leaks are found, tick the appropriate flag.`,

    }



    // Modal state for InfoModal


    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }













    return (
        <div className='bg-gray-100 text-gray-900'>
            <div className="max-w-7xl mx-auto pb-20 px-5 md:px-14 lg:px-20 2xl:px-32">


                <div className="flex pt-10 items-center gap-2">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                    </span>
                    <h1 className='text-3xl '>

                        Add a new sheet request
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

                                {/* <div>
                                    <label htmlFor='slug' className='block text-sm font-medium text-gray-700'>
                                        Slug
                                    </label>
                                    <input
                                        placeholder='Enter project slug (must be unique)'
                                        type='text'
                                        id='slug'
                                        {...register('slug', { required: true })}
                                        className='mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                    />
                                    {errors.slug && <span className='text-red-500'>This field is required</span>}
                                </div> */}

                                <div>
                                    <label htmlFor='number_of_student' className='block text-sm font-medium text-gray-700'>
                                        Number of Student
                                    </label>
                                    <input
                                        placeholder='Enter number of student'
                                        type='number'
                                        defaultValue={1}
                                        max={5}
                                        min={1}
                                        id='number_of_student'
                                        {...register('number_of_student', { required: true })}
                                        className='mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                    />
                                    {errors.number_of_student && <span className='text-red-500'>This field is required</span>}
                                </div>


                                {/* select cursus */}

                                <div>
                                    <label htmlFor='cursus' className='block text-sm font-medium text-gray-700'>
                                        Select Cursus
                                    </label>
                                    <select
                                        onChange={handleSelectCursus}
                                        id='cursus'
                                        className='mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                    >
                                        <option value=''>Select Cursus</option>
                                        {cursusData.map(cursus => (
                                            <option key={cursus.id}
                                                value={cursus.cursus_id}
                                            >
                                                {cursus.cursus_name}
                                            </option>
                                        ))}
                                    </select>
                                </div>




                                <div className='sm:col-span-2'>
                                    <div className="flex justify-between items-center">
                                        <label htmlFor='guidelines' className='block text-sm font-medium text-gray-700'>
                                            Introduction
                                        </label>
                                        <button
                                            onClick={openModal}
                                            type='button' className='ml-2 bg-[#0d94b6] hover:bg-[#0d829c] text-white p-1 rounded-full transition duration-200'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                            </svg>

                                        </button>

                                    </div>
                                    <textarea
                                        rows={7}
                                        placeholder='Enter introduction text separated by a new line'
                                        id='introduction'
                                        defaultValue={defaultValues.introduction}
                                        required
                                        onChange={(e) => handleIntroduction(e)}
                                        onBlur={(e) => handleIntroduction(e)}
                                        className='mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                    ></textarea>


                                </div>

                                <div className='sm:col-span-2'>
                                    <div className="flex justify-between items-center">
                                        <label htmlFor='guidelines' className='block text-sm font-medium text-gray-700'>
                                            Guidelines
                                        </label>
                                        <button
                                            onClick={openModal}
                                            type='button' className='ml-2 bg-[#0d94b6] hover:bg-[#0d829c] text-white p-1 rounded-full transition duration-200'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                            </svg>

                                        </button>

                                    </div>
                                    <textarea
                                        rows={20}
                                        placeholder='Enter guidelines text separated by a new line'
                                        onChange={(e) => handleGuidelines(e)}
                                        onBlur={(e) => handleGuidelines(e)}
                                        defaultValue={defaultValues.guidelines}
                                        id='guidelines'
                                        required
                                        className='mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                    />


                                </div>


                                {/* Guidelines Text Editor */}

                                {/* <div>
                                    <label htmlFor='guidelines' className='block text-sm font-medium text-gray-700 pb-1'>
                                        Guidelines
                                    </label>
                                    <JoditEditor
                                        ref={guidelineEditor}
                                        value={guidelineContents}
                                        config={config}
                                        tabIndex={1}
                                        onBlur={newContent => handleGuidelinesContent(newContent)}
                                        onChange={newContent => { }}
                                    />
                                </div> */}

                                {/* Show content */}
                                {/* <div className='mt-5'>
                                    <h1 className='text-xl font-medium text-gray-700'>Guidelines Content</h1>
                                    <div className='mt-5' dangerouslySetInnerHTML={{ __html: guidelineContents }}></div>
                                </div> */}


















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



                            {/* <div className="flex flex-col p-5 lg:p-10 bg-white rounded-xl gap-5 mt-10">
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

                            </div> */}


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
                                                {...register(`subtitle.${index}`)}
                                                placeholder='Enter a subtitle (optional)'
                                                type='text'
                                                className=' block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                            />
                                        </div>

                                        {/* description */}
                                        <div>

                                            <div className="flex justify-between items-center">
                                                <label htmlFor='description' className='block text-sm text-gray-500 mt-5 mb-1'>
                                                    Detailed dscription:
                                                </label>
                                                <button
                                                    onClick={openModal}
                                                    type='button' className='ml-2 bg-[#0d94b6] hover:bg-[#0d829c] text-white p-1 rounded-full transition duration-200'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                                    </svg>

                                                </button>

                                            </div>


                                            <textarea
                                                {...register(`description.${index}`, { required: true })}
                                                rows={5}
                                                placeholder='Enter detailed description separated by a new line'
                                                className=' block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                            />

                                        </div>

                                        {/* yes_no */}
                                        <div>
                                            <label htmlFor='yes_no' className='block text-sm text-gray-500 mt-5 mb-1'>
                                                Yes/No button or slider:
                                            </label>

                                            <select
                                                {...register(`yes_no.${index}`, { required: true })}
                                                defaultValue={true}
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
                                        {
                                            numberOfBonusSections > 0 && (
                                                <button type='button' onClick={removeBonusSection} className='bg-[#666666] hover:bg-[#525252] text-white py-3 px-5 rounded-full transition duration-200'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                                    </svg>

                                                </button>
                                            )
                                        }
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
                                                {...register(`bonus_subtitle.${index}`)}
                                                placeholder='Enter a subtitle (optional)'
                                                type='text'
                                                className=' block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm'
                                            />
                                        </div>

                                        {/* description */}
                                        <div>
                                            <div className="flex justify-between items-center">
                                                <label htmlFor='bonus_description' className='block text-sm text-gray-500 mt-5 mb-1'>
                                                    Detailed description:
                                                </label>
                                                <button
                                                    onClick={openModal}
                                                    type='button' className='ml-2 bg-[#0d94b6] hover:bg-[#0d829c] text-white p-1 rounded-full transition duration-200'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                                    </svg>

                                                </button>

                                            </div>


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
                                                defaultValue={true}
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
                                            defaultValue={true}
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
                                            defaultValue={true}
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
                                            defaultValue={true}
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
                                            defaultValue={true}
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
                                            defaultValue={true}
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
                                            defaultValue={true}
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
                                            defaultValue={true}
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
                                            defaultValue={true}
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
                                            defaultValue={true}
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
                                            defaultValue={true}
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
                                            defaultValue={true}
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
                                            defaultValue={true}
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
                                    Submit Request
                                </button>
                                <div div className='mt-5'>
                                </div>

                            </div>

                        </div>
                    </form>

                </div>

                <InfoModal isOpen={isOpen}
                    closeModal={closeModal}

                />

            </div>
        </div>
    )
}

export default page