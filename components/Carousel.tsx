'use client';

import Image from 'next/image';
import React from 'react';
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Carousel() {
  const destinationItems = [
    <div key={1} className='destination'>
      <div>
        <Image src='/india.webp' fill alt='India' />
      </div>
      <h3>Hotels in India</h3>
      <p>
        300,520 Hotels - <span>Avg. $92</span>
      </p>
    </div>,
    <div key={2} className='destination '>
      <div>
        <Image src='/greece.webp' fill alt='Greece' />
      </div>
      <h3>Hotels in Greece</h3>
      <p>
        300,520 Hotels - <span>Avg. $92</span>
      </p>
    </div>,
    <div key={3} className='destination'>
      <div>
        <Image src='/spain.webp' fill alt='Spain' />
      </div>
      <h3>Hotels in Spain</h3>
      <p>
        300,520 Hotels - <span>Avg. $92</span>
      </p>
    </div>,
  ];

  return (
    <AliceCarousel
      mouseTracking
      items={destinationItems}
      keyboardNavigation
      disableDotsControls={true}
      renderPrevButton={() => <BsArrowLeftShort className='carousel-nav-btn' />}
      renderNextButton={() => (
        <BsArrowRightShort className='carousel-nav-btn' />
      )}
      responsive={{
        0: {
          items: 1,
        },
        768: {
          items: 3,
        },
      }}
    />
  );
}

export default Carousel;
