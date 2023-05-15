import React from 'react';
import { FolderMedium } from 'components';

const Services = () => {
  return (
    <div className='mt-36'>
      <h1 className='font-normal text-5xl text-amber-450'>SERVICES</h1>
      <div className='mt-[70px] grid md:grid-cols-2 gap-7 grid-cols-1 place-items-center 5xl:grid-cols-3 5xl:gap-x-14 5xl:gap-y-28'>
        <FolderMedium
          text='LOGO & DESIGN'
          src='/assets/imgs/homepage/folders/medium.png'
          img='/assets/imgs/homepage/icons/1.png'
          width={177}
          height={179}
          className='h-32 w-32 sm:w-[177px] sm:h-[179px]'
        />
        <FolderMedium
          text='STATIONARY DESIGN'
          src='/assets/imgs/homepage/folders/medium.png'
          img='/assets/imgs/homepage/icons/2.png'
          width={209}
          height={167}
          className='h-32 w-32 sm:w-[209px] sm:h-[167px]'
        />
        <FolderMedium
          text='PRODUCT PACKAGING & LABELLING'
          src='/assets/imgs/homepage/folders/medium.png'
          img='/assets/imgs/homepage/icons/3.png'
          width={119}
          height={159}
          className='h-28 w-20 sm:w-[119px] sm:h-[159px]'
        />
        <FolderMedium
          text='MERCH'
          src='/assets/imgs/homepage/folders/medium.png'
          img='/assets/imgs/homepage/icons/4.png'
          width={199}
          height={147}
          className='h-32 w-32 sm:w-[199px] sm:h-[147px]'
        />
        <FolderMedium
          text='SOCIAL MEDIA'
          src='/assets/imgs/homepage/folders/medium.png'
          img='/assets/imgs/homepage/icons/5.png'
          width={145}
          height={145}
          className='h-32 w-32 sm:w-[145px] sm:h-[145px]'
        />
        <FolderMedium
          text='SUBSCRIPTION SERVICE'
          src='/assets/imgs/homepage/folders/medium.png'
          img='/assets/imgs/homepage/icons/6.png'
          width={110}
          height={174}
          className='h-32 w-24 sm:w-[110px] sm:h-[174px]'
        />
      </div>
    </div>
  );
};

export default Services;
