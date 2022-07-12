/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "./css/header.css";
import { IoMdPin} from "react-icons/io";
import { AiFillCaretDown } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <div className='main-head'>
        <section className='sec1'>
            <span className='f1'> Customer Care: +91 90747 97177</span>
            <span className='f2'></span>
            <span className='f3'> <span className='icon'><IoMdPin /> </span>Select Location &nbsp;
                    Kozhikode <span className='down'><AiFillCaretDown/></span>
            </span>
        </section>
        <br/>
        <section className='sec2'>
            <span className='sp3'><img src='./images/logo.png'/></span>
            <span className='sp1'>
                <a href='./'> Home </a> |
                <a href='./'> About </a> |
                <a href='./'> Contact</a>
                <button className='btn1'> Register My Business </button> &nbsp;
                <button className='btn2'>Login/Sign Up <span className='dwn'><AiFillCaretDown/></span></button>
            </span>
        </section>
        <br/>
        <section className='sec3'>
            <select>
                <option>Abhiyagiri</option>
                <option>Adivaram Pudupadi</option>
                <option>Abhiyagiri</option>
                <option>Adivaram Pudupadi</option>
                <option>Abhiyagiri</option>
                <option>Adivaram Pudupadi</option>
                <option>Abhiyagiri</option>
                <option>Adivaram Pudupadi</option>
            </select>
            &nbsp;
            <div className='searchbtn'>
                <input type='search' id='search' placeholder='Search'/>
                <button> <span className='dwn'><FiSearch/></span></button>
            </div>
        </section>
    </div>
  )
}

export default Header