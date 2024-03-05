import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './team.css'
import { products } from '../../db/products';

const Team = () => {
  return (
    <div className='team-bg'>
      <div className="container">
      <div className='row'>
            <div className='col-md-6'>
                <h3 className='team-h'>Meet Cleaning team</h3>
            </div>
            <div className='col-md-6 btn-team'>
                <button className='btn btn-success team-btn'>Explore More</button>
            </div>
        </div>
        <Swiper
        slidesPerView={4}
        spaceBetween={15}
        modules={[Navigation]}
        className="mySwiper"
        style={{marginTop: '60px'}}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 4,
          }
        }}
      >
        {products.map((product)=>{
          return(
            <SwiperSlide key={product.id}>
              <div className='team-cbg'>
              <div className='d-flex justify-content-between'>
                  <div>
                      <img src={product.thumbnail} className='mb-2 border' width={'50px'} height={'50px'} style={{borderRadius: '50%'}} alt="" />
                      <h5 className='team-ch mb-0'>{product.title.length > 10 ? `${product.title.substring(0, 10)}...` : product.title}</h5>
                      <span className='team-csp'>{product.category}</span>
                  </div>
                  <div className='text-end'>
                      <h5 className='team-r mb-0'><i className='bi bi-star-fill me-1' style={{color: '#ff9b50'}}></i>{product.rating}</h5>
                      <span className='team-review'>{product.stock} stock</span>
                      <h5 className='team-r'>{product.price}$</h5>
                  </div>
                </div>  
                <div className='team-lrbg'>
                  <h6 className='team-lr'>LATEST REVIEW</h6>
                  <p className='team-p mb-2'>"{product.description.length > 54 ? `${product.description.substring(0, 54)}...` : product.description}"</p>
                  <span className='team-link theme-color'>-{product.brand}</span>
                </div>
                <button className='btn btn-success team-cbtn'>Request Quote</button>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      </div>
    </div>
  )
}

export default Team;
