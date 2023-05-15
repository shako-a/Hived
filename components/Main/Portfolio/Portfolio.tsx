import React, { useState } from 'react';
import { portfolioImage } from 'config';
import { MainPortfolioImages } from 'components';

const Portfolio = () => {
  const [images, setImages] = useState(portfolioImage[0]);

  return (
    <div className='mt-32'>
      <h1 className='text-amber-450 font-normal text-5xl'>PORTFOLIO</h1>
      <div className='flex justify-between items-center lg:flex-row flex-col lg:gap-5 gap-10'>
        <nav className='mt-10'>
          <div className='flex lg:flex-col flex-row flex-wrap justify-center lg:items-start items-center lg:gap-0 gap-5'>
            <button
              onClick={() => setImages(portfolioImage[0])}
              className='border-amber-450 rounded-full text-amber-450 border-[1.5px] font-bold mt-10 pt-1 pb-2 px-4 w-28 hover:bg-amber-450 duration-200 hover:text-black'
            >
              LOGOS
            </button>
            <button
              onClick={() => setImages(portfolioImage[1])}
              className='border-amber-450 rounded-full text-amber-450 border-[1.5px] font-bold pt-1 pb-2 px-4 w-[172px] mt-10 hover:bg-amber-450 duration-200 hover:text-black'
            >
              STATIONARY
            </button>
            <button
              onClick={() => setImages(portfolioImage[2])}
              className='border-amber-450 rounded-full text-amber-450 border-[1.5px] font-bold pt-1 pb-2 px-4 w-[162px] mt-10 hover:bg-amber-450 duration-200 hover:text-black'
            >
              PACKAGING
            </button>
            <button
              onClick={() => setImages(portfolioImage[3])}
              className='border-amber-450 rounded-full text-amber-450 border-[1.5px] font-bold pt-1 pb-2 px-4 w-[119px] mt-10 hover:bg-amber-450 duration-200 hover:text-black'
            >
              MERCH
            </button>
            <button
              onClick={() => setImages(portfolioImage[4])}
              className='border-amber-450 rounded-full text-amber-450 border-[1.5px] font-bold pt-1 pb-2 px-4 w-[152px] mt-10 hover:bg-amber-450 duration-200 hover:text-black'
            >
              BRANDING
            </button>
            <button
              onClick={() => setImages(portfolioImage[5])}
              className='border-amber-450 rounded-full text-amber-450 border-[1.5px] font-bold pt-1 pb-2 px-4 w-[197px] mt-10 hover:bg-amber-450 duration-200 hover:text-black'
            >
              SOCIAL MEDIA
            </button>
          </div>
        </nav>
        <MainPortfolioImages images={images.image_links} />
      </div>
    </div>
  );
};

export default Portfolio;
