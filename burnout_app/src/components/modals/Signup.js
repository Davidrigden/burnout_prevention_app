import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import LoggedOutNavBar from './../NavBar/LoggedOutNavBar';
import { Link } from 'react-router-dom';


const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
 
  return (
    <div>
      <LoggedOutNavBar />
      <div className='form-content-right'>
        <form onSubmit={handleSubmit} className='form' noValidate>
          <h1>
            Get started with us today! Create your account by filling out the
            information below.
          </h1>
          <div className='form-inputs'>
            <label className='form-label'>First Name</label>
            <input
              className='form-input'
              type='text'
              name='FirstName'
              placeholder='Enter your username'
              value={values.FirstName}
              onChange={handleChange}
            />
            {errors.FirstName && <p>{errors.FirstName}</p>}
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Last Name</label>
            <input
              className='form-input'
              type='text'
              name='LastName'
              placeholder='Enter your username'
              value={values.LastName}
              onChange={handleChange}
            />
            {errors.LastName && <p>{errors.LastName}</p>}
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Email</label>
            <input
              className='form-input'
              type='email'
              name='email'
              placeholder='Enter your email'
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Password</label>
            <input
              className='form-input'
              type='password'
              name='password'
              placeholder='Enter your password'
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Confirm Password</label>
            <input
              className='form-input'
              type='password'
              name='password2'
              placeholder='Confirm your password'
              value={values.password2}
              onChange={handleChange}
            />
            {errors.password2 && <p>{errors.password2}</p>}
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Phone Number</label>
            <input
              className='form-input'
              type='phone'
              name='Phone'
              placeholder='Enter your phone'
              value={values.phone}
              onChange={handleChange}
            />
            
          </div>
          <button className='form-input-btn' type='submit'>
            Sign up
          </button>
          <span className='form-input-login'>
            Already have an account? <Link className="action-link" to="/login"> Login Here</Link>
          </span>
        </form>
      </div>
    </div>

  );
};

export default FormSignup;