import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer className='pt-28 pb-28 flex items-center flex-col gap-5 container'>
      <Link href='/' className='flex items-center gap-3 m-auto'>
        <Image src='/logo.webp' width={50} height={50} alt='Logo' />
        <h3 className='font-bold text-3xl text-background'>savago</h3>
      </Link>
      <p className='text-background'>
        Copyright 2023 savago | All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
