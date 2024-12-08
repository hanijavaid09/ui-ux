import Head from 'next/head'
import React from 'react'
import Header from './components/header'
import Hero from './Hero/page'
import Cards from './Cards/page'
import Footerl from './components/footer'

const Page = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Cards/>
      <Footerl/>
    </div>
  )
}

export default Page
