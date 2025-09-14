import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'


const Collection = () => {
    const { products,search,showSearch } = useContext(ShopContext)
    const [filteredProducts, setFilterProducts] = useState([])
    const [category, setCategory] = useState([])
    const [subCategory, setSubCategory] = useState([])
    const [sortType, setSortType] = useState('relavent')
    const [mobileFilterOpen, setMobileFilterOpen] = useState(false)

    const toggleCategory = (value) => {
        if (category.includes(value)) {
            setCategory(prev => prev.filter(item => item !== value))
        } else {
            setCategory(prev => [...prev, value])
        }
    }

    const toggleSubCategory = (value) => {
        if (subCategory.includes(value)) {
            setSubCategory(prev => prev.filter(item => item !== value))
        } else {
            setSubCategory(prev => [...prev, value])
        }
    }

    const applyFilter = () => {
        let productCopy = products.slice()
        if(showSearch && search){
            productCopy=productCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
        }

        if (category.length > 0) {
            productCopy = productCopy.filter(item => category.includes(item.category))
        }

        if (subCategory.length > 0) {
            productCopy = productCopy.filter(item => subCategory.includes(item.subCategory))
        }

        setFilterProducts(productCopy)
    }

    const sortProduct = () => {
        let fpCopy = [...filteredProducts]

        switch (sortType) {
            case 'low-high':
                setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)))
                break
            case 'high-low':
                setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)))
                break
            default:
                applyFilter()
                break
        }
    }

    const clearFilters = () => {
        setCategory([])
        setSubCategory([])
        setSortType('relavent')
    }

    useEffect(() => {
        applyFilter()
    }, [category, subCategory,search,showSearch,products])

    useEffect(() => {
        sortProduct()
    }, [sortType])

    // Initialize with all products
    useEffect(() => {
        setFilterProducts(products)
    }, [products])

    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Page Title */}
                <div className="mb-8">
                    <Title text1={'ALL'} text2={'COLLECTIONS'} />
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filter Sidebar */}
                    <div className="lg:w-1/4">
                        {/* Mobile Filter Toggle */}
                        <div className="lg:hidden mb-4">
                            <button 
                                onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                                className="w-full flex items-center justify-between bg-gray-100 px-4 py-3 rounded-lg"
                            >
                                <span className="font-medium">FILTERS</span>
                                <img 
                                    src={assets.dropdown_icon} 
                                    alt="Filter" 
                                    className={`w-4 h-4 transition-transform ${mobileFilterOpen ? 'rotate-180' : ''}`}
                                />
                            </button>
                        </div>

                        {/* Filter Content */}
                        <div className={`${mobileFilterOpen ? 'block' : 'hidden'} lg:block bg-white border border-gray-200 rounded-lg p-6 shadow-sm`}>
                            {/* Filter Header */}
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                                {(category.length > 0 || subCategory.length > 0) && (
                                    <button 
                                        onClick={clearFilters}
                                        className="text-sm text-blue-600 hover:text-blue-800"
                                    >
                                        Clear all
                                    </button>
                                )}
                            </div>

                            {/* Category Filter */}
                            <div className="mb-6">
                                <h3 className="text-sm font-medium text-gray-900 mb-3 uppercase tracking-wide">CATEGORIES</h3>
                                <div className="space-y-2">
                                    {['Men', 'Women', 'kids'].map((cat) => (
                                        <label key={cat} className="flex items-center cursor-pointer group">
                                            <input
                                                type="checkbox"
                                                value={cat}
                                                checked={category.includes(cat)}
                                                onChange={() => toggleCategory(cat)}
                                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                            />
                                            <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900">
                                                {cat}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* SubCategory Filter */}
                            <div className="mb-6">
                                <h3 className="text-sm font-medium text-gray-900 mb-3 uppercase tracking-wide">TYPE</h3>
                                <div className="space-y-2">
                                    {['Topwear', 'Bottomwear', 'Winterwear'].map((subCat) => (
                                        <label key={subCat} className="flex items-center cursor-pointer group">
                                            <input
                                                type="checkbox"
                                                value={subCat}
                                                checked={subCategory.includes(subCat)}
                                                onChange={() => toggleSubCategory(subCat)}
                                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                            />
                                            <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900">
                                                {subCat}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Active Filters */}
                            {(category.length > 0 || subCategory.length > 0) && (
                                <div className="pt-4 border-t border-gray-200">
                                    <h4 className="text-sm font-medium text-gray-900 mb-2">Active Filters</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {category.map(cat => (
                                            <span key={cat} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                {cat}
                                            </span>
                                        ))}
                                        {subCategory.map(subCat => (
                                            <span key={subCat} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                {subCat}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Products Section */}
                    <div className="lg:w-3/4">
                        {/* Header with sort and results count */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                            <p className="text-gray-600 text-sm">
                                Showing {filteredProducts.length} of {products.length} products
                            </p>
                            <div className="flex items-center gap-3">
                                <span className="text-sm text-gray-700">Sort by:</span>
                                <select
                                    value={sortType}
                                    onChange={(e) => setSortType(e.target.value)}
                                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value='relavent'>Relevant</option>
                                    <option value='low-high'>Price: Low to High</option>
                                    <option value='high-low'>Price: High to Low</option>
                                </select>
                            </div>
                        </div>

                        {/* Products Grid */}
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredProducts.map((item, index) => (
                                    <ProductItem
                                        key={index}
                                        id={item._id}
                                        name={item.name}
                                        price={item.price}
                                        image={item.image}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <div className="text-gray-400 mb-4">
                                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                                <p className="text-gray-600 mb-4">Try adjusting your filters to see more results.</p>
                                <button
                                    onClick={clearFilters}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection