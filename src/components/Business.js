/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './css/business.css';

const Business = () => {
  return (
    <div className='container'>
        <section className='img'>
            <img src='../images/eg.jpg' width='100%'/>
        </section>
        <section className='imgdata'>
            <h1> Contour Island Resort And Spa </h1>
            <span className='second'><b> Category : </b> Hotel, Spa & Massage </span><br/>
            <span className='third'><b> Area : </b> Vythiri </span><br/>
            <span className='forth'> Resorts Beauty Spas </span><br/>
            <button className='btndata'> Show The Contact Details </button>
        </section>
    </div>
  )
}

export default Business