import {
  Behance,
  Dribble,
  Facebook,
  Instagram,
  LinkedIn,
  Vimeo,
} from 'components';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className=' sm:px-40 pt-40 pb-20 flex justify-between items-center gap-6 md:flex-row flex-col'>
      <div className='flex justify-center items-center gap-4 flex-wrap'>
        <Link
          href={'https://www.facebook.com/hivedesignedme'}
          className='hover:scale-150 duration-150'
          target='_blank'
        >
          <Facebook />
        </Link>
        <Link
          href={'https://www.instagram.com/hivedesigned.me/'}
          className='hover:scale-150 duration-150'
          target='_blank'
        >
          <Instagram />
        </Link>
        <Link
          href={'https://www.linkedin.com/company/hivedesign/'}
          className='hover:scale-150 duration-150'
          target='_blank'
        >
          <LinkedIn />
        </Link>
        <Link
          href={'https://www.behance.net/hivedesign4'}
          className='hover:scale-150 duration-150'
          target='_blank'
        >
          <Behance />
        </Link>
        <Link
          href={'https://vimeo.com/salomelunasa'}
          className='hover:scale-150 duration-150'
          target='_blank'
        >
          <Vimeo />
        </Link>
        <Link
          href={'https://dribbble.com/HiveDesignedMe'}
          className='hover:scale-150 duration-150'
          target='_blank'
        >
          <Dribble />
        </Link>
        <h1 className='bg-amber-450 rounded-full px-6 py-2 font-bold'>
          hivedesignedme@gmail.com
        </h1>
      </div>
      <h1 className='text-amber-450 text-2xl'>&copy; Hive Design</h1>
    </div>
  );
};

export default Footer;
