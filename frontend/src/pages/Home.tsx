import { Image } from 'antd'
import React from 'react'
import profilePicture from '../assets/images/MarkmeFormal.jpeg'
import { useThemeStore } from '../Store/ThemeManagement'

const Home:React.FC = () => {

    const isDark = useThemeStore(state => state.isDark)

  return (
    <section 
      id="home" 
      className={`w-full h-screen flex items-center justify-center px-10 md:px-20 lg:px-30 xl:px-40 
      transition-all delay-50 ease-in-out ${isDark ? 'bg-slate-800' : 'bg-white'}`}
    >
      <div className='grid grid-cols-1 lg:grid-cols-2 w-full h-full'>
        <div className='flex items-center'>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-1'>
              <div>
                <h3 className={`font-ubuntu font-medium text-xl  text-center lg:text-start
                  ${isDark ? 'text-white': 'text-black'}`}>Hello There, I'm
                </h3>
                <h1 className='font-karla font-extrabold text-6xl text-center lg:text-start text-brand-primary'>Mark Louis A. Bernardo</h1>
              </div>
              <p className={`font-ubuntu font-medium  text-center lg:text-start ${isDark ? 'text-gray-400': 'text-black'}`}>WEB DEVELOPER</p>
            </div>
            <p className={`font-ubuntu font-extralight text-center lg:text-start ${isDark ? 'text-gray-400': 'text-gray-900'}`}> 
              Greetings, I am Mark Louis A. Bernardo, a dedicated web developer with specialization in React and Node.js. 
              Additionally, I am actively engaged in continuous learning within the realm of data. 
              My commitment to excellence is reflected in my work, where I aim to create impactful and innovative solutions. 
              Thank you for considering my profile.
            </p>
            <div className='flex items-center justify-center lg:justify-start'>
              <button 
                className={`transition-all delay-50 ease-in-out focus:outline-none focus:ring-2 
                focus:ring-brand-primary px-5 py-1 rounded-md border border-transparent 
                ${isDark ? 'bg-white border-white text-black hover:bg-slate-800 hover:text-white hover:border-white': 
                'bg-brand-primary border-brand-primary hover:bg-brand-secondary hover:border-brand-secondary text-white'}`}
              >
                Message me
              </button>
            </div>
          </div>
        </div>
        <div className='hidden lg:flex items-center justify-center'>
          <div className='relative w-full flex justify-center'>
            <div className='w-80 h-80 rounded-full overflow-hidden z-[2] border-4 border-white shadow-xl shadow-spread-xl'>
              <Image 
                src={profilePicture} 
                alt='Mark Louis A. Bernardo picture' 
                className='w-full h-full object-cover object-center'
                />
            </div>
            <div className='absolute bg-brand-primary w-80 h-80 top-14 right-10 rounded-full'></div>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Home;