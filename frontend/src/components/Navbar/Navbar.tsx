import React from 'react'
import{ Switch } from 'antd'
import logo from '../../assets/images/favicon.png'
import { useThemeStore } from '../../Store/ThemeManagement'

const Navbar:React.FC = () => {

    const {updateTheme, isDark} = useThemeStore();

    return(
        <>
        <nav 
            className={`w-full py-5 flex items-center justify-between fixed backdrop-blur-xl transition-all 
            delay-50 ease-in-out px-10 md:px-20 lg:px-30 xl:px-40 z-[5] ${isDark ? 'bg-slate-800': 'bg-transparent'}`}>
            <a 
                href="/"
                className='flex items-center gap-2'>
                <img 
                    src={logo} 
                    alt='Website Logo Icon' 
                    className='w-10 h-10'
                />
            </a>
                    
            <div className="hidden md:flex items-center gap-5">
                <a 
                    href="#home"
                    className={`font-medium font-karla border-b-2 border-transparent transition-all delay-50 ease-in-out 
                    ${isDark ? 'text-white hover:border-white': 'hover:text-brand-primary hover:border-brand-primary'}`}
                >
                        Home
                </a>
                <a 
                    href="#tools"
                    className={`font-medium font-karla border-b-2 border-transparent transition-all delay-50 ease-in-out 
                    ${isDark ? 'text-white hover:border-white': 'hover:text-brand-primary hover:border-brand-primary'}`}
                >
                        Tools
                </a>
                <a 
                    href="#language"
                    className={`font-medium font-karla border-b-2 border-transparent transition-all delay-50 ease-in-out 
                    ${isDark ? 'text-white hover:border-white': 'hover:text-brand-primary hover:border-brand-primary'}`}
                >
                        Language
                </a>
                <a 
                    href="#experience"
                    className={`font-medium font-karla border-b-2 border-transparent transition-all delay-50 ease-in-out 
                    ${isDark ? 'text-white hover:border-white': 'hover:text-brand-primary hover:border-brand-primary'}`}
                >
                        Experience
                </a>
                
                <a 
                    href="#certificate"
                    className={`font-medium font-karla border-b-2 border-transparent transition-all delay-50 ease-in-out 
                    ${isDark ? 'text-white hover:border-white': 'hover:text-brand-primary hover:border-brand-primary'}`}
                >
                        Certificates
                </a>
                
                <button 
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
export default Navbar;