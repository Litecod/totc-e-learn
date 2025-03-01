import AboutPage from '@/components/AboutUs/AboutPage'
import Carousel from '@/components/Blog/Carousel'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar />
        <AboutPage />
        <Carousel />
        <Footer />
    </div>
  )
}

export default page