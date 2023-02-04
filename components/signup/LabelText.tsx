import { FC } from 'react';

type LabelTextProps = { children: React.ReactNode };

const LabelText: FC<LabelTextProps> = (props) => {
  return <p className='font-semibold text-sm'>{props.children}</p>;
};

export default LabelText;
