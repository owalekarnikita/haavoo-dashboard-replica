/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './css/about.css';

const About = () => {
  return (
    <div className=' about-main'> 
    <div className=' container pb-5 pt-5'>
      <div className='d-flex justify-content-between'>
        <div className='one '>
          <h3 className='text-secondary fw-bold'> About Company </h3>
          <div className='d-md-flex row'>
              <p className='text-secondary col-md-6 col-sm-12'>
              Haavoo is a revolutionary business portal based in India, specifically designed for anyone looking to advertise or get hold of businesses, services, and products. We help you in putting your businesses out there for the world to see and helping you find the right kind of services that you’re looking for – from any part of the country! Haavoo is a great platform for start-ups to establish themselves in the business world and for already established enterprises to lay hold of more clients and connect with equivalents. Haavoo opens a door of infinite possibilities for budding entrepreneurs to lay a foundation stone for their brand name. For anyone looking to avail nearby services - like getting a cab or finding a tutor, just type in the related keyword and we'll get you a list for you to choose from. And for anyone looking to advertise themselves, you've come to the right place! You only need yourself, your skills, expertise, and us. Consider us as a support system that can back you and help you put yourself out there in the market.
              </p>
              <img src='../images/ab.jpg' className='col-md-6 col-sm-12 h-75 rounded2'/>
          </div>
        </div>
      </div>
      </div>
      <br/>
      
      <div className='two pt-5 pb-5'>
        <div className='container'>
        <div className='d-flex justify-content-between'>
          <div className=''>
          <div className='d-md-flex row'>
            <div className='text-secondary col-md-6 col-sm-12'>
                <h3 className='text-secondary fw-bold'> Vision </h3>
                <p className=''>
                We're living in a world where almost nothing escapes the internet. It's a depot of information about anything under the sun - and even far beyond the sun. But filtering down that content is rather complicated. For that, you need a separate platform that can act as a hub under which all the correlative things can exist in harmony. As for the business world, a platform to connect businesses - irrelevant of their type is an absolute necessity. We intend to be the bridge that links all kinds of businesses around the country. A single platform for artists, artisans, daily wage workers, and entrepreneurs combined - that's the whole idea behind Haavoo. Our motive is to offer endless possibilities to every single client. You no longer need to be part of a business group, association, or firm to build a reputation and garner clients. With Haavoo, you can create your own identity!
                </p>
            </div>
            <div className='text-secondary col-md-6 col-sm-12'>
                <h3 className='text-secondary fw-bold'> Mission </h3>
                <p className=''>
                 Haavoo intends to be that one-stop destination where you can discover and connect with all kinds of businesses and services. We aim at building an effective platform where businesses can efficiently run side by side. We wish to empower every single person who decides to partner with us and bring out the entrepreneur in them. It doesn't matter if you're the founder of a company or just a person trying to sell their skill. We promise to provide you with the kind of platform that can help you find potential clients for the services you offer. Haavoo is also an efficient portal to find services nearby - commutation, maintenance, housekeeping, and tutoring among many other services and products. You wouldn’t have to go surfing different websites each time because you can consider Haavoo to be the reliable guide that navigates you through the business world, or rather, you can call it the perfect business encyclopedia!
                </p>
            </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        <br/>
        
        <div className=' container pt-5 pb-5'>
        <div className='d-flex justify-content-between text-secondary'>
          <div className='three '>
            <div>
              <h3 className='text-secondary fw-bold'> The men behind Haavoo </h3>
              <br/>
              <div className='d-flex gap-5'>
                <span className='text-center'>
                  <img src='../images/man1.jpg' alt='man1' className='border' />
                  <br/>
                  <span> Roshan Radhakrishnan </span>
                </span>
                <span className='text-center'>
                  <img src='../images/man2.jpg' alt='man2' />
                  <br/>
                  <span > Sajin Unni </span>
                </span>
              </div>
              <br/>
              <p> Roshan Radhakrishnan, a technophile and MCA graduate, and Sajin Unni, a business enthusiast with an MBA degree were keen on building a platform that could act as a bridge that links entrepreneurs and services together. Their extensive knowledge about the business world acted as a catalyst that could forge this concept into reality. They have a knack for understanding the requirements of the market and the demands of entrepreneurs. In short, they recognized what the business community was in dire need of. With their strategy and skills combined, they gave life to this revolutionary idea and that’s how Haavoo was born. Both these business proficients are dedicated to coming up with groundbreaking ideas and introducing them to the market. They don't plan on restricting themselves to boundaries - be it a particular region or area of expertise. These men have made "think big" their life motto and are here to make an impact. </p>
            </div>
            <br/><br/>
          </div>
        </div>

    </div>
    </div>
  )
}

export default About;