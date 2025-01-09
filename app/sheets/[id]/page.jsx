'use client'
import { useEffect, useState } from 'react'
import LoadingSpinner from '../../../components/LoadingSpinner'
import Link from 'next/link'
import React from 'react'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'
export const dynamic = 'force-dynamic'

function page({ params }) {

    const router = useRouter();

        const [isLogged, setIsLogged] = useState(false)

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

    const sheetId = params.id
    const [sheetData, setSheetData] = useState({})
    const [loadingSheet, setLoadingSheet] = useState(true)

    useEffect(() => {
        fetch(`/api/sheet/${sheetId}`)
            .then(res => res.json())
            .then(data => {
                setSheetData(data.data)
                setLoadingSheet(false)
            })
    }, [])


    // get all mandatory sections

    const [mandatorySections, setMandatorySections] = useState([])
    const [loadingMandatorySections, setLoadingMandatorySections] = useState(true)

    useEffect(() => {
        fetch(`/api/mandatorySection/${sheetId}`)
            .then(res => res.json())
            .then(data => {
                setMandatorySections((
                    data.data.filter((section) => {
                        if (section.title !== 'null') {
                            return true
                        } else {
                            return false
                        }
                    })
                ))
                setLoadingMandatorySections(false)
            })
    }, [])


    // get all bonus sections

    const [bonusSections, setBonusSections] = useState([])
    const [loadingBonusSections, setLoadingBonusSections] = useState(true)

    useEffect(() => {
        fetch(`/api/bonusSection/${sheetId}`)
            .then(res => res.json())
            .then(data => {
                setBonusSections(
                    data.data.filter((section) => {
                        if (section.title !== 'null') {
                            return true
                        } else {
                            return false
                        }
                    })

                )
                setLoadingBonusSections(false)
            })
    }, [])




    // get all grading options

    const [gradingOptions, setGradingOptions] = useState([])
    const [loadingGradingOptions, setLoadingGradingOptions] = useState(true)

    useEffect(() => {
        fetch(`/api/gradingOption/${sheetId}`)
            .then(res => res.json())
            .then(data => {
                setGradingOptions(data.data)
                setLoadingGradingOptions(false)
            })
    }, [])


    // destructuring the grading options

    //   ok
    //   outstanding
    //   empty_work
    //   incomplete_work
    //   invalid_compilation
    //   norme
    //   cheat
    //   crash
    //   concerning_situations
    //   leaks
    //   forbidden_functions
    //   cannot_support

    // const [ok, outstanding, empty_work, incomplete_work, invalid_compilation, norme, cheat, crash, concerning_situations, leaks, forbidden_functions, cannot_support] = gradingOptions




    // color state for all grading options buttons

    const greenColor = 'bg-green-100 text-green-500 hover:bg-green-500 hover:text-white transition duration-200  py-3 px-10 rounded-lg mb-3 flex gap-2 items-center';
    const redColor = 'bg-red-50 text-red-500 hover:bg-red-500 transition duration-200 hover:text-white transition duration-200  py-3 px-10 rounded-lg mb-3 flex gap-2 items-center';

    const clickedGreenColor = 'bg-green-500 text-white  py-3 px-10 rounded-lg mb-3 flex gap-2 items-center';
    const clickedRedColor = 'bg-red-500 text-white  py-3 px-10 rounded-lg mb-3 flex gap-2 items-center';

    const [okColor, setOkColor] = useState(greenColor)
    const [outstandingColor, setOutstandingColor] = useState(greenColor)
    const [emptyWorkColor, setEmptyWorkColor] = useState(redColor)
    const [incompleteWorkColor, setIncompleteWorkColor] = useState(redColor)
    const [invalidCompilationColor, setInvalidCompilationColor] = useState(redColor)
    const [normeColor, setNormeColor] = useState(redColor)
    const [cheatColor, setCheatColor] = useState(redColor)
    const [crashColor, setCrashColor] = useState(redColor)
    const [concerningSituationsColor, setConcerningSituationsColor] = useState(redColor)
    const [leaksColor, setLeaksColor] = useState(redColor)
    const [forbiddenFunctionsColor, setForbiddenFunctionsColor] = useState(redColor)
    const [cannotSupportColor, setCannotSupportColor] = useState(redColor)

    // handle the color change of the buttons on click


    const setAllColorToDefault = () => {
        setOkColor(greenColor)
        setOutstandingColor(greenColor)
        setEmptyWorkColor(redColor)
        setIncompleteWorkColor(redColor)
        setInvalidCompilationColor(redColor)
        setNormeColor(redColor)
        setCheatColor(redColor)
        setCrashColor(redColor)
        setConcerningSituationsColor(redColor)
        setLeaksColor(redColor)
        setForbiddenFunctionsColor(redColor)
        setCannotSupportColor(redColor)
    }


    const handleOkColor = () => {
        handleGradingOptions()
        if (okColor === greenColor) {
            setAllColorToDefault()
            setOkColor(clickedGreenColor)
        } else {
            setOkColor(greenColor)
        }
    }

    const handleOutstandingColor = () => {
        handleGradingOptions()
        if (outstandingColor === greenColor) {
            setAllColorToDefault()
            setOutstandingColor(clickedGreenColor)
        } else {
            setOutstandingColor(greenColor)
        }
    }

    const handleEmptyWorkColor = () => {
        handleGradingOptions()
        if (emptyWorkColor === redColor) {
            setAllColorToDefault()
            setEmptyWorkColor(clickedRedColor)
        } else {
            setEmptyWorkColor(redColor)
        }
    }

    const handleIncompleteWorkColor = () => {
        handleGradingOptions()
        if (incompleteWorkColor === redColor) {
            setAllColorToDefault()
            setIncompleteWorkColor(clickedRedColor)
        } else {
            setIncompleteWorkColor(redColor)
        }
    }

    const handleInvalidCompilationColor = () => {
        handleGradingOptions()
        if (invalidCompilationColor === redColor) {
            setAllColorToDefault()
            setInvalidCompilationColor(clickedRedColor)
        } else {
            setInvalidCompilationColor(redColor)
        }
    }

    const handleNormeColor = () => {
        handleGradingOptions()
        if (normeColor === redColor) {
            setAllColorToDefault()
            setNormeColor(clickedRedColor)
        } else {
            setNormeColor(redColor)
        }

    }

    const handleCheatColor = () => {
        handleGradingOptions()
        if (cheatColor === redColor) {
            setAllColorToDefault()
            setCheatColor(clickedRedColor)
        } else {
            setCheatColor(redColor)
        }
    }

    const handleCrashColor = () => {
        handleGradingOptions()
        if (crashColor === redColor) {
            setAllColorToDefault()
            setCrashColor(clickedRedColor)
        } else {
            setCrashColor(redColor)
        }
    }

    const handleConcerningSituationsColor = () => {
        handleGradingOptions()
        if (concerningSituationsColor === redColor) {
            setAllColorToDefault()
            setConcerningSituationsColor(clickedRedColor)
        } else {
            setConcerningSituationsColor(redColor)
        }
    }

    const handleLeaksColor = () => {
        handleGradingOptions()
        if (leaksColor === redColor) {
            setAllColorToDefault()
            setLeaksColor(clickedRedColor)
        } else {
            setLeaksColor(redColor)
        }
    }

    const handleForbiddenFunctionsColor = () => {
        handleGradingOptions()
        if (forbiddenFunctionsColor === redColor) {
            setAllColorToDefault()
            setForbiddenFunctionsColor(clickedRedColor)
        } else {
            setForbiddenFunctionsColor(redColor)
        }

    }

    const handleCannotSupportColor = () => {
        handleGradingOptions()
        if (cannotSupportColor === redColor) {
            setAllColorToDefault()
            setCannotSupportColor(clickedRedColor)
        } else {
            setCannotSupportColor(redColor)
        }
    }


    // handle back to top button active after scrolling 200px

    const [showBackToTop, setShowBackToTop] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setShowBackToTop(true)
            } else {
                setShowBackToTop(false)
            }
        })
    }, [])

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    const handleBackToAllProjects = () => {
        router.push('/sheets')
    }

    const initialYesColor = 'bg-green-100 text-green-600 hover:bg-green-500 hover:text-white transition duration-200  py-3 px-14 rounded-lg mb-3 flex gap-2 items-center';
    const initialNoColor = 'bg-red-50 text-red-600 hover:bg-red-500 transition duration-200 hover:text-white transition duration-200  py-3 px-14 rounded-lg mb-3 flex gap-2 items-center';


    const clickedYesColor = 'bg-green-500 text-white  py-3 px-14 rounded-lg mb-3 flex gap-2 items-center';
    const clickedNoColor = 'bg-red-500 text-white  py-3 px-14 rounded-lg mb-3 flex gap-2 items-center';



    // color state handling for yes no buttons each section based on index of the section

    const [yesColor, setYesColor] = useState([])
    const [noColor, setNoColor] = useState([])

    const handleYesColor = (index) => {
        let temp = [...yesColor]
        let temp2 = [...noColor]

        if (temp[index] === initialYesColor) {
            temp[index] = clickedYesColor
            temp2[index] = initialNoColor
        } else {
            temp[index] = initialYesColor
        }

        setYesColor(temp)
        setNoColor(temp2)
    }

    const handleNoColor = (index) => {
        let temp = [...noColor]
        let temp2 = [...yesColor]

        if (temp[index] === initialNoColor) {
            temp[index] = clickedNoColor
            temp2[index] = initialYesColor
        } else {
            temp[index] = initialNoColor
        }

        setNoColor(temp)
        setYesColor(temp2)
    }

    // same for bonus sections

    const [yesColorBonus, setYesColorBonus] = useState([])
    const [noColorBonus, setNoColorBonus] = useState([])

    const handleYesColorBonus = (index) => {
        let temp = [...yesColorBonus]
        let temp2 = [...noColorBonus]

        if (temp[index] === initialYesColor) {
            temp[index] = clickedYesColor
            temp2[index] = initialNoColor
        }

        setYesColorBonus(temp)
        setNoColorBonus(temp2)
    }

    const handleNoColorBonus = (index) => {
        let temp = [...noColorBonus]
        let temp2 = [...yesColorBonus]

        if (temp[index] === initialNoColor) {
            temp[index] = clickedNoColor
            temp2[index] = initialYesColor
        } else {
            temp[index] = initialNoColor
        }

        setNoColorBonus(temp)
        setYesColorBonus(temp2)
    }


    useEffect(() => {

        // a defalut click on all yes no buttons
        let temp = []
        let temp2 = []

        for (let i = 0; i < bonusSections.length; i++) {
            temp.push(initialYesColor)
            temp2.push(initialNoColor)
        }

        setYesColorBonus(temp)
        setNoColorBonus(temp2)

    }, [bonusSections])


    useEffect(() => {

        // a defalut click on all yes no buttons
        let temp = []
        let temp2 = []

        for (let i = 0; i < mandatorySections.length; i++) {
            temp.push(initialYesColor)
            temp2.push(initialNoColor)
        }

        setYesColor(temp)
        setNoColor(temp2)

    }, [mandatorySections])

    // Get all the slider values for each section of mandatorySections and bonusSections
    // correction: not each section but for each section with a slider not yes no buttons

    const [mandatorySliderValues, setMandatorySliderValues] = useState([])
    const [bonusSliderValues, setBonusSliderValues] = useState([])

    console.log("mandatory slider values", mandatorySliderValues)
    // console.log("bonus slider values", bonusSliderValues)


    const handleMandatorySliderValues = (index, value) => {
        console.log("index", index)
        console.log("value", value)

        //get indexes of the mandatory sections with sliders only not yes no buttons

        const mandatorySectionsWithSlidersIndexes = mandatorySections.map((section, index) => {
            if (section.yes_no === false) {
                return index
            }
        }).filter((index) => {
            if (index !== undefined) {
                return true
            } else {
                return false
            }
        })


        console.log("mandatory sections with sliders indexes", mandatorySectionsWithSlidersIndexes)






        let temp = [...mandatorySliderValues]

        console.log("temp", temp)

        // temp[index] = parseInt(value)
        // setMandatorySliderValues(temp)

        for (let i = 0; i < mandatorySectionsWithSlidersIndexes.length; i++) {
            if (index === mandatorySectionsWithSlidersIndexes[i]) {
                temp[i] = parseInt(value)
                setMandatorySliderValues(temp)
            }
        }



    }

    const handleBonusSliderValues = (index, value) => {
        let temp = [...bonusSliderValues]
        temp[index] = parseInt(value)
        setBonusSliderValues(temp)
    }

    useEffect(() => {
        let temp = []
        let temp2 = []

        // for mandatory sections with sliders only not yes no buttons

        const mandatorySectionsWithSliders = mandatorySections.filter((section) => {
            if (section.yes_no === false) {
                return true
            } else {
                return false
            }
        })

        for (let i = 0; i < mandatorySectionsWithSliders.length; i++) {
            temp.push(0)
        }

        setMandatorySliderValues(temp)

        // for bonus sections with sliders only not yes no buttons

        const bonusSectionsWithSliders = bonusSections.filter((section) => {
            if (section.yes_no === false) {
                return true
            } else {
                return false
            }
        })

        for (let i = 0; i < bonusSectionsWithSliders.length; i++) {
            temp2.push(0)
        }

        setBonusSliderValues(temp2)

    }, [mandatorySections, bonusSections])


    // Points calculation for each mandatorySections and bonusSections

    const [points, setPoints] = useState(0)
    const [bonusPoints, setBonusPoints] = useState(0)


    console.log("points", points)
    console.log("bonus points", bonusPoints)

    const calculatePoints = () => {
        console.log("clicked for points calculation")
        let points = 0
        let bonusPoints = 0

        // calculate points for mandatory sections yes no buttons


        for (let i = 0; i < mandatorySections.length; i++) {
            if (yesColor[i] === clickedYesColor) {
                // 100/all questions X numbers of Yes answers.
                points += 100 / mandatorySections.length
            }

            // if (noColor[i] === clickedNoColor) {
            //     if (points > 0) {
            //         // only substract point for that section as I can see you are substracting 100/all questions X numbers of No answers.
            //         // but it should be 100/all questions X numbers of No answers.
            //         points -= 100 / mandatorySections.length

            //     }
            // }

        }


        // calculate points for bonus sections yes no buttons


        if (bonusSections.length > 0) {
            for (let i = 0; i < bonusSections.length; i++) {
                if (yesColorBonus[i] === clickedYesColor) {
                    // add bonus point up to 25 (total 125) for each bonus section divided by the number of bonus sections
                    // if points are less than 100 then dont add bonus points
                    bonusPoints += 25 / bonusSections.length
                }

                // if (noColorBonus[i] === clickedNoColor) {
                //     // substract bonus point up to 25 (total 125) for each bonus section divided by the number of bonus sections
                //     // if points are less than 100 then dont substract bonus points

                //     points -= 25 / bonusSections.length
                // }

            }
        }

        // also calculate points for each slider value from 0-100 for mandatory sections and bonus sections and add them to the points variable in real time as the slider is moved to any value


        // for mandatory sections slider values

        for (let i = 0; i < mandatorySliderValues.length; i++) {
            // point calculation
            // maximum point for each section 100 / mandatorySections.length
            // if the slider value is 0 then no point
            // if the slider value is 20 then 20% of the maximum point
            // if the slider value is 40 then 40% of the maximum point
            // if the slider value is 60 then 60% of the maximum point
            // if the slider value is 80 then 80% of the maximum point
            // if the slider value is 100 then 100% of the maximum point

            const maxPoint = 100 / mandatorySections.length

            points += (maxPoint * mandatorySliderValues[i]) / 100


        }

        // for bonus sections slider values

        for (let i = 0; i < bonusSliderValues.length; i++) {
            // point calculation
            // maximum point for each section 25 / bonusSections.length
            // if the slider value is 0 then no point
            // if the slider value is 20 then 20% of the maximum point
            // if the slider value is 40 then 40% of the maximum point
            // if the slider value is 60 then 60% of the maximum point
            // if the slider value is 80 then 80% of the maximum point
            // if the slider value is 100 then 100% of the maximum point

            const maxPoint = 25 / bonusSections.length

            bonusPoints += (maxPoint * bonusSliderValues[i]) / 100

        }

        // set point with 1 decimal place only if there is a decimal point in the number otherwise no decimal point needed

        if (points % 1 !== 0) {
            setPoints(points.toFixed(1))
        } else {
            setPoints(points)
        }

        if (bonusPoints % 1 !== 0) {
            setBonusPoints(bonusPoints.toFixed(1))
        } else {
            setBonusPoints(bonusPoints)
        }

    }



    // when any grading option button is clicked then calculate points to show a Swal alert with the points

    useEffect(() => {
        calculatePoints()
    }, [okColor, outstandingColor, emptyWorkColor, incompleteWorkColor, invalidCompilationColor, normeColor, cheatColor, crashColor, concerningSituationsColor, leaksColor, forbiddenFunctionsColor, cannotSupportColor])

    const handleGradingOptions = () => {

        if (points >= 100) {
            Swal.fire({
                position: 'top-end',
                title: 'Congratulations',
                text: `What a great student, your note is ${parseFloat(points) + parseFloat(bonusPoints)} points out of 100 with bonus points`,
                icon: 'success',
                showConfirmButton: false,
                timer: 5000
            })
        } else {
            Swal.fire({
                position: 'top-end',
                title: 'Just a little more effort needed',
                text: `You have earned ${parseFloat(points)} points out of 100`,
                icon: 'info',
                showConfirmButton: false,
                timer: 5000
            })
        }

    }


















    // Function to normalize the text by replacing special quotes or spaces
    const normalizeText = (text) => {
        // Ensure text is a string
        if (typeof text !== 'string') {
            return String(text);
        }
        return text
            .replace(/‘|’/g, "'")  // normalize single quotes
            .replace(/“|”/g, '"')  // normalize double quotes
            .replace(/\u00A0/g, ' '); // replace non-breaking spaces with regular spaces
    };

    const formatText = (text) => {
        // Ensure the text is normalized
        text = normalizeText(text);

        // Regular expression to match bold, underline, code, strikethrough, and new line with icon
        const regex = /(\*\*[^\*]+\*\*|__[^\_]+__|`[^`]+`|~~[^~]+~~|- )/g;

        return text.split(regex).map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return (
                    <span key={index} className="font-bold">
                        {part.slice(2, -2)} {/* Removes ** */}
                    </span>
                );
            }
            if (part.startsWith('__') && part.endsWith('__')) {
                return (
                    <span key={index} className="underline">
                        {part.slice(2, -2)} {/* Removes __ */}
                    </span>
                );
            }
            if (part.startsWith('`') && part.endsWith('`')) {
                // Trim any accidental leading or trailing spaces inside the backticks
                return (
                    <code key={index} className="bg-gray-100 p-1 rounded">
                        {part.slice(1, -1)}
                    </code>
                );
            }
            if (part.startsWith('~~') && part.endsWith('~~')) {
                return (
                    <span key={index} className="line-through">
                        {part.slice(2, -2)} {/* Removes ~~ */}
                    </span>
                );
            }
            if (part === '- ') {
                return (
                    <span key={index} className="inline-flex items-center gap-2  align-middle">
                        <span className="text-[#0D94B6] mr-2  align-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                            </svg>
                        </span>
                    </span>
                );
            }
            return <span key={index}>{part}</span>; // plain text
        });
    };


    // Calculate points on every change of the color buttons real time

    useEffect(() => {
        calculatePoints()
    }, [yesColor, noColor, yesColorBonus, noColorBonus, mandatorySliderValues, bonusSliderValues])





    if (loadingSheet || !isLogged || loadingMandatorySections || loadingGradingOptions || loadingBonusSections) {
        return (
            <LoadingSpinner title='Evaluation Sheet' />
        )
    }












    return (
        <div className='bg-gray-100 text-gray-900 min-h-screen'>

            {/* floating fixed point display */}

            <div className='fixed top-16 right-5 bg-white p-10 rounded-lg shadow-lg'>
                <h1 className='text-2xl font-bold'>
                    Points earned
                </h1>
                <p className='text-3xl font-bold text-sky-500'>
                    {
                        points >= 100 ?
                            <span className='text-green-500'>
                                {
                                    parseFloat(points) + parseFloat(bonusPoints)
                                }
                            </span> :
                            <span className='text-red-500'>
                                {
                                    parseFloat(points)
                                }
                            </span>
                    }
                </p>
            </div>



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
                        {sheetData.introduction ? sheetData.introduction.map((intro, index) => (
                            <p className="pb-5" key={index}>
                                {formatText(intro)}
                            </p>
                        )) : ''}
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

                    <div className="pt-5">
                        {sheetData.guidelines ? sheetData.guidelines.map((guideline, index) => (
                            <p className="pb-5" key={index}>
                                {formatText(guideline)}
                            </p>
                        )) : ''}
                    </div>
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

                                        attachment.slice(attachment.indexOf(',') + 1).includes('http') ? attachment.slice(attachment.indexOf(',') + 1) : null
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


                {/* MANDATORY SECTIONS */}

                <div className='mt-10 bg-white p-5 lg:p-10 rounded-lg'>
                    <h2 className='text-2xl font-bold'>
                        Mandatory Part
                    </h2>

                    <div className='pt-5'>
                        {
                            mandatorySections.map((section, index) => (
                                <div className='bg-white p-5 rounded-lg mb-5' key={index}>
                                    <h3 className='text-xl font-bold pb-3'>
                                        {section.title}
                                    </h3>
                                    <p className='pt-3 pb-5'>
                                        {section.subtitle}
                                    </p>
                                    <p className='pt-2 pb-5'>
                                        {

                                            section.description.split('\n').map((line, index) => (
                                                <p key={index} className='pb-5'>
                                                    {formatText(line)}
                                                </p>
                                            ))
                                        }
                                    </p>

                                    {/* if yes_no is true then an yes no button, if false then a slider with value 1-5 */}
                                    {
                                        section.yes_no ? (
                                            <div className='flex gap-1 items-center w-full'>
                                                <button
                                                    onClick={() => handleYesColor(index)}
                                                    className={
                                                        yesColor[index] ? yesColor[index] : initialYesColor
                                                    }>
                                                    Yes
                                                </button>
                                                <button
                                                    onClick={() => handleNoColor(index)}
                                                    className={
                                                        noColor[index] ? noColor[index] : initialNoColor
                                                    }>
                                                    No
                                                </button>
                                            </div>
                                        ) : (
                                            <div className='w-full lg:w-1/2 mx-auto mt-7'>
                                                <p className='text-sm font-medium text-center pb-2'>
                                                    Rate it from 0 (failed) through 5 (excellent)
                                                </p>
                                                <input
                                                    onChange={(e) => handleMandatorySliderValues(index, e.target.value)}
                                                    type="range" defaultValue={0} min={0} max={100} className="range range-info" step={20} />
                                                <div className="flex w-full justify-between px-2 text-xs">
                                                    <span>0</span>
                                                    <span>1</span>
                                                    <span>2</span>
                                                    <span>3</span>
                                                    <span>4</span>
                                                    <span>5</span>
                                                </div>
                                            </div>
                                        )
                                    }


                                </div>
                            ))


                        }
                    </div>
                </div>



                {/* BONUS SECTIONS */}

                {
                    bonusSections.length > 0 ? (
                        <div className='mt-10 bg-white p-5 lg:p-10 rounded-lg'>
                            <h2 className='text-2xl font-bold'>
                                Bonus Part
                            </h2>

                            <div className='pt-5'>
                                {
                                    bonusSections.map((section, index) => (
                                        <div className='bg-white p-5 rounded-lg mb-5' key={index}>
                                            <h3 className='text-xl font-bold pb-3'>
                                                {section.title}
                                            </h3>

                                            <p className='pt-3 pb-5'>
                                                {section.subtitle}
                                            </p>

                                            <p className='pt-2 pb-5'>
                                                {
                                                    section.description.split('\n').map((line, index) => (
                                                        <p key={index} className='pb-5'>
                                                            {formatText(line)}
                                                        </p>
                                                    ))
                                                }
                                            </p>

                                            {/* if yes_no is true then an yes no button, if false then a slider with value 1-5 */}
                                            {
                                                section.yes_no ? (
                                                    <div className='flex gap-1 items-center w-full'>
                                                        <button
                                                            onClick={() => handleYesColorBonus(index)}
                                                            className={
                                                                yesColorBonus[index] ? yesColorBonus[index] : initialYesColor
                                                            }>
                                                            Yes
                                                        </button>
                                                        <button
                                                            onClick={() => handleNoColorBonus(index)}
                                                            className={
                                                                noColorBonus[index] ? noColorBonus[index] : initialNoColor
                                                            }>
                                                            No
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <div className='w-full lg:w-1/2 mx-auto mt-7'>
                                                        <p className='text-sm font-medium text-center pb-2'>
                                                            Rate it from 0 (failed) through 5 (excellent)
                                                        </p>
                                                        <input
                                                            onChange={(e) => handleBonusSliderValues(index, e.target.value)}
                                                            type="range" defaultValue={0} min={0} max={100} className="range range-info" step={20} />
                                                        <div className="flex w-full justify-between px-2 text-xs">
                                                            <span>0</span>
                                                            <span>1</span>
                                                            <span>2</span>
                                                            <span>3</span>
                                                            <span>4</span>
                                                            <span>5</span>
                                                        </div>
                                                    </div>
                                                )
                                            }


                                        </div>
                                    ))


                                }
                            </div>
                        </div>
                    ) : null
                }


                {/* GRADING OPTIONS */}
                {/*  we need specific button based on specific boolean value */}

                <div className='mt-10 bg-white p-5 lg:p-10 rounded-lg'>
                    <h2 className='text-2xl font-bold'>
                        Ratings
                    </h2>

                    <div className='pt-10 flex flex-wrap gap-2'>

                        <div>
                            {
                                gradingOptions[0]?.ok ? (
                                    <button
                                        onClick={handleOkColor}
                                        className={okColor}>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>

                                        </span>
                                        OK
                                    </button>
                                ) : null

                            }
                        </div>

                        <div>
                            {
                                gradingOptions[0]?.outstanding ? (
                                    <button
                                        onClick={handleOutstandingColor}
                                        className={outstandingColor}>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                            </svg>


                                        </span>
                                        Outstanding
                                    </button>
                                ) : null

                            }
                        </div>

                        <div>
                            {
                                gradingOptions[0]?.empty_work ? (
                                    <button
                                        onClick={handleEmptyWorkColor}
                                        className={emptyWorkColor}>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                                            </svg>


                                        </span>
                                        Empty Work
                                    </button>
                                ) : null

                            }
                        </div>

                        <div>
                            {
                                gradingOptions[0]?.incomplete_work ? (
                                    <button
                                        onClick={handleIncompleteWorkColor}
                                        className={incompleteWorkColor}>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54" />
                                            </svg>


                                        </span>
                                        Incomplete Work
                                    </button>
                                ) : null
                            }
                        </div>

                        <div>
                            {
                                gradingOptions[0]?.invalid_compilation ? (
                                    <button
                                        onClick={handleInvalidCompilationColor}
                                        className={invalidCompilationColor}>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
                                            </svg>


                                        </span>
                                        Invalid Compilation
                                    </button>
                                ) : null
                            }
                        </div>

                        <div>
                            {
                                gradingOptions[0]?.norme ? (
                                    <button
                                        onClick={handleNormeColor}
                                        className={normeColor}>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                            </svg>


                                        </span>
                                        Norme
                                    </button>
                                ) : null
                            }
                        </div>

                        <div>
                            {
                                gradingOptions[0]?.cheat ? (
                                    <button
                                        onClick={handleCheatColor}
                                        className={cheatColor}>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                            </svg>


                                        </span>
                                        Cheat
                                    </button>
                                ) : null
                            }
                        </div>

                        <div>
                            {
                                gradingOptions[0]?.crash ? (
                                    <button
                                        onClick={handleCrashColor}
                                        className={crashColor}>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
                                            </svg>


                                        </span>
                                        Crash
                                    </button>
                                ) : null
                            }
                        </div>

                        <div>
                            {
                                gradingOptions[0]?.concerning_situations ? (
                                    <button
                                        onClick={handleConcerningSituationsColor}
                                        className={concerningSituationsColor}>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                            </svg>


                                        </span>
                                        Concerning Situations
                                    </button>
                                ) : null
                            }
                        </div>

                        <div>
                            {
                                gradingOptions[0]?.leaks ? (
                                    <button
                                        onClick={handleLeaksColor}
                                        className={leaksColor}>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.412 15.655 9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457 3 3m5.457 5.457 7.086 7.086m0 0L21 21" />
                                            </svg>


                                        </span>
                                        Leaks
                                    </button>
                                ) : null
                            }
                        </div>
                        <div>
                            {
                                gradingOptions[0]?.forbidden_functions ? (
                                    <button
                                        onClick={handleForbiddenFunctionsColor}
                                        className={forbiddenFunctionsColor}>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
                                            </svg>


                                        </span>
                                        Forbidden Functions
                                    </button>
                                ) : null
                            }
                        </div>

                        <div>
                            {

                                gradingOptions[0]?.cannot_support ? (
                                    <button
                                        onClick={handleCannotSupportColor}
                                        className={cannotSupportColor} >
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                            </svg>


                                        </span>
                                        Cannot Support/Explain code
                                    </button>
                                ) : null
                            }
                        </div>





                    </div>

                </div>



                {
                    showBackToTop ? (
                        <div className="fixed bottom-0 right-0 p-4">
                            <button
                                onClick={scrollToTop}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    ) : null
                }


                {/* back to all project button fixed at the top left */}

                {
                    showBackToTop ? (
                        <div className="fixed top-0 left-0 p-4">
                            <button
                                onClick={handleBackToAllProjects}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    ) : null
                }




            </div>
        </div>
    )
}

export default page
