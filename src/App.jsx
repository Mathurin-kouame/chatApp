/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Chat from './pages/Chat/Chat'
import ProfileUpdate from './pages/profileUpdate/ProfileUpdate'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/' element={<Chat />} />
        <Route path='/' element={<ProfileUpdate />} />
      </Routes>
   </>
  )
}

export default App
