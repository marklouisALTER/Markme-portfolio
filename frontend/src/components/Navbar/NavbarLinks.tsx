import React from 'react'
import{ Switch } from 'antd'
import logo from '../../assets/images/favicon.png'
import { useThemeStore } from '../../Store/ThemeManagement'
import { NavLink } from 'react-router-dom'

const NavbarLinks:React.FC = () => {

    const {updateTheme, isDark} = useThemeStore();

    return(
        <>
        <nav 
            className={`w-full border-b py-5 flex items-center justify-between fixed backdrop-blur-xl transition-all 
            delay-50 ease-in-out px-10 md:px-20 lg:px-30 xl:px-40 z-[5] ${isDark ? 'bg-slate-800 border-transparent': 'border-[#e5e9f2] bg-white'}`}>
            <NavLink
                to="/"
                className='flex items-center gap-2'>
                <img 
                    src={logo} 
                    alt='Website Logo Icon' 
                    className='w-10 h-10'
                />
            </NavLink>
                    
            <div className="hidden md:flex items-center gap-5">
                <button 
                    onClick={() => window.location.href = '/login'}
                    className={`p-1 px-7 rounded-lg font-karla transition-all delay-50 ease-in-out focus:outline-none
                    focus:ring-2 focus:ring-brand-secondary focus:ring-offset-2 border border-transparent
                    ${isDark ? 'bg-white text-black hover:bg-slate-800 hover:text-white hover:border-white' : 
                    'bg-brand-primary text-white hover:bg-brand-secondary'}`}
                >
                    Login
                </button>

                <Switch 
                    size='default'
                    style={{ backgroundColor: '#adb5bd'}}
                    onClick={updateTheme}
                    checkedChildren="🌙"
                    unCheckedChildren="🌞"
                />
            </div>
        </nav>
       
        </>
    )
}
export default NavbarLinks;