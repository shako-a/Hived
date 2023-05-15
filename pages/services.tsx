import { servicesLowerImages, servicesUpperImages } from 'config';
import Head from 'next/head';
import Image from 'next/image';
import React, { Fragment } from 'react';

const Services = () => {
  return (
    <Fragment>
      <Head>
        <title>Hive - Services</title>
      </Head>
      <div className='pt-32 px-6'>
        <div className='flex flex-wrap justify-center gap-10'>
          {servicesUpperImages.map((image, i) => (
            <Image
              src={image}
              alt='service'
              width={518}
              height={298}
              priority
              key={i}
            />
          ))}
        </div>
        <div className='flex flex-wrap justify-center gap-10 mt-20'>
          {servicesLowerImages.map((image, i) => (
            <Image
              src={image}
              alt='service'
              width={518}
              height={298}
              priority
              key={i}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Services;
