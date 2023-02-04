import { FC } from 'react';
import { BsArrowRight } from 'react-icons/bs';

type ButtonProps = {
  type?: 'submit' | 'button';
  text?: string;
  moveFunction: () => void;
  disabled: boolean;
};

const Button: FC<ButtonProps> = (props) => {
  const { type = 'button', text = 'Continue' } = props;

  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <button
        onClick={props.moveFunction}
        disabled={props.disabled}
        className={`${
          props.disabled
            ? 'pointer-events-none bg-opacity-60 translate-y-2'
            : 'pointer-events-auto bg-opacity-100 translate-y-0'
        } flex w-full transition duration-300 hover:bg-opacity-80 max-w-[278px] py-5 px-6 justify-between items-center rounded-lg font-medium text-sm text-white bg-linPurple`}
        type={type}>
        {text} <BsArrowRight />
      </button>
    </div>
  );
};

export default Button;
