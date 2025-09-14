import React from 'react'

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault()
  }

  return (
    <div className="bg-white py-12 px-6 sm:px-10 lg:px-16 rounded-2xl shadow-md text-center max-w-2xl mx-auto">
      <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
        Subscribe now & get <span className="text-amber-500">20% off</span>
      </p>
      <p className="text-gray-600 mb-8 text-sm sm:text-base">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>

      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="w-full sm:w-2/3 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-gray-700"
        />
        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition-all duration-300"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  )
}

export default NewsletterBox
