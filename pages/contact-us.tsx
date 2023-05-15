import ContactUsInner from 'components/ContactUs/ContactUsInner';
import Head from 'next/head';
import React, { Fragment } from 'react';

const ContactUs = () => {
  return (
    <Fragment>
      <Head>
        <title>Hive - Contact Us</title>
      </Head>

      <div className='flex justify-center items-center py-32'>
        <ContactUsInner />
      </div>
    </Fragment>
  );
};

export default ContactUs;
