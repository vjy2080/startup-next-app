import React from 'react'

const BlogPage = ({ params }) => {
    return (
        <main className='flex-col'>
            <div className='text-center'>
                <h1>Blog post page</h1>
                <p className='font-bold'>{params.slug}</p>
            </div>
        </main>
    )
}

export default BlogPage