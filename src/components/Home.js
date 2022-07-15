import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import '.././App.css';

const Home = () => {
  return (
    <div className='main'>
        <Header />
        <Main />
        <Footer />
    </div>
  )
}

export default Home;