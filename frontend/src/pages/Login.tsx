import React, { useState } from 'react'
import { useThemeStore } from '../Store/ThemeManagement';
// import login_background from '../assets/images/picture/login_background.png'
import logoIcon from '../assets/images/favicon.png'
import { Checkbox } from 'antd';
// import { useToast } from '@/components/ui/use-toast';

type submitType = {
    username: string;
    password: string;
    remember: boolean;
}

export const Login:React.FC = () => {

    const isDark = useThemeStore(state => state.isDark);
    const [form, setForm] = useState<submitType>({
        username: '',
        password: '',
        remember: false,
    })

    const onSubmit = () => {
        console.log(form);
    }

  return (
    <section
        className={`relative w-full h-screen transition-all delay-50 ease-in-out ${
            isDark ? 'bg-slate-800' : 'bg-white'
        } px-10 md:px-20 lg:px-30 xl:px-40 py-20 flex items-center justify-center`}
    >
        <div className='absolute w-[45rem] h-[45rem] bg-blue-500/30 rounded-full blur-2xl'></div>
        <div className='py-10 px-10 w-full sm:w-[30rem] bg-slate-800/50 backdrop-blur-sm shadow-xl rounded-xl shadow-slate-800/20'>
            <div className='w-full flex items-center justify-center gap-2'>
                <img src={logoIcon} alt='Login' className='w-14 h-14'/>
                <h1 className={`font-ubuntu text-3xl font-semibold ${isDark? 'text-brand-primary': 'text-brand-secondary'}`}>A R K M E</h1>
            </div>
            <div className='mt-5 text-center'>
                {/* <h3 className={`font-karla text-xl font-medium ${isDark? 'text-white': 'text-brand-secondary'}`}>Welcome to markme app</h3> */}
            </div>
            <div className='mt-4'>
                <label htmlFor='username' className={`font-karla text-lg ${isDark? 'text-gray-300': 'text-gray-700'}`}>Username</label>
                    <input 
                        id='username'
                        name='username'
                        type='text' 
                        onChange={(e) => setForm({...form, username: e.target.value})}
                        placeholder='markme19' 
                        className={`w-full p-2 rounded-md focus:outline-none
                        focus:ring-2 ring-brand-primary focus:border-transparent
                        ${isDark? 'bg-slate-800 text-gray-300': 'bg-white text-gray-700'}`}/>
                </div>

                <div className='mt-5'>
                    <label htmlFor='password' className={`font-karla text-lg ${isDark? 'text-gray-300': 'text-gray-700'}`}>Password</label>
                    <input 
                        id='password'
                        name='password'
                        type='password' 
                        onChange={(e) => setForm({...form, password: e.target.value})}
                        placeholder='************' 
                        className={`w-full p-2 rounded-md focus:outline-none
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
                            className='bg-transparent'
                            // checked={false}
                            name='remember'
                            id='remember'
                            onChange={(e) => setForm({...form, remember: e.target.value})}
                            
                            >
                            <span className={`font-karla text-sm ${isDark? 'text-gray-300': 'text-gray-700'}`}>Remember me</span>
                        </Checkbox>
                    </div>
                </div>

                <div className='mt-5'>
                    <button 
                        onClick={onSubmit}
                        className={`w-full p-2 rounded-md focus:outline-none transition-all delay-50 ease-in-out
                        focus:ring-4 ring-brand-primary/30 focus:border-transparent hover:hover:bg-[#1a202c]
                        ${isDark? 'bg-brand-primary text-white': 'bg-brand-secondary text-white'}`}>
                        Sign in
                    </button>
                </div>

        </div>
    </section>
  )
}
{/* <div className='w-[30rem] flex flex-col'>




</div>
<footer className='absolute bottom-5'>
<p className={`font-karla text-sm ${isDark? 'text-gray-300': 'text-gray-700'}`}>Copyright &copy; 2024 Markme portfolio webapp</p>

</footer> */}