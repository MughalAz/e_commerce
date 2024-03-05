import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './reviews.css';
import { products } from '../../db/products';

const Reviews = () => {
  return (
    <div className='reviews-bg'>
      <div className="container">
        <div className='row'>
            <div className="col-md-6">
                <span className='theme-color'>REVIEWS</span>
                <h3 className='reviews-h mb-5'>The best Clients are our clients</h3>
            </div>
        </div>
        <Swiper
        slidesPerView={3}
        spaceBetween={15}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          320: { slidesPerView: 1},
          480: { slidesPerView: 2 },
          640: { slidesPerView: 3 }
        }}
      >
        <div className='top-navigation-container'>
        <div className="custom-next"><img src="assets/images/right-arrow.png" width={25} alt="" /></div>
        <div className="custom-prev"><img src="assets/images/left-arrow.png" width={25} alt="" /></div>
        </div>
        {products.map((product)=>{
          return(
            <SwiperSlide className='pb-1' key={product.id}>
              <div className='client-bg'>
                <div className='d-flex justify-content-between'>
                  <div>
                      <h5 className='client-h'>{product.title.length > 10 ? `${product.title.substring(0, 10)}...` : product.title}</h5>
                  </div>
                  <div>
                      <ul className='d-flex list-unstyled'>
                          <li><i className="bi bi-star-fill mx-1 theme-color"></i></li>
                          <li><i className="bi bi-star-fill mx-1 theme-color"></i></li>
                          <li><i className="bi bi-star-fill mx-1 theme-color"></i></li>
                          <li><i className="bi bi-star-fill mx-1 theme-color"></i></li>
                          <li><i className="bi bi-star mx-1 theme-color"></i></li>
                      </ul>
                  </div>
                </div>
                <p className='client-p mt-2'>{product.description.length > 200 ? `${product.description.substring(0, 200)}...` : product.description}</p>
                <div className='client-img'>
                  <img src={product.thumbnail} width={'50px'} height={'50px'} style={{borderRadius: '50%'}}  alt="" />
                </div>
              </div>
            </SwiperSlide>
          )
        })}
        
        </Swiper>
      <Swiper
          slidesPerView={6}
          spaceBetween={15}
          modules={[Navigation]}
          className="mySwiper"
          style={{paddingTop: '100px'}}
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
            <img src="assets/images/review1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="assets/images/review2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="assets/images/review3.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="assets/images/review4.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="assets/images/review5.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="assets/images/review6.png" alt="" />
        </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Reviews;
