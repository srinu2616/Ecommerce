import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Policy 1 */}
          <div className="flex flex-col items-center text-center p-6">
            <div className="bg-blue-50 p-4 rounded-full mb-4">
              <img 
                src={assets.exchange_icon} 
                alt="Exchange Policy" 
                className="w-10 h-10 object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Exchange Policy</h3>
            <p className="text-gray-600 text-sm">We offer hassle free exchange policy</p>
          </div>

          {/* Policy 2 */}
          <div className="flex flex-col items-center text-center p-6">
            <div className="bg-green-50 p-4 rounded-full mb-4">
              <img 
                src={assets.quality_icon} 
                alt="Return Policy" 
                className="w-10 h-10 object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">7 Days Return Policy</h3>
            <p className="text-gray-600 text-sm">We provide 7 days return policy</p>
          </div>

          {/* Policy 3 */}
          <div className="flex flex-col items-center text-center p-6">
            <div className="bg-purple-50 p-4 rounded-full mb-4">
              <img 
                src={assets.support_img} 
                alt="Customer Support" 
                className="w-10 h-10 object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Best Customer Support</h3>
            <p className="text-gray-600 text-sm">We provide 24/7 Customer support</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurPolicy