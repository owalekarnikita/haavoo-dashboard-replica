/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './css/main.css';
import { BiSortAlt2 } from "react-icons/bi";
import Card from './Card';
import Business from './Business';
import Deals from './Deals';
import { NavLink } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import { AiOutlineClose} from "react-icons/ai";
import Dropdown from 'react-bootstrap/Dropdown';
// AiOutlineCaretDown 
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
      <div className='shadow'>
        <div className='container'>
          <div className='d-flex justify-content-between pt-2 pb-2'>
            <div className=''>
              <span className='filter-btn d-lg-none d-block fw-bold fs-6' onClick={filterHandler}> Filter</span>
            </div>
            <div className=''>
             <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic" className='fw-bold fs-6'>
                <BiSortAlt2 /> Sort By 
                </Dropdown.Toggle>
                <Dropdown.Menu className=''>
                  <Dropdown.Item href="#/action-1" className=''> Relevance</Dropdown.Item>
                  <Dropdown.Item href="#/action-2"> Popularity</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            </div>
        </div>
      </div>
      <div>
        <br/>
        <br/>
      <div className={isClicked ?' show h-100 position-fixed top-0 bg-white p-2 pt-3 overflow-auto' : 'sidenav hide'}>
        <div className='d-flex justify-content-between ps-3 pe-3 pt-0 mt-0 pb-3'>
          <span className='text-danger fw-bold'> Filter </span>
          <span className='' onClick={closeHandler}> <AiOutlineClose /></span>
        </div>
        <div className='card1'>
            <Card />  
        </div>
      </div>
              {/* Main section */}
      <div className='main-sec container'>
        <div className='d-flex justify-content-between gap-4'>
          <div className='col-lg-3 col-0 d-lg-block d-none'>
            <Card />
          </div>

          <div className='col-lg-9 col-sm-12'>
              <div className='body-navbar d-flex justify-content-between flex-fill'> 
                <NavLink to='/components/business' className='col-6 text-center border p-3 rounded-start text-decoration-none text-black fw-bold fs-4'> Businesses </NavLink> 
                <NavLink to='/components/deals' className='col-6 text-center border p-3 rounded-end text-decoration-none text-black fw-bold fs-4'> Deals </NavLink>
              </div>
              <br/>
              <div className='body-data'>
                <Routes>
                  <Route path='/components/business' element={<Business/>} />
                  <Route path='/components/deals' element={<Deals />} />
                </Routes>
              </div>
          </div>
        </div>
      </div>
      

      <br/>
      </div>
    </main>
  )
}

export default Main