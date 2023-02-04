import { FC } from 'react';
import Image from 'next/image';

import icon from '../../public/images/signup/ab.png';
import LabelText from './LabelText';

type QuestionHeadProps = {
  text: string;
};

const QuestionHead: FC<QuestionHeadProps> = (props) => {
  return (
    <div className='flex items-center space-x-3 mb-5'>
      <Image src={icon} alt='' quality={100} width={60} height={60} />
      <LabelText>{props.text}</LabelText>
    </div>
  );
};

export default QuestionHead;
