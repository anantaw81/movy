import React from 'react';
import { Footer } from '../components/Footer/App';
import Features from '../components/Homepage/Features';
import Hero from '../components/Homepage/Hero';
import { MainNavbar } from '../components/Navbar/MainNavbar';

function Hompage() {
  return (
    <>
      <MainNavbar pageNum={1} />
      <Hero />
      <Features />
      <Footer />
    </>
  );
}

export default Hompage;
