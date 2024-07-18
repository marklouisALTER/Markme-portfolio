import React from 'react'
import { Link } from 'react-router-dom';
import { sidebarLink } from './SidebarLink';
import { IoMdSettings } from "react-icons/io";
import logoIcon from '@/assets/images/favicon.png'
import { useThemeStore } from '@/Store/ThemeManagement';
import { SidebarNavLink } from './SidebarNavLink';
import { openSidebarBtnStore } from '@/Store/OpenSidebar';
import { FaArrowLeftLong } from "react-icons/fa6";

export const Sidebar:React.FC = () => {
const { isOpen ,toggleSidebar } = openSidebarBtnStore();
const isDark = useThemeStore(state => state.isDark);
  return (
    <>
        <aside className='h-screen hidden bg-slate-800 md:flex flex-col justify-between w-[25rem]'>
            <div className='w-full flex items-center gap-2 justify-center py-5 mb-10'>
                <img src={logoIcon} alt='Login' className='w-14 h-14'/>
                <h1 className={`font-ubuntu text-3xl font-semibold ${isDark? 'text-brand-primary': 'text-brand-secondary'}`}>A R K M E</h1>
            </div>
            {sidebarLink.map((link, index) => (
                <SidebarNavLink key={index} item={link} />
            ))
            }
            <div className='w-full mt-auto px-5 mb-5'>
                <Link
                    to={'/settings'}
                    className="flex font-karla text-xl w-full px-5 justify-between py-3 rounded-lg
                    items-center gap-2 transition-all delay-50 ease-in-out hover:bg-green-500 hover:text-white"
                >
                    <div className='flex items-center gap-2 text-white'>
                        <IoMdSettings />
                        Settings
                    </div>
                </Link>
            </div>
        </aside>
        <aside className={`${isOpen ? 'w-[20rem]': 'w-0'} transition-all ease-in-out overflow-hidden h-screen
            absolute left-0 top-0 bg-slate-800 md:hidden flex-col justify-between z-[99]`}>
            <div className='w-full flex items-center justify-end p-5'>
                <div className='text-white text-2xl cursor-pointer p-3 hover:bg-[#101d2e] rounded-md'>
                    <FaArrowLeftLong onClick={toggleSidebar}/>
                </div>
            </div>
                
            <div className='w-full flex items-center gap-2 justify-center py-5 mb-10'>

                <img src={logoIcon} alt='Login' className='w-14 h-14'/>

                <h1 className={`font-ubuntu text-3xl font-semibold ${isDark? 'text-brand-primary': 'text-brand-secondary'}`}>A R K M E</h1>
            </div>
            {sidebarLink.map((link, index) => (
                <SidebarNavLink key={index} item={link} />
            ))
            }
            <div className='w-full mt-auto px-5 mb-5'>
                <Link
                    to={'/settings'}
                    className="flex font-karla text-xl w-full px-5 justify-between py-3 rounded-lg
                    items-center gap-2 transition-all delay-50 ease-in-out hover:bg-green-500 hover:text-white"
                >
                    <div className='flex items-center gap-2 text-white'>
                        <IoMdSettings />
                        Settings
                    </div>
                </Link>
            </div>
        </aside>
    </>
  )
}
