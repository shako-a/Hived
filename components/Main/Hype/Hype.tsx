import Image from 'next/image';
import React from 'react';

const Hype = () => {
  return (
    <div className='mt-36'>
      <h1 className='font-normal text-[48px] text-amber-450 mb-14'>
        HIVE HYPE
      </h1>
      <Image
        src='/assets/imgs/homepage/cover/hype.png'
        alt='hype cover'
        width={1685}
        height={559}
      />
    </div>
  );
};

export default Hype;
