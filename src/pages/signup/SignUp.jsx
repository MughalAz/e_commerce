import React, { useState } from 'react';
import './signup.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerAction } from '../../redux/loginSlice';

const SignUp = () => {

    const navigator = useNavigate();
    const dispatch = useDispatch();

    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: ''
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

        // Validate username
        if (!formValue.name.trim()) {
            newErrors.name = 'Enter full name';
        } 
        else if (formValue.name.length < 3) {
            newErrors.name = 'At least 3 characters';
        }

        // Validate email
        else if (!formValue.email.trim()) {
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

        // Validate confirmPassword
        else if (!formValue.confirmPassword.trim()) {
            newErrors.confirmPassword = 'Confirm password is required';
        } 
        else if (formValue.confirmPassword !== formValue.password) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        // Validate phoneNumber
        else if (!formValue.phoneNumber.trim()) {
            newErrors.phoneNumber = 'Enter mobile (xxxx - xxxx)*';
        }
        else if (formValue.phoneNumber.length !== 8) {
            newErrors.phoneNumber = 'Number should be 8!';
        }

        setErrors(newErrors);
        // Return true if there are no errors
        return Object.keys(newErrors).length === 0;
    };
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        
    if (validateForm()) {
        
        dispatch(registerAction())

        setFormValue({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            phoneNumber: ''
        })
        navigator("/")
        // Perform actions with valid form data
        console.log('Form submitted:', formValue);
    } else {
        console.log('Form validation failed.');
    }
    }

    return (
        <div className='container signup-padding'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/" className='theme-color'>Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Sign Up</li>
                </ol>
            </nav>
            <h2 className='signup mb-3'>Sign up</h2>
            <form className='m-auto signup-form' onSubmit={handleSubmit}>
            <div className="mb-3">
                    <div className="input-group border-bottom">
                        <span className="input-group-text border-0 bg-transparent">
                            <i className="bi bi-person nav-icon theme-color"></i>
                        </span>
                        <input type="text" className="form-control border-0 bg-transparent" placeholder="Name *" name='name' value={formValue.name} onChange={handleChange} />
                    </div>
                    <span className='text-danger'>{errors.name}</span>
                </div>
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
                <div className="input-group border-bottom">
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
                <div className="mb-3">
                <div className="input-group border-bottom">
                    <span className="input-group-text border-0 bg-transparent">
                    <i className="bi bi-file-lock nav-icon theme-color"></i>
                    </span>
                    <input type={showPassword ? 'text' : 'password'} className="form-control border-0 bg-transparent" placeholder="Confirm Password *" name='confirmPassword' value={formValue.confirmPassword} onChange={handleChange} />
                    <div className="input-group-append">
                    <button className="btn" type="button" onClick={handleVisibility} >
                        <i className={`bi ${showPassword ? 'bi-eye' : 'bi-eye-slash'}`}></i>
                    </button>
                    </div>
                </div>
                <span className='text-danger'>{errors.confirmPassword}</span>
                </div>
                <div className="mb-3">
                    <div className="input-group border-bottom">
                        <span className="input-group-text border-0 bg-transparent">
                            <i className="bi bi-phone nav-icon theme-color"></i>
                        </span>
                        <input type="tel" className="form-control border-0 bg-transparent" placeholder="Mobile (xxxx - xxxx) *" name='phoneNumber' value={formValue.phoneNumber} onChange={handleChange} />
                    </div>
                    <span className='text-danger'>{errors.phoneNumber}</span>
                </div>  
                <div className='mb-3'>
                    <button type="submit" className="btn theme-bg-color text-white w-100">Sign Up</button>
                </div>
                <div className='mb-3 login-link'>Already have an account
                    <Link to="/login" className='theme-color'> Login</Link>
                </div>
                <div className='mb-3 text-center'>
                    <p className='connect-link'>Or connect using</p>
                    <ul className='d-flex list-unstyled justify-content-center'>
                        <li className='signup-social mx-2'><i className="bi bi-google"></i></li>
                        <li className='signup-social mx-2'><i className="bi bi-facebook"></i></li>
                        <li className='signup-social mx-2'><i className="bi bi-twitter"></i></li>
                        <li className='signup-social mx-2'><i className="bi bi-linkedin"></i></li>
                    </ul>
                </div>
            </form>

        </div>
    )
}

export default SignUp;

