'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import DropdownMenuComponent from './DropdownMenuComponent/page';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
    const { isAuthenticated, logout } = useAuth();
    const { push } = useRouter();

    const handleSignOut = () => {
        logout();
        push('/login');
    };

    return (
        <nav className="sticky top-0 bg-teal-900 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="cursor-pointer flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-cyan-200">NextJS</span>
                </Link>
                <button
                    data-collapse-toggle="navbar-dropdown"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-dropdown"
                    aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto flex-row" id="navbar-dropdown">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li className='cursor-pointer'>
                            <Link
                                href="/"
                                className="block py-2 px-3 text-green-400"
                                aria-current="page"
                            >Home</Link>
                        </li>
                        <li className='cursor-pointer'>
                            <Link
                                href="/about"
                                className="block py-2 px-3 text-green-400"
                            >About</Link>
                        </li>
                        <li>
                            <DropdownMenuComponent />
                        </li>
                        <li className='cursor-pointer'>
                            {isAuthenticated ?
                                <button
                                    onClick={handleSignOut}
                                    className="block py-2 px-3 text-green-400"
                                >Signout</button>
                                :
                                <Link
                                    href="/login"
                                    className="block py-2 px-3 text-green-400"
                                >Login</Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
