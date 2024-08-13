'use client';
import React, { useEffect, useState } from 'react';
import CardModal from "./components/CardModal";
import useAuth from "./components/useAuth";
import { fetchHomeData } from './components/query';
import { useInfiniteQuery } from '@tanstack/react-query';
import { DNA } from 'react-loader-spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSearch } from '@/context/SearchContext';

const Home = () => {
  useAuth();
  const { searchQuery } = useSearch();

  const [modalItem, setModalItem] = useState(null);
  const [displayedItems, setDisplayedItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItemsLength, setTotalItemsLength] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  const [loading, setLoading] = useState(true);
  const perPageItems = 8;

  const { data, error } = useInfiniteQuery({
    queryKey: ['homeData'],
    queryFn: fetchHomeData,
    getNextPageParam: (lastPage) => lastPage.nextPage ?? false,
  });

  useEffect(() => {
    setLoading(false);
  }, [searchQuery])

  useEffect(() => {
    if (data) {
      const allItems = data.pages.flatMap((page) => page);
      setTotalItemsLength(allItems.length);
      setDisplayedItems(allItems
        .filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
        .slice(0, currentPage * perPageItems)
      );
      setIsFetching(false);
    }
  }, [data, currentPage, searchQuery]);

  const loadMoreItems = () => {
    setIsFetching(true);
    setCurrentPage(currentPage + 1);
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
  if (displayedItems.length < 1) return (
    <div className='h-svh'>
      <div className='h-full flex flex-col items-center justify-center text-3xl'>
        <p className='my-2 text-center'>Search results: Nothing to show</p>
      </div>
    </div>
  )
  return (
    <>
      <InfiniteScroll
        dataLength={totalItemsLength} //This is important field to render the next data
        next={loadMoreItems}
        hasMore={!loading && currentPage !== totalItemsLength / perPageItems}
        loader={
          <div className='flex bg-gray-100 items-center justify-center'>
            <DNA
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </div>
        }
        endMessage={
          <p className='text-center text-teal-800 py-10 bg-gray-100'>
            <b> 🥳 Yay! You have seen it all</b>
          </p>
        }
      >
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
      </InfiniteScroll>

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
