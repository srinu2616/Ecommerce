import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white-50 to-white-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Title text1={'CONTACT'} text2={'US'} />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Get in touch with us - we'd love to hear from you and answer any questions you might have.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center justify-between mb-16">
          <div className="w-full lg:w-1/2">
            <img 
              src={assets.contact_img} 
              alt="Contact us" 
              className="w-full h-auto rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="w-full lg:w-1/2 bg-white p-8 rounded-2xl shadow-lg">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-800">Our Store</p>
                  <p className="text-gray-600">Adoni mandal, Kurnool district</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-800">Phone: 9849642616</p>
                  <p className="text-lg font-semibold text-gray-800">Email: kuruvas691@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mb-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-800">Careers at Forever</p>
                  <p className="text-gray-600">Learn more about our teams and job openings</p>
                </div>
              </div>
              <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:-translate-y-1 shadow-md hover:shadow-lg">
                Explore Opportunities
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <NewsletterBox />
        </div>

       

       
          
      
      </div>
    </div>
  )
}

export default Contact