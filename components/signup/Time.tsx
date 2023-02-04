import { FC } from 'react';

type TimeProps = {
  time?: string;
};

const Time: FC<TimeProps> = (props) => {
  const { time = '2 min' } = props;
  return (
    <div className='mt-3 text-linPurple font-semibold text-xs mb-5'>{time}</div>
  );
};

export default Time;
