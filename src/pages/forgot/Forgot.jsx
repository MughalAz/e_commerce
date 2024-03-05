import React, { useState } from 'react';
import './forgot.css'
import { Link } from 'react-router-dom';

const Forgot = () => {

  const [formValue, setFormValue] = useState({
    email: '',
  })

  const handleChange = (e) => {
    setFormValue({
        ...formValue, [e.target.name]: e.target.value,
    })
}

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

    setErrors(newErrors);
    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e)=>{
    e.preventDefault();
     
  if (validateForm()) {

    setFormValue({
      email: '',
    })

    // Perform actions with valid form data
    console.log('Form submitted:', formValue);
    
  } else {
    console.log('Form validation failed.');
  }
  }

// console.log(errors,"ooooooooo")

  return (
    <div className='container login-padding'>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/login" className='theme-color'>Login</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Forgot Password</li>
        </ol>
      </nav>
        <h2 className=' login mb-3'>Forgot Password</h2>
        <form className='m-auto login-form' onSubmit={handleSubmit}>
        <div className="mb-3">
            <div className="input-group" style={{borderBottom: '1px solid #acacac'}}>
            <span className="input-group-text border-0 bg-transparent">
            <i className="bi bi-envelope nav-icon"></i>
            </span>
            <input type="text" className="form-control border-0" placeholder="Email *" name='email' value={formValue.email} onChange={handleChange} />
          </div>
         <span className='text-danger'>{errors.email}</span>
        </div>
        <div className='mb-3'>
          <button type="submit" className="btn theme-bg-color text-white w-100">Login</button>
        </div>
        </form>
    </div>
  )
}

export default Forgot;

