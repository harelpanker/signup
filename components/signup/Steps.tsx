'use client';

import { FC } from 'react';
import { useStore } from '@/lib/store';
import Welcome2 from './Welcome2';
import Q1 from './Q1';

type StepsProps = {};

const Steps: FC<StepsProps> = ({}) => {
  const [step] = useStore.step();

  return (
    <>
      {step === 0 ? <Welcome2 title='Welcome to Lin' /> : null}
      {step === 1 ? <Q1 /> : null}
    </>
  );
};

export default Steps;
