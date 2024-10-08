'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';
import Swal from 'sweetalert2';
function page() {

    useEffect(() => {
        // Check if the alert should be shown
        const showAlert = new URLSearchParams(window.location.search).get('unauthorized');

        if (showAlert) {
            Swal.fire({
                icon: 'error',
                title: 'Unauthorized',
                text: 'You need to be logged in to access this page.',
            });
        }
    }, []);

    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [checked, setChecked] = useState(false)

    const handleCheck = () => {
        setChecked(!checked)
    }


    // handle password visibility
    const [passwordVisible, setPasswordVisible] = useState(false)

    const handlePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible)
    }

    // 42 login
    const handle42Login = async () => {
        try {
            setIsLoading(true);

            Swal.fire({
                title: 'Connecting to 42...',
                text: 'Please wait while we redirect you.',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            const clientId = process.env.NEXT_PUBLIC_42_CLIENT_ID;
            const redirectUri = process.env.NEXT_PUBLIC_42_REDIRECT_URI;
            const authUrl = process.env.NEXT_PUBLIC_42_AUTH_URL;

            if (!clientId || !redirectUri || !authUrl) {
                throw new Error('Missing environment variables');
            }

            // Generate a random state value
            const state = Math.random().toString(36).substring(2, 15);

            // Set the state as a cookie
            document.cookie = `oauth_state=${state}; path=/; max-age=300; SameSite=Lax`;

            const url = `${authUrl}?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=public&state=${state}`;

            router.push(url);

        } catch (error) {
            console.error('Error during 42 login:', error);
            Swal.fire({
                icon: 'error',
                title: 'Login Error',
                text: 'An error occurred during login. Please try again.'
            });
        } finally {
            setIsLoading(false);
        }
    }

    interface LoginData {
        username: string;
        password: string;
    }

    const submitForm = async (data: LoginData) => {
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: `User ${result.username} created successfully`,
                });

                // Redirigez l'utilisateur ou effectuez d'autres actions ici
                router.push('/');
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: result.message,
                });
            }
        } catch (error) {
            console.error('Error during user creation:', error);
            Swal.fire({
                icon: 'error',
                title: 'Creation Error',
                text: 'An error occurred during user creation. Please try again.',
            });
        }
    };






    return (
        <div className='bg-white min-h-screen text-gray-900'>
            <div className='max-w-7xl mx-auto py-24 px-5 2xl:px-0'>


                <div className="mt-10 px-7 lg:px-10 pb-20 pt-14 rounded-xl w-full lg:w-[500px] mx-auto bg-black bg-opacity-10">
                    <h1 className='text-3xl'>User Login</h1>
                    <form onSubmit={handleSubmit(submitForm)}>
                        <div className='mt-10'>
                            <label htmlFor='username' className='block text-sm font-medium text-gray-700'>
                                Username
                            </label>
                            <input
                                type='username'
                                id='username'
                                {...register('username', { required: true })}
                                className='mt-1 block w-full px-3 py-3 border border-gray-300 shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm rounded-md outline-none'
                            />
                            {errors.username && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className='mt-5'>
                            <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                                Password
                            </label>
                            <div className="flex relative">
                                <input
                                    type={passwordVisible ? 'text' : 'password'}
                                    id='password'
                                    {...register('password', { required: true })}
                                    className='mt-1 block w-full px-3 py-3 border border-gray-300 shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm rounded-md outline-none'
                                />
                                {errors.password && <span className='text-red-500'>This field is required</span>}

                                {/* password visibility icon */}
                                <div className='absolute right-4 top-4 cursor-pointer'>
                                    {
                                        passwordVisible ?
                                            <svg
                                                onClick={handlePasswordVisibility}
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            </svg>

                                            :
                                            <svg
                                                onClick={handlePasswordVisibility}
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                            </svg>

                                    }
                                </div>
                            </div>



                        </div>

                        {/* remember me */}
                        <div className='mt-5 flex items-center justify-between'>
                            <div className='flex items-center'>
                                <input
                                    onChange={handleCheck}
                                    id='remember_me' name='remember_me' type='checkbox' className='h-4 w-4 text-sky-600 focus:ring-sky-500 border-gray-300 rounded' />
                                <label htmlFor='remember_me' className='ml-2 block text-sm text-gray-900'>
                                    Remember me
                                </label>
                            </div>

                            <div className='text-sm'>
                                <a href='#' className=' text-gray-400 hover:text-gray-800'>
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <button type='submit' className='bg-gray-700 hover:bg-gray-800 text-white py-3 px-4 rounded mt-10 transition duration-200 w-full'>
                            Login
                        </button>
                        <button type='button' onClick={handle42Login}
                            className='bg-gray-700 hover:bg-gray-800 text-white py-3 px-4 rounded mt-10 transition duration-200 w-full flex items-center justify-center'>
                            Login with <img src='/42.svg' alt='42 Logo' className='w-6 h-6 ml-2' />
                        </button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default page