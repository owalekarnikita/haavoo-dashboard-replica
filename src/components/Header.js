/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import "./css/header.css";
import { IoMdPin} from "react-icons/io";
import { AiFillCaretDown } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Login from './Login';

const Header = () => {

    const [isClicked,setIsClicked] = useState(false);
    const clickHandler = () => {
        if(isClicked === true)
        {
            setIsClicked(false);
        }
        else {
            setIsClicked(true);
        }
    }

    const[isLogin, setIsLogin] = useState(false);
    const loginHandler = () => {
        if(isLogin=== true)
        {
            setIsLogin(false);
        }
        else {
            setIsLogin(true);
        }
    }
 return (
    <header className='main-head'>
        <section className='sec1'>
            <span className='f1'> Customer Care: +91 90747 97177</span>
            <span className='f2'></span>
            <span className='f3'> 
                <span className='f3-hide'><span className='icon'><IoMdPin /> </span> Select Location &nbsp;</span>
                <span className='visible'>
                    <span className='hamburger' onClick={clickHandler}> <GiHamburgerMenu style={{ fontSize: "36px" }}/></span>  
                    <span className='top-select'>Kozhikode <span className='down'><AiFillCaretDown/></span></span>
                </span> 
            </span>
            <div className={isLogin ?'show-login login-div' : 'hide-login login-div'}>
                    <Login />
            </div>
            <div className={isClicked ? 'ham-class show' : 'ham-class hide'}>
                <Link to='/'> Home </Link>
                <hr></hr>
                <Link to='/about'> About </Link>
                <hr></hr>
                <Link to='/contact'> Contact</Link>
                <br/>
                <button className='btn1'> Register My Business </button> &nbsp;
            </div>
            <br/><br/>
            <span className='sp1'> <img src={require('./images/logo.png')} alt='logo'/></span>
            <span className='sp2'> 
                <a href='./'> Home </a> |
                <a href='./'> About </a> |
                <a href='./'> Contact</a>
            </span>
            <span className='sp3'>        
                <button className='btn1'> Register My Business </button> &nbsp;
                <button className='btn2' onClick={loginHandler}>Login/Sign Up <span className='dwn'><AiFillCaretDown/></span></button>
            </span>
            <br/><br/><br/>
            <span className='search'>
                <select>
                    <option>Any Area</option> 
                    <option>Adivaram Pudupadi</option>
                    <option>Abhiyagiri</option>
                    <option>Adivaram Pudupadi</option>
                    <option>Abhiyagiri</option>
                    <option>Adivaram Pudupadi</option>
                    <option>Abhiyagiri</option>
                    <option>Adivaram Pudupadi</option>
                </select>
                
                <div className='searchbtn'>
                    <input type='search' id='search' placeholder='Search for anything'/>
                    <button> <span className='dwn'><FiSearch/></span></button>
                </div>
            </span>
        </section>
    </header>
  )
}

export default Header