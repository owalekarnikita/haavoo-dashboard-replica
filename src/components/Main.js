import React from 'react';
import './css/main.css';
import { BiSortAlt2 } from "react-icons/bi";
import Card from './Card';
import Business from './Business';

const Main = () => {

  return (
    <div className='main-div'>
      <div className='sort-div'>
          <span className='sort-icon'><BiSortAlt2 /> </span>Sort
      </div>
      <div>
        <br/>

      <section className='main-sec'>
        <div className='card1'>
          <div class="card-first">
            <h4 className='card-title'><b>Type Business</b></h4>
            <div className='card-below2'> 
              <span> <input type='checkbox'/> Individual </span><br></br>
              <span> <input type='checkbox'/> Shop/Office </span>
            </div>
          </div>
          <br/>
          <Card />
        </div>

        <div className='aside'>
            <div className='body-navbar'> 
              <span className='a1'><a href='./'> Business </a> </span>
              <span className='a2'><a href='./'> Deals </a></span>
            </div>
            <br/><br/>
            <div className='body-data'>
              <Business />
            </div>

        </div>
      </section>
      

      <br/>
      </div>
    </div>
  )
}

export default Main