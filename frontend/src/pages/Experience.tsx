import React from 'react'
import { useThemeStore } from '../Store/ThemeManagement';
import { Timeline, ConfigProvider } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { SiPhp } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { BiLogoTailwindCss } from "react-icons/bi";


const Experience:React.FC = () => {

    const isDark = useThemeStore(state => state.isDark)

  return (
    <ConfigProvider
        theme={{
            components: {
                Timeline: {
                    tailColor: isDark ? '#fff' : '#1e88e5',
                    controlHeightLG: 61
                },
            },
        }}
    >
        <section
        id="experience"
        className={`w-full transition-all delay-50 ease-in-out ${
            isDark ? 'bg-slate-800' : 'bg-white'
        } px-10 md:px-20 lg:px-30 xl:px-40 py-20`}
        >
            <div className="flex flex-col justify-center items-center">
            <p className={`font-ubuntu ${isDark ? 'text-gray-400': 'text-gray-500'}`}>Here's all my work experience</p>
                    <h3 className={`font-ubuntu text-3xl ${isDark ? 'text-brand-primary': 'text-brand-secondary'}`}>My Work Experiences</h3>
            </div>
                <div className='w-full h-full pl-5'>
                    <Timeline
                        className='mt-20'
                        items={[
                        {
                            children: <div className='flex flex-col'>
                            <h2 className={`text-xl font-extrabold font-karla ${isDark ? ' text-brand-primary' : 'text-brand-secondary'}`}>Intern - Front-End Developer</h2>
                            <p className={`font-karla font-extralight text-lg ${isDark ? ' text-white ' : 'text-brand-primary'}`}>Codeability</p>
                            <div className='flex justify-between'>
                                <small className={`font-ubuntu ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Malabon City, Philippines</small>
                                <div className='flex gap-2'>
                                    <ClockCircleOutlined className={`${isDark ? 'text-brand-primary' : 'text-brand-secondary'}`} />
                                    <small className={`font-ubuntu font-light ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>March 2024 - Present</small>
                                </div>
                            </div>
                            <ul className='mt-2'>
                                <li className={`font-ubuntu font-light text-sm ${isDark ? 'text-white' : 'text-gray-800'}`}>Enhanced user interface and experience by implementing modern design principles and responsive web design techniques</li>
                                <li className={`font-ubuntu font-light text-sm ${isDark ? 'text-white' : 'text-gray-800'}`}>Collaborated with designers, backend developers, and project managers to deliver high-quality web applications on schedule.</li>
                                <li className={`font-ubuntu font-light text-sm ${isDark ? 'text-white' : 'text-gray-800'}`}>Made significant contributions to the frontend codebase by implementing new features, fixing bugs, and optimizing performance.</li>
                            </ul>
                            <div className='flex gap-2 items-center my-3'>
                                <FaReact className='text-4xl text-[#61DAFB]'/>
                                <BiLogoTypescript className={`text-4xl ${isDark ? 'text-brand-primary' : 'text-brand-secondary'}`}/>
                                <BiLogoTailwindCss className='text-4xl text-[#38B2AC]'/>
                            </div>
                            </div>,
                        },
                        {
                            children: <div className='flex flex-col'>
                            <h2 className={`text-xl font-extrabold font-karla ${isDark ? ' text-brand-primary' : 'text-brand-secondary'}`}>Intern - Web Developer</h2>
                            <p className={`font-karla font-extralight text-lg ${isDark ? ' text-white ' : 'text-brand-primary'}`}>Manly Plastics</p>
                            <div className='flex justify-between'>
                                <small className={`font-ubuntu ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Malabon City, Philippines</small>
                                <div className='flex gap-2'>
                                    <ClockCircleOutlined className={`${isDark ? 'text-brand-primary' : 'text-brand-secondary'}`} />
                                    <small className={`font-ubuntu font-light ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Febuary 2024 - Present</small>
                                </div>
                            </div>
                            <ul className='mt-2'>
                                <li className={`font-ubuntu font-light text-sm ${isDark ? 'text-white' : 'text-gray-800'}`}>Developed web applications with CRUD (Create, Read, Update, Delete) functionality using HTML5, CSS3, and JavaScript.</li>
                                <li className={`font-ubuntu font-light text-sm ${isDark ? 'text-white' : 'text-gray-800'}`}>Conducted user testing and gathered feedback to iterate and improve application usability and functionality.</li>
                                <li className={`font-ubuntu font-light text-sm ${isDark ? 'text-white' : 'text-gray-800'}`}>Utilized AJAX to connect frontend interfaces with backend APIs, enabling seamless data exchange.</li>
                            </ul>
                                <div className="flex gap-2 items-center my-3">
                                    <SiPhp className='text-[#4F5D95] text-4xl' />
                                    <BiLogoJavascript className='text-4xl text-[#F7DF1E]'/>
                                    <SiMysql className={`text-4xl ${isDark ? 'text-white' : 'text-black'}`}/>
                                    <FaBootstrap className='text-4xl text-[#7952B3]'/>
                                </div>

                            </div>,
                        },
                        {
                            children: <div className='flex flex-col'>
                            <h2 className={`text-xl font-extrabold font-karla ${isDark ? ' text-brand-primary' : 'text-brand-secondary'}`}>Full Stack Web Developer</h2>
                            <p className={`font-karla font-extralight text-lg ${isDark ? ' text-white ' : 'text-brand-primary'}`}>Freelance</p>
                            <div className='flex justify-between'>
                                <small className={`font-ubuntu ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Malabon City, Philippines</small>
                                <div className='flex gap-2'>
                                    <ClockCircleOutlined className={`${isDark ? 'text-brand-primary' : 'text-brand-secondary'}`} />
                                    <small className={`font-ubuntu font-light ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>August 2023 - Present</small>
                                </div>
                            </div>
                            <ul className='mt-2'>
                                <li className={`font-ubuntu font-light text-sm ${isDark ? 'text-white' : 'text-gray-800'}`}>On the frontend, I leveraged React.js to create dynamic and interactive user interfaces that enhanced user experience and engagement</li>
                                <li className={`font-ubuntu font-light text-sm ${isDark ? 'text-white' : 'text-gray-800'}`}>On the backend, I'm utilizing the node.js and express to built a server-side logic to handle data mangement, authentication and manipulating the data trough database.</li>
                                <li className={`font-ubuntu font-light text-sm ${isDark ? 'text-white' : 'text-gray-800'}`}>Design UI/UX layout for a client using figma with applying the modern style design and enhance the overall user experience.</li>
                            </ul>
                            <div className='flex gap-2 items-center my-3'>
                                <SiPhp className='text-[#4F5D95] text-4xl' />
                                <FaFigma className={`text-4xl ${isDark ? 'text-brand-primary' : 'text-brand-secondary'}`}/>
                                <BiLogoJavascript className='text-4xl text-[#F7DF1E]'/>
                                <FaReact className='text-4xl text-[#61DAFB]'/>
                                <FaNode className={`text-4xl ${isDark ? 'text-brand-primary' : 'text-brand-secondary'}`}/>
                                <BiLogoTypescript className={`text-4xl ${isDark ? 'text-brand-primary' : 'text-brand-secondary'}`}/>
                                <BiLogoTailwindCss className='text-4xl text-[#38B2AC]'/>
                                <SiMysql className={`text-4xl ${isDark ? 'text-white' : 'text-black'}`}/>
                            </div>
                            </div>,
                        },
                        {
                            children: '',

                        }
                        
                        ]}
                    />
                </div>
            </section>
        </ConfigProvider>
  )
}

export default Experience;
