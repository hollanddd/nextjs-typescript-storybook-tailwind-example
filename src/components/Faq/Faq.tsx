import React, { FC, useState } from 'react';

interface IFaqItem {
  /**
   * The question to show
   */
  question: string;
  /**
   * The answer to the question
   */
  answer: string;
}

interface Props extends IFaqItem {}

export const FaqItem: FC<Props> = ({ question, answer }) => {
  const [hidden, setHidden] = useState(true);

  function toggle() {
    setHidden(!hidden);
  }

  return (
      <div className="border-b">
        <div onClick={() => { toggle() }} className="flex items-center justify-between w-full p-4 focus:outline-none">
          <p className="text-lg font-medium">{question}</p>
	  <svg
	    xmlns="http://www.w3.org/2000/svg"
	    fill="none"
	    viewBox="0 0 24 24"
	    stroke="currentColor"
	    className={`w-3 text-gray-600 ${ hidden ? '' : 'transition-transform duration-200 transform rotate-180'}`}
	  >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
          </svg>
        </div>
        <div className={`${hidden ? 'hidden' : ''} p-4 pt-0`}>
	  <p className="text-gray-700">
	    {answer}
	  </p>
	</div>
      </div>
  );
}

export const Faq: FC<{ questions: IFaqItem[] }> = ({ questions }) => {
  const faqs = questions.map(q => <FaqItem question={q.question} answer={q.answer} />) || [];

  return (
  <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <div><p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">Brand new</p></div>
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span className="relative inline-block">
          <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
            <defs>
              <pattern id="f77828ea-acc7-4b05-89fe-052b4c6b68b2" x="0" y="0" width=".135" height=".30"><circle cx="1" cy="1" r=".7"></circle></pattern>
            </defs>
            <rect fill="url(#f77828ea-acc7-4b05-89fe-052b4c6b68b2)" width="52" height="24"></rect>
          </svg>
          <span className="relative">The</span>
        </span>
        quick, brown fox jumps over a lazy dog
      </h2>
      <p className="text-base text-gray-700 md:text-lg">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.</p>
    </div>
    <div className="space-y-4">
      {faqs}
    </div>
  </div>
</div>
  );
};
