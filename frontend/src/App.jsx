import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import CreateNote from './pages/CreateNote'
import EditNote from './pages/EditNote'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {

  const token  = localStorage.getItem("token")
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />

        <Route path="/" element={
          <>
            <Navbar/>
            <Home/>
          </>
        } />
        <Route path='/create' element={token ? <CreateNote/> : <Login/>} />
        <Route path="/edit/:id" element={token ? <EditNote/> : <Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

// in this project which are the things should be included more