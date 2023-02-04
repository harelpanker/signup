import { FC } from 'react';
import Image from 'next/image';

import icon from '../../public/images/signup/welcome-icon.svg';
import Button from './Button';

type WelcomeProps = {
  isFirst: boolean;
  title: string;
  moveTo: number;
};

const Welcome: FC<WelcomeProps> = (props) => {
  return (
    <>
      <div className='pt-9 pb-52'>
        <h1 className='text-center font-bold text-linPurple text-xl'>
          {props.title}
        </h1>
        <hr className='mt-[14px] mb-3 w-full h-px bg-[#C7CAD7]' />
        <div className='flex space-x-[10px] text-sm'>
          <Image src={icon} alt='' />
          <p>
            Please answer a few questions to see if our Pain Recovery Coaching
            Program is right for you.
          </p>
        </div>
      </div>
      <Button moveTo={props.moveTo} disabled={false} />
    </>
  );
};

export default Welcome;
