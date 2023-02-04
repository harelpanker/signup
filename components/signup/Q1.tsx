'use client';

import { FC, useState } from 'react';
import { useStore } from '@/lib/store';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from './Button';
import QuestionHead from './QuestionHead';
import { AiFillCheckCircle } from 'react-icons/ai';

type Q1Props = { checkbox?: [] };

const STEP = 2;

const Q1: FC<Q1Props> = () => {
  // state
  const [check, setCheck] = useState(false);
  const [, setStep] = useStore.step();
  const [, setVal] = useStore.userData.where_do_you_experience_pain();

  // form
  const {
    handleSubmit,
    register,
    watch,
    formState: { isDirty, isValid },
  } = useForm<Q1Props>({ mode: 'onChange', defaultValues: { checkbox: [] } });

  const onSubmit: SubmitHandler<Q1Props> = (data) => {
    setVal(data.checkbox?.map((checkbox) => checkbox).join(', '));
  };

  // functions
  const moveStep = () => setStep(STEP);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheck((check) => !check);
    // console.log(event.target);
    // console.log(watch());
  };

  // list
  const optionList = [
    { id: 1, value: 'Head (headache, jaw, face)' },
    { id: 2, value: 'Neck' },
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col h-full grow justify-between'>
      <div>
        <QuestionHead text="1 - Let's start by understanding your pain story. Where do you experience pain and/or discomfort?*" />
        <div>
          <p className='text-xs'>Choose all that apply to you</p>
          <hr className='mt-1 mb-5 w-full h-px bg-[#C7CAD7]' />
        </div>

        <ul className='w-full flex flex-col space-y-3'>
          {optionList.map((option) => (
            <li key={option.id}>
              <label
                className={`relative transition duration-300 flex cursor-pointer items-center space-x-2 px-3 py-3 min-h-[40px] h-full rounded-lg border border-linPurple w-full`}>
                <div className='relative w-4 h-4 rounded-full overflow-hidden'>
                  <input
                    {...register('checkbox')}
                    type='checkbox'
                    value={option.value}
                    className='ring-0 w-full rounded-full border-none ring-transparent h-full checked:bg-linPurple checked:hover:bg-linPurple checked:focus:bg-linPurple bg-[#eeeefd] absolute z-10'
                    // onChange={onChangeHandler}
                  />
                  {check ? (
                    <AiFillCheckCircle
                      className={`${
                        check ? 'opacity-100' : 'opacity-0'
                      } absolute z-20 rounded-full inset-0 w-full h-full text-linPurple`}
                    />
                  ) : null}
                </div>
                <span className='text-sm'>{option.value}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <Button
        moveFunction={moveStep}
        text='Next'
        disabled={!isDirty || !isValid}
        type='submit'
      />
    </form>
  );
};

export default Q1;
