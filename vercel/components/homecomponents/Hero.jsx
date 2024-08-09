import Link from 'next/link'
import React from 'react'

function Hero() {
    return (
        <div className='bg-white rounded-lg'>
            <div className='max-w-6xl mx-auto py-20 px-5 2xl:px-0'>
                <div className=' text-center'>
                    <h1 className='text-3xl lg:text-4xl font-bold'>42 Evaluation Sheets Hub 🎯</h1>
                    <p className=' pt-2 text-gray-600'>Welcome to the heart of self-evaluation for 42 School projects! 📝</p>
                    <Link href='/sheets'>
                        <button className='bg-sky-600 mt-7 px-5 py-2 rounded-md text-white'>Get Started</button>
                    </Link>
                </div>
                <div className='px-5 lg:px-14 mx-auto mt-7'>
                    <p className='text-lg pt-5 text-gray-600'>Whether you're gearing up for a peer-evaluation or refining your code masterpiece, these sheets offer a sneak peek into the evaluation process, setting you up for success. 🌟</p>
                    <p className='text-lg pt-5 text-gray-600'>Dive into my meticulously curated evaluation sheets, sourced directly from the official 42 School, and fine-tune your projects to ace that evaluation. 42-Evals Web Page - your digital companion for project assessments, updated regularly for seamless access. 🖥️✨</p>
                    <p className='text-lg pt-5 text-gray-600'> <span className='text-sky-600 font-bold'>NEW !</span> You can now see the stats of the repository here. 📊</p>

                </div>
            </div>
        </div>
    )
}

export default Hero