import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { logOutAction } from '../../redux/loginSlice';

const Navbar = () => {

  const dispatch = useDispatch()
  const loginIsActive = useSelector((state) => state.counter.loginIsActive)
  const {cart} = useSelector(product=>product.counter)

  const logOutBtn= ()=>{
    dispatch(logOutAction())
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg show-desktop nav-shadow">
        <div className="container">
            <Link className="navbar-brand" to="/">
                <img src='assets/images/logo.png' alt="" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex ms-auto desktop-search" role="search">
            <div className="input-group">
              <input type="text" name="searchInput" className="form-control rounded-0 bg-transparent" placeholder="Search" />
              <button className="btn theme-bg-color rounded-0" type="button" ><i className="bi bi-search text-white"></i></button>
            </div>
            </form>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/">About</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/">Contact</Link>
                </li>
                {loginIsActive===1?
                <li className="nav-item" onClick={()=>logOutBtn()}>
                <Link className="nav-link" to="#">Logout</Link>
                </li>:
                <li className="nav-item" >
                <Link className="nav-link" to="/login">Login</Link>
                </li>
                }
                <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <span className='cart-counter-bg'>
                    <img src="assets/images/cart1.svg" width={24} alt="" />
                    <span className='cart-counter'>{cart.length}</span>
                  </span>
                </Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar
