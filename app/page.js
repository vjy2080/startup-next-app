'use client';
import React, { useEffect, useState } from 'react';
import CardModal from "./components/CardModal";
import useAuth from "./components/useAuth";
import { fetchHomeData } from './components/query';
import { useInfiniteQuery } from '@tanstack/react-query';
import { DNA } from 'react-loader-spinner';

const Home = () => {
  useAuth();
  const [modalItem, setModalItem] = useState(null);
  const [displayedItems, setDisplayedItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItemsLength, setTotalItemsLength] = useState(0);

  const { data, isFetching, error } = useInfiniteQuery({
    queryKey: ['homeData'],
    queryFn: fetchHomeData,
    getNextPageParam: (lastPage) => lastPage.nextPage ?? false,
  });

  useEffect(() => {
    if (data) {
      const allItems = data.pages.flatMap((page) => page);
      setTotalItemsLength(allItems.length);
      setDisplayedItems(allItems.slice(0, currentPage * 8));
    }
  }, [data, currentPage]);

  const loadMoreItems = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  if (error) return <div>Error: {error.message}</div>;
  if (isFetching) return (
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
  );

  return (
    <>
      <div className="bg-gray-100 grid grid-cols-1 p-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center content-center">
        {!isFetching && displayedItems.map((item, index) => (
          <div
            onClick={() => setModalItem(item)}
            key={index}
            className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white cursor-pointer">
            <img className="w-full h-48" src={item.imageURL} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.title}</div>
              <p className="text-gray-700 text-base">{`${item.description?.slice(0, 30)}...`}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              {item.tags?.map((tag, tagIndex) => (
                <span key={tagIndex} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {`# ${tag}`}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {currentPage * 8 < totalItemsLength && (
        <div className="flex justify-center mt-4">
          <button
            onClick={loadMoreItems}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Load More
          </button>
        </div>
      )}

      {modalItem && (
        <CardModal
          imageURL={modalItem.imageURL}
          title={modalItem.title}
          description={modalItem.description}
          details={modalItem.detail}
          tags={modalItem.tags}
          onClose={() => setModalItem(null)}
        />
      )}
    </>
  );
};

export default Home;
