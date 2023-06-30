import React from 'react';
import {
  BsArrowRightShort,
  BsSearch,
  BsFillCalendarDateFill,
  BsPeopleFill,
} from 'react-icons/bs';
import { TiLocation } from 'react-icons/ti';
import 'react-alice-carousel/lib/alice-carousel.css';
import Carousel from './Carousel';
import Image from 'next/image';

function Hero() {
  return (
    <div className='flex flex-col md:flex-row mt-20 gap-5 lg:gap-10'>
      <div className='md:w-3/6'>
        <h1 className='text-4xl sm:text-6xl lg:text-7xl font-bold break-words max-w-[700px]'>
          <span className='text-primary'>Where</span> are you going to go?
        </h1>
        <div className='mt-20 relative w-full 2xl:w-3/4 '>
          <input
            type='text'
            className='w-full h-10 sm:h-20 rounded-full outline-none shadow-input py-7 px-12 sm:py-10 sm:px-12'
            placeholder='Destination or a hotel name'
          />
          <BsSearch className='icon absolute left-5 top-1/2 -translate-y-1/2 opacity-70' />
          <div className='absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white flex items-center rounded-full py-2 px-4 sm:py-5 sm:px-10 shadow-button cursor-pointer'>
            <button>Let's go</button>
            <BsArrowRightShort />
          </div>
        </div>
        <p className='mt-10 font-medium cursor-pointer'>
          <span className='text-slate-400 font-normal'>or</span> looking for a
          hotel nearby tonight?
        </p>
        <div className='h-1/3 mt-20'>
          <h2 className='font-bold text-xl mb-10'>Top Destinations</h2>
          <div className='h-full'>
            <Carousel />
          </div>
        </div>
      </div>
      <div className="hidden md:flex bg-[url('/map.webp')] md:w-3/6 h-auto bg-no-repeat bg-right-bottom bg-primary rounded-2xl mb-24 justify-between items-center flex-col">
        <p className='w-8/12 mx-auto text-center mt-10 text-white'>
          Your next vacation destination <br /> is closer than you think.
        </p>
        <div className='relative w-48 h-48'>
          <Image src='/logo.webp' fill alt='Logo' />
        </div>
        <div className='mb-12 w-8/12 relative flex justify-between'>
          <hr className='absolute top-[30%] w-11/12 left-1/2 -translate-x-1/2' />
          <div className='searchStage'>
            <div className='icon active'>
              <TiLocation />
            </div>
            <p>Location</p>
          </div>
          <div className='searchStage'>
            <div className='icon'>
              <BsFillCalendarDateFill />
            </div>
            <p>Stay Dates</p>
          </div>
          <div className='searchStage'>
            <div className='icon'>
              <BsPeopleFill />
            </div>
            <p>Guests</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
