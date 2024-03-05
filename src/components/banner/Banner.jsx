import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import './banner.css';

const Banner = () => {

  return (
    <>
      <div className='banner'>
        <div className='container'>
            <div className='row align-items-center'>
              <div className='col-md-6'>
              <h2 className='banner-h'>Professional Cleaning Services in <span className='theme-color'>Dallas</span></h2>
                    <p className='banner-p'>While we are doing something important, we will put things in order in the apartment, private house or office.</p>
                    <button className='btn btn-success theme-bg-color rounded-0 p-3 mb-3'><i className="bi bi-telephone me-1"></i>Call Us Today</button>
              </div>
              <div className='col-md-6'>
                  <img src="assets/images/650x350.jpg" className='img-fluid' alt="" />
              </div>
            </div>
        </div>
    </div>
    <div className='banner2-bg'>
      <div className="container">
        <Swiper
          slidesPerView={6}
          spaceBetween={15}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 6,
            }
          }}
        >
        <SwiperSlide>
            <img src="assets/images/google.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="assets/images/razorpay.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="assets/images/microsoft.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="assets/images/bendix.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="assets/images/eicon.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="assets/images/vonroll.png" alt="" />
        </SwiperSlide>
        </Swiper>
      </div>
    </div>
    </>
  )
}

export default Banner
