import React from 'react'
import Header from './components/Header.jsx'
import { Outlet } from 'react-router-dom'
import Theme from './contexts/ThemeContext'

export default function App() {
  return (
    <Theme>
     <Header/>
     <Outlet/>
    </Theme>
  )
}
