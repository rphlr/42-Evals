import React from 'react'

function FunnyStats() {
    return (
        <div className='bg-white rounded-lg mt-5'>
            <div className='max-w-6xl mx-auto py-14 px-5 2xl:px-14'>
                <div className=''>
                    <h1 className='text-2xl lg:text-3xl font-bold'>Funny Stats 📊</h1>
                    <p className=' pt-2 text-gray-600 text-center text-sm font-bold'>
                        Last stargazer:
                    </p>
                    <div className="flex justify-center items-center">
                        <img src="/110629446.png" alt="2020rshah's Blue Github Chart" />
                    </div>

                    <p className=' pt-2 text-gray-600 text-center'>
                        Thanks to
                        <a
                            href=" https://github.com/LipschitzIsSoEasy"
                            target="_blank"
                            className='text-[#0D94B6] hover:underline'
                        > LipschitzIsSoEasy </a>
                        for starring the repository! 🎉
                    </p>
                    <p className=' pt-2 text-gray-600 font-bold '>
                        Star Count: <span className='text-[#0D94B6] font-bold'>741</span> 🌟
                    </p>
                    <p className=' pt-2 text-gray-600 font-bold '>
                        Updates occur hourly. Last update : <span className=' font-normal'> 08.08.2024, 20:12:45 (CET)</span>
                    </p>
                    <img src="/svg.svg" className='mt-5' alt="2020rshah's Blue Github Chart" />
                    <p className=' pt-2 text-gray-600 '>
                        More stats are coming soon! 🤖
                    </p>
                    <hr className='my-5' />
                    <p className=' pt-2 text-gray-600 '>
                        Remember to give a star ⭐ to my repository if it helps you navigate the challenges of 42 School projects. Your support amplifies my reach and aids fellow students in finding this repository with ease. Happy coding, and may your evaluations be ever in your favor! 🚀
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FunnyStats