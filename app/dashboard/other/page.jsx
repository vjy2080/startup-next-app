'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useAuth from '@/app/components/useAuth';
import { fetchOtherData } from '@/app/components/query';
import { useInfiniteQuery } from '@tanstack/react-query';
import Loader from '@/app/components/Loader';

const Other = () => {
    useAuth();
    const [selectedId, setSelectedId] = useState(null);

    const { data, error, isLoading } = useInfiniteQuery({
        queryKey: ['OtherData'],
        queryFn: fetchOtherData,
        getNextPageParam: (lastPage) => lastPage.nextPage ?? false,
    });

    useEffect(() => {
        console.log('OtherData', data);
    }, [data]);

    const allItems = data?.pages.flat() || [];

    const categorizedItems = React.useMemo(() => {
        return allItems.reduce((acc, item) => {
            const { category } = item || {};
            if (category) {
                acc[category] = acc[category] || [];
                acc[category].push(item);
            }
            return acc;
        }, {});
    }, [allItems]);

    const renderLoadingOrError = () => {
        if (error) return <div>Error fetching data: {error.message}</div>;
        if (isLoading || !Object.keys(categorizedItems).length) return <Loader />;
        return null;
    };

    const renderCategoryItems = (category, items) => (
        <div key={category}>
            <h1 className='font-black font-mono text-3xl my-10 text-blue-800 text-center underline-offset-8'>
                {category}
            </h1>
            {items.map(item => (
                <motion.div
                    key={item.id}
                    layoutId={item.id}
                    className='w-full flex justify-center my-2 cursor-pointer'
                    onClick={() => setSelectedId(item.id)}
                >
                    <div className="block w-dvw p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <motion.h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {item.title}
                        </motion.h2>
                        <motion.p className="font-normal text-gray-700 dark:text-gray-400">
                            {item.subtitle}
                        </motion.p>
                    </div>
                </motion.div>
            ))}
        </div>
    );

    const renderDetailsModal = () => {
        const selectedItem = allItems.find(item => item.id === selectedId);
        if (!selectedItem) return null;

        return (
            <motion.div
                layoutId={selectedId}
                className="fixed inset-x-96 bg-white shadow-md rounded-lg p-6 z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.h2 className="text-xl font-bold text-gray-900 mb-2">
                    {selectedItem.title}
                </motion.h2>
                <motion.p className="text-gray-700 mb-2">
                    {selectedItem.subtitle}
                </motion.p>
                <motion.p className="text-gray-500 text-xs">
                    {selectedItem.description}
                </motion.p>
                <div className='flex justify-end'>
                    <motion.button
                        onClick={() => setSelectedId(null)}
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 my-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    >
                        Close
                    </motion.button>
                </div>
            </motion.div>
        );
    };

    return (
        <div className="bg-gray-100 grid grid-cols-1 px-20 py-10 justify-center content-center">
            <h3 className="text-4xl text-center font-bold tracking-tight text-teal-900 dark:text-white">
                Some other details about Next.js
            </h3>

            {renderLoadingOrError()}

            <div>
                {Object.entries(categorizedItems).map(([category, items]) =>
                    renderCategoryItems(category, items)
                )}
            </div>

            <AnimatePresence>{renderDetailsModal()}</AnimatePresence>
        </div>
    );
};

export default Other;
