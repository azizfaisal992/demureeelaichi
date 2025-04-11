import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import Service from '../components/Service'
import NewsletterBox from '../components/NewsletterBox'
import Sponser from '../components/Sponser'
import GiftCard from '../components/GiftCard'
import Review from '../components/Review'
// import BestSeller from '../components/Bestseller'



function Home() {
  return (
    <div>
        <Hero/>
        <LatestCollection/>
        <Service/>
        {/* <BestSeller/> */}
        <NewsletterBox/>
        <Sponser/>
        <GiftCard/>
        <Review/>
    </div>
  )
}

export default Home
