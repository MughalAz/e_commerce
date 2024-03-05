import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { productDetail, addCart, increment, decrement } from '../../redux/loginSlice';
import './productdetail.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetail = () => {

    const {id}= useParams();
    const dispatch = useDispatch();
    
    const cart = useSelector(state => state.counter.productDetail);

    useEffect(()=>{
        dispatch(productDetail(id))
    },[id, dispatch]);

    const addToCartHandler = (product) => {
        dispatch(addCart(product));
        toast.success('The cart has been added successfully!');
      };

      const handleIncrement = product => {
        dispatch(increment(product.id));
      };
    
      const handleDecrement = product => {
        dispatch(decrement(product.id));
      };

  return (
    <div className='container my-4'>
        <ToastContainer position='bottom-left' />
        <div className="row">
            <div className="col-md-5 text-center">
                <img src={cart?.thumbnail} className='detail-img' alt="" />
            </div>
            <div className="col-md-7 p-3">
                <h4 className='detail-title'>{cart?.title}</h4>
                <h4 className='detail-brand'>{cart?.brand}</h4>
                <h4 className='detail-price'>$ {cart?.price}</h4>
                <h4 className='detail-category'>{cart?.category}</h4>
                <p className='detail-desc'>{cart?.description}</p>
                <div className='d-flex'>
                    <div className='d-flex mb-3 align-items-center'>
                        <button className='btn btn-md theme-bg-color rounded-0 text-white' onClick={() => handleDecrement(cart)}>-</button>
                        <span className='text-center cart-counter-detail'>{cart.countValue}</span>
                        <button className='btn btn-md theme-bg-color rounded-0 text-white' onClick={() => handleIncrement(cart)}>+</button>
                    </div>
                    <div className='ms-5'>
                        <button className='btn btn-success rounded-0 theme-bg-color px-4' onClick={() => addToCartHandler(cart)}>Add to Cart</button>
                    </div>    
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail;