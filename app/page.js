'use client'
import React, { useState } from 'react';
import CardModal from "./components/CardModal";
import HomeData from "./components/dataArray/HomeData";
import useAuth from "./components/useAuth";


const Home = () => {
  useAuth();
  const [modalItem, setModalItem] = useState(null);

  const openModal = (item) => {
    setModalItem(item);
  };

  const closeModal = () => {
    setModalItem(null);
  };

  return (
    <>
      <div className="bg-gray-100 grid grid-cols-1 p-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center content-center">
        {HomeData.map((item, index) => (
          <div
            onClick={() => openModal(item)}
            key={index}
            className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white cursor-pointer">
            <img className="w-full h-48" src={item.imageURL} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.title}</div>
              <p className="text-gray-700 text-base">{`${item.description.slice(0, 30)}...`}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              {item.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {`# ${tag}`}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {modalItem && (
        <CardModal
          imageURL={modalItem.imageURL}
          title={modalItem.title}
          description={modalItem.description}
          details={modalItem.detail}
          tags={modalItem.tags}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default Home;
