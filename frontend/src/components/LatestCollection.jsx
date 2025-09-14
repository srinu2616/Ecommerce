import { React, useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {
  const { products } = useContext(ShopContext)
  const [latestProducts, setLatestProducts] = useState([])

  useEffect(() => {
    setLatestProducts(products.slice(0, 12)) // Show 12 products for better grid layout
  }, [])

  return (
    <div className="py-16 bg-gray-50">
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-12 px-4">
        <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        <p className="text-gray-600 text-lg mt-4 leading-relaxed">
          Discover our newest arrivals featuring the latest trends and styles. 
          Each piece is carefully selected to bring sophistication to your wardrobe.
        </p>
      </div>

      {/* Products Grid - Adjusted for 4-5 items per row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {latestProducts.map((item, index) => (
            <ProductItem 
              key={index} 
              id={item._id} 
              image={item.image} 
              name={item.name} 
              price={item.price}
            />
          ))}
        </div>
      </div>

     
    </div>
  )
}

export default LatestCollection