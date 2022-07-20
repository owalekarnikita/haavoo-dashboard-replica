import React from 'react';
import './css/card.css';
import Accordion from 'react-bootstrap/Accordion';

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

  return (
    <div className=''>
        <div class="rounded2 border">
              <h4 className='fs-5 bg-secondary p-3 rounded-top '><b>Type Business</b></h4>
              <div className='p-2 text-secondary'> 
                <span className='p-3 fs-6'> <input type='checkbox'/> Individual </span><br></br>
                <span className='p-3 fs-6'> <input type='checkbox'/> Shop/Office </span>
              </div>
        </div>
        <br/>
        <div class="rounded2 border">
            <h4 className='bg-secondary p-3 rounded-top p-1'><b> Category </b></h4>
            <div className='p-3 text-secondary overflow-auto' style={{height : '600px'}}>
            { data.map((d , index)=> {
                return(
                    <Accordion className='text-secondary' flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className='text-secondary fs-6 fw-normal p-0 m-0'> <input type='checkbox' className=''/> &nbsp; {d.main}</Accordion.Header>
                            <Accordion.Body>
                            {d.others.map((a, index)=> {
                                                    return( <div key={index} className='text-secondary'><input type='checkbox'/> {a} <br></br></div>
                                                    );
                                                })}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                )})
            }
            </div>
        </div>
        <br/>
        <div class="rounded2 border ">
              <h4 className='fs-5 bg-secondary p-3 rounded-top' ><b> Area </b></h4>
              <div className=' overflow-auto text-secondary ps-2'  style={{ height : '500px'}}> 
                <span className='p-3 fs-6'> <input type='checkbox'/> Abdurahiman Nagar </span><br></br>
                <span className='p-3 fs-6'> <input type='checkbox'/> Adakkakundu </span><br/>
                <span className='p-3 fs-6'> <input type='checkbox'/> Akkaparamba </span><br></br>
                <span className='p-3 fs-6'> <input type='checkbox'/> Alankode </span><br></br>
                <span className='p-3 fs-6'> <input type='checkbox'/> Alathiyur </span><br></br>
                <span className='p-3 fs-6'> <input type='checkbox'/> Aliparamba </span><br></br>
                <span className='p-3 fs-6'> <input type='checkbox'/> Amarambalam </span><br></br>
                <span className='p-3 fs-6'> <input type='checkbox'/> Amarambalam South </span><br></br>
                <span className='p-3 fs-6'> <input type='checkbox'/> Amayur </span><br></br>
                <span className='p-3 fs-6'> <input type='checkbox'/> Abdurahiman Nagar </span><br></br>
                <span className='p-3 fs-6'> <input type='checkbox'/> Adakkakundu </span><br/>
                <span className='p-3 fs-6'> <input type='checkbox'/> Akkaparamba </span><br></br>
                <span className='p-3 fs-6'> <input type='checkbox'/> Alankode </span><br></br>
                <span className='p-3 fs-6'> <input type='checkbox'/> Alathiyur </span><br></br>
                <span className='p-3 fs-6'> <input type='checkbox'/> Aliparamba </span><br></br>
                <span className='p-3 fs-6'> <input type='checkbox'/> Amarambalam </span><br></br>
                <span className='p-3 fs-6'> <input type='checkbox'/> Amarambalam South </span><br></br>
                <span className='p-3 fs-6'> <input type='checkbox'/> Amayur </span><br></br>
                <span className='p-3 fs-6'> <input type='checkbox'/> Abdurahiman Nagar </span><br></br>
                <span className='p-3 fs-6'> <input type='checkbox'/> Adakkakundu </span><br/>
                <span className='p-3 fs-6'> <input type='checkbox'/> Akkaparamba </span><br></br>
                <span className='p-3 fs-6'> <input type='checkbox'/> Alankode </span><br></br>
                <span className='p-3 fs-6'> <input type='checkbox'/> Alathiyur </span><br></br>
                <span className='p-3 fs-6'> <input type='checkbox'/> Aliparamba </span><br></br>
                <span className='p-3 fs-6'> <input type='checkbox'/> Amarambalam </span><br></br>
                <span className='p-3 fs-6'> <input type='checkbox'/> Amarambalam South </span><br></br>
                <span className='p-3 fs-6'> <input type='checkbox'/> Amayur </span><br></br>
                <span className='p-3 fs-6'> <input type='checkbox'/> Abdurahiman Nagar </span><br></br>
                <span className='p-3 fs-6'> <input type='checkbox'/> Adakkakundu </span><br/>
                <span className='p-3 fs-6'> <input type='checkbox'/> Akkaparamba </span><br></br>
                <span className='p-3 fs-6'> <input type='checkbox'/> Alankode </span><br></br>
                <span className='p-3 fs-6'> <input type='checkbox'/> Alathiyur </span><br></br>
                <span className='p-3 fs-6'> <input type='checkbox'/> Aliparamba </span><br></br>
                <span className='p-3 fs-6'> <input type='checkbox'/> Amarambalam </span><br></br>
                <span className='p-3 fs-6'> <input type='checkbox'/> Amarambalam South </span><br></br>
                <span className='p-3 fs-6'> <input type='checkbox'/> Amayur </span><br></br>
              </div>
              </div>
    </div>
  )
}

export default Card