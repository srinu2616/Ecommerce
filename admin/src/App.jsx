import React, { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import { Route, Routes } from "react-router-dom"
import Add from "./pages/Add"
import List from "./pages/List"
import Orders from "./pages/Orders"
import Login from "./components/Login"
import { ToastContainer, toast } from 'react-toastify';
import Layout from "./pages/Layout"



export const backendUrl = "https://ecommerce-lscq.onrender.com"
export const currency='₹'

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : "")

  useEffect(() => {
    localStorage.setItem('token', token)

  }, [token])


  return (
    <div>
      <ToastContainer />
      {token === ""
        ? <Login setToken={setToken} />
        : <>
          <Navbar setToken={setToken} />
          <hr />
          <div>

            <div>
              <Routes>
                <Route path="/" element={<Layout token={token} />}>
                  <Route path="add" element={<Add token={token} />} />
                  <Route path="list" element={<List token={token} />} />
                  <Route path="orders" element={<Orders token={token} />} />
                </Route>
              </Routes>
            </div>
          </div>

        </>
      }

    </div>
  )
}

export default App
