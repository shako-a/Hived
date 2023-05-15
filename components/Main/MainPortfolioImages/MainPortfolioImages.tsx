import { MainPortfolioImagesTypes } from './types';
import useMainPortfolioImages from 'components/Main/MainPortfolioImages/useMainPortfolioImages';
import {
  ArrowLeft,
  ArrowLeftFilled,
  ArrowRight,
  ArrowRightFilled,
} from 'components/icons';
import Image from 'next/image';
import React from 'react';

const MainPortfolioImages: React.FC<MainPortfolioImagesTypes> = ({
  images,
}) => {
  const { width, currentImage, upOrDown } = useMainPortfolioImages(images);

  return (
    <div className='flex  justify-start gap-5 items-center'>
      {currentImage === 0 ? (
        <span>
          <ArrowLeft />
        </span>
      ) : (
        <span onClick={() => upOrDown(false)} className='cursor-pointer'>
          <ArrowLeftFilled />
        </span>
      )}
      <div
        className='flex justify-start max-w-[1140px] gap-6 overflow-hidden no_scroll overscroll-none'
        id='my-div'
      >
        {images.map((image, i) => (
          <Image
            src={image}
            key={i}
            width={360}
            height={269}
            alt='portfolio'
            style={{ width: '360px', height: '269px' }}
          />
        ))}
      </div>
      {currentImage * 400 + width.clientWidth < width.scrollWidth ? (
        <span onClick={() => upOrDown(true)} className='cursor-pointer'>
          <ArrowRightFilled />
        </span>
      ) : (
        <span>
          <ArrowRight />
        </span>
      )}
    </div>
  );
};

export default MainPortfolioImages;
