import React from 'react';
import Home from './components/Home/home';
import About from './components/about/about';
import Footer from './components/footer/footer';
import PastWorks from './components/past_works/past_works';
import './App.css';
import {Routes, Route} from 'react-router-dom'


function App(){
  return(
    <div>
      
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/About' element={<About />}/>
      <Route path='/PastWorks' element={<PastWorks />}/>
      </Routes>
      <Footer />
    
    </div>

  );
}

export default App;