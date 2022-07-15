import React, { useState } from 'react';
import './css/main.css';
import { BiSortAlt2 } from "react-icons/bi";
import Card from './Card';
import Business from './Business';
import Deals from './Deals';
import { NavLink } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import { AiOutlineCaretDown,AiOutlineClose } from "react-icons/ai";

const Main = () => {

  const [isClicked, setIsClicked] = useState(false);
  const filterHandler = () => {
    if(isClicked === false)
    {
      setIsClicked(true);
      
    }
    else {
      setIsClicked(false);
      
    }
  }

  const [isClosed, setIsClosed] = useState(false);
  const closeHandler = () => {
    if(isClosed === false)
    {
      setIsClosed(true)
    }
    else {
      setIsClicked(false)
    }
  }
  return (
    <main className='main-div'>
      <div className='sort-div'>
      <div className='filter'>
          <span className='filter-btn hide' onClick={filterHandler}> Filter</span>
        </div>
        <div className='sort'>
          <span className='sort-icon'><BiSortAlt2 /> </span>Sort <span className='sort-icon'> <AiOutlineCaretDown /></span>
          <span className='sort-dropdown'> Relevance <br/> popularity</span>
        </div>
      </div>
      <div>
        <br/>
        <br/>
      <div className={isClicked ?'sidenav show' : 'sidenav hide'}>
        <div className='filt'>
          <span className='name'> Filter </span>
          <span className='closebtn' onClick={closeHandler}> <AiOutlineClose /></span>
        </div>
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
            <br/>
  
        </div>
      </div>

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
              <NavLink to='/components/business' className='a1'> Businesses </NavLink> 
              <NavLink to='/components/deals' className='a2'> Deals </NavLink>
            </div>
            <br/><br/>
            <div className='body-data'>
              <Routes>
                <Route path='/components/business' element={<Business/>} />
                <Route path='/components/deals' element={<Deals />} />
              </Routes>
            </div>

        </div>
      </section>
      

      <br/>
      </div>
    </main>
  )
}

export default Main