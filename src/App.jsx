import { useState } from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Cart from './pages/cart/Cart'
import Wishlist from './pages/wishlist/Wishlist'
import ContactUs from './pages/contactUs/ContactUs'
import Admin from './pages/admin/Admin'
import Auth from './pages/auth/Auth'
import Navbar from './components/navbar/Navbar'
import Navbarr from './components/header/Navbar'
import Footer from './components/footer/Footer'
import Single from './pages/single/Single'
import not from './images/not.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Navbar />
      <Navbarr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/' element={<Auth />}>
          <Route path='/admin' element={<Admin />} />
        </Route>
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/single/:id" element={<Single />} />
        <Route path='*' element={<img className='not' src={not} alt="" />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
