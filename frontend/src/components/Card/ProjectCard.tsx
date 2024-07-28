import React from 'react'
import { useThemeStore } from '../../Store/ThemeManagement'
import { Image, Tooltip } from 'antd';
import { FaReact } from "react-icons/fa";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaPhp } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
// import { FaEye } from "react-icons/fa";
// import { SiReadme } from "react-icons/si";

type projectCardPropType = {
    id: number;
    title: string;
    stack: string[];
    image: string;
    links: {
        view: string;
        readme: string;
    }

}

type projectCardType = {
    project: projectCardPropType;
}

export const ProjectCard:React.FC<projectCardType> = ({project}) => {

    const isDark = useThemeStore(state => state.isDark);



  return (
    <article className={`group rounded-lg flex flex-col gap-3 items-center
    transition-all delay-50 ease-in-out hover:cursor-pointer p-3 group hover:scale-105 shadow-xl shadow-spread-xl
    ${isDark ? 'bg-[#101d2e] hover:bg-brand-primary ' : 'bg-brand-primary hover:bg-brand-secondary'}`}>
        <div key={project.id} className='w-full flex flex-col gap-2'>
            <Image
                src={project.image}
                alt={project.title}
                className='rounded-lg w-full min-h-[8rem] object-cover'
            />
            <div className='flex flex-col gap-2'>
                <h3 className={`font-ubuntu text-sm md:text-[17px] lg:text-[18px] mb-1 md:mb-2 ${isDark ? 'text-brand-primary group-hover:text-white' : 'text-white'}`}>{project.title}</h3>
                <div className='flex flex-row flex-wrap gap-2'>
                    {
                        project.stack.map((stack) => (
                            <Tooltip title={stack} key={stack}>
                                <span className={`font-ubuntu text-xs p-2 rounded-md
                                ${isDark ? 'bg-brand-secondary text-white' : 'bg-brand-secondary group-hover:bg-brand-primary text-white'}`}>
                                    {
                                        stack === 'React'? <FaReact className={`text-xs md:text-sm ${isDark? 'text-[#38bdf8] group-hover:text-white hover:text-gray-300' : 'text-[#38bdf8] hover:text-gray-300'}`} />
                                        : stack === 'Tailwind' ? <SiTailwindcss className={`text-xs md:text-[15px] lg:text-[19px] ${isDark? 'text-[#38bdf8] group-hover:text-white hover:text-gray-300' : 'text-[#38bdf8] hover:text-gray-300'}`} /> 
                                        : stack === 'JS' ? <IoLogoJavascript className={`text-xs md:text-[15px] lg:text-[19px] ${isDark? 'text-[#38bdf8] group-hover:text-white hover:text-gray-300' : 'text-[#38bdf8] hover:text-gray-300'}`} />
                                        : stack === 'Bootstrap' ? <FaBootstrap className={`text-xs md:text-[15px] lg:text-[19px] ${isDark? 'text-[#38bdf8] group-hover:text-white hover:text-gray-300' : 'text-[#38bdf8] hover:text-gray-300'}`} />
                                        : stack === 'Vite' ? <SiVite className={`text-xs md:text-[15px] lg:text-[19px] ${isDark? 'text-[#38bdf8] group-hover:text-white hover:text-gray-300' : 'text-[#38bdf8] hover:text-gray-300'}`} />
                                        : stack === 'NodeJS' ? <FaNode className={`text-xs md:text-[15px] lg:text-[19px] ${isDark? 'text-[#38bdf8] group-hover:text-white hover:text-gray-300' : 'text-[#38bdf8] hover:text-gray-300'}`} />
                                        : stack === 'Express'? <SiExpress className={`text-xs md:text-[15px] lg:text-[19px] ${isDark? 'text-[#38bdf8] group-hover:text-white hover:text-gray-300' : 'text-[#38bdf8] hover:text-gray-300'}`} />
                                        : stack === 'TS' ? <BiLogoTypescript className={`text-xs md:text-[15px] lg:text-[19px] ${isDark? 'text-[#38bdf8] group-hover:text-white hover:text-gray-300' : 'text-[#38bdf8] hover:text-gray-300'}`} />
                                        : stack === 'Php' ? <FaPhp className={`text-xs md:text-[15px] lg:text-[19px] ${isDark? 'text-[#38bdf8] group-hover:text-white hover:text-gray-300' : 'text-[#38bdf8] hover:text-gray-300'}`} />
                                        : stack === 'Flask' ? <SiFlask className={`text-xs md:text-[15px] lg:text-[19px] ${isDark? 'text-[#38bdf8] group-hover:text-white hover:text-gray-300' : 'text-[#38bdf8] hover:text-gray-300'}`} />
                                        : stack === 'MySQL' ? <SiMysql className={`text-xs md:text-[15px] lg:text-[19px] ${isDark? 'text-[#38bdf8] group-hover:text-white hover:text-gray-300' : 'text-[#38bdf8] hover:text-gray-300'}`} />
                                        : stack === 'HTML' ? <FaHtml5 className={`text-xs md:text-[15px] lg:text-[19px] ${isDark? 'text-[#38bdf8] group-hover:text-white hover:text-gray-300' : 'text-[#38bdf8] hover:text-gray-300'}`} />
                                        : stack === 'CSS'? <FaCss3Alt className={`text-xs md:text-[15px] lg:text-[19px] ${isDark? 'text-[#38bdf8] group-hover:text-white hover:text-gray-300' : 'text-[#38bdf8] hover:text-gray-300'}`} />
                                        : ''
                                    }
                                </span>
                            </Tooltip>
                        ))
                    }
                </div>
                {/* <div className='flex flex-row gap-4 mt-4'>
                    <Tooltip title='View'>
                        <a href={project.links.view} target='_blank' rel='noreferrer'>
                            <FaEye className={`text-xl ${isDark ? 'text-brand-primary group-hover:text-white hover:text-gray-300' : 'text-white hover:text-gray-300'}`} />
                        </a>
                    </Tooltip>
                    <Tooltip title='Read'>
                        <a href={project.links.readme} target='_blank' rel='noreferrer'>
                            <SiReadme className={`text-xl ${isDark ? 'text-brand-primary group-hover:text-white hover:text-gray-300' : 'text-white hover:text-gray-300'}`} />
                        </a>
                    </Tooltip>
                </div> */}
            </div>
        </div>
    </article>
  )
}
