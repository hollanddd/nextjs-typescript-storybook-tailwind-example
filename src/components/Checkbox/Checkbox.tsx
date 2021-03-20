import React, { FC } from 'react';

interface Props {
  id: string;
  state: string;
  label: string;
  checked?: boolean;
  onClick: () => void;
}

export const Checkbox: FC<Props> = ({
  ...props
}) => {
  return (
    <div>
      <input
        type="checkbox"
	id={props.id}
	value={props.state}
	checked={props.checked}
	onClick={props.onClick}
	/>
      <label htmlFor={props.id}>{props.state}</label>
    </div>
  );
};
