import React from 'react'
// import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import NavbarLinks from '../components/Navbar/NavbarLinks'

export const Layout:React.FC = () => {
  return (
    <>
        <NavbarLinks />
        <Outlet />
    </>
  )
}
