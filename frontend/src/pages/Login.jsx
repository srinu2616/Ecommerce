import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login')
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(backendUrl + '/api/user/register', { name, email, password })
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        }
        else {
          toast.error(response.data.message)

        }
      }
      else {
        const response = await axios.post(backendUrl + '/api/user/login', { email, password })
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        }
        else {
          toast.error(response.data.message)

        }


      }

    }
    catch (error) {
      console.log(error)
      toast.error(error.message)

    }
  }

  useEffect(()=>{
    if(token){
      navigate('/')
    }

  },[token])

  return (
    <div className="min-h-screen bg-gradient-to-br from-white-50 to-white-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {currentState === 'Login' ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="mt-2 text-gray-600">
              {currentState === 'Login'
                ? 'Sign in to your account'
                : 'Join us today to get started'
              }
            </p>
          </div>

          <form onSubmit={onSubmitHandler} className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-800">{currentState}</h3>
                <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
              </div>
            </div>

            {currentState === 'Sign Up' && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Enter your password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            {currentState === 'Login' && (
              <div className="flex justify-end">
                <a href="#" className="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                  Forgot your password?
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
            </button>

            <div className="text-center pt-4">
              <p className="text-gray-600">
                {currentState === 'Login'
                  ? "Don't have an account? "
                  : "Already have an account? "
                }
                <button
                  type="button"
                  onClick={() => setCurrentState(currentState === 'Login' ? 'Sign Up' : 'Login')}
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  {currentState === 'Login' ? 'Create account' : 'Login here'}
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login