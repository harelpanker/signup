import { FC } from 'react';
import Image from 'next/image';

import icon from '../../public/images/signup/ab.png';
import Button from './Button';
import LabelText from './LabelText';
import { useStore } from '@/lib/store';

type WelcomeProps = {
  title: string;
};

const Welcome2: FC<WelcomeProps> = (props) => {
  const [, setStep] = useStore.step();

  const moveStep = () => setStep(1);

  return (
    <div>
      <div className=''>
        <div className='flex items-center space-x-3 mb-5'>
          <Image src={icon} alt='' quality={100} width={60} height={60} />
          <h1 className='text-center font-bold text-linPurple text-xl'>
            {props.title}
          </h1>
        </div>
        <LabelText>
          I&apos;m Abigail, a pain recovery expert. Let&apos;s work together to
          get you on the path to pain recovery.
        </LabelText>
        <hr className='mt-[14px] mb-6 w-full h-px bg-[#C7CAD7]' />
        <ul className='flex flex-col gap-3 text-sm w-full max-w-[308px] mb-14'>
          <li>
            <p>
              <strong className='font-semibold'>Step 1:</strong>
              <br />
              Complete a short assessment to ensure Lin is right for you.
            </p>
          </li>
          <li>
            <p>
              <strong className='font-semibold'>Step 2:</strong>
              <br />
              Start your free trial and see how Lin&apos;s approach can help you
              find real relief from chronic pain.
            </p>
          </li>
        </ul>
      </div>
      <Button moveFunction={moveStep} disabled={false} />
    </div>
  );
};

export default Welcome2;
