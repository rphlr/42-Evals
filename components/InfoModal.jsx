'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

function InfoModal({ isOpen, closeModal }) {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className="p-5">
                                        <h2 className="text-xl font-bold mb-4">Formatting Guide for Writing:</h2>

                                        <p className="mb-2">
                                            You can use the following special characters in your text to apply different formatting styles:
                                        </p>

                                        <ul className="list-disc pl-5 mb-4">
                                            <li>
                                                <span className="font-bold">New Paragraph/Point </span>: Start the text you want to make a new point (
                                                <code>- </code>).
                                                <br />
                                                <strong>Example:</strong>
                                                <br />
                                                Input: <code>- This is a new paragraph/point. </code>
                                                <br />
                                                <span className="flex items-center gap-2">
                                                    <span>Output:</span> <span className="flex items-center gap-2">
                                                        <span className="text-[#0D94B6]">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                            </svg>
                                                        </span>
                                                        This is a new paragraph/point.
                                                    </span>
                                                </span>
                                            </li>
                                            <li>
                                                <span className="font-bold">Bold Text</span>: Wrap the text you want to make bold in double asterisks (
                                                <code>**</code>).
                                                <br />
                                                <strong>Example:</strong>
                                                <br />
                                                Input: <code>This is **bold** text.</code>
                                                <br />
                                                Output: <span className="font-bold">This is bold text.</span>
                                            </li>

                                            <li className="mt-4">
                                                <span className="font-bold">Underlined Text</span>: Wrap the text you want to underline in double underscores (
                                                <code>__</code>).
                                                <br />
                                                <strong>Example:</strong>
                                                <br />
                                                Input: <code>This is __underlined__ text.</code>
                                                <br />
                                                Output: <span className="underline">This is underlined text.</span>
                                            </li>

                                            <li className="mt-4">
                                                <span className="font-bold">Code</span>: For inline code snippets, wrap the text in single backticks (
                                                <code>`</code>).
                                                <br />
                                                <strong>Example:</strong>
                                                <br />
                                                Input: <code>Here is some `code`.</code>
                                                <br />
                                                Output: <code className="bg-gray-100 p-1 rounded">Here is some code.</code>
                                            </li>

                                            <li className="mt-4">
                                                <span className="font-bold">Strikethrough Text</span>: To strike through text, wrap it in double tildes (
                                                <code>~~</code>).
                                                <br />
                                                <strong>Example:</strong>
                                                <br />
                                                Input: <code>This is ~~strikethrough~~ text.</code>
                                                <br />
                                                Output: <span className="line-through">This is strikethrough text.</span>
                                            </li>
                                        </ul>

                                        <p className="font-bold">Important Notes:</p>
                                        <ul className="list-disc pl-5">
                                            <li>
                                                Ensure you use the correct characters, especially if you are copying from external sources. Use straight
                                                quotation marks (<code>"</code>) instead of curly ones (<code>“ ”</code>), and avoid non-breaking spaces between
                                                special characters.
                                            </li>
                                            <li>
                                                The formatting symbols will not appear in the final output but will instead apply the desired style to the text
                                                they enclose.
                                            </li>
                                        </ul>

                                        {/* close button */}
                                        <div className="flex justify-end mt-5">
                                            <button
                                                onClick={closeModal}
                                                className="bg-[#0d94b6] hover:bg-[#0d829c] text-white py-2 px-5 rounded-full transition duration-200">
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default InfoModal
