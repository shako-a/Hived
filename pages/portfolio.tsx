import { PortfolioImages } from 'components';
import { portfolioImage } from 'config';
import Head from 'next/head';
import React, { Fragment } from 'react';

const Portfolio = () => {
  return (
    <Fragment>
      <Head>
        <title>Hive - Portfolio</title>
      </Head>
      <div className='pt-32 px-10 flex flex-col justify-center gap-10'>
        {portfolioImage.map((el, i) => (
          <PortfolioImages key={i} name={el.name} images={el.image_links} />
        ))}
      </div>
    </Fragment>
  );
};

export default Portfolio;
