import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'

const List = ({ token }) => {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchList = async () => {
        try {
            setLoading(true)
            const response = await axios.get(backendUrl + "/api/product/list")
            if (response.data.success) {
                setList(response.data.products)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    const removeProduct = async (id) => {
        if (!window.confirm("Are you sure you want to delete this product?")) {
            return
        }
        
        try {
            const response = await axios.post(backendUrl + "/api/product/remove", { id }, { headers: { token } })
            if (response.data.success) {
                toast.success(response.data.message)
                await fetchList()
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        fetchList()
    }, [])

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
        )
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">All Products List</h1>
            
            {/* Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
                {/* Table Header */}
                <div className="hidden md:grid md:grid-cols-12 bg-gray-100 text-gray-600 font-semibold px-4 py-3 border-b">
                    <div className="col-span-2">Image</div>
                    <div className="col-span-3">Name</div>
                    <div className="col-span-2">Category</div>
                    <div className="col-span-2">Price</div>
                    <div className="col-span-2">Sub Category</div>
                    <div className="col-span-1">Action</div>
                </div>

                {/* Product List */}
                {list.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                        No products found. Add some products to see them here.
                    </div>
                ) : (
                    list.map((item, index) => (
                        <div key={item._id || index} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border-b hover:bg-gray-50 transition-colors">
                            {/* Image */}
                            <div className="md:col-span-2">
                                <img 
                                    src={item.image && item.image[0] ? item.image[0] : '/placeholder-image.jpg'} 
                                    alt={item.name} 
                                    className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg border"
                                    onError={(e) => {
                                        e.target.src = '/placeholder-image.jpg'
                                    }}
                                />
                            </div>

                            {/* Name */}
                            <div className="md:col-span-3">
                                <p className="font-medium text-gray-800 break-words">{item.name}</p>
                                <p className="text-sm text-gray-500 mt-1 line-clamp-2">{item.description}</p>
                            </div>

                            {/* Category */}
                            <div className="md:col-span-2">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                    {item.category || 'N/A'}
                                </span>
                            </div>

                            {/* Price */}
                            <div className="md:col-span-2">
                                <p className="text-green-600 font-semibold">{currency}{item.price || '0'}</p>
                            </div>

                            {/* Sub Category */}
                            <div className="md:col-span-2">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                    {item.subCategory || 'N/A'}
                                </span>
                            </div>

                            {/* Action */}
                            <div className="md:col-span-1 flex items-center">
                                <button
                                    onClick={() => removeProduct(item._id)}
                                    className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                                    title="Delete Product"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden mt-4 space-y-4">
                {list.map((item, index) => (
                    <div key={item._id || index} className="bg-white p-4 rounded-lg shadow">
                        <div className="flex items-start space-x-4">
                            <img 
                                src={item.image && item.image[0] ? item.image[0] : '/placeholder-image.jpg'} 
                                alt={item.name} 
                                className="w-16 h-16 object-cover rounded-lg border"
                                onError={(e) => {
                                    e.target.src = '/placeholder-image.jpg'
                                }}
                            />
                            <div className="flex-1">
                                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                                <p className="text-sm text-gray-600 mt-1">{item.category} • {item.subCategory}</p>
                                <p className="text-green-600 font-semibold mt-1">{currency}{item.price}</p>
                            </div>
                            <button
                                onClick={() => removeProduct(item._id)}
                                className="p-2 text-red-500 hover:bg-red-50 rounded-full"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default List



// import axios from 'axios'
// import React, { useState,useEffect } from 'react'
// import { backendUrl, currency } from '../App'
// import { toast } from 'react-toastify'

// const List = ({token}) => {
//     const [list,setList]=useState([])

//     const fetchList=async()=>{
//         try{

//             const response= await axios.get(backendUrl+"/api/product/list")
//             if(response.data.success){
//                 setList(response.data.products)

//             }
//             else{
//                 toast.error(response.data.message)
//             }
            
//         }
//         catch(error){
//             console.log(error)
//             toast.error(error.message)

//         }

//     }

//     const removeProduct=async(id)=>{
//         try{
//             const response=await axios.post(backendUrl+"/api/product/remove",{id},{headers:{token}})
//             if(response.data.success){
              
//               toast.success(response.data.message)
//               await fetchList()
//             }
//             else{
//              toast.error(response.data.message)   
//             }
            

//         }
//         catch(error){
//             console.log(error)
//             toast.error(error.message)

//         }

//     }

//     useEffect(()=>{
//         fetchList()

//     },[])
//   return (
//     <>
//     <p>All Products List</p>
//     {/* list table titl */}
//     <div>
//         <b>Image</b>
//         <b>Name</b>
//         <b>category</b>
//         <b>price</b>
//         <b>Action</b>

//         {/* product list */}
//         {
//             list.map((item,index)=>(
//                 <div key={index}>
//                     <img src={item.image[0]} alt=""/>
//                     <p>{item.name}</p>
//                     <p>{item.category}</p>
//                     <p>{currency}{item.price}</p>
//                     <p onClick={()=>removeProduct(item._id)}>X</p>

//                 </div>

//             ))
//         }
//     </div>
//     </>
    
//   )
// }

// export default List