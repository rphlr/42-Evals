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

export default function Home() {

    // Add a Swal message to the page on load

    useEffect(() => {
        const Swal = require('sweetalert2');
        Swal.fire({
            title: 'This is not an official 42-school site, but a student developed project',
            text: 'Evaluation sheets are for reference only, and may not reflect official evaluations with 100% accuracy.',
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
