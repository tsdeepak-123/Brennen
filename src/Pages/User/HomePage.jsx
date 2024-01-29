import React from 'react'
import Home from '../../components/Home/Home'
import Footer from '../../components/Footer/Footer'
import Ashraf from '../../components/Ashraf/Ashraf'
import Leaders from '../../components/Leaders/Leaders'
import Social from '../../components/Social/Social'
import Donation from '../../components/Blood/Donation'
import Service from '../../components/Service/Service'

function HomePage() {
  return (
    <div>
      <Home/>
      <Ashraf/>
      <Leaders/>
      <Donation/>
      <Service/>
      <Social/>
      <div className='mt-10'></div>
      <Footer/>
    </div>
  )
}

export default HomePage