import { SOCIAL_MEDIAS } from '@/app/constants.tsx';
import Link from 'next/link';
import MobileMenu from './mobile-menu/MobileMenu';
type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='flex relative items-center justify-between py-4 px-2'>
      <div className='block md:hidden'>
        <MobileMenu />
      </div>
      <div className="flex items-center gap-5">
        <Link href={"/"}>
          <h1 className="absolute md:relative left-0 right-0 ml-auto mr-auto text-5xl font-handwrite md:border-r border-primary md:pr-5 w-8 md:w-auto duration-200">
            Iki
          </h1>
        </Link>
        <div className='hidden md:block'>
          <li className="list-none flex gap-5 text-xl font-semibold">
            <Link href={"/category/"}><ul className='hover:text-red-600 duration-200 cursor-pointer flex items-center gap-1'>Categories</ul></Link>
            <Link href={"/latest/"}><ul className='hover:text-red-600 duration-200 cursor-pointer'>Latest</ul></Link>
            <ul className='hover:text-red-600 duration-200 cursor-pointer'><a href='https://ikiwq.github.io/portfolio/' target="_blank" rel='noreferr'>About</a></ul>
          </li>
        </div>
      </div>
      <div className='flex items-center gap-10'>
        <li className="list-none gap-2 text-3xl hidden md:flex">
          {
            SOCIAL_MEDIAS.map((socialMedia, index) =>
              <ul className='hover:text-red-600 duration-200 cursor-pointer hover:-translate-y-1'>
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
  )
}

export default Navbar