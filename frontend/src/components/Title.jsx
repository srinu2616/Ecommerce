import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className="text-center mb-8">
      <p className="text-3xl md:text-4xl font-bold text-gray-800">
        {text1}
        <span className="text-blue-600 ml-2">{text2}</span>
      </p>
      <p className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-4 rounded-full"></p>
    </div>
  )
}

export default Title