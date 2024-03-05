import React, { useState } from 'react';
import './login.css'
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../redux/loginSlice';
const Login = () => {

const navigator = useNavigate();
const dispatch = useDispatch()
  
const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  })

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormValue({
        ...formValue, [e.target.name]: e.target.value,
    })
}

  const handleVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    // Validate email
    if (!formValue.email.trim()) {
      newErrors.email = 'Email is required';
    } 
    else if (!emailRegex.test(formValue.email)) {
        newErrors.email = 'Please enter a valid email';
    }

    // Validate password
    else if (!formValue.password.trim()) {
        newErrors.password = 'Password is required';
    } 
    else if (formValue.password.length !== 8) {
        newErrors.password = 'Password should be 8 characters';
    }

    setErrors(newErrors);
    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e)=>{
    e.preventDefault();
     
  if (validateForm()) {

  dispatch(loginAction())
  setFormValue({
    email: '',
    password: ''
  })
  navigator("/")
    // Perform actions with valid form data
    console.log('Form submitted:', formValue);
    
  } else {
    console.log('Form validation failed.');
  }
  }

  return (
    <div className='container login-padding'>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/" className='theme-color'>Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Login</li>
        </ol>
      </nav>
        <h2 className=' login mb-3'>Login</h2>
        <form className='m-auto login-form' onSubmit={handleSubmit}>
        <div className="mb-3">
            <div className="input-group border-bottom">
            <span className="input-group-text border-0 bg-transparent">
            <i className="bi bi-envelope nav-icon theme-color"></i>
            </span>
            <input type="text" className="form-control border-0 bg-transparent" placeholder="Email *" name='email' value={formValue.email} onChange={handleChange} />
          </div>
         <span className='text-danger'>{errors.email}</span>
        </div>
        <div className="mb-3">
            <div className="input-group" style={{borderBottom: '1px solid #acacac'}}>
            <span className="input-group-text border-0 bg-transparent">
              <i className="bi bi-file-lock nav-icon theme-color"></i>
            </span>
            <input type={showPassword ? 'text' : 'password'} className="form-control border-0 bg-transparent" placeholder="Password *" name='password' value={formValue.password} onChange={handleChange} />
            <div className="input-group-append">
              <button className="btn" type="button" onClick={handleVisibility} >
                <i className={`bi ${showPassword ? 'bi-eye' : 'bi-eye-slash'}`}></i>
              </button>
            </div>
          </div>
         <span className='text-danger'>{errors.password}</span> 
        </div>
        <div className='mb-3 text-end'>
          <Link to="/forgot" className='theme-color'>Forgot Password</Link>
        </div>
        <div className='mb-3'>
          <button type="submit" className="btn theme-bg-color text-white w-100">Login</button>
        </div>
          <div className='mb-3 signup-link'>
            Don't have an account?
          <Link to="/signup" className='theme-color'> Sign Up</Link>
        </div>
        <div className='mb-3 text-center'>
          <p className='connect-link'>Or connect using</p>
          <ul className='d-flex list-unstyled justify-content-center'>
            <li className='login-social mx-2'><i className="bi bi-google"></i></li>
            <li className='login-social mx-2'><i className="bi bi-facebook"></i></li>
            <li className='login-social mx-2'><i className="bi bi-twitter"></i></li>
            <li className='login-social mx-2'><i className="bi bi-linkedin"></i></li>
          </ul>
        </div>
        </form>
    </div>
  )
}

export default Login;

