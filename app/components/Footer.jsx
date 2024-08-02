import React from 'react'

const Footer = () => {
    return (
        <div className='bg-teal-800 '>
            <p className='text-gray-300 text-sm w-full flex justify-evenly items-center	pt-2 text-center'>
                <span className='cursor-pointer'> Website Terms</span>
                <span>|</span>
                <span className='cursor-pointer'> Privacy Policy</span>
                <span>|</span>
                <span className='cursor-pointer'> India: Your Privacy Rights</span>
                <span>|</span>
                <span className='cursor-pointer'> Accessibility Statement</span>
                <span>|</span>
                <span className='cursor-pointer'> Supplier Code of Conduct</span>
            </p>
            <p className='text-gray-300 text-sm w-full flex justify-evenly items-center py-2 text-center'>
                {`Copyright ${new Date().getFullYear()} Google LLC. All Rights Reserved.`}
            </p>
        </div>
    )
}

export default Footer