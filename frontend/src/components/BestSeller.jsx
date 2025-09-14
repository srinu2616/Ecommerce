


import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = () => {
  const { products } = useContext(ShopContext)
  const [bestSeller, setBestSeller] = useState([])

  useEffect(() => {
  console.log("Products:", products);
  if (products && products.length > 0) {
    const bestProduct = products.filter((item) =>item.bestSeller === true)
    console.log("Bestseller products:", bestProduct);
    setBestSeller(bestProduct.slice(0, 5))
  }
}, [products])

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-16 bg-gradient-to-b from-gray-50 to-white">
      
      {/* Title + Subtitle */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <Title text1={'BEST'} text2={'SELLERS'} />
        <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.!
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 justify-items-center">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  )
}

export default BestSeller
