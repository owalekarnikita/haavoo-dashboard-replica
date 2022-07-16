/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import "./css/header.css";
import { IoMdPin} from "react-icons/io";
import { AiFillCaretDown } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Login from './Login';
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsBuilding } from "react-icons/bs";
import { MdDone } from "react-icons/md";

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

    const cities = ['Ernakulam', 'Kozhikode','Malappuram','Thiruananth apuram','Thrissur'];

    const [isCity,setIsCity] = useState(false);
    const cityHandler = () => {
        if(isCity === true)
        {
            setIsCity(false);
        }
        else {
            setIsCity(true);
        }
    }

    const cityCloseHandler = () => {
            setIsCity(false);
    }

    const [selectedCity, setSelectedCity] = useState(0);
    const selectCityHandler = (index) => {
        setSelectedCity(index);
        // console.log(index);
    }

    const cityNameHandler = () => {
        setIsCity(false);
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
                    <span className='top-select' onClick={cityHandler}>{cities[selectedCity]}<span className='down'><AiFillCaretDown/></span></span>
                    
                </span> 
            </span>
            <div className={isClicked ? 'ham-class show' : 'ham-class hide'}>
                <Link to='/'> Home </Link>
                <hr></hr>
                <Link to='/about'> About </Link>
                <hr></hr>
                <Link to='/contact'> Contact</Link>
                <br/>
                <button className='btn1'> Register My Business </button> &nbsp;
            </div>

            <div className={isCity ? 'select-city city-show' : 'select-city city-hide'}>
                <span className='close-icon' onClick={cityCloseHandler}> <AiOutlineClose /></span>
                <h2> Select Your City or Location </h2>
                <span className='search-icon'><AiOutlineSearch /></span>
                <input type='name' placeholder='Search Your City' width='100%' className='search-input'/>
                <br/>
                <h2> Popular Cities </h2>
                <div className='bgred'>
                {cities.map((city, index)=> {
                    return(
                    <div className='bgflex' key={index} onClick={cityNameHandler}>
                        <span className={selectedCity === index ?'done show-done' : 'done hide-done'}><MdDone /></span>
                        <span className='city-icon' onClick={() => selectCityHandler(index)} ><BsBuilding /> </span>
                        {/* <GiFishingBoat/>  */}
                        <br/>
                        <span className='city-name'> {city}</span>
                    </div>
                    );
                })}    
                </div>
                <h2> Other Cities </h2>
                <div className='cities'>
                    <span> Alappuzha </span>
                    <span> Idukki </span>
                    <span> Kannur </span>
                    <span> Kasargod </span>
                    <span> Kollam </span>
                    <span> Kottayam </span>
                    <span> Palakkad </span>
                    <span> Pathanamthitta </span>
                    <span> Wayanad </span>
                </div>
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
                <button className='btn2'>Login/Sign Up <span className='dwn'><AiFillCaretDown/></span></button>
                <div className='login-div'>
                    <Login />
                </div>
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