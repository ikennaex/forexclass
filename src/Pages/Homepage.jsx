import React from 'react'
import Navbar from '../Components/Navbar'
import Herosection from '../Components/Herosection'
import Advantages from '../Components/Advantages'
import Offer from '../Components/Offer'
import Testimonial from '../Components/Testimonial'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Advantages />
      <Offer />
      <Testimonial />
    </div>
  )
}

export default Homepage
