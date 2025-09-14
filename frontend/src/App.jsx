import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import Verify from './pages/Verify'


const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <ToastContainer />
      <Navbar />
      
      
      
      {/* Main content container with consistent padding */}
      <main className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/collection' element={<Collection/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/product/:productId' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/place-order' element={<PlaceOrder/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/verify' element={<Verify/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App