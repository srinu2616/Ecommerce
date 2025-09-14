import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';


const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-white text-gray-800 p-6 flex flex-col border-r border-gray-200 shadow-sm">
      {/* Logo/Brand Section */}
      <div className="mb-10 pt-4 flex items-center justify-center">
        <h2 className="text-xl font-bold text-gray-900">Admin Panel</h2>
      </div>
      
      {/* Navigation Links */}
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <NavLink 
              to='/add'
              className={({ isActive }) => 
                `flex items-center p-3 rounded-lg transition-all duration-300 hover:bg-gray-100 ${
                  isActive ? 'bg-blue-100 text-blue-600 border-l-4 border-blue-500' : 'text-gray-600'
                }`
              }
            >
              <img 
                src={assets.add_icon} 
                alt='Add Items' 
                className="h-5 w-5 mr-3"
              />
              <p className="font-medium">Add Items</p>
            </NavLink>
          </li>
          
          <li>
            <NavLink 
              to='/list'
              className={({ isActive }) => 
                `flex items-center p-3 rounded-lg transition-all duration-300 hover:bg-gray-100 ${
                  isActive ? 'bg-blue-100 text-blue-600 border-l-4 border-blue-500' : 'text-gray-600'
                }`
              }
            >
              <img 
                src={assets.order_icon} 
                alt='List Items' 
                className="h-5 w-5 mr-3"
              />
              <p className="font-medium">List Items</p>
            </NavLink>
          </li>
          
          <li>
            <NavLink 
              to='/orders'
              className={({ isActive }) => 
                `flex items-center p-3 rounded-lg transition-all duration-300 hover:bg-gray-100 ${
                  isActive ? 'bg-blue-100 text-blue-600 border-l-4 border-blue-500' : 'text-gray-600'
                }`
              }
            >
              <img 
                src={assets.order_icon} 
                alt='Orders' 
                className="h-5 w-5 mr-3"
              />
              <p className="font-medium">Orders</p>
            </NavLink>
          </li>
        </ul>
      </nav>
      
     
    </div>
  );
};

export default Sidebar;