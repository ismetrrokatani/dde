import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">
          Welcome Home
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          This is the home page of your application
        </p>
        <div className="space-x-4">
          <a 
            href="/about" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition duration-300"
          >
            About Us
          </a>
          <a 
            href="/contact" 
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}
