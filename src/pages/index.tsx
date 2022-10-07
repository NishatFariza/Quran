import Head from 'next/head'
import React from 'react'
import Hero from '../components/Hero'
import { Button } from 'antd';
import Surah from '../components/Surah';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <Hero/>
     <div className='wrapper py-20'>
       <h2 className='uppercase font-semibold text-xl'>Surah</h2>

        <div>
          <Surah/>
          <Surah/>
          <Surah/>
          <Surah/>
          <Surah/>
          <Surah/>
          <Surah/>
          <Surah/>
          <Surah/>
          <Surah/>
          <Surah/>
          <Surah/>
          <Surah/>
          <Surah/>
          <Surah/>
          <Surah/>
          <Surah/>
          <Surah/>
          <Surah/>
        </div>
     </div>
    </div>
  )
}

export default HomePage