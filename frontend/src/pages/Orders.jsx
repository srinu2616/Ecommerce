import React, { useContext } from 'react'
import {ShopContext} from '../context/ShopContext'
import Title from '../components/Title'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Orders = () => {
  const {backendUrl,token,currency}=useContext(ShopContext)
  
    const [orderData,setorderData]=useState([])

    const loadOrderedData=async()=>{
      try{
        if(!token){
          return null
         }
         const response=await axios.post(backendUrl+'/api/order/userorders',{},{headers:{token}})
         if(response.data.success){
            let allOrderItem=[]
            response.data.orders.map((order)=>{
              order.items.map((item)=>{
                item['status']=order.status
                item['payment']=order.payment
                item['paymentMethod']=order.paymentMethod
                item['date']=order.date
                allOrderItem.push(item)
              })
            })
            setorderData(allOrderItem.reverse())
         }
       

      }
      catch(error){

      }
    }

    useEffect(()=>{
      loadOrderedData()

    },[token])

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Title text1={'MY'} text2={'ORDERS'} />
        </div>

        <div className="space-y-6">
          {orderData.map((item,index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Product Info Div */}
                <div className="flex-1 flex items-center gap-4 min-w-0">
                  <img 
                    src={item.image[0]} 
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="text-lg font-semibold text-gray-800 truncate">{item.name}</p>
                    <p className="text-gray-700 font-medium mt-1">{currency}{item.price}</p>
                    <p className="text-gray-500 text-sm mt-1">Date: <span className="font-medium">{new Date(item.date).toDateString()}</span></p>
                    <p className="text-gray-500 text-sm mt-1">Payment: <span className="font-medium">{item.paymentMethod}</span></p>
                    <div className="flex gap-4 mt-2">
                      <p className="text-gray-600 text-sm">Quantity: {item.quantity}</p>
                      <p className="text-gray-600 text-sm">Size: {item.size}</p>
                    </div>
                  </div>
                </div>
                
                {/* Status Div */}
                <div className="flex flex-col items-center justify-center px-4 py-2 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <p className="text-green-700 font-medium whitespace-nowrap">{item.status}</p>
                  </div>
                 
                </div>
                
                {/* Track Button Div */}
                <div className="flex-shrink-0">
                  <button onClick={loadOrderedData} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-medium whitespace-nowrap shadow-md hover:shadow-lg">
                    Track Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Orders