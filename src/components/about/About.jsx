import React from 'react';
import './about.css'

const About = () => {
  return (
    <div className='about-bg'>
      <div className='container'>
        <div className='row align-items-center'>
        <div className='col-md-6'>
            <img src="assets/images/650x350.jpg" className='img-fluid' alt="" />
        </div>
        <div className='col-md-6'>
        <span className='theme-color'>ABOUT COMPANY</span>
        <h3 className='about-h'>Keep Your Home Cleaner</h3>
        <p className='about-p'>Our company has been providing professional cleaning services to residents of Minsk and the Minsk region for more than 7 years. Cleaning of apartments, offices and other promises after repair is a direction in which our employees have gained extensive experience.</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About;