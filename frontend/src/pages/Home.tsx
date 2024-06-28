import { Image } from 'antd'
import React from 'react'
import profilePicture from '../assets/images/MarkmeFormal.jpeg'
// import markme_profile from '../assets/images/markme-image.png'
import { useThemeStore } from '../Store/ThemeManagement'
import { BsFillSendFill } from "react-icons/bs";
import { useActiveMailModalBtnStore } from '../Store/ActiveButton';
import { EmailModal } from '../components/Modal/EmailModal';

const Home:React.FC = () => {

    const isDark = useThemeStore(state => state.isDark)
    const { setMailModalBtnActive, isMailModalBtnActive } = useActiveMailModalBtnStore();
  return (
    <section 
      id="home" 
      className={`relative w-full h-screen flex items-center justify-center px-10 md:px-20 lg:px-30 xl:px-40 
      transition-all delay-50 ease-in-out overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-[#f5f6fa]'}`}
    >
      <div className='grid grid-cols-1 lg:grid-cols-2 w-full h-full'>
        <div className='flex items-start mt-10 md:items-center md:mt-0 order-[2] lg:order-[1]'>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-1'>
              <div>
                <h3 className={`font-ubuntu font-medium md:text-xl text-center lg:text-start
                  ${isDark ? 'text-white': 'text-black'}`}>Hello There, I'm
                </h3>
                <h1 className='font-karla font-extrabold text-4xl md:text-6xl text-center lg:text-start text-brand-primary'>Mark Louis A. Bernardo</h1>
              </div>
              <p className={`font-ubuntu font-medium text-center lg:text-start ${isDark ? 'text-gray-200': 'text-black'}`}>WEB DEVELOPER</p>
            </div>
            <p className={`font-ubuntu font-extralight text-center lg:text-start ${isDark ? 'text-gray-300': 'text-gray-900'}`}> 
              Greetings, I am Mark Louis A. Bernardo, a dedicated web developer with specialization in React and Node.js. 
              Additionally, I am actively engaged in continuous learning within the realm of data. 
              My commitment to excellence is reflected in my work, where I aim to create impactful and innovative solutions. 
              Thank you for considering my profile.
            </p>
            <div className='flex items-center justify-center lg:justify-start'>
              <button 
                onClick={() => setMailModalBtnActive()}
                className={`relative overflow-hidden transition-all delay-50 ease-in-out focus:outline-none focus:ring-2 flex items-center gap-2
                focus:ring-brand-primary px-5 py-2 border border-transparent font-semibold group
                ${isDark ? 'bg-transparent border-2 border-l-transparent hover:border-l-brand-primary hover:bg-[#1a202c] text-white': 
                'bg-brand-primary border-brand-primary hover:bg-brand-secondary hover:border-brand-secondary text-white'}`}
              >
                {/* <span className='relative z-[10] group-hover:bg-[#1a202c]'> */}
                  <BsFillSendFill />
                  Message me
                {/* </span> */}
                {/* <span className={`absolute inset-0 bg-transparent transition-transform duration-300 ease-in-out
                  ${isDark ? 'hover:bg-[#1a202c] hover:translate-x-full': ''}`}></span> */}
              </button>
            </div>
          </div>
        </div>
        <div className='flex items-end lg:items-center justify-center order-[1] lg:order-[2]'>
          <div className='relative w-full flex justify-center'>
            <div className='w-52 h-52 md:h-80 md:w-80 rounded-full overflow-hidden z-[2] border-4 border-white shadow-xl shadow-spread-xl'>
              <Image 
                src={profilePicture} 
                alt='Mark Louis A. Bernardo picture' 
                className='w-full h-full object-cover object-center'
                />
            </div>
            <div className='hidden lg:flex absolute bg-brand-primary w-80 h-80 top-14 right-10 rounded-full'></div>
          </div>
        </div>
      </div>
      
      <div className='w-[250px] h-[250px] ]md:w-[350px] md:h-[350px] absolute bg-brand-secondary rounded-full top-[-100px] left-[-20px] md:top-[-150px] md:left-[-50px] blur-lg opacity-50'></div>
      <div className='w-[150px] h-[150px] absolute bg-brand-secondary rounded-full top-[-50px] right-[-10px] blur-lg opacity-50'></div>
      <div className='w-[100px] h-[100px] absolute bg-brand-secondary rounded-full top-[50px] right-[50%] blur-lg opacity-50'></div>
      <div className='w-[50px] h-[50px] absolute bg-brand-secondary rounded-full bottom-[40%] right-[10%] blur-lg opacity-30'></div>
      <div className='w-[300px] h-[300px] absolute bg-brand-secondary rounded-full bottom-[10%] right-[40%] blur-lg opacity-30'></div>
      {
        isMailModalBtnActive && <EmailModal />
      }
    </section>
  )
}

export default Home;