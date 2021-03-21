import React, { FC } from 'react';
import { InputBox } from '../InputBox';

interface Props {
  placeholder: string;
  onClick?: () => void;
}

export const Subscription: FC<Props> = ({
  placeholder = 'email',
  ...props
}) => {
  return (
    <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
      <InputBox placeholder={placeholder} onClick={props.onClick}>
        <div className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200">
          <button className="cursor-pointer w-16 h-6 text-gray-600 outline-none focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
          </button>
        </div>
      </InputBox>
    </form>
  );
};
