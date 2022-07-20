/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
// import "./css/footer.css";
import { AiFillFacebook ,AiOutlineTwitter,AiFillYoutube,AiFillLinkedin,AiFillInstagram,AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
    <div className='foot-div container text-white'>
    <div className='main-foot d-lg-flex row justify-content-between pt-4'>
        <div className='foot1 p-2 col-lg-4 col-md-6 order-lg-first order-sm-last'>
            <span> <b className='fs-5 fw-bold'> KEEP IN TOUCH </b></span><br/>
            <span className='fs-3 pt-1'> <AiFillFacebook /> <AiOutlineTwitter /> <AiFillYoutube /> <AiFillLinkedin /> <AiFillInstagram /> </span>
            <br/>
            <div className='d-flex pt-3 '>
                <img src='../images/appstore.png' className='w-50 pe-1' />
                <img src='../images/googleplay.png' className='w-50 ps-1' />
            </div>
            <br/><br/>
            <div className='pt-1'>
                <h2 className='fs-5 fw-bold pb-1'>USEFUL LINKS</h2>
                <a href='./' className='text-decoration-none text-white'>Contact Us </a><br/>
                <a href='./' className='text-decoration-none text-white '>About Us </a><br/>
                <a href='./' className='text-decoration-none text-white '>Privacy Policy </a><br/>
                <a href='./' className='text-decoration-none text-white '>Terms and Conditions </a><br/>
            </div>
        </div>

        <div className='foot2 p-2 col-lg-4 col-md-6 order-lg-2 order-sm-first'>
            <b className='fs-5 fw-bold'>LISTING BY CATEGORIES </b>
            <br/>
            <div className='lh-lg word'>
                <a href='./' className='text-decoration-none text-white '>Consulting </a>
                <a href='./' className='text-decoration-none text-white '> Entertainment </a>
                <a href='./' className='text-decoration-none text-white '> Hotels/Resorts</a>
                <a href='./' className='text-decoration-none text-white '> Electricians </a>
                <a href='./' className='text-decoration-none text-white '> Plumbers </a>
                <a href='./' className='text-decoration-none text-white word-spacing '> Tour & Travels </a>
                <a href='./' className='text-decoration-none text-white '> Veterinary </a>
                <a href='./' className='text-decoration-none text-white '> Agriculture </a>
                <a href='./' className='text-decoration-none text-white word-spacing  '> Fashion & Apparels </a>
                <a href='./' className='text-decoration-none text-white '> Photography </a>
                <a href='./' className='text-decoration-none text-white '> SuperMarket </a>
                <a href='./' className='text-decoration-none text-white '> Shops </a>
                <a href='./' className='text-decoration-none text-white '> Medical </a>
                <a href='./' className='text-decoration-none text-white word-spacing '> Fish & Meat </a>
                <a href='./' className='text-decoration-none text-white '> Domestic Services </a>
                <a href='./' className='text-decoration-none text-white '> Books </a>
                <a href='./' className='text-decoration-none text-white '> Dance </a>
                <a href='./' className='text-decoration-none text-white '> Automobile </a>
                <a href='./' className='text-decoration-none text-white '> Repairs/Services </a>
                <a href='./' className='text-decoration-none text-white word-spacing '> Restaurants & Bakery </a>
                <a href='./' className='text-decoration-none text-white word-spacing '> Sports & Recreations </a>
                <a href='./' className='text-decoration-none text-white '> Music </a>
                <a href='./' className='text-decoration-none text-white '> Education </a>
                <a href='./' className='text-decoration-none text-white '> Lifestyle </a>
                <a href='./' className='text-decoration-none text-white '> Driver </a>
                <a href='./' className='text-decoration-none text-white '> Building </a>
                <a href='./' className='text-decoration-none text-white word-spacing '> Cloth & Footware </a>
            </div>
        </div>
        
        <div className='foot3 p-2 col-lg-4 col-md-6 order-lg-last order-sm-2'>
                <b className='fs-5 fw-bold'> BOOK PROFESSIONALS FROM YOUR PHONE </b>
                <img src='../images/mobile.png' className='mw-100'/>
        </div>
    </div>
    </div>
    <div className='bg-danger'>
        <div className='container text-white'>
        <div className='foot4 d-lg-flex row justify-content-between fs-6 p-3'>
            <span className='col-md-6 col-sm-12'>
                Copyright <span className='dwn'><AiOutlineCopyright/></span> 2020 Haavoo. ALL RIGHTS RESERVED 
            </span>
            <span className='col-md-6 col-sm-12'>
                Designed and Developed By <a href='tarkashilpa.com' className=' text-white'>tarkashilpa.com</a>
            </span>
        </div>
        </div>
    </div>
</footer>
  )
}

export default Footer;