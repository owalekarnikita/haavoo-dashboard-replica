/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import "./css/header.css";
import { IoMdPin} from "react-icons/io";
import { AiFillCaretDown } from "react-icons/ai";
import {NavLink, Link} from 'react-router-dom';
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
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
    <header>
        <div className='container text-white main-head'>
            <div className='d-flex justify-content-between pt-2'>
                <span className='d-sm-none d-lg-block'> Customer Care: +91 90747 97177 </span>
                <span className='d-flex gap-1'>
                    <span className='d-lg-block d-sm-none mt-1'><span><IoMdPin /></span> Select Location </span> 
                    <span className='p-2 d-lg-none d-sm-block' onClick={clickHandler}> <GiHamburgerMenu style={{ fontSize: "36px" }}/></span> 
                    <span onClick={cityHandler} className='mt-lg-1 mt-sm-3'><span className='border rounded-pill p-1'>{cities[selectedCity]}<span className='down'><AiFillCaretDown/></span> </span></span>
                </span>

                <div className={isClicked ? 'd-block bg-black p-3 w-75 w-md-50 position-absolute mt-5 ms-5 rounded ' : 'd-none w-0'} id='#collapsibleNavbar'>
                    <Link to='/' className='text-white text-decoration-none'> Home </Link>
                    <hr></hr>
                    <Link to='/about' className='text-white text-decoration-none'> About </Link>
                    <hr></hr>
                    <Link to='/contact' className='text-white text-decoration-none'> Contact</Link>
                    <br/>
                    <button className='d-md-none d-sm-block rounded-pill bg-warning p-2 mt-2'> Register My Business </button> &nbsp;
                </div>

                <div className={isCity ? 'select-city city-show' : 'select-city city-hide'}>
                <span className='close-icon' onClick={cityCloseHandler}> <AiOutlineClose /></span>
                <h2 className='fs-5'> Select Your City or Location </h2>
                <span className='search-icon'><AiOutlineSearch /></span>
                <input type='name' placeholder='Search Your City' width='100%' className='search-input'/>
                <br/><br/>
                <h2 className='fs-5'> Popular Cities </h2>
                <div className='bgred'>
                {cities.map((city, index)=> {
                    return(
                    <div className='bgflex' key={index} onClick={cityNameHandler}>
                        <span className={selectedCity === index ?'done show-done' : 'done hide-done'}><MdDone /></span>
                        <span className='city-icon' onClick={() => selectCityHandler(index)} ><BsBuilding /> </span>
                        {/* <GiFishingBoat/>   */}
                        <br/>
                        <span className='city-name'> {city}</span>
                    </div>
                    );
                })}    
                </div>
                <br/>
                <h2 className='fs-5'> Other Cities </h2>
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

        </div>

        <div className='d-md-flex flex-md-row flex-sm-column justify-content-between pt-3'>
                <span className='order-lg-first order-sm-last'><img src={require('./images/logo.png')} alt='logo'/></span>
                <span className='pt-3 d-sm-none d-lg-block'>
                    <NavLink to='/' className='text-decoration-none text-white p-2'> Home </NavLink> |
                    <NavLink to='/about' className='text-decoration-none text-white p-2'> About Us </NavLink> |
                    <NavLink to='/contact' className='text-decoration-none text-white p-2'> Contact Us </NavLink>
                </span>
                
                <span className='pt-1 pb-3 d-flex order-lg-last order-sm-first'>
                    <button className='btn btn-warning rounded-pill text-white fw-bold d-md-block d-sm-none'> Register My Business </button>&nbsp;&nbsp;
                    <button className='btn btn-danger rounded-pill text-white fw-bold loginbtn'> Login/Sign Up <AiFillCaretDown/> </button>
                    <div className='login-div'>
                        <Login />
                    </div>
                </span>
            </div>

            <div className='d-md-flex justify-content-between flex-fill pb-3 pt-3 gap-3'>
                <select className='p-2 rounded col-md-4 col-12 '>
                    <option>Any Area</option> 
                    <option>Adivaram Pudupadi</option>
                    <option>Abhiyagiri</option>
                    <option>Adivaram Pudupadi</option>
                    <option>Abhiyagiri</option>
                    <option>Adivaram Pudupadi</option>
                    <option>Abhiyagiri</option>
                    <option>Adivaram Pudupadi</option>
                </select>
                <div className='searchbtn rounded col-md-8 col-12  bg-white d-flex mt-2 mt-md-0'>
                    <input type='search' id='search' placeholder='Search for anything' className='btn w-100 text-start'/>
                    <button className='btn bg-danger searchbtn p-2 ps-3 pe-3 rounded-end text-white fs-4'> <FiSearch/></button>
                </div>

            </div>
        </div>
    </header>
  )
}

export default Header