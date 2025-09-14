import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
    const {productId}=useParams();
    const {products,currency,addToCart}=useContext(ShopContext)
    const [productData,setProductData]=useState(false)
    const [image,setImage]=useState('')
    const [size,setSize]=useState('')

    const fetchProductData=async()=>{
        products.map((item)=>{
            if(item._id==productId){
                setProductData(item)
                setImage(item.image[0])
                return null;
            }
        })
    }
    
    useEffect(()=>{
        fetchProductData()
    },[productId,products])

    return productData ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Product Data */}
            <div className="flex flex-col md:flex-row gap-8 mb-12">
                {/* Product Images */}
                <div className="md:w-1/2 flex flex-col-reverse md:flex-row gap-4">
                    {/* Thumbnails */}
                    <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible py-2 md:py-0">
                        {productData.image.map((item,index)=>(
                            <img 
                                onClick={()=>setImage(item)} 
                                src={item} 
                                key={index} 
                                alt={`${productData.name} view ${index+1}`}
                                className={`w-16 h-16 object-cover rounded-md cursor-pointer border-2 ${image === item ? 'border-blue-500' : 'border-gray-200'}`}
                            />
                        ))}
                    </div>
                    
                    {/* Main Image */}
                    <div className="flex-1">
                        <img 
                            src={image} 
                            alt={productData.name}
                            className="w-full h-80 sm:h-96 object-cover rounded-lg shadow-md"
                        />
                    </div>
                </div>
                
                {/* Product Info */}
                <div className="md:w-1/2">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{productData.name}</h1>
                    
                    <div className="flex items-center gap-2 mb-4">
                        <div className="flex">
                            {[...Array(4)].map((_, i) => (
                                <img key={i} src={assets.star_icon} alt="star" className="w-5 h-5" />
                            ))}
                            <img src={assets.star_dull_icon} alt="star" className="w-5 h-5" />
                        </div>
                        <p className="text-gray-600">(122 reviews)</p>
                    </div>
                    
                    <p className="text-2xl font-bold text-gray-900 mb-4">{currency}{productData.price}</p>
                    <p className="text-gray-700 mb-6">{productData.description}</p>
                    
                    <div className="mb-6">
                        <p className="font-medium text-gray-900 mb-2">Select Size</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {productData.sizes.map((item,index)=>(
                                <button 
                                    onClick={()=>setSize(item)} 
                                    key={index} 
                                    className={`px-4 py-2 rounded-md border ${
                                        size === item 
                                            ? 'bg-blue-100 border-blue-500 text-blue-700' 
                                            : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                                    }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                        
                        <button 
                            onClick={()=>addToCart(productData._id,size)} 
                            
                            className={`w-full py-3 px-6 rounded-md font-medium ${
                                size 
                                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                        >
                            ADD TO CART
                        </button>
                    </div>
                    
                    <hr className="my-6"/>
                    
                    <div className="space-y-3">
                        <p className="flex items-center text-gray-700">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            100% Original product
                        </p>
                        <p className="flex items-center text-gray-700">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            Cash on delivery available
                        </p>
                        <p className="flex items-center text-gray-700">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            Easy return and exchange policy within 7 days
                        </p>
                    </div>
                </div>
            </div>

            {/* Description and Review Section */}
            <div className="mb-12">
                <div className="flex border-b border-gray-200 mb-6">
                    <button className="px-4 py-2 font-semibold text-blue-600 border-b-2 border-blue-600">
                        Description
                    </button>
                    <button className="px-4 py-2 font-semibold text-gray-500 hover:text-gray-700">
                        Reviews (122)
                    </button>
                </div>
                
                <div className="prose max-w-none">
                    <p className="text-gray-700 mb-4">
                        Ecommerce revolutionizes shopping by bringing global marketplaces to our fingertips. 
                        It enables businesses to reach customers anywhere, anytime, transforming how we buy and sell goods.
                    </p>
                    <p className="text-gray-700">
                        Ecommerce continues to evolve with AI personalization and mobile shopping, 
                        creating seamless customer experiences that bridge digital and physical retail.
                    </p>
                </div>
            </div>
            
            {/* Display related products */}
            <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
        </div>
    ) : (
        <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    )
}

export default Product