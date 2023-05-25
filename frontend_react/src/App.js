import React from 'react';

import {About,Footer,Header,Skills,Testimonial,Work} from './container';
// import {Header} from './container'
// Navbar it is not in a container its a single componenet
import {Navbar} from './components';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
       <Header/>
       <About/>
       <Work/>
       <Skills/>
       <Testimonial/>
       <Footer/>
       </div>
 
  );
}

export default App;


