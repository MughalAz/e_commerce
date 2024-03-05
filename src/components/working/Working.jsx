import React from 'react';
import './working.css'

const Working = () => {
  return (
    <div className='working-bg'>
      <div className='container'>
        <span className='text-white'>WORK STEPS</span>
        <h3 className='working-h'>How We are Working?</h3>
        <div className='row mt-5'>
          <div className='col-md-3 p-3 text-center'>
            <div className='working-img-bg'>
              <img src="assets/images/work1.png" alt="" />
            </div>
            <h5 className='work-h mt-3'>Application</h5>
            <p className='work-p'>You fill out on application on the site or contact us in a way convenient for you</p>
          </div>
          <div className='col-md-3 p-3 text-center'>
            <div className='working-img-bg'>
              <img src="assets/images/work1.png" alt="" />
            </div>
            <h5 className='work-h mt-3'>The Date</h5>
            <p className='work-p'>You fill out on application on the site or contact us in a way convenient for you</p>
          </div>
          <div className='col-md-3 p-3 text-center'>
            <div className='working-img-bg'>
              <img src="assets/images/work1.png" alt="" />
            </div>
            <h5 className='work-h mt-3'>Hire Us</h5>
            <p className='work-p'>You fill out on application on the site or contact us in a way convenient for you</p>
          </div>
          <div className='col-md-3 p-3 text-center'>
            <div className='working-img-bg'>
              <img src="assets/images/work1.png" alt="" />
            </div>
            <h5 className='work-h mt-3'>Hire Us</h5>
            <p className='work-p'>You fill out on application on the site or contact us in a way convenient for you</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Working
