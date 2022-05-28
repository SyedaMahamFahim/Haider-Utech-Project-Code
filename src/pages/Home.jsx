import React from 'react'
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import HeroSection from '../components/HeroSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <>
        <Header/>
    <Carousel/>
    <br></br>
    <HeroSection/>
    <br></br>
    <Contact/>
    <br>
    </br>
    <Footer/>
    </>
  )
}

export default Home