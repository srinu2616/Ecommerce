import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-12 gap-8 mx-auto max-w-6xl border-2 border-black">
        {/* Hero Left Side */}
        <div className="flex-1 flex justify-center md:justify-start">
            <div className="max-w-md">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-0.5 bg-amber-500"></div>
                    <p className="text-sm font-medium text-amber-600 uppercase tracking-wide">OUR BESTSELLERS</p>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Latest Arrivals</h1>
                <div className="flex items-center gap-2 group cursor-pointer">
                    <p className="font-semibold text-blue-600">SHOP NOW</p>
                    <div className="w-0 group-hover:w-10 h-0.5 bg-blue-600 transition-all duration-300"></div>
                </div>
            </div>
        </div>
      
      {/* Hero Right Side */}
      <div className="flex-1 flex justify-center md:justify-end">
        <img src={assets.hero_img} alt='Latest products' className="max-w-full h-auto rounded-lg border-2 border-black shadow-md" />
      </div>
    </div>
  )
}

export default Hero