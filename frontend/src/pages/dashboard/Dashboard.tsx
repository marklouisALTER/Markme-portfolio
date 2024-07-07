import { StatsCard } from '@/components/Card/Admin/StatsCard'
import React from 'react'
import { FaCalendarCheck, FaClock, FaCalendarPlus, FaSort } from "react-icons/fa6";

export const Dashboard:React.FC = () => {

  return (
    <section className='h-full px-5'>
        <h1 className='text-4xl my-5 font-karla text-white font-bold'>Hello, Mark Louis</h1>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 mt-5'>
            <StatsCard /> 
            <StatsCard /> 
            <StatsCard /> 
        </div>
        <div className="mt-10 p-6 bg-[#101d2e] rounded-lg shadow-lg border border-[#101d2e] hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className='flex items-center justify-between'>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-karla text-white mb-4">Announcement</h2>
                <button className='bg-brand-primary px-3 md:px-5 py-1 md:py-2 rounded-md flex items-center gap-2 text-white hover:bg-brand-secondary
                transition-all delay-50 ease-in-out focus:outline-none focus:ring-4 ring-brand-secondary/35'>
                    <FaCalendarPlus />
                    Create
                </button>
            </div>
            <p className="text-sm mt-2 md:text-lg font-ubuntu text-gray-400 mb-4">
                Here's all your schedules. Make sure to check them out and be on time.
            </p>
            <div className='flex items-center justify-end gap-3'>
                <h4 className='text-gray-400 font-karla font-medium'>Sort by:</h4>
                <button className='bg-brand-primary px-3 md:px-5 py-1 md:py-2 rounded-md flex items-center gap-2 text-white hover:bg-brand-secondary
                transition-all delay-50 ease-in-out focus:outline-none focus:ring-4 ring-brand-secondary/35'>
                    <FaSort />
                    Date
                </button>
            </div>
            <div className='relative mt-10'>
                <div className='flex items-center gap-3 bg-slate-800 p-5 rounded-lg cursor-pointer hover:scale-[1.01] transition-all ease-in-out hover:shadow-lg hover:shadow-slate-900'>
                    <div className='relative bg-brand-primary w-10 md:w-14 h-10 md:h-14 rounded-full flex justify-center items-center text-white text-lg md:text-2xl'>
                        <FaCalendarCheck />
                        <div className='absolute w-3 h-3 rounded-full bg-red-500 top-[5%] left-[5%] animate-pulse'></div>
                    </div>
                    <div className='flex flex-col'>
                    <h3 className='text-[16px] md:text-xl font-karla font-medium text-white'>CMU IT Conference 2024</h3>
                        <div className='flex items-center gap-5'>
                            <p className='text-gray-400 font-ubuntu flex items-center gap-1 text-[12px] md:text-base'>
                                <FaClock />
                                12:00 PM
                            </p>
                            <p className='text-gray-400 font-ubuntu flex items-center gap-2 text-[12px] md:text-base'>
                                <FaCalendarCheck />
                                June 20, 2024
                            </p>
                        </div>
                    </div>
                </div>
                <div className='absolute top-[-7%] right-[3%] px-3 h-5 bg-red-500 z-5 rounded-sm flex items-center justify-center'>
                    <small className='text-white font-karla font-medium'>Tentative</small>
                </div>
            </div>
            <div className='relative mt-10'>
                <div className='flex items-center gap-3 bg-slate-800 p-5 rounded-lg cursor-pointer hover:scale-[1.01] transition-all ease-in-out hover:shadow-lg hover:shadow-slate-900'>
                    <div className='relative bg-brand-primary w-10 md:w-14 h-10 md:h-14 rounded-full flex justify-center items-center text-white text-lg md:text-2xl'>
                        <FaCalendarCheck />
                        <div className='absolute w-3 h-3 rounded-full bg-red-500 top-[5%] left-[5%] animate-pulse'></div>
                    </div>
                    <div className='flex flex-col'>
                    <h3 className='text-[16px] md:text-xl font-karla font-medium text-white'>CMU IT Conference 2024</h3>
                        <div className='flex items-center gap-5'>
                            <p className='text-gray-400 font-ubuntu flex items-center gap-1 text-[12px] md:text-base'>
                                <FaClock />
                                12:00 PM
                            </p>
                            <p className='text-gray-400 font-ubuntu flex items-center gap-2 text-[12px] md:text-base'>
                                <FaCalendarCheck />
                                June 20, 2024
                            </p>
                        </div>
                    </div>
                </div>
                <div className='absolute top-[-7%] right-[3%] px-3 h-5 bg-red-500 z-5 rounded-sm flex items-center justify-center'>
                    <small className='text-white font-karla font-medium'>Tentative</small>
                </div>
            </div>
            <div className='relative mt-10'>
                <div className='flex items-center gap-3 bg-slate-800 p-5 rounded-lg cursor-pointer hover:scale-[1.01] transition-all ease-in-out hover:shadow-lg hover:shadow-slate-900'>
                    <div className='relative bg-brand-primary w-10 md:w-14 h-10 md:h-14 rounded-full flex justify-center items-center text-white text-lg md:text-2xl'>
                        <FaCalendarCheck />
                        <div className='absolute w-3 h-3 rounded-full bg-red-500 top-[5%] left-[5%] animate-pulse'></div>
                    </div>
                    <div className='flex flex-col'>
                    <h3 className='text-[16px] md:text-xl font-karla font-medium text-white'>CMU IT Conference 2024</h3>
                        <div className='flex items-center gap-5'>
                            <p className='text-gray-400 font-ubuntu flex items-center gap-1 text-[12px] md:text-base'>
                                <FaClock />
                                12:00 PM
                            </p>
                            <p className='text-gray-400 font-ubuntu flex items-center gap-2 text-[12px] md:text-base'>
                                <FaCalendarCheck />
                                June 20, 2024
                            </p>
                        </div>
                    </div>
                </div>
                <div className='absolute top-[-7%] right-[3%] px-3 h-5 bg-red-500 z-5 rounded-sm flex items-center justify-center'>
                    <small className='text-white font-karla font-medium'>Tentative</small>
                </div>
            </div>
        </div>
        <footer>
        <div className=' text-gray-400 py-6 mt-10'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='mb-4 md:mb-0'>
                        <p className='text-sm md:text-base'>&copy; 2024 CMU IT Conference. All rights reserved.</p>
                    </div>
                    <div className='flex space-x-4'>
                        <a href='#' className='text-gray-400 hover:text-white transition-colors duration-200'>Privacy Policy</a>
                        <a href='#' className='text-gray-400 hover:text-white transition-colors duration-200'>Terms of Service</a>
                        <a href='#' className='text-gray-400 hover:text-white transition-colors duration-200'>Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
        </footer>
    </section>
  )
}
