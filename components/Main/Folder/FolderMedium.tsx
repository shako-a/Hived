import Image from 'next/image';

const FolderMedium = (props: {
  text: string;
  src: string;
  width: number;
  height: number;
  img: string;
  className?: string;
}) => {
  return (
    <div className='relative max-w-[517px] w-full'>
      <div>
        <p className='absolute top-0 font-normal text-[15px] lg:text-[27px] pt-7 pl-7 pr-12 leading-[23px] w-[300px] md:w-[390px] md:leading-[30px]'>
          {props.text}
        </p>
        <Image src={props.src} width={517} height={350} alt='folder img' />
        <div className='absolute top-1/2 -translate-x-1/2 -translate-y-1/3 left-1/2'>
          <Image
            src={props.img}
            width={props.width}
            height={props.height}
            alt='folder img'
            className={props.className}
          />
        </div>
      </div>
    </div>
  );
};

export default FolderMedium;
