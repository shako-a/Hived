import Image from 'next/image';
import { FolderSmall, Hype, Portfolio, Services } from 'components';

const MainPage = () => {
  return (
    <div className='mt-20 flex justify-center flex-col px-[40px]'>
      <div className='px-12 flex justify-center'>
        <Image
          src='/assets/gifs/main.gif'
          width={1200}
          height={664}
          alt='cover'
        />
      </div>
      <div className='relative w-full gap-5 mt-36 place-items-center justify-center flex flex-wrap'>
        <div>
          <Image
            src='/assets/imgs/homepage/folders/long.png'
            width={501}
            height={218}
            alt='folder img'
          />
          <p className='absolute top-0 font-normal pl-3 pr-12 md:leading-[30px] max-w-[501px] md:pt-7 md:text-[25px] 1xls:text-base 1xs:text-xs 1xs:pt-4 1xls:pt-6 1xlm:text-[22px]'>
            We are a team that always delivers exclusive work of advanced
            quality. Prioritizing clients&apos; needs and helping to find the
            best representation for Brands. Saving your Time & Budget
          </p>
        </div>
        <FolderSmall
          src='/assets/imgs/homepage/folders/small.png'
          text='Projects Done'
          count='4K +'
        />
        <FolderSmall
          src='/assets/imgs/homepage/folders/small.png'
          text='Years Of Experience'
          count='10 +'
        />
        <FolderSmall
          src='/assets/imgs/homepage/folders/small.png'
          text='Satisfaction Rate'
          count='100%'
        />
        <FolderSmall
          src='/assets/imgs/homepage/folders/small.png'
          text='Availability'
          count='24/7'
        />
        <FolderSmall
          src='/assets/imgs/homepage/folders/small.png'
          text='Revisions'
          count='∞'
        />
      </div>

      <Portfolio />
      <Services />
      <Hype />
    </div>
  );
};

export default MainPage;
