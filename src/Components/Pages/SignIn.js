import React, { useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Form} from 'react-bootstrap';
import './SignIn.css'

const SignIn = () => {
  const [action, setAction] = useState('login'); 
  const registrationLink = () => {
    setAction('register');
  };
  const loginLink = () => {
    setAction('login');
  };  
  //Login validation
  const validateLogin=(event)=>{
    event.preventDefault();
    const name=document.getElementById('name').value;
    const pass=document.getElementById('pass').value;    
    if(name.trim()===""){
      alert("Enter username");
      return false;
    }
    else if(pass.trim()===""){
      alert('Enter your registered password');
      return false;
    }    
    if (!isChecked) {
      alert('You must agree to the terms and conditions');
      return false;
    }
    alert('Have to verify with database'); 
    clearLogin();
    
  };
  const clearLogin=()=>{
    document.getElementById('form1').reset();
  };
  //Register Validation

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [pass, setPass] = useState('');
  const [repass, setRepass] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const validateRegister = (event) => {
    event.preventDefault();

    if (
      name.trim() === '' ||
      mobile.trim() === '' ||
      email.trim() === '' ||
      pass.trim() === '' ||
      repass.trim() === ''
    ) {
      alert('Fill out all fields');
      return false;
    }

    if (mobile.length !== 10) {
      alert('Mobile should be 10 digits');
      return false;
    }
    if(!isChecked){
      alert('You must agree to the terms and conditions');
      return false;
    }
    // Password validation
    if (pass.length < 8) {
      alert('Password must have at least 8 characters');
      return false;
    }

    const letterRegex = /[A-Za-z]/;
    const digitRegex = /\d/;
    const specialRegex = /[@$!#*?&%]/;

    if (!letterRegex.test(pass)) {
      alert('Password should have at least one letter');
      return false;
    }

    if (!digitRegex.test(pass)) {
      alert('Password should have at least one digit');
      return false;
    }

    if (!specialRegex.test(pass)) {
      alert('Password should have at least one special character');
      return false;
    }

    if (pass !== repass) {
      alert('Confirm password does not match');
      return false;
    }

    alert('Successfully submitted');
    clearRegister();
  };

  const clearRegister = () => {
    setName('');
    setEmail('');
    setMobile('');
    setPass('');
    setRepass('');
  };

  return (
    <>
       <div className='body'>
        <div className={`wrapper ${action === 'register' ? 'active' : ''}`}>
          <div className={`form-box login ${action === 'login' ? '' : 'hide'}`}>
            <Form className='form' id='form1' onSubmit={validateLogin}>
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
          <Form className="form" id="form2" onSubmit={validateRegister}>
            <h1 className="heading">Register</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="input-box">
              <input
                type="email"
                placeholder="Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Mobile number"
                id="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                id="pass"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Confirm Password"
                id="repass"
                value={repass}
                onChange={(e) => setRepass(e.target.value)}
              />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />I agree to the <a href='#'>Terms and Conditions</a>
              </label>
            </div>
            <button className="form-btn" type="submit">
              Register
            </button>
    </Form>
          </div>
        </div>
      </div>   
    </>
  )
}

export default SignIn