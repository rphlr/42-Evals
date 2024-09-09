'use client';

import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Hero from '@/components/homecomponents/Hero';
import Evolution from '@/components/homecomponents/Evolution';
import Contributing from '@/components/homecomponents/Contributing';
import Navigating from '@/components/homecomponents/Navigating';
import Language from '@/components/homecomponents/Language';
import Resources from '@/components/homecomponents/Resources';
import Voice from '@/components/homecomponents/Voice';
import FunnyStats from '@/components/homecomponents/FunnyStats';

const MySwal = withReactContent(Swal);

export default function Home() {
  useEffect(() => {
    MySwal.fire({
      title: 'Important Notice: Changes Coming to 42Evals',
      html: `
        <div class="text-left">
          <p class="mb-4">Hello everyone,</p>
          <p class="mb-4">It has been a joy contributing to this project for nearly two years. Unfortunately, 42 Network has decided that this site no longer aligns with their image and pedagogical goals, which I can understand. My intent was never to encourage cheating, as 42 Network may believe, but rather to help you review and prepare for your projects before the official evaluation.</p>
          <p class="mb-4"><strong>What's next for 42Evals?</strong></p>
          <p class="mb-4">The site will continue to exist, but the official evaluation sheets will no longer be available. However, each project will still have evaluation points, which will be written by me and supplemented by your input. These evaluations will no longer be based on official sources, and may sometimes be simpler or more challenging than the real ones. The goal remains the same: to help you self-evaluate your projects, but in a new, unique way.</p>
          <p class="mb-4">In addition, I plan to introduce several new tools to help you in your journey, including:</p>
          <ul class="list-disc list-inside mb-4">
            <li>An XP calculator</li>
            <li>A "Pace" tool to track your progress</li>
            <li>And more useful features designed specifically for 42 students</li>
          </ul>
          <p class="mb-4">Thank you for your support, and I hope you find these new tools helpful as you continue your learning journey!</p>
          <p>Best regards,<br/>Raphael</p>
        </div>
      `,
      icon: 'warning',
      iconColor: '#ff9800',
      confirmButtonText: 'Got it!',
      confirmButtonColor: '#4B5563',
      width: '800px',
      customClass: {
        container: 'custom-swal-container',
        popup: 'custom-swal-popup',
        // header: 'custom-swal-header',
        title: 'custom-swal-title',
        closeButton: 'custom-swal-close-button',
        htmlContainer: 'custom-swal-content',
        confirmButton: 'custom-swal-confirm-button',
      },
    });
  }, []);

  return (
    <main className='bg-gray-100 text-gray-900 min-h-screen'>
      <div className="max-w-7xl mx-auto py-20">
        <Hero />
        <Evolution />
        <Contributing />
        <Navigating />
        <Language />
        <Resources />
        <Voice />
        <FunnyStats />
      </div>
      <style jsx global>{`
        .custom-swal-container {
          z-index: 9999;
        }
        .custom-swal-popup {
          background-color: #f9fafb;
          border-radius: 10px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }
        .custom-swal-header {
          border-bottom: 1px solid #e5e7eb;
        }
        .custom-swal-title {
          color: #1f2937;
          font-size: 1.5rem;
          font-weight: bold;
          padding: 1rem;
        }
        .custom-swal-close-button {
          color: #6b7280;
        }
        .custom-swal-content {
          color: #374151;
          font-size: 1rem;
          padding: 1rem;
        }
        .custom-swal-confirm-button {
          background-color: #4B5563 !important;
          color: white;
          border-radius: 5px;
          font-weight: bold;
        }
      `}</style>
    </main>
  );
}