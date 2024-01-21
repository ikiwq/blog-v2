"use client";
import { PORTFOLIO_URL, SOCIAL_MEDIAS } from '@/app/constants.tsx';
import { toggleMobileMenu } from '@/app/functions';
import Link from 'next/link';
import { CiMenuBurger } from 'react-icons/ci';
import ThemeButton from '../themeButton/ThemeButton';

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='flex justify-between items-center px-2 py-2 h-16'>
      <div className='flex md:hidden text-2xl z-40 cursor-pointer relative' onClick={() => toggleMobileMenu()}>
        <CiMenuBurger />
      </div>
      <div className='flex gap-4 items-center h-full'>
        <Link href={"/"} className='flex items-center'>
          <h1 className="text-5xl font-handwrite md:pl-0 pl-4 duration-200">
            Iki
          </h1>
        </Link>
        <div className='hidden md:block border-r border-black dark:border-white h-5/6'></div>
        <div className='hidden md:block'>
          <li className="list-none flex gap-5 text-xl font-semibold">
            <ul className='hover:text-red-600 duration-200 cursor-pointer flex items-center gap-1'><Link href={"/category/"}>Categories</Link></ul>
            <ul className='hover:text-red-600 duration-200 cursor-pointer'><Link href={"/latest/"}>Latest</Link></ul>
            <ul className='hover:text-red-600 duration-200 cursor-pointer'><a href={PORTFOLIO_URL} target="_blank" rel='noreferr'>About</a></ul>
          </li>
        </div>
      </div>
      <div className='flex gap-4 items-center justify-center'>
        <div>
          <ThemeButton />
        </div>
        <div className='hidden md:flex items-center gap-5'>
          <div className='flex items-center gap-10'>
            <li className="list-none gap-2 text-3xl hidden md:flex">
              {
                SOCIAL_MEDIAS.map((socialMedia, index) =>
                  <ul key={"navbar-social-media-" + index} className='hover:text-red-600 duration-200 cursor-pointer hover:-translate-y-1'>
                    <a href={socialMedia.href} target="_blank" rel='noreferr'>
                      {
                        socialMedia.icon
                      }
                    </a>
                  </ul>
                )
              }
            </li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar