import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext)
    const location = useLocation()
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if(location.pathname.includes('collection')){
            setVisible(true)
        }
        else{
            setVisible(false)
        }  
    }, [location])

    return showSearch && visible ? (
        <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 p-4 flex items-center justify-between">
            <div className="relative flex-1 max-w-2xl mx-auto">
                <input 
                    type="text" 
                    value={search}  
                    onChange={(e) => setSearch(e.target.value)} 
                    placeholder="Search products..." 
                    className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    autoFocus
                />
                <img 
                    src={assets.search_icon} 
                    alt="Search" 
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                />
            </div>
            <img 
                onClick={() => setShowSearch(false)} 
                src={assets.cross_icon} 
                alt="Close search" 
                className="ml-4 h-6 w-6 cursor-pointer hover:opacity-70 transition-opacity"
            />
        </div>
    ) : null
}

export default SearchBar