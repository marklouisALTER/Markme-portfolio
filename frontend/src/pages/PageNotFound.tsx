import React from 'react'
import { useThemeStore } from '../Store/ThemeManagement';
import pagenotfoundImg from '../assets/images/pagenotfound.png';
const PageNotFound:React.FC = () => {
    const isDark = useThemeStore(state => state.isDark)
  return (
    <section
    className={`relative w-full h-screen flex flex-col justify-center lg:justify-start items-center gap-3 px-10 md:px-20 lg:px-30 xl:px-40 
        transition-all delay-50 ease-in-out overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-[#f5f6fa]'}`}
    >
        <div className='lg:mt-10'>
            <img src={pagenotfoundImg} alt='Page Not Found' className='w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] m-auto' />
        </div>
        <div className='flex flex-col justify-center gap-4'>
            <h3 className='text-brand-primary text-center font-karla font-semibold text-2xl md:text-3xl lg:text-4xl'>Page Not Found</h3>
            <h5 className='text-white text-center font-karla font-semibold text-xl md:text-2xl lg:text-3xl'>Oops! Sorry for the interruption, but it seems the page you're looking for doesn't exist.</h5>
            <p className='text-white/80 text-center font-karla md:text-lg lg:text-xl'>Please go back and explore the other page of our site.</p>
            <button
                onClick={() => window.location.replace('/')}
                className='bg-brand-primary mt-5 text-white font-karla py-2 px-5 rounded-lg m-auto
                hover:bg-brand-secondary transition-all delay-50 ease-in-out z-[20] focus:outline-none focus:ring-2 focus:ring-brand-primary'
                >
                Back to Homepage
            </button>
        </div>
        <div className='w-[250px] h-[250px] ]md:w-[350px] md:h-[350px] absolute bg-brand-secondary rounded-full top-[-100px] left-[-20px] md:top-[-150px] md:left-[-50px] blur-lg opacity-50'></div>
        <div className='w-[150px] h-[150px] absolute bg-brand-secondary rounded-full top-[-50px] right-[-10px] blur-lg opacity-50'></div>
        <div className='w-[100px] h-[100px] absolute bg-brand-secondary rounded-full top-[50px] right-[50%] blur-lg opacity-50'></div>
        <div className='w-[50px] h-[50px] absolute bg-brand-secondary rounded-full bottom-[40%] right-[10%] blur-lg opacity-30'></div>
        <div className='w-[300px] h-[300px] absolute bg-brand-secondary rounded-full bottom-[10%] right-[40%] blur-lg opacity-30'></div>
    </section>
  )
}

export default PageNotFound;