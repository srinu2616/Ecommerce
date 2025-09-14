import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} className="group block w-full max-w-xs mx-auto animate-fade-in-up">
      <div className="relative overflow-hidden rounded-xl bg-gray-100 shadow-lg transition-all duration-500 group-hover:shadow-2xl">
        <div className="relative pt-[100%]"> {/* This is the magic for the full image */}
          <img
            src={image[0]}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
      </div>
      <div className="mt-4 space-y-2 text-center transition-all duration-300 transform group-hover:-translate-y-1">
        <p className="text-lg font-semibold text-gray-800 line-clamp-2 transition-colors duration-300 group-hover:text-blue-600">
          {name}
        </p>
        <p className="text-xl font-extrabold text-blue-700">
          {currency}{price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;