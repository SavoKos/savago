import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RiSearch2Fill } from 'react-icons/ri';
import { BsStarHalf } from 'react-icons/bs';
import { MdInsertChart } from 'react-icons/md';
import { BiSolidChart } from 'react-icons/bi';

function Services() {
  return (
    <section>
      <h1 className='text-center font-bold text-4xl mb-10'>
        <span className='text-primary'>How </span>
        savago helps you for <br /> a better travel?
      </h1>
      <div className='flex items-center flex-wrap'>
        <Card className='service'>
          <CardHeader>
            <div className='service-icon'>
              <RiSearch2Fill />
            </div>
            <CardTitle className='card-title'>Global hotel search</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='card-caption'>
              savago's hotel allows users to compare hotel prices in just a few
              clicks from more than 300 booking sites for more than a 5.0...
            </p>
          </CardContent>
        </Card>
        <Card className='service'>
          <CardHeader>
            <div className='service-icon'>
              <MdInsertChart />
            </div>
            <CardTitle className='card-title'>Find cheap hotels</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='card-caption'>
              with savago you can easily find your ideal hotel and compare your
              prices from different websites. Simply enter where you want to go.
            </p>
          </CardContent>
        </Card>
        <Card className='service'>
          <CardHeader>
            <div className='service-icon'>
              <BsStarHalf />
            </div>
            <CardTitle className='card-title'>Hotel reviews help you</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='card-caption'>
              Over 175 million aggregated hotel ratings and more than 19 million
              images allow you to find out more about where you're traveling.
            </p>
          </CardContent>
        </Card>
        <Card className='service'>
          <CardHeader>
            <div className='service-icon'>
              <BiSolidChart />
            </div>
            <CardTitle className='card-title'>Easy and fast</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='card-caption'>
              The prices shown come from numerous hotels and booking websites.
              This means that while users decide on savago which...
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default Services;
