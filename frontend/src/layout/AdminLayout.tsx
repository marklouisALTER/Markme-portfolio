import React from 'react'
import { Outlet } from 'react-router-dom'
import { SidebarMenu } from '../components/Dashboard/SidebarMenu'

export const AdminLayout:React.FC = () => {
  return (
    <>
    <SidebarMenu>
        <Outlet />
    </SidebarMenu>
    </>
  )
}
