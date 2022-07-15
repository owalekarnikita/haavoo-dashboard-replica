/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './css/login.css';
import { MdPhoneIphone } from "react-icons/md";

const Login = () => {
  return (
    <div className='login-main'>
        <div className='div1'>
            <br></br>
            <img src='./../images/logo.png' width='60%' className='alg'/>
            <br/><br/>
            <img src='./../images/key-lock.png' width='90%' />
            <br/><br/>
        </div>
        <div  className='div2'>
          <br/>
            <h1> USER LOGIN </h1>
            <span className='phone'> <MdPhoneIphone /></span>
            <input type='num' placeholder=' Enter Your Mobile Number' required/><br/><br/>
            <button className='login'> Login </button>
            <br/><br/>
            <span className='reg'>
                <span className='spd'> Don't have a account ?</span> <a href='/'> Register Now </a>
            </span>
        </div>
    </div>
  )
}

export default Login;