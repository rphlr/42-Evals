'use client';

import React, { useEffect } from 'react';
import Hero from '@/components/homecomponents/Hero';
import Evolution from '@/components/homecomponents/Evolution';
import Contributing from '@/components/homecomponents/Contributing';
import Navigating from '@/components/homecomponents/Navigating';
import Language from '@/components/homecomponents/Language';
import Resources from '@/components/homecomponents/Resources';
import Voice from '@/components/homecomponents/Voice';
import FunnyStats from '@/components/homecomponents/FunnyStats';
import { Analytics } from "@vercel/analytics/react"

export default function Home() {

    // Add a Swal message to the page on load

    useEffect(() => {
        const Swal = require('sweetalert2');
        Swal.fire({
            title: 'Welcome to 42 Evaluation Sheets V2!',
            text: '42 Evals has been updated to a new version. Please feel free to explore and share your feedback with me (rrouille@student.42lausanne.ch)! Evaluation sheets are provided for reference only and may not reflect official evaluations with complete accuracy. There may still be some bugs, and this version might not be 100% functional yet. Due to legal requirements, I had to develop this quickly, but improvements will be made in the coming days and weeks to enhance functionality.',
            icon: 'info',
            confirmButtonText: 'Got it!',
            confirmButtonColor: '#4B5563',
            background: '#F9FAFB',
            customClass: {
                title: 'text-gray-900 text-2xl',
                content: 'text-gray-900',
                confirmButton: 'bg-gray-900 text-white',
            }
        });
    }
        , []);






    return (
        <main className='bg-gray-100 text-gray-900 min-h-screen'>
            <div className="max-w-7xl mx-auto py-20" >
                <Hero />
                <Evolution />
                <Contributing />
                <Navigating />
                <Language />
                <Resources />
                <Voice />
                <FunnyStats />
            </div>
        </main>
    );
}
