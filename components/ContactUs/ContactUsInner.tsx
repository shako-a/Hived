import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ContactUsInner = () => {
  return (
    <div className='max-w-[1100px] px-6 relative resize'>
      <Image
        src='/assets/imgs/contact.png'
        alt='contact'
        width={1100}
        height={462}
        style={{ width: 'full', height: 'full' }}
        priority
      />
      <Link
        href={'https://www.facebook.com/hivedesignedme'}
        target='_blank'
        className='absolute top-[78%] left-[19%] w-10 h-10'
      ></Link>
      <Link
        href={'https://www.instagram.com/hivedesigned.me'}
        target='_blank'
        className='absolute top-[10%] right-[17%] w-10 h-10'
      ></Link>
      <Link
        href={'https://dribbble.com/HiveDesignedMe'}
        target='_blank'
        className='absolute top-[47%] left-[4%] w-10 h-10'
      ></Link>
      <Link
        href={'https://www.behance.net/hivedesign4'}
        target='_blank'
        className='absolute top-[20%] left-[23%]  w-10 h-10'
      ></Link>
      <Link
        href={'https://www.linkedin.com/company/hivedesign/'}
        target='_blank'
        className='absolute top-[70%] right-[32%]  w-10 h-10'
      ></Link>
      <Link
        href={'https://www.behance.net/hivedesign4'}
        target='_blank'
        className='absolute top-[43%] right-[3%] w-10 h-10'
      ></Link>
    </div>
  );
};

export default ContactUsInner;
