import React from 'react';

const CardModal = ({ imageURL, title, description, details, tags, onClose }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-2xl p-8 max-w-screen-lg w-full">
                <img src={imageURL} alt={title} className="w-full mb-4 rounded-lg" />
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <p className="text-black-700 mb-4">{description}</p>
                <p className="text-gray-500 text-sm	 mb-4">{details}</p>
                <div className="flex flex-wrap">
                    {tags.map((tag, index) => (
                        <span key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            #{tag}
                        </span>
                    ))}
                </div>
                <div className='flex justify-end'>
                    <button
                        type="button"
                        onClick={() => onClose()}
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardModal;
