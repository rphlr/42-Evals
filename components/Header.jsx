'use client'

import { useEffect, useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'


function Header() {

    const router = useRouter()


    // check login status
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {

        // check if user is logged in from local storage or session storage
        if (localStorage.getItem('user') || sessionStorage.getItem('user')) {
            setLoggedIn(true)
        }

        if (localStorage.getItem('admin') || sessionStorage.getItem('admin')) {
            setLoggedIn(true)
        }

    }, [])


    // Handle Logout

    const handleLogout = () => {
        // remove user from local storage
        localStorage.removeItem('user')
        sessionStorage.removeItem('user')

        // remove admin from local storage
        localStorage.removeItem('admin')
        sessionStorage.removeItem('admin')

        // router.push('/')
        router.push('/')


        Swal.fire({
            title: 'Logged Out',
            text: 'You have been logged out successfully',
            icon: 'success',
            confirmButtonText: 'Close'
        })

        window.location.reload()


    }


    // Handle Login

    const handleLogin = () => {
        router.push('/login')
    }










    return (
        <div className=' bg-gray-800 w-full text-white'>
            <div className='max-w-7xl mx-auto flex items-center justify-between py-3 px-5 2xl:px-0'>
                <Link href='/'>
                    <img src='/42_evals.png' alt='Logo' className='h-[36px]' />
                </Link>


                <Menu>
                    <MenuButton>
                        <div className=' cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                            </svg>
                        </div>
                    </MenuButton>
                    <MenuItems
                        transition
                        anchor="bottom end"
                        className="w-52 origin-top-right rounded-xl border border-sky-500 border-opacity-20 bg-gray-700 bg-opacity-800 p-2 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                    >
                        {/* <MenuItem>
                            <Link href='/admin' className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10'>
                                <button className="">
                                    Admin Panel
                                </button>
                            </Link>
                        </MenuItem> */}
                        <MenuItem>
                            <Link href='/sheets' className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10'>
                                <button className="">
                                    Evaluation Sheets
                                </button>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link
                                target='_blank'
                                href="https://github.com/rphlr/42-Evals"
                                className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10' >
                                <button className="">
                                    Give this repo a star
                                </button>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link
                                target='_blank'
                                href="https://github.com/rphlr"
                                className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10' >
                                <button className="">
                                    Follow me on GitHub
                                </button>
                            </Link>
                        </MenuItem>
                        <MenuItem>

                            <Link
                                target='_blank'
                                href="https://www.linkedin.com/in/rphlr"
                                className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10' >
                                <button className="">
                                    Add me on LinkedIn
                                </button>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href='/privacy'
                                className='group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10' >
                                <button className="">
                                    Privacy Policy
                                </button>
                            </Link>
                        </MenuItem>
                        {
                            loggedIn ? (
                                <MenuItem>
                                    <div
                                        onClick={handleLogout}
                                    >
                                        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                            Logout
                                        </button>
                                    </div>


                                </MenuItem>
                            ) : (
                                <MenuItem>
                                    <div
                                        onClick={handleLogin}
                                    >
                                        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                            Login
                                        </button>
                                    </div>
                                </MenuItem>
                            )
                        }
                    </MenuItems>
                </Menu>
            </div>
        </div>
    )
}

export default Header