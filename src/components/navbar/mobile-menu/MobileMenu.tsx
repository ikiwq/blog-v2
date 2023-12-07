"use client";
import { useState } from 'react';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { CiMenuBurger } from 'react-icons/ci';

const MobileMenu = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div className='flex md:hidden text-2xl z-20 cursor-pointer relative' onClick={() => setOpen(!open)}>
                <CiMenuBurger />
            </div>
            {
                open && (
                    <div className='flex flex-col items-center justify-center absolute left-0 top-0 right-0 w-screen h-screen z-10 gap-20 mobile-menu-wrapper'>
                        <div className='flex flex-col items-center justify-center w-full'>
                            <li className="flex flex-col list-none gap-5 font-semibold text-3xl">
                                <ul className='hover:text-red-600 duration-200 cursor-pointer'>Latest</ul>
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
        </div>
    )
}
export default MobileMenu