// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Layout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content area with Outlet */}
      <div className="flex-1 overflow-auto bg-gray-50">
        <Outlet /> 
      </div>
    </div>
  );
};

export default Layout;