import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  
  // Auto-collapse on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle sidebar collapse state
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Close sidebar when a link is clicked (on mobile)
  const handleLinkClick = () => {
    if (window.innerWidth < 1024) {
      setIsCollapsed(true);
    }
  };

  return (
    <div className={`relative min-h-screen bg-white flex flex-col border-r border-gray-200 transition-all duration-300 ease-in-out ${isCollapsed ? 'w-16 lg:w-20' : 'w-64'}`}>
      
      {/* Toggle Button */}
      <button 
        onClick={toggleSidebar}
        className="absolute -right-3 top-6 z-10 bg-gray-800 rounded-full p-1.5 shadow-lg border border-gray-700 hover:bg-gray-700 transition-colors"
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        <svg 
          className={`w-4 h-4 text-white transition-transform ${isCollapsed ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      {/* Logo/Brand Section */}
      <div className="mb-8 pt-6 flex items-center justify-center overflow-hidden">
        <div className={`flex items-center transition-all duration-300 ${isCollapsed ? 'scale-90' : ''}`}>
          <div className="bg-indigo-600 p-2 rounded-lg shadow-sm">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h2 className={`ml-3 text-xl font-bold text-black whitespace-nowrap transition-opacity duration-300 ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
            Admin Panel
          </h2>
        </div>
      </div>
      
      {/* Navigation Links */}
      <nav className="flex-1 px-2">
        <ul className="space-y-2">
          <li>
            <NavLink 
              to='/add'
              onClick={handleLinkClick}
              className={({ isActive }) => 
                `group flex items-center p-3 rounded-xl transition-all duration-200 relative overflow-hidden ${
                  isActive 
                    ? 'bg-indigo-600 text-white shadow-lg' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`
              }
            >
              <div className="relative flex items-center justify-center min-w-[2rem]">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <p className={`ml-3 font-medium whitespace-nowrap transition-all duration-300 ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
                Add Items
              </p>
              
              {/* Tooltip for collapsed state */}
              {isCollapsed && (
                <div className="absolute left-full ml-3 px-2 py-1 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg z-20">
                  Add Items
                </div>
              )}
            </NavLink>
          </li>
          
          <li>
            <NavLink 
              to='/list'
              onClick={handleLinkClick}
              className={({ isActive }) => 
                `group flex items-center p-3 rounded-xl transition-all duration-200 relative overflow-hidden ${
                  isActive 
                    ? 'bg-indigo-600 text-white shadow-lg' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`
              }
            >
              <div className="relative flex items-center justify-center min-w-[2rem]">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <p className={`ml-3 font-medium whitespace-nowrap transition-all duration-300 ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
                List Items
              </p>
              
              {/* Tooltip for collapsed state */}
              {isCollapsed && (
                <div className="absolute left-full ml-3 px-2 py-1 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg z-20">
                  List Items
                </div>
              )}
            </NavLink>
          </li>
          
          <li>
            <NavLink 
              to='/orders'
              onClick={handleLinkClick}
              className={({ isActive }) => 
                `group flex items-center p-3 rounded-xl transition-all duration-200 relative overflow-hidden ${
                  isActive 
                    ? 'bg-indigo-600 text-white shadow-lg' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`
              }
            >
              <div className="relative flex items-center justify-center min-w-[2rem]">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <p className={`ml-3 font-medium whitespace-nowrap transition-all duration-300 ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
                Orders
              </p>
              
              {/* Tooltip for collapsed state */}
              {isCollapsed && (
                <div className="absolute left-full ml-3 px-2 py-1 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg z-20">
                  Orders
                </div>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
      
      {/* User Profile Section */}
      <div className="p-4 border-t border-gray-700 mt-auto">
        <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''}`}>
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-sm">
              A
            </div>
          </div>
          <div className={`ml-3 transition-all duration-300 overflow-hidden ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
            <p className="text-sm font-medium text-white">Admin User</p>
            <p className="text-xs text-gray-400">Administrator</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { assets } from '../assets/assets';


// const Sidebar = () => {
//   return (
//     <div className="w-64 min-h-screen bg-white text-gray-800 p-6 flex flex-col border-r border-gray-200 shadow-sm">
//       {/* Logo/Brand Section */}
//       <div className="mb-10 pt-4 flex items-center justify-center">
//         <h2 className="text-xl font-bold text-gray-900">Admin Panel</h2>
//       </div>
      
//       {/* Navigation Links */}
//       <nav className="flex-1">
//         <ul className="space-y-2">
//           <li>
//             <NavLink 
//               to='/add'
//               className={({ isActive }) => 
//                 `flex items-center p-3 rounded-lg transition-all duration-300 hover:bg-gray-100 ${
//                   isActive ? 'bg-blue-100 text-blue-600 border-l-4 border-blue-500' : 'text-gray-600'
//                 }`
//               }
//             >
//               <img 
//                 src={assets.add_icon} 
//                 alt='Add Items' 
//                 className="h-5 w-5 mr-3"
//               />
//               <p className="font-medium">Add Items</p>
//             </NavLink>
//           </li>
          
//           <li>
//             <NavLink 
//               to='/list'
//               className={({ isActive }) => 
//                 `flex items-center p-3 rounded-lg transition-all duration-300 hover:bg-gray-100 ${
//                   isActive ? 'bg-blue-100 text-blue-600 border-l-4 border-blue-500' : 'text-gray-600'
//                 }`
//               }
//             >
//               <img 
//                 src={assets.order_icon} 
//                 alt='List Items' 
//                 className="h-5 w-5 mr-3"
//               />
//               <p className="font-medium">List Items</p>
//             </NavLink>
//           </li>
          
//           <li>
//             <NavLink 
//               to='/orders'
//               className={({ isActive }) => 
//                 `flex items-center p-3 rounded-lg transition-all duration-300 hover:bg-gray-100 ${
//                   isActive ? 'bg-blue-100 text-blue-600 border-l-4 border-blue-500' : 'text-gray-600'
//                 }`
//               }
//             >
//               <img 
//                 src={assets.order_icon} 
//                 alt='Orders' 
//                 className="h-5 w-5 mr-3"
//               />
//               <p className="font-medium">Orders</p>
//             </NavLink>
//           </li>
//         </ul>
//       </nav>
      
     
//     </div>
//   );
// };

// export default Sidebar;