import React from 'react'
import { useThemeStore } from '../../Store/ThemeManagement';
import { LanguageCard } from '../Card/LanguageCard';
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiFlask } from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";

export const Backend:React.FC = () => {

    const isDark = useThemeStore(state => state.isDark)

    const languageData = [
        {
            title: 'Node.js',
            icon: <FaNode  className={`text-6xl ${isDark ? 'text-brand-primary group-hover:text-[#101d2e]': 'text-white'}`}/>,
            proficiency: 'Intermediate',
            delay: 700
        },
        {
            title: 'Express.js',
            icon: <SiExpress className={`text-6xl ${isDark ? 'text-brand-primary group-hover:text-[#101d2e]': 'text-white'}`}/>,
            proficiency: 'Intermediate',
            delay: 800
        },
        {
            title: 'Php',
            icon: <SiPhp className={`text-6xl ${isDark ? 'text-brand-primary group-hover:text-[#101d2e]': 'text-white'}`}/>,
            proficiency: 'Intermediate',
            delay: 900
        },
        {
            title: 'Javascript',
            icon: <IoLogoJavascript className={`text-6xl ${isDark ? 'text-brand-primary group-hover:text-[#101d2e]': 'text-white'}`}/>,
            proficiency: 'Intermediate',
            delay: 1000
        },
        {
            title: 'Flask',
            icon: <SiFlask className={`text-6xl ${isDark ? 'text-brand-primary group-hover:text-[#101d2e]': 'text-white'}`}/>,
            proficiency: 'Intermediate',
            delay: 1100
        },
        {
            title: 'Jquery',
            icon: <DiJqueryLogo className={`text-6xl ${isDark ? 'text-brand-primary group-hover:text-[#101d2e]': 'text-white'}`}/>,
            proficiency: 'Intermediate',
            delay: 1200
        }
    ]

  return (
    <section
        className={`w-full transition-all delay-50 ease-in-out 
        ${isDark ? 'bg-slate-800': 'bg-white'}`}
    >
        <div className='mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                {languageData.map((tool, index) => (
                    <LanguageCard
                        key={index} title={tool.title} icon={tool.icon} proficiency={tool.proficiency} delay={tool.delay}/>
                ))}
            </div>
    </section>
  )
}
