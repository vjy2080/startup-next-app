import Link from 'next/link'
import React from 'react'

const Blog = () => {
    return (
        <main className='flex-col'>
            <div>
                <button className='bg-teal-600 text-white py-2 px-4 my-5 rounded'>
                    <Link href='./blog/post-1'>Post-1</Link>
                </button>

            </div>
            <div>
                <button className='bg-teal-600 text-white py-2 px-4 my-5 rounded'>
                    <Link href='./blog/post-2'>Post-2</Link>
                </button>
            </div>

        </main>
    )
}

export default Blog