import Navbar from '@/Components/Navbar'
import HeroSection from '@/Components/Herosection'
import Brandcard from '@/Components/Brandcard'
import React from 'react'
import PopularPhones from '@/Components/PopularPhones'
import BrandMarquee from '@/Components/BrandMarquee'
import WhyChooseUs from '@/Components/WhyChooseUs'
import Footer from '@/Components/Footer'

export default function page() {
  return (
    <div>
    <Navbar/>
<HeroSection/>
<Brandcard/>
<PopularPhones/>
<BrandMarquee/>
<WhyChooseUs  />
<Footer/>
    </div>
  )
}
