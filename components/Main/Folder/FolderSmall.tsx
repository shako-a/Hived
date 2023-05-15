import Image from 'next/image';

const FolderSmall = (props: { text: string; count: string; src: string }) => {
  return (
    <div className='relative max-w-[216px] w-full'>
      <div>
        <Image src={props.src} width={216.4} height={218.5} alt='folder img' />
        <p className='absolute top-0 text-[19px] pt-7 pl-3 pr-12 font-bold leading-[23px] w-[150px]'>
          {props.text}
        </p>
        <div className='absolute bottom-0 text-4xl  md:text-5xl font-normal pl-4 pb-2'>
          {props.count}
        </div>
      </div>
    </div>
  );
};

export default FolderSmall;
