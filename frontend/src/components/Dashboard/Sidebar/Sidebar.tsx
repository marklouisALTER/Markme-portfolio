import React from 'react'
import { Link } from 'react-router-dom';
import { sidebarLink } from './SidebarLink';
import { IoMdSettings } from "react-icons/io";
import logoIcon from '@/assets/images/favicon.png'
import { useThemeStore } from '@/Store/ThemeManagement';
import { SidebarNavLink } from './SidebarNavLink';


export const Sidebar:React.FC = () => {

    const isDark = useThemeStore(state => state.isDark);
  return (
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
  )
}
