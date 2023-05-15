import { Burger, CloseIcon, useNavbar } from 'components';
import { routes } from 'config';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const { isDropdownOpen, setIsDropDownOpen, ref } = useNavbar();

  return (
    <div className='py-6 bg-black z-20 fixed top-0 left-0 w-full px-10 flex justify-between'>
      <Image
        src='/assets/imgs/logo.png'
        width={185}
        height={60}
        alt='logo'
        priority
        style={{ width: 'auto', height: '30px' }}
      />
      <div className='justify-center items-center gap-10 flex-row lg:flex hidden'>
        {routes.map((el, i) => (
          <Link
            href={el.path}
            key={i}
            className='text-amber-450 text-base font-bold uppercase border-2 border-amber-450 px-6 py-1 rounded-2xl hover:bg-amber-450 hover:text-black duration-200'
          >
            {el.name}
          </Link>
        ))}
      </div>
      <div
        className='flex justify-center items-center lg:hidden  cursor-pointer pr-12'
        onClick={() => setIsDropDownOpen((state) => !state)}
      >
        {isDropdownOpen ? <CloseIcon /> : <Burger />}
      </div>

      <div
        className={`justify-center items-center gap-10 flex-col lg:hidden flex fixed top-20 right-10 overflow-hidden duration-300 ${
          isDropdownOpen ? 'h-[400px]' : 'h-0'
        }`}
        ref={ref}
      >
        {routes.map((el, i) => (
          <Link
            href={el.path}
            key={i}
            className='text-amber-450 text-base font-bold uppercase border-2 border-amber-450 px-6 py-1 rounded-2xl'
          >
            {el.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
