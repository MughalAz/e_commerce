import React from 'react';
import './equipment.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { products } from '../../db/products';
import { Link } from 'react-router-dom';

const Equipment = () => {

  return (
    <div className='equip-bg'>
      <div className="container">
        <div className='row'>
            <div className='col-md-6'>
                <span className='text-white'>OUR EQUIPMENT</span>
                <h3 className='equipment-h mb-5'>OUR professional equipment</h3>
            </div>
            <div className='col-md-6 text-end'>
                <button className='btn theme-bg-color1 equip-btn mb-4'>Explore All</button>
            </div>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={15}
          modules={[Navigation]}
          className="mySwiper"
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
              <Link className='text-decoration-none' to={`/product-detail/${product.id}`}>
              <div className='text-center'>
                <img src={product.thumbnail} className='w-100' height={'200px'}  alt="" />
                <h3 className='equip-h mt-3'>{product.title.length > 15 ? `${product.title.substring(0, 10)}...` : product.title}</h3>
                <p className='equip-p'>{product.description.length > 80 ? `${product.description.substring(0, 80)}...` : product.description}</p>
              </div>
              </Link>
            </SwiperSlide>
            )
          })}
      </Swiper>
      </div>
    </div>
  )
}

export default Equipment;
