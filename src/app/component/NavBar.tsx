"use client";
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // Toggle drawer
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <nav className="bg-gray-900 text-white py-4">
            <div className="container mx-auto flex justify-between items-center px-6">
                <h1 className="text-2xl font-bold">Portfolio</h1>

                {/* Desktop Navbar (flex layout) */}
                <div className="hidden sm:flex space-x-8 items-center">
                    <Link href="/" className="hover:text-gray-400">
                        Home
                    </Link>
                    <Link href="/" className="hover:text-gray-400">
                        About
                    </Link>
                    <Link href="/" className="hover:text-gray-400">
                        Projects
                    </Link>
                    <Link href="/" className="hover:text-gray-400">
                        Contact
                    </Link>

                    <Link href="/" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                        Hire Me
                    </Link>
                </div>

                {/* Mobile Hamburger Menu */}
                <div className="sm:hidden">
                    <button onClick={toggleDrawer} className="text-white focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            <div
                className={`fixed top-0 right-0 h-full bg-gray-900 text-white w-64 transition-transform transform ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
                    } z-50 sm:hidden`}
            >
                <div className="flex justify-end p-4">
                    <button onClick={toggleDrawer} className="text-white focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="flex flex-col items-center space-y-6 mt-10">
                    <Link href="/" className="hover:text-gray-400" onClick={toggleDrawer}>
                        Home
                    </Link>
                    <Link href="/" className="hover:text-gray-400" onClick={toggleDrawer}>
                        About
                    </Link>
                    <Link href="/" className="hover:text-gray-400" onClick={toggleDrawer}>
                        Projects
                    </Link>
                    <Link href="/" className="hover:text-gray-400" onClick={toggleDrawer}>
                        Contact
                    </Link>

                    <Link href="/" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300" onClick={toggleDrawer}>
                        Hire Me
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
