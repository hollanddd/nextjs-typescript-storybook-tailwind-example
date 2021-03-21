import React, { FC } from 'react';

export interface IStat {
  label: string;
  metric: string;
  last?: boolean;
}

export interface Props extends IStat {}

export const Stat: FC<Props> = ({
  label = 'Stats',
  metric = '0.0K',
  last = false,
}) => {
  const css = 'text-center uppercase';
  return (
    <div className={ last ? css : `${css} text-center md:border-r`}>
      <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">{metric}</h6>
      <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">{label}</p>
    </div>
  );
};
