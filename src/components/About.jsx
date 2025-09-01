import React from 'react'
import Navber from './Navber'
import Footer from './Footer'

export default function About() {
  return (
    <>
    <Navber/>
     <div className="max-w-3xl mx-auto pb-16 px-5 py-10 text-center">
      <h1 className="text-3xl font-bold mb-5">About Password Manager</h1>
      <p className="text-lg text-gray-700 mb-6">
        Our <strong>Password Manager App</strong> is a secure and easy-to-use tool
        that helps you safely store and manage your online credentials. Instead
        of writing down or memorizing dozens of passwords, you can save your
        website URLs, usernames, and passwords in one organized place.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Key Features</h2>
      <ul className="list-disc list-inside text-left mx-auto max-w-md text-gray-600 space-y-2">
        <li>🔐 Store multiple account details securely</li>
        <li>📋 Copy username or password with one click</li>
        <li>📱 Fully responsive design for mobile and desktop</li>
        <li>🗑️ Easily delete entries you no longer need</li>
        <li>⚡ Quick input form to add new accounts instantly</li>
      </ul>

      <p className="text-gray-700 mt-6">
        This app is designed for <strong>personal use</strong>, making password
        management simple and efficient without the complexity of heavy
        enterprise tools.
      </p>
    </div>
    <Footer/>
    </>
  )
}
