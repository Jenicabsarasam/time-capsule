import React, { useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Form} from 'react-bootstrap';
import './SignIn.css'

const SignIn = () => {
  const [action, setAction] = useState('login'); // Initialize action to 'login'
  const registrationLink = () => {
    setAction('register');
  };
  const loginLink = () => {
    setAction('login');
  };  
  return (
    <>
       <div className='body'>
        <div className={`wrapper ${action === 'register' ? 'active' : ''}`}>
          <div className={`form-box login ${action === 'login' ? '' : 'hide'}`}>
            <Form className='form' id='form'>
              <h1 className='heading'>Login</h1>
              <div className="input-box">
                <input type="text" placeholder="Username" id='name' />
                <FaUser className='icon'/>
              </div>
              <div className="input-box">
                <input type="password" placeholder="Password" id='pass' />
                <FaLock className='icon'/>
              </div>          
              <div className='remember-forgot'>
                <label>
                  <input type='checkbox'/>Remember me 
                </label>
                <a href='#'>Forgot password?</a>
              </div>
              <button className='form-btn' type='submit'>Login</button>
              <div className='register-link'>
                <p>Don't have an account? <a href='#' onClick={registrationLink}>Register</a></p>
              </div>
            </Form>
          </div>
          <div className={`form-box register ${action === 'register' ? '' : 'hide'}`}>
            <Form className='form' id='form'>
              <h1 className='heading'>Register</h1>
              <div className="input-box">
                <input type="text" placeholder="Username" id='name' />
                <FaUser className='icon'/>
              </div>
              <div className="input-box">
                <input type="email" placeholder="Email" id='email'/>
                <MdEmail className='icon' />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Mobile number" id='mobile'/>
              </div>
              <div className="input-box">
                <input type="password" placeholder="Password" id='pass' />
                <FaLock className='icon'/>
              </div>   
              <div className="input-box">
                <input type="password" placeholder="Confirm Password" id='repass'/>
                <FaLock className='icon'/>
              </div>       
              <div className='remember-forgot'>
                <label>
                  <input type='checkbox'/>I agree to the terms and conditions
                </label>
              </div>
              <button className='form-btn' type='submit'>Register</button>
              <div className='register-link'>
                <p>Already have an account? <a href='#' onClick={loginLink}>Login</a></p>
              </div>
            </Form>
          </div>
        </div>
      </div>   
    </>
  )
}

export default SignIn