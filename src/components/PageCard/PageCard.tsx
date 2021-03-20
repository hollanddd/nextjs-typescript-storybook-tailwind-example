import React, { FC } from 'react';

interface Props {
  /**
   * bottom border color
   * @default border-red-500
   */
  color?: string;
  /**
   * alternate paginator text
   */
  label?: string;
  /**
   * when true display <- Prev
   * @default false
   */
  shift?: boolean,
}
/**
 * Left arrow svg
 */
export const LeftArrow: FC<{}> = () => {
  return (
  <svg className="mr-2" width="24" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z" fill="currentColor" />
  </svg>
  );
};
/**
 * Right arrow svg
 */
export const RightArrow: FC<{}> = () => {
  return (
    <svg className="ml-2" width="24" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z" fill="currentColor" />
    </svg>
  );
};
/**
 * Page card
 * @default Next ->
 */
export const PageCard: FC<Props> = ({
  ...props
}) => {
  const color = props.color || 'border-red-500';
  const shift = props.shift ? 'text-right' : '';
  const content = props.shift ? 'Prev' : 'Next';
  const position = props.shift ? 'col-start-1 col-end-3' : 'col-end-5'
  return (
    <div className={`${position} col-span-2 my-2`}>
      <a href="#">
        <div className={`h-full p-6 dark:bg-gray-800 bg-white hover:shadow-xl rounded border-b-4 shadow-md ${shift} ${color}`}>
	  <h3 className="text-2xl mb-3 font-semibold inline-flex ">
	    { props.shift ? <LeftArrow /> : '' }
	    {content}
	    { props.shift ? '' : <RightArrow /> }
	  </h3>
	  <p className="text-lg">{props.label}</p>
	</div>
      </a>
    </div>
  );
};
