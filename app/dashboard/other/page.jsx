'use client'

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const Other = () => {
    const { push } = useRouter();

    useEffect(() => {
        const login = localStorage.getItem("login");
        if (!login) {
            push('/login');
        }
    }, [push]);
    return (
        <div className='container'>
            <h1>Other</h1>
        </div>
    )
}

export default Other