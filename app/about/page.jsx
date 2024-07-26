'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const About = () => {
    const { push } = useRouter();

    useEffect(() => {
        const login = localStorage.getItem("login");
        if (!login) {
            push('/login');
        }
    }, [push]);
    return (
        <div className="bg-gray-100 min-h-screen py-6 px-4 sm:px-6 lg:px-8">
            <header className="max-w-4xl mx-auto mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Next.js Overview</h1>
                <p className="text-lg text-gray-700">Next.js is a powerful React framework for building modern web applications.</p>
            </header>

            <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-8">
                <div className="px-6 py-4">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Server-side Rendering (SSR) and Static Site Generation (SSG)</h2>
                    <p className="text-gray-700">Next.js provides SSR and SSG capabilities out of the box, improving SEO and performance.</p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-8">
                <div className="px-6 py-4">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Automatic Code Splitting</h2>
                    <p className="text-gray-700">Pages are automatically split into smaller chunks for optimized loading times.</p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-8">
                <div className="px-6 py-4">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">TypeScript Support</h2>
                    <p className="text-gray-700">Seamless integration with TypeScript for enhanced developer experience and type safety.</p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-8">
                <div className="px-6 py-4">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">API Routes</h2>
                    <p className="text-gray-700">Backend APIs can be easily created within the Next.js application using API routes.</p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-8">
                <div className="px-6 py-4">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">File-based Routing</h2>
                    <p className="text-gray-700">Routing is simple with files in the 'pages' directory automatically becoming routes.</p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-8">
                <div className="px-6 py-4">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">CSS-in-JS Support</h2>
                    <p className="text-gray-700">Supports CSS-in-JS libraries like styled-components for component-based styling.</p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-8">
                <div className="px-6 py-4">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Image Optimization</h2>
                    <p className="text-gray-700">Images are automatically optimized with lazy loading and modern format support.</p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-8">
                <div className="px-6 py-4">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Environment Variables</h2>
                    <p className="text-gray-700">Built-in support for managing environment variables across different deployment environments.</p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-8">
                <div className="px-6 py-4">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">API Preview Mode</h2>
                    <p className="text-gray-700">Allows previewing draft content like blog posts before publishing.</p>
                </div>
            </section>

            <footer className="max-w-4xl mx-auto mt-8 text-gray-600">
                <p>Next.js is backed by a strong community and is suitable for projects of any scale.</p>
                <p>Explore more at <a href="https://nextjs.org" className="text-blue-500 hover:text-blue-700">nextjs.org</a></p>
            </footer>
        </div>
    );
};

export default About;
