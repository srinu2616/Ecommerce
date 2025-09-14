import React, { useState, useContext } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'; // ← ADD THIS IMPORT
import { toast } from 'react-toastify'; // ← ADD THIS IMPORT

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod')
  const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  })

  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value

    setFormData(data => ({ ...data, [name]: value }))

  }

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      let orderItems = []

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if (itemInfo) {
              itemInfo.size = item
              itemInfo.quantity = cartItems[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }
      

      let orderData = {
        
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      }
      switch (method) {
        //API calls for COD
        case 'cod':
          const response = await axios.post(
            backendUrl + '/api/order/place',
            orderData,
            { headers: { token } }   
          )
          
          if (response.data.success) {
            setCartItems({})
            navigate('/orders')
          }
          else {
            toast.error(response.data.message)
          }

          break;
        default:
          break
      }
      

    }
    catch (error) {
      console.log(error)
      toast.error(error.message)

    }

  }




  return (
    <form onSubmit={onSubmitHandler} className="min-h-screen bg-gradient-to-br from-white-50 to-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Complete Your Order</h1>
        <p className="text-gray-600 text-center mb-8">Review your items and enter your information</p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side - Delivery Information */}
          <div className="w-full lg:w-7/12 bg-white rounded-xl shadow-lg p-6">
            <div className="mb-6">
              <Title text1={'DELIVERY'} text2={'INFORMATION'} />
              <p className="text-gray-600 mt-2">Please enter your complete shipping information</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                <input
                  onChange={onChangeHandler}
                  name='firstName'
                  value={formData.firstName}
                  type="text"
                  placeholder="First name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                <input
                  type="text"
                  onChange={onChangeHandler}
                  name='lastName'
                  value={formData.lastName}
                  placeholder="Last name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
              <input
                onChange={onChangeHandler}
                name='email'
                value={formData.email}
                type="email"
                placeholder="Email address"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
              <input
                onChange={onChangeHandler}
                name='street'
                value={formData.street}
                type="text"
                placeholder="Street"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input
                  onChange={onChangeHandler}
                  name='city'
                  value={formData.city}
                  type="text"
                  placeholder="City"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                <input
                  onChange={onChangeHandler}
                  name='state'
                  value={formData.state}
                  type="text"
                  placeholder="State"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
                <input
                  onChange={onChangeHandler}
                  name='zipcode'
                  value={formData.zipcode}
                  type="number"
                  placeholder="ZipCode"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                <input
                  onChange={onChangeHandler}
                  name='country'
                  value={formData.country}
                  type="text"
                  placeholder="Country"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                onChange={onChangeHandler}
                name='phone'
                value={formData.phone}
                type="number"
                placeholder="Phone"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Right Side - Order Summary & Payment */}
          <div className="w-full lg:w-5/12">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <CartTotal />
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="mb-6">
                <Title text1={'PAYMENT'} text2={'METHOD'} />
                <p className="text-gray-600 mt-2">Select your preferred payment method</p>
              </div>

              {/* Payment Method Selection */}
              <div className="space-y-4 mb-8">
                <div
                  onClick={() => setMethod('stripe')}
                  className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${method === 'stripe'
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-green-300'
                    }`}
                >
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 ${method === 'stripe' ? 'border-green-500 bg-green-500' : 'border-gray-400'
                    }`}>
                    {method === 'stripe' && (
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <p className="font-medium text-gray-700">Credit/Debit Card</p>
                  <img src={assets.stripe_logo} alt="Stripe" className="h-6 ml-auto" />
                </div>

                <div
                  onClick={() => setMethod('razorpay')}
                  className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${method === 'razorpay'
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-green-300'
                    }`}
                >
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 ${method === 'razorpay' ? 'border-green-500 bg-green-500' : 'border-gray-400'
                    }`}>
                    {method === 'razorpay' && (
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <p className="font-medium text-gray-700">Razorpay</p>
                  <img src={assets.razorpay_logo} alt="Razorpay" className="h-6 ml-auto" />
                </div>

                <div
                  onClick={() => setMethod('cod')}
                  className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${method === 'cod'
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-green-300'
                    }`}
                >
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 ${method === 'cod' ? 'border-green-500 bg-green-500' : 'border-gray-400'
                    }`}>
                    {method === 'cod' && (
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Cash on Delivery</p>
                    <p className="text-sm text-gray-500">Pay when you receive your order</p>
                  </div>
                </div>
              </div>

              <button
                type='submit'
                // onClick={() => navigate('/orders')}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-4 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 font-medium text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder