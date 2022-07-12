import React, {useState} from 'react';
import './css/card.css';
import { AiOutlineDown,AiOutlineUp } from "react-icons/ai";

const Card = () => {
    const data = [ 
        {
            main : 'Consulting',
            others : ['Accountants','Architects','Astrologists','Civil','Contractors']
        },
        {
            main : 'Entertainment',
            others : ['Event Organizer']
        },
        {
            main : 'Hotel/Resorts',
            others : ['Hotel','Lodge']
        },
        {
            main : 'Electricians',
            others : ['Electrician']
        },
        {
            main : 'Plumber',
            others : ['Plumber']
        },
        {
            main : 'Tours & Travels',
            others : ['Tours & Travels']
        },
        {
            main : 'Veterinary',
            others : ['Cattles','Pet Shops','Pigs','Poultry Farms','Veterinary Clinics']
        },
        {
            main : 'Agriculture',
            others : ['Nursury','Plants & Seeds']
        },
        {
            main : 'Fashion & Appearls',
            others : ['Fancy','Jewellery','Purfumes','Watches & Clocks']
        },
        {
            main : 'Photography',
            others : ['Photographers']
        },
        {
            main : 'Supermarket',
            others : ['Supermarkets']
        },
        {
            main : 'Shops',
            others : ['DTP/Printing','Electricals','Financial Services','Furniture','Grocery']
        },

        {
            main : 'Tours & Travels',
            others : ['Tours & Travels']
        },
        {
            main : 'Veterinary',
            others : ['Cattles','Pet Shops','Pigs','Poultry Farms','Veterinary Clinics']
        },
        {
            main : 'Agriculture',
            others : ['Nursury','Plants & Seeds']
        },
        {
            main : 'Fashion & Appearls',
            others : ['Fancy','Jewellery','Purfumes','Watches & Clocks']
        },
        {
            main : 'Photography',
            others : ['Photographers']
        },
        {
            main : 'Supermarket',
            others : ['Supermarkets']
        },
        {
            main : 'Shops',
            others : ['DTP/Printing','Electricals','Financial Services','Furniture','Grocery']
        },
        {
            main : 'Tours & Travels',
            others : ['Tours & Travels']
        },
        {
            main : 'Veterinary',
            others : ['Cattles','Pet Shops','Pigs','Poultry Farms','Veterinary Clinics']
        },
        {
            main : 'Agriculture',
            others : ['Nursury','Plants & Seeds']
        },
        {
            main : 'Fashion & Appearls',
            others : ['Fancy','Jewellery','Purfumes','Watches & Clocks']
        },
        {
            main : 'Photography',
            others : ['Photographers']
        },
        {
            main : 'Supermarket',
            others : ['Supermarkets']
        },
        {
            main : 'Shops',
            others : ['DTP/Printing','Electricals','Financial Services','Furniture','Grocery']
        },
    ];


    const [isIndex ,setIsIndex] = useState(null);
    const [isClicked , setIsClicked] =useState(false);

    const dropdownHandler =(index) =>{
        console.log(index);
        if(isClicked === true)
        {
            setIsClicked(false);
        }
        else{
            setIsClicked(true);
            setIsIndex(index);
        }
      
    }
  return (
    <div>
        <div class="card">
            <h4 className='card-title'><b> Category </b></h4>
            <div className='card-below'>
            { data.map((d , index)=> {
                return(
                    <div> 
                    <span> <input type='checkbox'/> {d.main}
                        <button className='dwn' onClick={() => dropdownHandler(index)}> <span className='icon-dwn'>{isClicked ? <AiOutlineUp/> :<AiOutlineDown />}</span> </button>
                        <div className={isClicked && isIndex === index ? 'show' :'hide'}>
                        <input type='checkbox' /> {d.others[0]} <br></br>
                        <input type='checkbox' /> {d.others[1]} <br></br>
                        <input type='checkbox' /> {d.others[2]}  <br></br>
                        <input type='checkbox' /> {d.others[3]} <br></br>
                        <input type='checkbox' /> {d.others[4]}  <br></br>
                        </div>
                    </span>
                    </div>
                )})
            }
            </div>
        </div>
    </div>
  )
}

export default Card