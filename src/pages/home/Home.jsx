import React from 'react'
import Banner from './Banner'
import Navbar from '../../components/Navbar'
import Category from './Category'
import Products from './Products'
import Collection from './Collection'
import BestSellers from './BestSellers'
import NewsLetter from './NewsLetter'

const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <Products />
      <Collection />
      <BestSellers />
      <NewsLetter />
    </>
  )
}

export default Home