import React from 'react'

export const Footer:React.FC = () => {
  return (
    <footer>
        <div className=' text-gray-400 py-6 mt-10'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='mb-4 md:mb-0'>
                        <p className='text-sm md:text-base'>&copy; 2024 Markme Portfolio. All rights reserved.</p>
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
  )
}
