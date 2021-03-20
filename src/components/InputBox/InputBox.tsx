import React, { FC } from 'react';

interface Props {
  placeholder: string;
  onClick: () => void;
}

export const InputBox: FC<Props> = ({
  placeholder = 'Placeholder',
  ...props
}) => {
  return (
    <div className="w-full">
      <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
        <div className="flex flex-auto flex-wrap"></div>
        <input placeholder={placeholder} className="p-1 px-2 appearance-none outline-none w-full text-gray-800"></input>
        { props.children }
      </div>
    </div>
  );
};
