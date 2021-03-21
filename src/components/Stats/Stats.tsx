import React, { FC } from 'react';
import { Stat, IStat } from './Stat';

export const Stats: FC<{ stats: IStat[] }> = ({ ...props }) => {
  const stats = props.stats ? props.stats.map(s => <Stat label={s.label} metric={s.metric} last={s.last}/>) : [];
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">{ stats }</div>
    </div>
  );
};
