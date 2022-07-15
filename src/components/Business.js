/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './css/business.css';

const Business = () => {

  let array = [
    {
      img : '../images/1.jpg',
      name : 'ADNOX Gents wear',
      cat : 'Clothes',
      area : 'Perinthalmanna',
      details : 'Exclusive collections of latest selections. Branded and semi branded items Complete Gents wear...'
    },
    {
      img : '../images/2.jpeg',
      name : 'Kairali Paints',
      cat : 'Paints',
      area : 'Edakkara',
      details : 'All sorts of paints available for commercial and residential. Major paints are Jotun paint, Asian P...'
    },
    {
      img : '../images/4.jpg',
      name : 'ADNOX Gents wear',
      cat : 'Clothes',
      area : 'Perinthalmanna',
      details : 'Exclusive collections of latest selections. Branded and semi branded items Complete Gents wear...'
    },
    {
      img : '../images/3.jpeg',
      name : 'Kairali Paints',
      cat : 'Paints',
      area : 'Edakkara',
      details : 'All sorts of paints available for commercial and residential. Major paints are Jotun paint, Asian P...'
    },
    {
      img : '../images/bg1.png',
      name : 'ADNOX Gents wear',
      cat : 'Clothes',
      area : 'Perinthalmanna',
      details : 'Exclusive collections of latest selections. Branded and semi branded items Complete Gents wear...'
    },
    {
      img : '../images/1.jpg',
      name : 'Kairali Paints',
      cat : 'Paints',
      area : 'Edakkara',
      details : 'All sorts of paints available for commercial and residential. Major paints are Jotun paint, Asian P...'
    }
   ];
  return (
        <div className='business'>
      { array.map((details,index) => {
        return (
          <div className='container'>
          <section className='img'>
          <img src={details.img} width='100%'/>
      </section>
      <section className='imgdata'>
          <h1> {details.name} </h1>
          <span className='second'><b> Category : </b> {details.cat} </span><br/>
          <span className='third'><b> Area : </b> {details.area} </span><br/>
          <span className='forth'> <p> {details.details}</p> </span>
          <button className='btndata'> Show The Contact Details </button>
      </section>
      </div>
        );
      }) }
      </div>
  )
}

export default Business