'use client'

import OtherData from '@/app/components/dataArray/OtherData';
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import useAuth from '@/app/components/useAuth';

const Other = () => {
    useAuth();
    const [selectedId, setSelectedId] = useState(null);

    const mapItemsByCategory = (items) => {
        return items.reduce((acc, item) => {
            const { category } = item;
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(item);
            return acc;
        }, {});
    };

    // Mapping items by category
    const categorizedItems = mapItemsByCategory(OtherData);

    return (
        <div className="bg-gray-100 grid grid-cols-1 px-20 py-10 justify-center content-center">
            <div>
                <h3 className="text-4xl text-center font-bold  tracking-tight text-teal-900 dark:text-white">
                    Some other details about Next.js
                </h3>
            </div>

            <div>
                {Object.keys(categorizedItems).map(category => (
                    <div key={category}>
                        <h1
                            className='font-black font-mono text-3xl my-10 text-blue-800 text-center underline-offset-8'
                        >{category}</h1>
                        {categorizedItems[category].map(item => (
                            <motion.div
                                key={item.id}
                                layoutId={item.id}
                                className='w-full flex justify-center my-2 cursor-pointer'
                                onClick={() => setSelectedId(item.id)}
                            >
                                <div
                                    className="block w-dvw p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                                >
                                    <motion.h2
                                        className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
                                    >{item.title}</motion.h2>
                                    <motion.p
                                        className="font-normal text-gray-700 dark:text-gray-400"
                                    >{item.subtitle}</motion.p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        layoutId={selectedId}
                        className="fixed inset-x-96 h-48 bg-white shadow-md rounded-lg p-6 z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {OtherData.find(item => item.id === selectedId) && (
                            <div>
                                <motion.h2 className="text-xl font-bold text-gray-900 mb-2">
                                    {OtherData.find(item => item.id === selectedId).title}
                                </motion.h2>
                                <motion.p className="text-gray-700 mb-2">
                                    {OtherData.find(item => item.id === selectedId).subtitle}
                                </motion.p>
                                <motion.p className="text-gray-500 text-xs">
                                    {OtherData.find(item => item.id === selectedId).description}
                                </motion.p>
                                <div className='flex justify-end'>
                                    <motion.button
                                        onClick={() => setSelectedId(null)}
                                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                    >
                                        Close
                                    </motion.button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Other;
