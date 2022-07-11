/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "./css/footer.css";
import { AiFillFacebook ,AiOutlineTwitter,AiFillYoutube,AiFillLinkedin,AiFillInstagram,AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='div'>
        <div className='main-foot'>
            <section className='foot1'>
                <span> <b> KEEP IN TOUCH </b></span><br/>
                <span className='font'> <AiFillFacebook /> <AiOutlineTwitter /> <AiFillYoutube /> <AiFillLinkedin /> <AiFillInstagram /> </span>
                <br/>
                <span>
                    <img src='../images/appstore.png' width='48%'/>&nbsp;&nbsp;
                    <img src='../images/googleplay.png' width='48%'/>
                </span>
                <br/>
                <span>
                    <b>USEFUL LINKS</b>
                    <br/>
                    <a href='./'>Contact Us </a><br/>
                    <a href='./'>About Us </a><br/>
                    <a href='./'>Privacy Policy </a><br/>
                    <a href='./'>Terms and Conditions </a><br/>
                </span>
            </section>

            <section className='foot2'>
                <b>LISTING BY CATEGORIES </b>
                <br/>
                    <a href='./'>Consulting </a>
                    <a href='./'> Entertainment </a>
                    <a href='./'> Hotels/Resorts</a>
                    <a href='./'> Electricians </a>
                    <a href='./'> Plumbers </a>
                    <a href='./'> Tour and Travels </a>
                    <a href='./'> Veterinary </a>
                    <a href='./'> Agriculture </a>
                    <a href='./'> Fashion and Apparels </a>
                    <a href='./'> Photography </a>
                    <a href='./'> SuperMarket </a>
                    <a href='./'> Shops </a>
                    <a href='./'> Medical </a><br/>
                    <a href='./'> Fish and Meat </a><br/>
                    <a href='./'> Domestic Services </a>
                    <a href='./'> Books </a>
                    <a href='./'> Dance </a>
                    <a href='./'> Automobile </a>
                    <a href='./'> Repairs/Services </a><br/>
                    <a href='./'> Restaurants & Bakery </a><br/>
                    <a href='./'> Sports & Recreations </a>
                    <a href='./'> Music </a>
                    <a href='./'> Education </a>
                    <a href='./'> Lifestyle </a>
                    <a href='./'> Driver </a>
                    <a href='./'> Building </a><br/>
                    <a href='./'> Cloth & Footware </a>
            </section>

            <section className='foot3'>
                    <b> BOOK PROFESSIONALS FROM YOUR PHONE </b>
                    <img src='../images/mobile.png' />
            </section>
        </div>
        <div className='foot4'>
            <section className='one'>
                Copyright <span className='dwn'><AiOutlineCopyright/></span> 2020 Haavoo. ALL RIGHTS RESERVED 
            </section>
            <section className='two'>
                Designed and Developed By <a href='tarkashilpa.com'>tarkashilpa.com</a>
            </section>
        </div>
    </div>
  )
}

export default Footer;