import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Title text1={'ABOUT'} text2={'US'} />
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Learn more about our mission, values, and what makes us the preferred choice for online shopping.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
          <div className="w-full lg:w-1/2">
            <img 
              src={assets.about_img} 
              alt="About our ecommerce store" 
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <p className="text-gray-700 mb-6 leading-relaxed">
              An ecommerce website is an online platform that enables businesses to showcase and sell products or services directly to consumers over the internet. It provides a convenient shopping experience with features like product catalogs, secure payment processing, and order tracking, allowing customers to make purchases from anywhere at any time while giving businesses a global reach beyond physical store limitations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Ecommerce platforms have revolutionized retail by offering personalized recommendations, customer reviews, and seamless checkout processes that enhance the buying journey. They also provide valuable data insights for businesses to optimize their offerings and marketing strategies, creating a dynamic digital marketplace that continues to evolve with technological advancements.
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <Title text1={'WHY'} text2={'CHOOSE US'} />
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Discover the reasons why thousands of customers trust us for their online shopping needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <b className="text-xl text-gray-800">Quality Assurance</b>
            </div>
            <p className="text-gray-600">
              Quality assurance is a systematic process that ensures products and services meet defined standards and customer expectations through rigorous testing and evaluation. It involves establishing quality standards, implementing processes to achieve them, and continuously monitoring outcomes to identify and address any deviations or areas for improvement. By maintaining consistent quality throughout development and production cycles, quality assurance helps prevent defects, reduces costs associated with rework, and enhances customer satisfaction.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <b className="text-xl text-gray-800">Convenience</b>
            </div>
            <p className="text-gray-600">
              Our platform is designed with your convenience in mind. Shop 24/7 from anywhere with an internet connection, avoiding crowded stores and long lines. With intuitive navigation, advanced search filters, and personalized recommendations, finding what you need has never been easier. We offer multiple payment options, fast checkout processes, and a streamlined returns system to make your shopping experience as effortless as possible, saving you time and energy for the things that matter most.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                </svg>
              </div>
              <b className="text-xl text-gray-800">Exceptional Customer Service</b>
            </div>
            <p className="text-gray-600">
              Our dedicated customer service team is available around the clock to address your concerns and provide solutions tailored to your needs. We believe in building lasting relationships with our customers through transparent communication, prompt responses, and going the extra mile to ensure your satisfaction. Whether you have questions about products, need assistance with an order, or require after-sales support, our knowledgeable and friendly representatives are here to help you every step of the way.
            </p>
          </div>
        </div>

      
      </div>
    </div>
  )
}

export default About