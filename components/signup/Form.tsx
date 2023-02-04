import { FC } from 'react';
import BackButton from './BackButton';
import Progress from './Progress';
import Steps from './Steps';
import Time from './Time';

type FormProps = {};

const Form: FC<FormProps> = ({}) => {
  return (
    <>
      <BackButton />
      <div className='w-full flex flex-col bg-white drop-shadow-linShadow p-6 pb-10 rounded min-h-[33.75rem]'>
        <Progress />
        <Time />
        <Steps />
      </div>
    </>
  );
};

export default Form;
