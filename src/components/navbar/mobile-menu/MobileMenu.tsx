"use client";
import { MOBILE_MENU_ID } from '@/app/constants';
import Link from 'next/link';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';

const MobileMenu = () => {
    return (
        <div className='hidden flex-col items-center justify-center absolute left-0 top-0 right-0 w-screen h-screen z-40 gap-20 mobile-menu-wrapper' id={MOBILE_MENU_ID}>
            <div className='flex flex-col items-center justify-center w-full'>
                <li className="flex flex-col list-none gap-5 font-semibold text-3xl text-center">
                    <ul className='hover:text-red-600 duration-200 cursor-pointer'>Latest</ul>
                    <Link href={"/category"}><ul className='hover:text-red-600 duration-200 cursor-pointer'>Categories</ul></Link>
                    <ul className='hover:text-red-600 duration-200 cursor-pointer'>About</ul>
                </li>
            </div>
            <div className='flex'>
                <li className="flex gap-4 list-none w-full text-4xl">
                    <ul className='hover:text-red-600 duration-200 cursor-pointer hover:-translate-y-1'><AiFillGithub /></ul>
                    <ul className='hover:text-red-600 duration-200 cursor-pointer hover:-translate-y-1'><AiOutlineTwitter /></ul>
                </li>
            </div>
        </div>
    )
}
export default MobileMenu