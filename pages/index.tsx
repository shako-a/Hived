import Head from 'next/head';
import { Fragment } from 'react';
import { MainPage } from 'components';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Hive - Home</title>
      </Head>
      <div className='pt-20'>
        <MainPage />
      </div>
    </Fragment>
  );
}
