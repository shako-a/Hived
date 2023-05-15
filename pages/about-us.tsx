import Head from 'next/head';
import Image from 'next/image';
import React, { Fragment } from 'react';

const AboutUs = () => {
  return (
    <Fragment>
      <Head>
        <title>Hive - About Us</title>
      </Head>
      <div className='pt-20 2xl:flex-row flex-col-reverse flex justify-center items-center'>
        <div className='pt-12 pl-10 '>
          <h1 className='text-amber-450 text-[22px] max-w-[485px] border-2 border-amber-450 p-4 rounded-lg mr-8 z-10'>
            Hi(ve) there, <br /> We are the digital creative agency that takes
            your brand to the next level. Our team is composed of experienced
            professionals who are passionate about delivering exclusive,
            advanced quality work that stands out! <br /> <br /> Our services
            include graphic design, branding, social media management, and more.
            We work with a wide range of clients, from startups to established
            businesses, and tailor our approach to meet your specific needs and
            goals. We take pride in our ability to deliver projects on time and
            within budget, without sacrificing quality. <br /> <br /> At Hive,
            we create digital adventures. We love to push the boundaries of
            what&apos;s possible and take our clients on a journey that&apos;s
            exciting, innovative, and unforgettable.
          </h1>
        </div>
        <Image
          src='/assets/imgs/hive3D.png'
          width={1016}
          height={560}
          alt='logo'
          priority
        />
      </div>
    </Fragment>
  );
};

export default AboutUs;
