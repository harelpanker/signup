import { FC } from 'react';
import Image from 'next/image';
import logo from '../public/images/logo.svg';

type HeaderProps = {};

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className='h-[3.75rem] bg-linPurple w-full flex justify-center items-center'>
      <Image src={logo} priority alt='Lin Health logo' />
    </div>
  );
};

export default Header;
