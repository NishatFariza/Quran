import Head from 'next/head'
import React from 'react'
import Hero from '../components/Hero'
import { Button } from 'antd';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <Hero/>
      <Button type="primary">Hello Button</Button>
    </div>
  )
}

export default HomePage