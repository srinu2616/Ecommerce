import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const RelatedProducts = ({ category, subCategory }) => {
    const { products } = useContext(ShopContext)
    const [related, setRelated] = useState([])

    useEffect(() => {
        if (products.length > 0) {
            let productCopy = products.slice()
            productCopy = productCopy.filter((item) => category === item.category)
            productCopy = productCopy.filter((item) => subCategory === item.subCategory)
            setRelated(productCopy.slice(0, 5))
        }
    }, [products, category, subCategory])

    return (
        <div className="mt-12 px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
                <Title text1={'RELATED'} text2={'PRODUCTS'} />
            </div>
            
            {related.length > 0 ? (
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {related.map((item, index) => (
                        <ProductItem 
                            key={index} 
                            id={item._id} 
                            name={item.name} 
                            price={item.price} 
                            image={item.image} 
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-8 text-gray-500">
                    No related products found
                </div>
            )}
        </div>
    )
}

export default RelatedProducts