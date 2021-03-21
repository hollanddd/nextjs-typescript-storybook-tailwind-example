import React, { FC, useState } from 'react';

interface Props {
  id: string;
  state: string;
  label: string;
  checked?: boolean;
  border?: string;
  primary?: string;
  alt?:string;
}

export const Checkbox: FC<Props> = ({
  ...props
}) => {
  let [checked, setChecked] = useState(props.checked);

  function toggle() {
    setChecked(!checked);
  }

  const base = 'flex items-center w-10 border h-6 p-1 rounded-full cursor-pointer';
  const border = props.border || 'border-black';
  const primary = props.primary || 'bg-black';
  const alt = props.alt || 'bg-white';
  const css = [border, base].join(' ');


  return (
    <div>
      <input
	className="hidden"
        type="checkbox"
	id={props.id}
	value={props.state}
	checked={checked}
	/>
      <label
	className={`${css} ${border} ${checked ? primary : alt } ${checked ? 'justify-end bg-black' : 'justify-start' }`}
        htmlFor={props.id}
      >
        <span
          className={`${checked ? alt : primary} w-4 h-4 rounded-full`}
	  onClick={() => { toggle() }}
	></span>
      </label>
    </div>
  );
};
