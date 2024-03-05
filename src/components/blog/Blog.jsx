import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './blog.css'
import { products } from '../../db/products';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className='blog-bg'>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <span className='theme-color'>OUR BLOG</span>
            <h3 className='blog-h'>Interesting and useful</h3>
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
            <SwiperSlide key={product.id}>
            <div className=''>
              <Link className='text-decoration-none' to={`/product-detail/${product.id}`}>
              <img src={product.thumbnail} className='w-100' height={'250px'} alt="" />
              <h5 className='blog-h1 mt-3'>{product.description.length > 40 ? `${product.description.substring(0, 40)}...` : product.description}</h5>
              </Link>
            </div>
            <div className='mt-3 d-flex justify-content-between'>
                <div>
                    <h6 className='blog-h2'>{product.title.length > 10 ? `${product.title.substring(0, 10)}...` : product.title}</h6>
                </div>
                <div>
                    <img src="assets/images/client1.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      </div>
    </div>
  )
}

export default Blog;
