import React, { FC } from 'react';
import { InputBox } from '../InputBox';

interface Props {
  placeholder: string;
  onClick?: () => void;
}

export const Search: FC<Props> = ({
  placeholder = 'Search',
  ...props
}) => {
  return (
    <InputBox placeholder={placeholder} onClick={ props.onClick  }>
      <div className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200">
        <button className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
	  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-up w-4 h-4">
	    <polyline points="18 15 12 9 6 15"></polyline>
	  </svg>
	</button>
      </div>
    </InputBox>
  );
};
