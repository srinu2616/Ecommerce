import axios from 'axios'
import React, { useState } from 'react'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Login = ({setToken}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault(); 

            const response=await axios.post(backendUrl+'/api/user/admin',{email,password})
            if(response.data.success){
                setToken(response.data.token)

            }
            else{
                toast.error(response.data.message)

            }
            
        } catch (error) {
            console.error('Login error:', error)
            toast.error(response.data.message)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Admin Panel</h1>
                
                <form onSubmit={onSubmitHandler} className="space-y-4">
                    <div>
                        <p className="text-sm font-medium text-gray-700 mb-1">Email Address</p>
                        <input 
                            type='email' 
                            onChange={(e) => setEmail(e.target.value)} 
                            value={email}  
                            placeholder='your@email.com' 
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    
                    <div>
                        <p className="text-sm font-medium text-gray-700 mb-1">Password</p>
                        <input 
                            type='password' 
                            onChange={(e) => setPassword(e.target.value)}  
                            value={password}  
                            placeholder='Enter your password' 
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    
                    <button 
                        type='submit'
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login