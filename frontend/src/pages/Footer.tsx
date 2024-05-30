import React from 'react'
import { useThemeStore } from '../Store/ThemeManagement';
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaDev } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Typography  } from 'antd';

export const Footer:React.FC = () => {

    const { Paragraph } = Typography;
    const isDark = useThemeStore(state => state.isDark);

    return (

        <footer className={`w-full transition-all delay-50 ease-in-out ${
            isDark ? 'bg-[#101d2e]' : 'bg-white'
        } px-10 md:px-20 lg:px-30 xl:px-40 py-10`}>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>

                <div className='col-span-2 flex flex-col gap-1'>
                    <h2 className='font-karla font-semibold text-white text-3xl'>Mark Louis A. Bernardo</h2>
                    <p className='font-ubuntu text-gray-400'>Software Developer / Associate Data Analyst in SQL</p>
                    <div className='mt-4 mr-auto'>
                        <button  className={`transition-all m-auto delay-50 ease-in-out focus:outline-none focus:ring-2 
                        focus:ring-brand-primary px-5 py-1 rounded-md border border-transparent 
                        ${isDark ? 'bg-white border-white text-black hover:bg-slate-800 hover:text-white hover:border-white' : 
                        'bg-brand-primary border-brand-primary hover:bg-brand-secondary hover:border-brand-secondary text-white'}`}>Send message</button>
                    </div>
                    <div className='flex flex-col mt-3 gap-2'>
                        <div>
                            <h3 className='font-karla text-white'>Connect with me</h3>
                        </div>
                        <div className='flex items-center gap-3'>
                            <a href='https://www.linkedin.com/in/marklouisbernardo/' target='_blank' rel='noreferrer'>
                                <FaLinkedin className='text-3xl text-blue-400 hover:scale-105 transition-all delay-50 ease-in-out'/>
                            </a>
                            <a href='https://github.com/marklouisALTER' target='_blank' rel='noreferrer'>
                                <FaSquareGithub className='text-3xl text-black bg-white hover:scale-105 transition-all delay-50 ease-in-out'/>
                            </a>
                            <a href='https://dev.to/marklouisalter' target='_blank' rel='noreferrer'>
                                <FaDev className='text-3xl text-black bg-white hover:scale-105 transition-all delay-50 ease-in-out'/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='relative rounded-md z-50 group hidden md:flex'>
                    <div className='absolute z-0 transition-all delay-50 ease-in-out rounded-md top-0 left-0 w-full h-full bg-brand-primary group-hover:top-5 group-hover:left-5'></div>
                    <div className='absolute z-[3] transition-all delay-50 ease-in-out rounded-md top-0 left-0 w-full h-full 
                    bg-brand-secondary group-hover:scale-105 flex flex-col p-3'>
                        <div className='flex flex-col justify-center mr-auto gap-2'>
                            <div className='w-14 h-14 bg-white rounded-full flex items-center justify-center'>
                                <SiGmail className='text-red-500 text-xl'/>
                            </div>
                            <p className='font-karla text-white text-lg text-center'>Gmail</p>
                        </div>
                        <div className='flex justify-between items-center bg-gray-300 w-full py-2 rounded-md px-2 mt-3 overflow-hidden'>
                            <small className='text-xs'>marklouisbernando318@gmail.com</small>
                        </div>
                        <Paragraph 
                            copyable={{ text: 'marklouisbernando318@gmail.com' }} 
                            className='font-karla text-white text-sm mt-2 text-end'>
                                Copy
                        </Paragraph>
                    </div>
                </div>
                <div className='relative rounded-md z-50 group hidden lg:flex'>
                    <div className='absolute z-0 transition-all delay-50 ease-in-out rounded-md top-0 left-0 w-full h-full bg-brand-primary group-hover:top-5 group-hover:left-5'></div>
                    <div className='absolute z-[3] transition-all delay-50 ease-in-out rounded-md top-0 left-0 w-full h-full 
                    bg-brand-secondary group-hover:scale-105 flex flex-col p-3'>
                        <div className='flex flex-col justify-center mr-auto gap-2'>
                            <div className='w-14 h-14 bg-white rounded-full flex items-center justify-center'>
                                <SiGmail className='text-red-500 text-xl'/>
                            </div>
                            <p className='font-karla text-white text-lg text-center'>Gmail</p>
                        </div>
                        <div className='flex justify-between items-center bg-gray-300 w-full py-2 rounded-md px-2 mt-3 overflow-hidden'>
                            <small className='text-xs'>marklouisbernando318@gmail.com</small>
                        </div>
                        <Paragraph 
                            copyable={{ text: 'marklouisbernando318@gmail.com' }} 
                            className='font-karla text-white text-sm mt-2 text-end'>
                                Copy
                        </Paragraph>
                    </div>
                </div>
                <div className='relative rounded-md z-50 group hidden xl:flex'>
                    <div className='absolute z-0 transition-all delay-50 ease-in-out rounded-md top-0 left-0 w-full h-full bg-brand-primary group-hover:top-5 group-hover:left-5'></div>
                    <div className='absolute z-[3] transition-all delay-50 ease-in-out rounded-md top-0 left-0 w-full h-full 
                    bg-brand-secondary group-hover:scale-105 flex flex-col p-3'>
                        <div className='flex flex-col justify-center mr-auto gap-2'>
                            <div className='w-14 h-14 bg-white rounded-full flex items-center justify-center'>
                                <SiGmail className='text-red-500 text-xl'/>
                            </div>
                            <p className='font-karla text-white text-lg text-center'>Gmail</p>
                        </div>
                        <div className='flex justify-between items-center bg-gray-300 w-full py-2 rounded-md px-2 mt-3 overflow-hidden'>
                            <small className='text-xs'>marklouisbernando318@gmail.com</small>
                        </div>
                        <Paragraph 
                            copyable={{ text: 'marklouisbernando318@gmail.com' }} 
                            className='font-karla text-white text-sm mt-2 text-end'>
                                Copy
                        </Paragraph>
                    </div>
                </div>
            </div>
        </footer>

    )
}
