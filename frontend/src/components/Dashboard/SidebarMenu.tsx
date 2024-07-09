import { ReactNode } from 'react'
import { Sidebar } from './Sidebar/Sidebar'
import { Header } from './Header/Header'

type SidebarMenuProps = {
    children: ReactNode;
}

export const SidebarMenu = ({children}: SidebarMenuProps) => {
  return (
    <>
    <div className='w-full h-screen flex'>
        <Sidebar />
        <main className='w-full overflow-x-auto bg-slate-800'>
            <Header />
            {children}
        </main>
    </div>
    </>
  )
}
