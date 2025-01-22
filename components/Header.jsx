"use client";

import Link from "next/link";

export default function Header() {
    return (
        <div className="bg-gray-800 w-full text-white">
            <div className="max-w-7xl mx-auto flex items-center justify-center py-3 px-5 2xl:px-0">
                <Link href="/">
                    <span className="text-2xl font-bold tracking-wide">NO MORE 42 EVALS</span>
                </Link>
            </div>
        </div>
    );
}
