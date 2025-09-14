import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

const CartTotal = () => {
    const {currency,delivery_fee,getCartAmount}=useContext(ShopContext)

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="mb-6">
            <Title text1={'CART'} text2={'TOTALS'} />
        </div>
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <p className="text-gray-600">Subtotal</p>
                <p className="text-gray-800">{currency}{getCartAmount()}.00</p>
            </div>
            <hr className="border-gray-200"/>
            <div className="flex justify-between items-center">
                <p className="text-gray-600">Shipping Fee</p>
                <p className="text-gray-800">{currency}{delivery_fee}</p>
            </div>
            <hr className="border-gray-200"/>
            <div className="flex justify-between items-center pt-2">
                <b className="text-lg font-semibold text-gray-800">Total</b>
                <b className="text-lg font-semibold text-gray-800">
                    {currency}{getCartAmount()===0? 0:getCartAmount()+delivery_fee}.00
                </b>
            </div>
        </div>
    </div>
  )
}

export default CartTotal