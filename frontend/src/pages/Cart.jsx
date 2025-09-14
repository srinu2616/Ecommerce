import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets' 

const Cart = () => {
    const {products,currency,cartItems,updateQuantity,navigate}=useContext(ShopContext)
    const [cartData,setCartData]=useState([])

    useEffect(()=>{
      if(products.length>0){
        const tempData=[]
        for(const items in cartItems){
            for(const item in cartItems[items]){
                if(cartItems[items][item]){
                    tempData.push({
                        _id:items,
                        size:item,
                        quantity:cartItems[items][item]
                    })
                }
            }
        }
        setCartData(tempData)
      }
        
        
    },[cartItems,products])

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="mb-8">
            <Title text1={'YOUR'} text2={'CART'} />
        </div>

        {cartData.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Your cart is empty</p>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              {cartData.map((item,index)=>{
                  const productData=products.find((product)=>product._id===item._id)
                  return(
                      <div key={index} className="p-6 border-b border-gray-100 last:border-b-0 flex flex-col sm:flex-row items-center gap-4">
                          {/* Product Image */}
                          <div className="flex-shrink-0">
                              <img 
                                  src={productData.image[0]} 
                                  alt={productData.name}
                                  className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg"
                              />
                          </div>
                          
                          {/* Product Info */}
                          <div className="flex-grow text-center sm:text-left">
                              <p className="font-semibold text-gray-800 mb-2">{productData.name}</p>
                              <div className="flex flex-col sm:flex-row gap-2 text-sm text-gray-600">
                                  <p>{currency}{productData.price}</p>
                                  <p className="sm:before:content-['•'] sm:before:mx-2">Size: {item.size}</p>
                              </div>
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-4">
                              <input 
                                  onChange={(e)=>e.target.value==='' || e.target.value==='0'? null : updateQuantity(item._id,item.size,Number(e.target.value))}  
                                  type='number' 
                                  min={1} 
                                  defaultValue={item.quantity}
                                  className="w-16 h-10 border border-gray-300 rounded-md text-center focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              />
                              <img 
                                  onClick={()=>updateQuantity(item._id,item.size,0)}
                                  src={assets.bin_icon} 
                                  alt="Remove item"
                                  className="w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity"
                              />
                          </div>
                      </div>
                  )
              })}
            </div>

              {/* Cart Total and Checkout */}
<div className="w-full lg:w-1/3 lg:ml-auto">
  <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-8 border border-gray-200">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Summary</h2>
    <CartTotal />
    <div className="mt-6">
      <button
        onClick={() => navigate('/place-order')}
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl shadow-lg hover:scale-[1.02] transform transition-all font-semibold text-lg"
      >
        PROCEED TO CHECKOUT
      </button>
    </div>
  </div>
</div>

          </>
        )}
      </div>
    </div>
  )
}

export default Cart