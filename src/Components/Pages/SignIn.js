import React from 'react';
import clock from './Images/Vintage Clock _ Dark Aesthetic.jpeg'
import { Button,Form} from 'react-bootstrap';
import './SignIn.css'

const SignIn = () => {
  const validate=(event)=>{
    event.preventDefault();
    const name=document.getElementById('name').value;
    const age=document.getElementById('age').value;
    const mobile=document.getElementById('mobile').value;
    const email=document.getElementById('email').value;
    const pass=document.getElementById('pass').value;
    const repass=document.getElementById('repass').value;
    
    if((name.trim()==="")||(age.trim()==="")||(mobile.trim()==="")||(email.trim()==="")||(pass.trim()==="")||(repass.trim()==="")){
      alert('Fill out all fields');
      return false;
    }
    if(mobile.length!==10){
      alert('Mobile should be 10 digits');
      return false;
    }
    
    //password validation
    if(pass.length<8){
      alert('Password must have 8 char');
      return false;
   }
    const letterRegex=/[A-Za-z]/;
    const digitRegex=/\d/;
    const specialRegex=/[@$!#*?&%]/;
    if(!letterRegex.test(pass)){
        alert('Password should have a letter');
        return false;
    }
    if(!digitRegex.test(pass)){
        alert('Password should have atleast one digit');
        return false;
      
    }
    if(!specialRegex.test(pass)){
        alert('Password should have special character');
        return false;
        
    }
    if(pass!==repass){
      alert('Confirm password not matching');
      return false;
    }
    
    alert('Successfully submitted'); 
    clear();
    
  };
  const clear=()=>{
    document.getElementById('form').reset();
  };
  return (
    <>
      <div class="d-flex flex-row main">
      <div class="p-2 bd-highlight" className='box1'>
        <img src={clock} alt='pink bg' className='subBox1'/> 
      </div>
      <div class="p-2 bd-highlight" className='box2'>
        <div className='subBox2'>
          <Form className='form' id='form' onSubmit={validate}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter full name" id='name' />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" placeholder="Enter age" id='age' />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="text" placeholder="Enter mobile number" id='mobile'/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" id='email'/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" id='pass' />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Retype Password" id='repass'/>
            </Form.Group>
            <div className='text-center'>
              <Button variant="secondary" type="submit" className='mx-3'>
                Sign Up
              </Button>
              <Button variant="secondary" type="button" onClick={clear}>
                Cancel
              </Button>
            </div>
      </Form>      
        </div>        
      </div> 
    </div>  
    </>
  )
}

export default SignIn
