
import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Home from './components/pages/Home'
import Products from './components/pages/Products'
import Services from './components/pages/Services'
import SignUp from './components/pages/SignUp'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App () {  
   return (
     <div className="App">
       <Router>
        <Navbar/>
         <Routes>
           <Route path="/" exact element={<Home/>} ></Route>
           <Route path="/heroSection" element={<HeroSection/>} ></Route>
           <Route path="/products" element={<Products/>} ></Route>
           <Route path="/services" element={<Services/>} ></Route>
           <Route path="/sign-up" element={<SignUp/>} ></Route>
        </Routes>
       </Router>
    </div>
  );
}

export default App;
