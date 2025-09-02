import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar /><Home /></>,
    },
    {
      path: '/dashboard',
      element: <><Navbar /><Dashboard /></>,
    },
    {
      path: '/login',
      element: <><Navbar /><Login /></>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
