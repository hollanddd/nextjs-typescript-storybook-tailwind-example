import React, { FC, useState } from 'react';
import Link from 'next/link';

interface INavItem {
  label: string,
  href?: string,
  last?: boolean,
}

interface Props extends INavItem {}

export const NavItem: FC<Props> = ({ label, href='#', last }) => {
  const color = 'text-white border-transparent';
  const active = 'active:text-green-700 active:border-green-700';
  const hover = 'hover:text-purple-400 hover:border-purple-700';
  const base = 'no-underline border-b-2 uppercase tracking-wide font-bold text-xs py-3 mr-8';
  const css = [
    base,
    color,
    active,
    hover,
  ].join(' ');

  return (
    <Link href={href}>
      <a className={`${css} ${ last ? '' : 'mr-8' } `}>
        {label}
      </a>
    </Link>
  );
}

export const NavBar: FC<{ items: INavItem[] }> = ({ items }) => {
  const nav = items.map((n: INavItem) => <li className="pb-2"><NavItem label={n.label} href={n.href} last={n.last} /></li>)
  const [hidden, setHidden] = useState(true);
  let icon = undefined;
  function toggle() {
    setHidden(!hidden);
  }

  icon = (
    <svg
      onClick={ () => toggle() }
      className="fill-current text-purple-400"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <title>menu</title> <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
    </svg>
  )

  return (
    <nav className={`bg-gray-900 px-2 pt-2 pb-2`}>
      <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block pt-2" >
       {icon}
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle"  />
      <div className={`w-full flex items-center justify-between -mb-px lg:px-4 py-1`} >
        <div className={`${hidden ? 'hidden' : '' } md:flex md:items-center md:w-auto w-full md:order-1 pl-4`} id="menu" >
          <nav>
            <ul className={`md:flex items-center justify-between text-base  pt-4 md:pt-0`}>{nav}</ul>
          </nav>
        </div>
        <div className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
          <div className="auth flex items-center w-full md:w-full">
          </div>
        </div>
      </div>
    </nav>
  );
};
