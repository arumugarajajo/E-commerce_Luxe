import React from 'react'
import './LoginSignup.css';
export default function LoginSignup() {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' /><input type="email" placeholder='@gmail.com' /><input type="password" placeholder='password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account?   <span>Login</span> </p>
        <div className="loginsignup-agree">
          <input className='checkbox' type="checkbox" name='' id='' />
          <p>By Continuing, I agree to the terms of use & privacy policy. </p>
        </div>
      </div>
    </div>
  )
}
