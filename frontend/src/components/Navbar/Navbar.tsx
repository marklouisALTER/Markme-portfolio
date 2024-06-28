import React from 'react'
// import{ Switch } from 'antd'
import logo from '../../assets/images/favicon.png'
import { useThemeStore } from '../../Store/ThemeManagement'
import { IoMenu } from "react-icons/io5";
import logoIcon from '../../assets/images/favicon.png';
import { useActiveSidebarBtnStore } from '../../Store/ActiveButton';

const Navbar:React.FC = () => {

    const {isDark} = useThemeStore();
    const { isSidebarBtnActive, setSidebarBtnActive } = useActiveSidebarBtnStore();
    return(
        <>
        <nav 
            data-aos="fade-zoom-in" data-aos-easing="ease-in-back"
            data-aos-delay="100"
            className={`w-full border-b py-5 flex items-center justify-between fixed transition-all bg-[#101d2e]
            delay-50 ease-in-out px-10 md:px-20 lg:px-30 xl:px-40 z-[5] ${isDark ? ' border-transparent': 'border-[#e5e9f2]'}`}>
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
                    data-aos="fade-zoom-in" data-aos-easing="ease-in-back"
                    data-aos-delay="150"
                    href="#home"
                    className={`font-medium font-karla text-sm lg:text-[17px] border-b-2 border-transparent transition-all delay-50 ease-in-out 
                    ${isDark ? 'text-white hover:border-white': 'hover:text-brand-primary hover:border-brand-primary'}`}
                >
                        Home
                </a>
                {/* <a 
                    href="#tools"
                    className={`font-medium font-karla border-b-2 border-transparent transition-all delay-50 ease-in-out 
                    ${isDark ? 'text-white hover:border-white': 'hover:text-brand-primary hover:border-brand-primary'}`}
                >
                        Tools
                </a> */}
                <a 
                    data-aos="fade-zoom-in" data-aos-easing="ease-in-back"
                    data-aos-delay="200"
                    href="#language"
                    className={`font-medium font-karla text-sm lg:text-[17px]  border-b-2 border-transparent transition-all delay-50 ease-in-out 
                    ${isDark ? 'text-white hover:border-white': 'hover:text-brand-primary hover:border-brand-primary'}`}
                >
                        Language
                </a>
                <a 
                    data-aos="fade-zoom-in" data-aos-easing="ease-in-back"
                    data-aos-delay="250"
                    href="#experience"
                    className={`font-medium font-karla text-sm lg:text-[17px]  border-b-2 border-transparent transition-all delay-50 ease-in-out 
                    ${isDark ? 'text-white hover:border-white': 'hover:text-brand-primary hover:border-brand-primary'}`}
                >
                        Experience
                </a>
                
                <a 
                    data-aos="fade-zoom-in" data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    href="#certificate"
                    className={`font-medium font-karla text-sm lg:text-[17px]  border-b-2 border-transparent transition-all delay-50 ease-in-out 
                    ${isDark ? 'text-white hover:border-white': 'hover:text-brand-primary hover:border-brand-primary'}`}
                >
                        Certificates
                </a>
                <a 
                    data-aos="fade-zoom-in" data-aos-easing="ease-in-back"
                    data-aos-delay="350"
                    href="#projects"
                    className={`font-medium font-karla text-sm lg:text-[17px]  border-b-2 border-transparent transition-all delay-50 ease-in-out 
                    ${isDark ? 'text-white hover:border-white': 'hover:text-brand-primary hover:border-brand-primary'}`}
                >
                        Projects
                </a>
                <a 
                    data-aos="fade-zoom-in" data-aos-easing="ease-in-back"
                    data-aos-delay="400"
                    href="#blogs"
                    className={`font-medium font-karla text-sm lg:text-[17px]  border-b-2 border-transparent transition-all delay-50 ease-in-out 
                    ${isDark ? 'text-white hover:border-white': 'hover:text-brand-primary hover:border-brand-primary'}`}
                >
                        Blogs
                </a>
                
                <button 
                    data-aos="fade-zoom-in" data-aos-easing="ease-in-back"
                    data-aos-delay="450"
                    onClick={() => window.location.href = '/login'}
                    className={`p-1 px-7 rounded-lg font-karla transition-all delay-50 ease-in-out focus:outline-none
                    focus:ring-2 focus:ring-brand-secondary focus:ring-offset-2 border border-transparent
                    ${isDark ? 'bg-white text-black hover:bg-slate-800 hover:text-white hover:border-white' : 
                    'bg-brand-primary text-white hover:bg-brand-secondary'}`}
                >
                    Login
                </button>

                {/* <Switch 
                    size='default'
                    style={{ backgroundColor: '#adb5bd'}}
                    onClick={updateTheme}
                    checkedChildren="🌙"
                    unCheckedChildren="🌞"
                /> */}
            </div>
            <div className='flex md:hidden'>
                <button 
                    onClick={() => setSidebarBtnActive()}
                    className='text-brand-primary text-3xl hover:text-white hover:bg-brand-primary p-2 rounded-lg transition-all delay-50 ease-in-out'>
                    <IoMenu />
                </button>
            </div>
            <div 
                onClick={() => setSidebarBtnActive()}
                className={`${isSidebarBtnActive ? 'flex': 'hidden'} md:hidden absolute bg-black/65 w-full h-screen inset-0 cursor-pointer`}>
            </div>
            <div className={`${isSidebarBtnActive ? 'w-60': 'w-0'} flex flex-col justify-between md:hidden absolute h-screen bg-[#101d2e] 
            top-0 left-0 transition-all delay-50 ease-in-out overflow-hidden`}>
                <div>
                    <div className='w-full flex items-center gap-2 p-7'>
                            <img src={logoIcon} alt='Login' className='w-8 h-8'/>
                            <h1 className={`font-ubuntu text-1xl font-semibold ${isDark? 'text-brand-primary': 'text-brand-secondary'}`}>A R K M E</h1>
                        </div>
                        <div className='mt-5 flex flex-col items-left gap-2'>
                            <a href="#home" className='flex items-center font-karla font-medium text-white hover:bg-brand-primary 
                            mx-3 rounded-lg gap-2 p-5 text-lg transition-all'>
                                Home
                            </a>
                            <a href="#language" className='flex items-center font-karla font-medium text-white hover:bg-brand-primary 
                            mx-3 rounded-lg gap-2 p-5 text-lg transition-all'>
                                Language 
                            </a>
                            <a href="#experience" className='flex items-center font-karla font-medium text-white hover:bg-brand-primary 
                            mx-3 rounded-lg gap-2 p-5 text-lg transition-all'>
                                Experience 
                            </a>
                            <a href="#certificate" className='flex items-center font-karla font-medium text-white hover:bg-brand-primary 
                            mx-3 rounded-lg gap-2 p-5 text-lg transition-all'>
                                Certificate 
                            </a>
                            <a href="#projects" className='flex items-center font-karla font-medium text-white hover:bg-brand-primary 
                            mx-3 rounded-lg gap-2 p-5 text-lg transition-all'>
                                Projects 
                            </a>
                            <a href="#blogs" className='flex items-center font-karla font-medium text-white hover:bg-brand-primary 
                            mx-3 rounded-lg gap-2 p-5 text-lg transition-all'>
                                Blog 
                            </a>
                        </div>
                </div>
                    <button 
                        onClick={() => window.location.href = '/login'}
                        className='bg-white p-2 m-3 rounded-lg font-karla font-medium text-black hover:bg-slate-800 
                        hover:text-white hover:border-white transition-all delay-50 ease-in-out'
                    >
                        Login
                    </button>
            </div>
        </nav>
        </>
    )
}
export default Navbar;