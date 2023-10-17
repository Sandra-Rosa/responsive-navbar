import { useState } from 'react'
import './App.css'
import Navbar from './navbar';

function App() {

  return (
    <>
      <Navbar />
      <div className="container mt-5">
                <h1>Welcome to My Site</h1>
                <p>This is a simple site using Vite, React, and Bootstrap.</p>
            </div>
    </>
  )
}

export default App
