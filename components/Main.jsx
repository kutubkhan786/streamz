import React from 'react'
import Categories from './Categories'
import Hero from './Hero'
import IconBar from './IconBar'
import LiveChannels from './LiveChannels'
import Footer from './Footer'

const Main = () => {
  return (
    <div className='absolute left-[64px] xl:left-[220px]'>
        <Hero />
        <LiveChannels />
        <IconBar />
        <Categories />
        <Footer/>
    </div>
  )
}

export default Main
