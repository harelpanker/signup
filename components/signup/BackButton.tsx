'use client';

import { FC } from 'react';
import { useStore } from '@/lib/store';
import { FiChevronLeft } from 'react-icons/fi';

type BackButtonProps = {};

const BackButton: FC<BackButtonProps> = ({}) => {
  const [step, setStep] = useStore.step();

  const backClickHandler = () => setStep((step) => step - 1);

  return (
    <>
      {step > 0 ? (
        <div className='mb-3 -mt-4'>
          <button
            className='flex gap-1 items-center'
            onClick={backClickHandler}>
            <FiChevronLeft />
            <span>Back</span>
          </button>
        </div>
      ) : null}
    </>
  );
};

export default BackButton;
