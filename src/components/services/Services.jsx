import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './services.css'
import { products } from '../../db/products';
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/loginSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Services = () => {

  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    dispatch(addCart(product));
    toast.success('The cart has been added successfully!');
  };

  return (
    <div className='services-bg'>
      <ToastContainer  position='bottom-left' />
      <div className="container">
        <div className='row'>
            <div className='col-md-6'>
                <span className='theme-color'>OUR SERVICES</span>
                <h3 className='services-h'>Perfect Cleanliness without effort!</h3>
            </div>
            <div className='col-md-6'>
            <ul className="nav nav-pills p-2 rounded" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">House</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Business</button>
              </li>
            </ul>
            </div>
        </div>
        <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active mt-5" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
        <Swiper
        slidesPerView={4}
        spaceBetween={15}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
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
        <div className="custom-next"><img src="assets/images/right-arrow.png" width={25} alt="" /></div>
        <div className="custom-prev"><img src="assets/images/left-arrow.png" width={25} alt="" /></div>
          {products.map((product)=>{
            return (
              <SwiperSlide key={product.id}>
              <div className='services-card'>
              <Link className='text-decoration-none' to={`/product-detail/${product.id}`}>
             <img src={product.thumbnail} className='service-cimg' alt="" />
              <h5 className='services-ch'>{product.title.length > 15 ? `${product.title.substring(0, 15)}...` : product.title}</h5>
              <p className='services-cp'>{product.description.length > 80 ? `${product.description.substring(0, 80)}...` : product.description}</p> 
              </Link>
              <button className='btn btn-success services-btn' onClick={() => addToCartHandler(product)}>Add to Cart</button>
            </div>
            </SwiperSlide>
            )
            })}
        </Swiper>
        </div>
        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">...</div>
        </div>
      </div>
    </div>
  )
}

export default Services
