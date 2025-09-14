import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }

    try {
      const response = await axios.post(
        backendUrl + '/api/order/list', 
        {}, 
        { headers: { token } }
      );
      
      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + '/api/order/status',
        { 
          orderId, 
          status: event.target.value 
        },
        { headers: { token } }
      );
      
      if (response.data.success) {
        toast.success('Status updated successfully');
        await fetchAllOrders();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Orders</h2>
        
        {orders.length === 0 ? (
          <div className="text-center py-12">
            <img 
              src={assets.parcel_icon} 
              alt="No orders" 
              className="h-24 w-24 mx-auto mb-4 opacity-50"
            />
            <p className="text-gray-500 text-lg">No orders found</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {orders.map((order, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <img 
                      src={assets.parcel_icon} 
                      alt="Order" 
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="mb-4">
                      {order.items.map((item, itemIndex) => (
                        <span key={itemIndex} className="text-gray-700">
                          {item.name} × {item.quantity} 
                          <span className="text-gray-500 ml-1">({item.size})</span>
                          {itemIndex !== order.items.length - 1 && ', '}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mb-4">
                      <p className="font-medium text-gray-800">
                        {order.address.firstName} {order.address.lastName}
                      </p>
                      <p className="text-gray-600">
                        {order.address.street}, {order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}
                      </p>
                      <p className="text-gray-600">{order.address.phone}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                      <div>
                        <p className="text-gray-600">Items: {order.items.length}</p>
                        <p className="text-gray-600">Method: {order.paymentMethod}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Payment: {order.payment ? 'Done' : 'Pending'}</p>
                        <p className="text-gray-600">Date: {new Date(order.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <p className="text-lg font-bold text-gray-900">
                          {currency}{order.amount}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          Current Status: <span className="font-medium text-blue-600">{order.status}</span>
                        </p>
                      </div>
                      
                      <select 
                        defaultValue={order.status} 
                        onChange={(event) => statusHandler(event, order._id)} 
                        className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="Order Placed">Order Placed</option>
                        <option value="Packing">Packing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Out for delivery">Out for delivery</option>
                        <option value="Delivered">Delivered</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;


// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
// import axios from 'axios'
// import { backendUrl, currency } from '../App'
// import {toast} from 'react-toastify'
// import { assets } from '../assets/assets'

// const Orders = ({token}) => {
//   const [orders,setOrders]=useState([])

//   const fetchAllOrders=async()=>{
//     if(!token){
//       return null
//     }

//     try{
//       const response=await axios.post(backendUrl+'/api/order/list',{},{headers:{token}})
//       if(response.data.success){
//         setOrders(response.data.orders)
//       }
//       else{
//         toast.error(response.data.message)
//       }

//     }
//     catch(error){
//       toast.error(error.message)

//     }

//   }

//   useEffect(()=>{
//     fetchAllOrders()

//   },[token])

//   return (
//     <div>
//       <h2>Orders page</h2>
//       <div>
//         {
//           orders.map((order,index)=>{
//             <div key={index}>
//               <img src={assets.parcel_icon} alt=''/>
//               <div>
//               <div>
//                 {
//                   order.items.map((item,index)=>{
//                     if(index===order.items.length-1){
//                       return <p key={index}>{item.name} X {item.quantity} <span>{item.size}</span></p>

//                     }
//                     else{
//                       return <p key={index}>{item.name} X {item.quantity} <span>{item.size},</span></p>

//                     }
//                   })
//                 }
//                 </div>
//                 <p>{order.address.firstName+" "+order.address.lastName }</p>
//                 <div>
//                   <p>{order.address.street+", "}</p>
//                   <p>{order.address.city+", "+order.address.state+", "+order.address.country+", "+order.address.zipcode}</p>
//                 </div>
//                 <div>
//                   <p>{order.address.phone}</p>
//                 </div>
//             </div>
//                   <div>
//                   <p>Items:{order.items.length}</p>
//                   <p>Method:{order.paymentMethod}</p>
//                   <p>Payment:{order.payment?'Done':'pending'}</p>
//                   <p>Date:{new Date(order.date).toLocaleDateString}</p>
//                 </div>
//                 <p>{currency}{order.amount}</p>
//                 <select>
//                   <option value="Order Placed">Order Placed</option>
//                   <option value="Packing">Packing</option>
//                   <option value="Shipped">Shipped</option>
//                   <option value="Out for delivery">Out for delivery</option>
//                   <option value="Delivered">Delivered</option>
//                 </select>
              
//             </div>
//           })
//         }
//       </div>
      
//     </div>
//   )
// }