'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

function page() {


    // get all cursus

    const [cursusData, setCursusData] = useState([])

    useEffect(() => {
        fetch('/api/cursus')
            .then(res => res.json())
            .then(data => {
                setCursusData(data.data)
            })
    }
        , [])








    // form
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = async (data) => {
        console.log(data)

        // check unique cursus_id

        const checkCursusId = cursusData.find(cursus_evals => cursus_evals.cursus_id === data.cursus_id)
        if (checkCursusId) {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Cursus ID already exists'
            })
        }


        // Swal loading

        Swal.fire({
            title: 'Adding Cursus',
            html: 'Please wait',
            didOpen: () => {
                Swal.showLoading()
            }
        })

        const res = await fetch('/api/cursus', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const result = await res.json()
        if (result.success) {
            Swal.fire({
                icon: 'success',
                title: 'Cursus Added Successfully',
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: result.message
            })
        }


    }








    return (
        <div>

            {/* add new cursus with form */}

            <div className='bg-gray-100 text-gray-900 min-h-screen px-5 2xl:px-0'>
                <div className="max-w-7xl mx-auto pb-20 pt-10">
                    <h1 className='text-3xl text-center font-semibold'>Add New Cursus</h1>


                    {/* breadcrumps */}

                    <div className='mt-5 font-semibold bg-gray-200 px-5 py-2 rounded-lg w-[300px]'>
                        <Link href='/admin' className='text-[#0d829c]'>
                            Admin
                        </Link>
                        <span className='mx-2'>/</span>
                        <Link href='/admin/cursus' className='text-[#0d829c]'>
                            Cursus
                        </Link>
                        <span className='mx-2'>/</span>
                        <span>
                            Add Cursus
                        </span>
                    </div>





                    <div className='mt-10 px-7 py-20 bg-white rounded-2xl'>
                        <form className='w-full max-w-2xl mx-auto' onSubmit={handleSubmit(onSubmit)}>
                            <div className='flex flex-wrap -mx-3 mb-6'>
                                <div className='w-full px-3 mb-6 md:mb-0'>
                                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='cursus_name'>
                                        Cursus Name
                                    </label>
                                    <input className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' id='cursus_name' type='text' placeholder='Cursus Name' {...register('cursus_name', { required: true })} />
                                    {errors.cursus_name && <p className='text-red-500 text-xs italic'>Please fill out this field.</p>}
                                </div>
                            </div>

                            <div className='flex flex-wrap -mx-3 mb-6'>
                                <div className='w-full px-3 mb-6 md:mb-0'>
                                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='cursus_id'>
                                        Cursus ID (Unique Identifier)
                                    </label>
                                    <input className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' id='cursus_id' type='text' placeholder='cursus_id' {...register('cursus_id', { required: true })} />
                                    {errors.cursus_id && <p className='text-red-500 text-xs italic'>Please fill out this field.</p>}


                                </div>
                            </div>


                            {/* submit */}

                            <div className='flex flex-wrap -mx-3 mb-6'>
                                <div className='w-full px-3 mb-6 md:mb-0'>
                                    <button
                                        type='submit'
                                        className='bg-[#0d94b6] hover:bg-[#0d829c] text-white py-3 px-4 rounded mt-10 transition duration-200 flex justify-center gap-2 items-center w-[300px]'>

                                        Add Cursus
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page