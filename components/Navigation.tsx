import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiCompass, FiSettings } from 'react-icons/fi';
import { BsSearch } from 'react-icons/bs';
import { LuLogIn } from 'react-icons/lu';
import { AiOutlineHeart, AiOutlineMenu } from 'react-icons/ai';
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from '@/components/ui/sheet';

function Navigation() {
  SheetClose;
  return (
    <nav className='flex items-center justify-between mt-10'>
      <Link href='/' className='flex items-center gap-3'>
        <Image src='/logo.webp' width={50} height={50} alt='Logo' />
        <h3 className='font-bold text-3xl'>savago</h3>
      </Link>
      <div className='links items-center hidden md:flex'>
        <Link className='link' href='/'>
          <FiCompass className='icon' />
          <p>Discover</p>
        </Link>
        <div className='link cursor-pointer'>
          <BsSearch className='icon' />
          <p>Search</p>
        </div>
        <Link className='link' href='/favorites'>
          <AiOutlineHeart className='icon' />
          <p>Favorites</p>
        </Link>
        <Link className='link' href='/settings'>
          <FiSettings className='icon' />
          <p>Settings</p>
        </Link>
      </div>
      <Link
        href='/login'
        className='items-center gap-3 bg-primary px-3 py-2 rounded-lg text-background cursor-pointer hidden md:flex'
      >
        <LuLogIn className='text-2xl' />
        <p>Login</p>
      </Link>

      <Sheet>
        <SheetTrigger className='sm:block md:hidden'>
          <AiOutlineMenu className='text-2xl cursor-pointer' />
        </SheetTrigger>
        <SheetContent className='flex flex-col justify-center items-center gap-20 sheet__content'>
          <Link href='/'>Discover</Link>
          <SheetClose asChild>
            <p>Search</p>
          </SheetClose>
          <Link href='/favorites'>Favorites</Link>
          <Link href='/settings'>Settings</Link>
          <Link href='/login'>Login</Link>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default Navigation;
