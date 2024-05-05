import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Cart from './pages/cart/Cart'
import Wishlist from './pages/wishlist/Wishlist'
import ContactUs from './pages/contactUs/ContactUs'
import Single from './pages/single/Single'
import Admin from './pages/admin/Admin'
import Navbar from './components/navbar/Navbar'
import Navbarr from './components/header/Navbar'
import Footer from './components/footer/Footer'


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
        <Route path="/admin" element={<Admin />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product/:id" element={<Single />} />
        <Route path='*' element={<h2>404</h2>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
