'use client';

import { FC } from 'react';
import { useStore } from '@/lib/store';

type ProgressProps = {};

const Progress: FC<ProgressProps> = ({}) => {
  const [step] = useStore.step();
  const [totalSteps] = useStore.totalSteps();

  const progressPrecent = (100 - (step / totalSteps) * 100).toFixed(0);

  return (
    <div className='w-full rounded-full h-[6px] bg-[#C7CAD7] overflow-hidden'>
      {step > 0 ? (
        <div
          style={{ transform: `translateX(-${progressPrecent}%)` }}
          className={`transition duration-300 bg-linPurple h-full w-full`}></div>
      ) : null}
    </div>
  );
};

export default Progress;
