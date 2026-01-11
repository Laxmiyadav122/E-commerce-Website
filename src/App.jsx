import React, { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import ProductCard from './components/ProductCard/ProductCard';
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Cart from './pages/Cart/Cart'
import Wishlist from './pages/Wishlist/Wishlist'
import Login from './pages/Login/Login';
import Contact from './pages/Contact/Contact';
import FAQ from './pages/FAQ/FAQ';
import Search from "./components/Search/Search";
import Furniture from './pages/Furniture/Furniture';
import Electronics from './pages/Electronics/Electronics';
import Fashion from './pages/Fashion/Fashion'
import Jewellery from './pages/Jewellery/Jewellery'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions/TermsConditions';
import About from './pages/About/About';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    setTimeout(() =>{
      setLoading(false);
    },2000);
  },[]);

  if(loading){
    return <Loader/>
  }
  return (
   <>
   <Navbar/>
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/furniture' element={<Furniture/>}/>
        <Route path='/electronics' element={<Electronics/>}/>
        <Route path='/fashion' element={<Fashion/>}/>
        <Route path='/jewellery' element={<Jewellery/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/productCard' element={<ProductCard/>} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/faq' element={<FAQ/>}/>
        <Route path="/search" element={<Search />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='/terms' element={<TermsConditions/>}/>
        <Route path='/about' element={<About/>}/>
    </Routes>
    <Footer/>
   </>
  )
}

export default App;
