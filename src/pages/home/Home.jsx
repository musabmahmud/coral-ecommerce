import React from 'react'
import Banner from './Banner'
import Navbar from '../../components/Navbar'
import Category from './Category'
import Products from './Products'

const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <Products />
    </>
  )
}

export default Home