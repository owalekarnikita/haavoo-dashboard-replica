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
        <div className=''>
      { array.map((details,index) => {
        return (
          <div className='d-md-flex sm-row border rounded2 p-3 gap-2 mt-3' key={index}>
              <div className='col-md-6 col-sm-12 p-2'>
              <img src={details.img} width='100%' className='rounded2'/>
          </div>
          <div className='col-md-6 col-sm-12 p-2 lh-lg'>
              <h1 className='fs-5 fw-bold'> {details.name} </h1>
              <span className='fs-6'><b> Category : </b> <span className='text-secondary'>{details.cat} </span> </span><br/>
              <span className='fs-6'><b> Area : </b> <span className='text-secondary'> {details.area} </span> </span><br/>
              <span className='fs-7 text-secondary lh-base'> <p> {details.details}</p> </span>
              <button className='btn-danger btn rounded-pill'> Show The Contact Details </button>
          </div>
          </div>
        );
      }) }
      </div>
  )
}

export default Business