'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AboutData from '../components/dataArray/aboutData';




const About = () => {
    const { push } = useRouter();
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        const login = localStorage.getItem("login");
        if (!login) {
            push('/login');
        }
    }, [push]);

    return (
        <div className="bg-gray-100 min-h-screen py-6 px-4 sm:px-6 lg:px-8">
            <header className="max-w-4xl mx-auto mb-8 text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Next.js Overview</h1>
                <p className="text-lg text-gray-700">Next.js is a powerful React framework for building modern web applications.</p>
            </header>
            <div className="grid grid-cols-1 p-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center content-center">

                {AboutData.map(item => (
                    <motion.div
                        key={item.id}
                        layoutId={item.id}
                        className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-8 cursor-pointer"
                        onClick={() => setSelectedId(item.id)}
                    >
                        <div className="px-6 py-4">
                            <motion.h2 className="text-xl font-bold text-gray-900 mb-2">{item.title}</motion.h2>
                            <motion.p className="text-gray-700">{item.subtitle}</motion.p>
                        </div>
                    </motion.div>
                ))}

                <AnimatePresence>
                    {selectedId && (
                        <motion.div
                            layoutId={selectedId}
                            className="fixed inset-x-96 bg-white shadow-md rounded-lg p-6 z-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {AboutData.find(item => item.id === selectedId) && (
                                <div>
                                    <motion.h2 className="text-xl font-bold text-gray-900 mb-2">
                                        {AboutData.find(item => item.id === selectedId).title}
                                    </motion.h2>
                                    <motion.p className="text-gray-700 mb-2">
                                        {AboutData.find(item => item.id === selectedId).subtitle}
                                    </motion.p>
                                    <motion.p className="text-gray-500 text-xs">
                                        {AboutData.find(item => item.id === selectedId).description}
                                    </motion.p>
                                    <motion.button
                                        onClick={() => setSelectedId(null)}
                                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                                    >
                                        Close
                                    </motion.button>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <footer className="max-w-4xl mx-auto mt-8 text-gray-600 text-center">
                <p>Next.js is backed by a strong community and is suitable for projects of any scale.</p>
                <p>Explore more at <a href="https://nextjs.org" className="text-blue-500 hover:text-blue-700">nextjs.org</a></p>
            </footer>
        </div>
    );
};

export default About;
