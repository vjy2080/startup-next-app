'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import DropdownMenuComponent from './DropdownMenuComponent/page';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Logo from './Logo';
import Profile from '../profile/page';
import { useSearch } from '@/context/SearchContext';


const Navbar = () => {
    const { isAuthenticated, logout } = useAuth();
    const { searchQuery, setSearchQuery } = useSearch();
    const { push } = useRouter();

    const handleSignOut = () => {
        logout();
        push('/login');
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    return (
        <nav className="sticky top-0 bg-teal-900 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div className=" flex flex-wrap items-center justify-around mx-auto px-4 py-2">
                <Link href="/" className="cursor-pointer flex items-center space-x-3 rtl:space-x-reverse">
                    <div className='h-10'>
                        <Logo />
                    </div>
                    <span className=" text-2xl font-semibold whitespace-nowrap text-emerald-50">NextJS</span>
                </Link>

                <button
                    data-collapse-toggle="navbar-dropdown"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-dropdown"
                    aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>

                </button>
                <div className="hidden w-full md:block md:w-auto flex-row" id="navbar-dropdown">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li className='cursor-pointer'>
                            <Link
                                href="/"
                                className="block py-2 px-3 text-emerald-50"
                                aria-current="page"
                            >Home</Link>
                        </li>
                        <li className='cursor-pointer'>
                            <Link
                                href="/about"
                                className="block py-2 px-3 text-emerald-50"
                            >About</Link>
                        </li>
                        <li className='cursor-pointer'>
                            <Link
                                href="/blog"
                                className="block py-2 px-3 text-emerald-50"
                            >Bolgs</Link>
                        </li>
                        <li>
                            <DropdownMenuComponent />
                        </li>

                    </ul>
                </div>
                <div className="p-4">
                    <ul
                        className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
                    >
                        <li>
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                                className=" p-2 border rounded"
                            />
                        </li>
                        {isAuthenticated && <li className='cursor-pointer flex items-center'>
                            <Link
                                href="/profile">
                                <div
                                    className='h-6 w-6'
                                >
                                    <img src="https://cdn-icons-png.flaticon.com/512/219/219970.png" alt="User" />
                                </div>
                            </Link>
                        </li>}
                        <li className='cursor-pointer flex items-center'>
                            {
                                !isAuthenticated ?
                                    <Link
                                        href="/login"
                                        className="block py-2 px-3 text-emerald-50"
                                    >
                                        <svg
                                            className="w-4 h-4 text-emerald-50 dark:text-white"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 18 16"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                                            />
                                        </svg>

                                    </Link>
                                    : <button
                                        onClick={handleSignOut}
                                        className="block py-2 px-3 text-emerald-50"
                                    >
                                        {/* Signout */}
                                        <svg
                                            className="w-4 h-4 text-red-500 dark:text-white"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"
                                            />
                                        </svg>

                                    </button>
                            }
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
