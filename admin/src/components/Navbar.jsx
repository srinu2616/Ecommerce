import React from 'react';
import { assets } from '../assets/assets';

const Navbar = ({setToken}) => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center">
        <img 
          src={assets.logo} 
          alt="Logo" 
          className="h-10 w-auto md:h-12 transition-all duration-300 hover:scale-105"
        />
        
      </div>
      
      {/* Logout Button */}
      <button  onClick={()=>setToken('')} className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 shadow-sm hover:shadow-md">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;