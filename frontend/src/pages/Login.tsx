import React from 'react'
import { useThemeStore } from '../Store/ThemeManagement';
import logoIcon from '../assets/images/favicon.png'
import { Checkbox } from 'antd';

export const Login:React.FC = () => {

    const isDark = useThemeStore(state => state.isDark);

  return (
    <section
        className={`w-full h-screen transition-all delay-50 ease-in-out ${
            isDark ? 'bg-slate-800' : 'bg-white'
        } px-10 md:px-20 lg:px-30 xl:px-40 py-20 flex items-center justify-center`}
    >
        <div className='w-[30rem] flex flex-col'>
            <div className='w-full flex items-center justify-center gap-2'>
                <img src={logoIcon} alt='Login' className='w-14 h-14'/>
                <h1 className={`font-ubuntu text-3xl font-semibold ${isDark? 'text-brand-primary': 'text-brand-secondary'}`}>A R K M E</h1>
            </div>
            <div className='mt-5'>
                <h3 className={`font-karla text-2xl font-medium ${isDark? 'text-white': 'text-brand-secondary'}`}>Sign in</h3>
            </div>
            <div className='mt-4'>
                <label htmlFor='username' className={`font-karla text-lg ${isDark? 'text-gray-300': 'text-gray-700'}`}>Username</label>
                <input 
                    id='username'
                    name='username'
                    type='text' 
                    placeholder='markme19' 
                    className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none
                    focus:ring-2 ring-brand-primary focus:border-transparent
                    ${isDark? 'bg-slate-800 text-gray-300': 'bg-white text-gray-700'}`}/>
            </div>

            <div className='mt-5'>
                <label htmlFor='password' className={`font-karla text-lg ${isDark? 'text-gray-300': 'text-gray-700'}`}>Password</label>
                <input 
                    id='password'
                    name='password'
                    type='password' 
                    placeholder='************' 
                    className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none
                    focus:ring-2 ring-brand-primary focus:border-transparent
                    ${isDark? 'bg-slate-800 text-gray-300': 'bg-white text-gray-700'}`}/>
            </div>

            <div className='flex flex-col mt-3'>
                <div className='flex justify-end'>
                    <p 
                        className={`font-karla text-sm cursor-pointer hover:text-brand-primary
                        transition-all delay-50 ease-in-out ${isDark? 'text-gray-300': 'text-gray-700'}`}
                    >
                        Forgot password
                    </p>
                </div>
                <div>
                    <Checkbox 
                        className=''
                        // checked={false}
                        onChange={(e) => console.log(e.target.checked)}
                        >
                        <span className={`font-karla text-sm ${isDark? 'text-gray-300': 'text-gray-700'}`}>Remember me</span>
                    </Checkbox>
                </div>
            </div>

            <div className='mt-5'>
                <button 
                    className={`w-full p-2 border border-brand-primary rounded-md focus:outline-none
                    focus:ring-2 ring-brand-primary focus:border-transparent
                    ${isDark? 'bg-brand-primary text-white': 'bg-brand-secondary text-white'}`}>
                    Sign in
                </button>
            </div>


        </div>
        <footer className='absolute bottom-5'>
        <p className={`font-karla text-sm ${isDark? 'text-gray-300': 'text-gray-700'}`}>Copyright &copy; 2024 Markme portfolio webapp</p>
        
        </footer>
    </section>
  )
}
