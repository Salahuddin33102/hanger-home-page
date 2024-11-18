import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Footer from  './components/Footer';
import Home from './pages/home/Home';
import ListYourHangar from './pages/home/ListYourHangar';
import AboutUs from './pages/home/AboutUs';
import MyBooking from './pages/home/MyBooking';
import Help from './pages/home/Help';




function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>,
          <Route path="/listyourhangar" element={<ListYourHangar/>}/>
          <Route path="/aboutus" element={<AboutUs />}/>
          <Route path="/mybooking" element={<MyBooking />}/>
          <Route path="/help" element={<Help />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;















