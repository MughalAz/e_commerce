import React, { useEffect } from 'react';
import './cart.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals, decrement, increment, removeItem } from '../../redux/loginSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const { cart } = useSelector(product => product.counter);
  const { totalPrice } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cart, dispatch]);

  const handleRemoveItem = id => {
    dispatch(removeItem(id));
    toast.success('The cart item has been deleted successfully!');
  };

  const handleIncrement = product => {
    dispatch(increment(product.id));
  };

  const handleDecrement = product => {
    dispatch(decrement(product.id));
  };

  return (
    <div className='container login-padding'>
      <ToastContainer position='bottom-left' />
      <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
          <li className='breadcrumb-item'>
            <Link to='/' className='theme-color'>Home</Link>
          </li>
          <li className='breadcrumb-item active' aria-current='page'>Cart</li>
        </ol>
      </nav>
      {cart?.length === 0 ? (
        <div className='text-center'>
          <img src="assets/images/cart-empty.svg" className='p-2' alt="" />
          <p className='cart-empty-h'>Cart is empty!</p>
          <Link className='btn btn-success theme-bg-color cart-login-btn' to='/login'>Login</Link><br/>
          <Link className='btn btn-success cart-empty-btn' to='/'>Start Shopping</Link>
        </div>
      ) : (
        <div className='row mb-5'>
          <div className='col-md-7 mt-5 border-end'>
            <h2 className='login mb-3 mt-3'>My Cart</h2>
            <p>Item ({cart?.length})</p>
            {cart?.map(product => (
              <div className='row mb-3 d-flex justify-content-between align-items-center border-bottom' key={product.id}>
                <div className='col-md-2 col-6'>
                  <Link className="text-decoration-none" to={`/product-detail/${product.id}`}>
                    <img src={product.thumbnail} className='img-fluid rounded' alt='' />
                  </Link>
                </div>
                <div className='col-md-5 col-6 align-items-center'>
                  <Link className="text-decoration-none" to={`/product-detail/${product.id}`}>
                    <h5 className='services-ch'>
                      {product.title.length > 15 ? `${product.title.substring(0, 15)}...` : product.title}
                    </h5>
                    <p className='services-cp'>
                      {product.description.length > 80 ? `${product.description.substring(0, 80)}...` : product.description}
                    </p>
                    <h5 className='cart-title'>$ {product.price}</h5>
                  </Link>
                </div>
                <div className='col-md-3 col-6'>
                  <div className='d-flex mb-3 align-items-center'>
                    <button className='btn btn-sm theme-bg-color rounded-0 incre-btn text-white' onClick={() => handleDecrement(product)}>-</button>
                    <span className='text-center cart-counter-in'>{product.countValue}</span>
                    <button className='btn btn-sm theme-bg-color rounded-0 incre-btn text-white' onClick={() => handleIncrement(product)}>+</button>
                  </div>
                  <h5 className='cart-title'>$ {product.price * product.countValue}</h5>
                </div>
                <div className='col-md-2 col-6 text-center'>
                  <i className='bi bi-trash text-danger cart-del' onClick={() => handleRemoveItem(product.id)}></i>
                </div>
              </div>
            ))}
            <hr className='m-0' />
          </div>
          <div className='col-md-5 mt-5'>
            <div className='row p-3'>
              <h2 className='login mb-3 mt-3'>Price Detail</h2>
              <p>Order Summary ({cart?.length}) Item</p>
              <div className='col-md-6'>
                <p>Total:</p>
              </div>
              <div className='col-md-6 text-end'>
                <h5 className='cart-title'>$ {totalPrice}</h5>
              </div>
              <button className='btn btn-success mt-4 theme-bg-color rounded-0'>
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
