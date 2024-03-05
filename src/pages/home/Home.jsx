import React from 'react';
import './home.css'
import Banner from '../../components/banner/Banner';
import Services from '../../components/services/Services';
import About from '../../components/about/About';
import Working from '../../components/working/Working';
import Equipment from '../../components/equipment/Equipment';
import Reviews from '../../components/reviews/Reviews';
import Team from '../../components/team/Team';
import Blog from '../../components/blog/Blog';
import Trust from '../../components/trust/Trust';

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <About />
      <Working />
      <Equipment />
      <Reviews />
      <Team />
      <Blog />
      <Trust />
    </div>
  )
}

export default Home
