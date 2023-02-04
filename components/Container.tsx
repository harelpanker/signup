import { FC } from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

const Container: FC<ContainerProps> = (props) => {
  return (
    <div className='container mx-auto max-w-[23.5rem]'>{props.children}</div>
  );
};

export default Container;
