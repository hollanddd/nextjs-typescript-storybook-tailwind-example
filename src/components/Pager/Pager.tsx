import React, { FC } from 'react';
import { PageCard } from '../PageCard';

interface Props {
}

export const Pager: FC<Props> = ({ }) => {
  return (
    <div className="row">
      <div className="w-full mx-auto">
        <div className="sm:grid grid-cols-4 gap-5 mx-auto px-16">
	  <PageCard label="this is a previous button" shift={true}/>
	  <PageCard label="this is a next button"/>
	</div>
      </div>
    </div>
  );
};
