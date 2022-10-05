import Head from 'next/head'
import React from 'react'
import Hero from '../components/Hero'

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <Hero/>
      <h1>Home</h1>
    </div>
  )
}

export default HomePage