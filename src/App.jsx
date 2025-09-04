import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/signup'
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
    {
      path: '/signup',
      element: <><Navbar /><Signup /></>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
