import React from 'react'
import { DNA } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <DNA
                visible={true}
                height="120"
                width="120"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </div>
    )
}

export default Loader