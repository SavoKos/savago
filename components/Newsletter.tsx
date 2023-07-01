import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { BsArrowRightShort } from 'react-icons/bs';

function Newsletter() {
  return (
    <section className='pt-28 pb-28 bg-slate-200 mt-32'>
      <div className='container'>
        <h1 className='text-center text-3xl'>
          Want to recieve exclusive hotel offers?
        </h1>
        <h1 className='font-bold text-center text-3xl'>
          <span className='text-primary'>Subscribe</span> to our newsletter!
        </h1>
        <div className='input-container newsletter'>
          <input
            type='text'
            className='input-container__input'
            placeholder='Enter your email address.'
          />
          <HiOutlineMail className='icon absolute left-5 top-1/2 -translate-y-1/2 opacity-70 text-xl' />
          <div className='input-submit'>
            <button className='hidden md:block'>Subscribe</button>
            <BsArrowRightShort className='text-3xl md:hidden' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
