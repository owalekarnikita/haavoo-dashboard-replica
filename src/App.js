
import Footer from './components/Footer';
import Header from './components/Header';
import { Routes,Route } from 'react-router-dom';
import Business from './components/Business';
import Deals from './components/Deals';
import About from './components/About';
import Contact from './components/Contact';
import Main from './components/Main';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className='main'>
      <Header />
      <Routes >
          <Route path='/' element={<Main />} >
            <Route path='/components/business' element={<Business />}/>
            <Route path='/components/deals' element={<Deals />}/>
          </Route>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/home' element={<Home />} />
      </Routes>
      <Footer />
    </div>
    
  );
}

export default App;
