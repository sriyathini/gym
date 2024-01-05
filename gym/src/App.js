import React from 'react';
import './index.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 import Rootlayout from './layout/Rootlayout';
import Home from './component/Home';
// import About from './component/About';
// import Class from './component/Class';
// import Gallery from './component/Gallery';
// import Contact from './component/Contact';

function App(){
  return(
    <BrowserRouter>
     <Routes>
     <Route path='/' element={<Rootlayout/>} >
            <Route index  element={<Home />}/>
            {/* <Route path='#about' element={<About />}/>
            <Route path='#class' element={<Class />}/>
            <Route path='#gallery' element={<Gallery />}/>
            <Route path='#contact' element={<Contact/>}/> */}
        </Route>   
     </Routes>
    
    </BrowserRouter>
    
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

export default App;