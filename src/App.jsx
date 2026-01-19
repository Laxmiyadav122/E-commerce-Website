import React, { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import ProductCard from './components/ProductCard/ProductCard';
import Cart from './pages/Cart/Cart'
import Wishlist from './pages/Wishlist/Wishlist'
import Login from './pages/Login/Login';
import Contact from './pages/Contact/Contact';
import FAQ from './pages/FAQ/FAQ';
import Search from "./components/Search/Search";
import OrganicFoods from './pages/OrganicFoods/OrganicFoods';
import FreshProduct from './pages/FreshProduct/FreshProduct';
import OrganicBeauty from './pages/OrganicBeauty/OrganicBeauty'
import Ayurveda from './pages/Ayurveda/Ayurveda'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions/TermsConditions';
import About from './pages/About/About';
import Signup from './pages/Signup/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    setTimeout(() =>{
      setLoading(false);
    },1000);
  },[]);

  if(loading){
    return <Loader/>
  }
  return (
   <>
   <Navbar/>
   <ToastContainer position="top-right" autoClose={3000} />
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/organicFoods' element={<OrganicFoods/>}/>
        <Route path='/FreshProduct' element={<FreshProduct/>}/>
        <Route path='/OrganicBeauty' element={<OrganicBeauty/>}/>
        <Route path='/Ayurveda' element={<Ayurveda/>}/>
        <Route path='/productCard' element={<ProductCard/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/faq' element={<FAQ/>}/>
        <Route path="/search" element={<Search />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='/terms' element={<TermsConditions/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/signup' element={<Signup/>}/>
    </Routes>
    <Footer/>
   </>
  )
}

export default App;
