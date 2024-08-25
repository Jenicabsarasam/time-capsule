import React, { useState } from 'react';
import { FaUser, FaLock, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Form } from 'react-bootstrap';
import '../Styles/SignIn.css';
import { useNavigate } from 'react-router';
import Axios from 'axios';

const SignIn = () => {
  const [action, setAction] = useState('login');
  const navigate = useNavigate();


  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [repass, setRepass] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [loginStatus, setLoginStatus] = useState('');
  const [registerStatus, setRegisterStatus] = useState('');

  const registrationLink = () => setAction('register');
  const loginLink = () => setAction('login');

  // Login validation
  const validateLogin = (event) => {
    event.preventDefault();
    if (username.trim() === "") {
      alert("Enter username");
      return;
    } else if (password.trim() === "") {
      alert('Enter your registered password');
      return;
    }
    
    login(); 
  };

  const clearLogin = () => {
    document.getElementById('form1').reset();
  };

  // Register validation
  const validateRegister = (event) => {
    event.preventDefault();

    if (
      username.trim() === '' ||
      mobile.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      repass.trim() === ''
    ) {
      alert('Fill out all fields');
      return;
    }

    if (mobile.length !== 10) {
      alert('Mobile should be 10 digits');
      return;
    }

    if (!isChecked) {
      alert('You must agree to the terms and conditions');
      return;
    }

    // Password validation
    if (password.length < 8) {
      alert('Password must have at least 8 characters');
      return;
    }

    const letterRegex = /[A-Za-z]/;
    const digitRegex = /\d/;
    const specialRegex = /[@$!#*?&%]/;

    if (!letterRegex.test(password)) {
      alert('Password should have at least one letter');
      return;
    }

    if (!digitRegex.test(password)) {
      alert('Password should have at least one digit');
      return;
    }

    if (!specialRegex.test(password)) {
      alert('Password should have at least one special character');
      return;
    }

    if (password !== repass) {
      alert('Confirm password does not match');
      return;
    }

    register();
    alert('Successfully Registered. Login to Continue');
    clearRegister();
    setAction('login');
  };

  const clearRegister = () => {
    setUsername('');
    setEmail('');
    setMobile('');
    setPassword('');
    setRepass('');
  };

  // Register function
  const register = () => {
    Axios.post('http://localhost:4000/register', {
      username: username,
      email: email,
      mobile: mobile,
      password: password,
    }).then((response) => {
      setRegisterStatus(response.data.message || "ACCOUNT CREATED SUCCESSFULLY!");
    }).catch((error) => {
      console.error("There was an error!", error);
      alert("There was an error connecting to the server!");
    });
  };

  // Login function
  const login = () => {
    Axios.post('http://localhost:4000/login', {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.success) {
        setLoginStatus('Login successful');
        clearLogin();
        navigate('/Dashboard'); // Redirect to dashboard page on successful login
      } else {
        setLoginStatus(response.data.message);// Show the message from the backend
        clearLogin(); 
      }
    }).catch((error) => {
      console.error("There was an error!", error);
      setLoginStatus('Error connecting to the server');
    });
  };

  return (
    <>
      <div className='body'>
        <div className={`wrapper ${action === 'register' ? 'active' : ''}`}>
          <div className={`form-box login ${action === 'login' ? '' : 'hide'}`}>

            <Form className='form' id='form1' onSubmit={validateLogin}>
              <h1 className='heading'>Login</h1>
              <div className="input-box">
                <input type="text" placeholder="Username" id='username' onChange={(e) => setUsername(e.target.value)} />
                <FaUser className='icon' />
              </div>
              <div className="input-box">
                <input type="password" placeholder="Password" id='password' onChange={(e) => setPassword(e.target.value)} />
                <FaLock className='icon' />
              </div>
              <div className='remember-forgot'>
                <a href='#'>Forgot password?</a>
              </div>
              <button className='form-btn' type='submit'>Login</button>
              <div className='register-link'>
                <p>Don't have an account? <a href='#' onClick={registrationLink}>Register</a></p>
                <p>{loginStatus}</p>
              </div>
            </Form>
          </div>
          <div className={`form-box register ${action === 'register' ? '' : 'hide'}`}>

            <Form className="form" id="form2" onSubmit={validateRegister}>
              <h1 className="heading">Register</h1>
              <div className="input-box">
                <input type="text" placeholder="Username" id="name" value={username} onChange={(e) => setUsername(e.target.value)} />
                <FaUser className='icon' />
              </div>
              <div className="input-box">
                <input type="email" placeholder="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <MdEmail className='icon' />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Mobile number" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                <FaPhone className='icon' />
              </div>
              <div className="input-box">
                <input type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <FaLock className='icon' />
              </div>
              <div className="input-box">
                <input type="password" placeholder="Confirm Password" id="repass" value={repass} onChange={(e) => setRepass(e.target.value)} />
                <FaLock className='icon' />
              </div>
              <div className="remember-forgot">
                <label>
                  <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
                  I agree to the <a href='#'>Terms and Conditions</a>
                </label>
              </div>
              <button className="form-btn" type="submit">Register</button>
              <button className="form-btn" type='button' onClick={clearRegister} style={{marginTop:'7px'}}>Clear</button>
              <div className='register-link'>
                <p>Already have an account? <a href='#' onClick={loginLink}>Login</a></p>
                <p>{registerStatus}</p>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
