import React, { FC } from 'react';
import { Button } from '../Button';
interface Props {
  title?: string,
  description?: string,
  price?: string,
  cta?: string,
  src?: string,
}

export const ProductCard: FC<Props> = ({ title, src, description, price, cta }) => {
  return (
    <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div className="px-4 py-2">
        <h1 className="text-3xl font-bold text-gray-800 uppercase dark:text-white">
	  {title || 'the goods'}
	</h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
	  {description || 'I\'m not good with words'}
	</p>
      </div>
      <img className="object-cover w-full h-48 mt-2" src={src} alt={title} />
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-lg font-bold text-white">
          {price || '$000'}
	</h1>
	<Button label={cta || 'add to cart'} />
      </div>
    </div>
  );
};
