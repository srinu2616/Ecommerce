import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({token}) => {
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const [image4, setImage4] = useState(null);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("Men");
    const [subCategory, setSubCategory] = useState("Topwear");
    const [bestseller, setBestseller] = useState(false);
    const [sizes, setSizes] = useState([]);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("description", description);
            formData.append("price", price);
            formData.append("category", category);
            formData.append("subCategory", subCategory);
            formData.append("bestseller", JSON.stringify(bestseller));
            formData.append("sizes", JSON.stringify(sizes));

            image1 && formData.append("image1", image1);
            image2 && formData.append("image2", image2);
            image3 && formData.append("image3", image3);
            image4 && formData.append("image4", image4);

            const response = await axios.post(backendUrl+"/api/product/add", formData, {headers: {token}});
            if(response.data.success){
                toast.success(response.data.message);
                setName('');
                setDescription('');
                setImage1(null);
                setImage2(null);
                setImage3(null);
                setImage4(null);
                setPrice('');
                setSizes([]);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error(error.message);
        }
    };

    const toggleSize = (size) => {
        setSizes(prev =>
            prev.includes(size)
                ? prev.filter(item => item !== size)
                : [...prev, size]
        );
    };

    return (
        <form onSubmit={onSubmitHandler} className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-sm">
            <h1 className="text-xl font-semibold text-gray-800 mb-4">Add New Product</h1>
            
            {/* Image Upload Section */}
            <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Product Images</p>
                <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4].map((num) => {
                        const image = [image1, image2, image3, image4][num - 1];
                        const setImage = [setImage1, setImage2, setImage3, setImage4][num - 1];
                        
                        return (
                            <label key={num} htmlFor={`image${num}`} className="cursor-pointer">
                                <img 
                                    src={!image ? assets.upload_area : URL.createObjectURL(image)} 
                                    alt={`Upload ${num}`} 
                                    className="w-full h-20 object-cover border border-dashed border-gray-300 rounded-md hover:border-blue-400 transition-colors"
                                />
                                <input 
                                    type='file' 
                                    onChange={(e) => setImage(e.target.files[0])} 
                                    id={`image${num}`} 
                                    hidden 
                                />
                            </label>
                        );
                    })}
                </div>
            </div>

            {/* Product Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                {/* Product Name */}
                <div>
                    <p className="text-xs font-medium text-gray-600 mb-1">Product Name</p>
                    <input 
                        type='text' 
                        onChange={(e) => setName(e.target.value)} 
                        value={name} 
                        placeholder='Product name' 
                        required 
                        className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                {/* Product Price */}
                <div>
                    <p className="text-xs font-medium text-gray-600 mb-1">Price (₹)</p>
                    <input 
                        type='Number' 
                        onChange={(e) => setPrice(e.target.value)} 
                        value={price} 
                        placeholder='250' 
                        className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                {/* Category */}
                <div>
                    <p className="text-xs font-medium text-gray-600 mb-1">Category</p>
                    <select 
                        onChange={(e) => setCategory(e.target.value)} 
                        className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                        <option value="kids">Kids</option>
                    </select>
                </div>

                {/* Sub Category */}
                <div>
                    <p className="text-xs font-medium text-gray-600 mb-1">Sub Category</p>
                    <select 
                        onChange={(e) => setSubCategory(e.target.value)} 
                        className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                        <option value="Topwear">Topwear</option>
                        <option value="Bottomwear">Bottomwear</option>
                        <option value="Winterwear">Winterwear</option>
                    </select>
                </div>
            </div>

            {/* Product Description */}
            <div className="mb-3">
                <p className="text-xs font-medium text-gray-600 mb-1">Description</p>
                <textarea 
                    onChange={(e) => setDescription(e.target.value)} 
                    value={description} 
                    placeholder='Product description' 
                    required 
                    rows="2"
                    className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
            </div>

            {/* Size Selection */}
            <div className="mb-3">
                <p className="text-xs font-medium text-gray-600 mb-1">Sizes</p>
                <div className="flex flex-wrap gap-1">
                    {["S", "M", "L", "XL", "XXL"].map((size) => (
                        <div 
                            key={size}
                            onClick={() => toggleSize(size)}
                            className={`px-2 py-1 text-xs rounded-md cursor-pointer transition-colors ${
                                sizes.includes(size) 
                                    ? 'bg-blue-500 text-white' 
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            {size}
                        </div>
                    ))}
                </div>
            </div>

            {/* Bestseller Checkbox and Submit Button */}
            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                    <input 
                        type='checkbox' 
                        onChange={() => setBestseller(prev => !prev)} 
                        checked={bestseller} 
                        id='bestSeller' 
                        className="h-3.5 w-3.5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor='bestSeller' className="ml-1.5 text-xs text-gray-700">
                        Bestseller
                    </label>
                </div>

                <button 
                    type='submit' 
                    className="bg-blue-600 text-white py-2 px-4 text-sm rounded-md font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                    Add Product
                </button>
            </div>
        </form>
    );
};

export default Add;