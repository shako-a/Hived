import Image from 'next/image';
import { PortfolioImagesProps } from './types';
import React from 'react';
import {
  ArrowLeft,
  ArrowLeftFilled,
  ArrowRight,
  ArrowRightFilled,
  usePortfolioImages,
} from 'components';

const PortfolioImages: React.FC<PortfolioImagesProps> = ({ images, name }) => {
  const { ref, currentImage, upOrDown, isSet } = usePortfolioImages(images);

  return (
    <div className='flex items-center justify-between 2xl:flex-row flex-col'>
      <span className='text-amber-450 text-base 2xl:rotate-[-90deg] mb-10 2xl:mb-0  uppercase border-2 border-amber-450 px-6 py-1 rounded-2xl hover:bg-amber-450 hover:text-black duration-200'>
        {name}
      </span>
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
          className='flex justify-start gap-6 2xl:w-[1150px] overflow-hidden no_scroll overscroll-none'
          ref={ref}
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
        {ref.current !== null &&
        isSet !== '' &&
        currentImage * 400 + ref.current?.clientWidth <
          ref.current?.scrollWidth ? (
          <span onClick={() => upOrDown(true)} className='cursor-pointer'>
            <ArrowRightFilled />
          </span>
        ) : (
          <span>
            <ArrowRight />
          </span>
        )}
      </div>
    </div>
  );
};

export default PortfolioImages;
