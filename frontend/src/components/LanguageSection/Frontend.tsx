import React from 'react'
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { LanguageCard } from '../Card/LanguageCard';
import { useThemeStore } from '../../Store/ThemeManagement';

export const Frontend:React.FC = () => {

    const isDark = useThemeStore(state => state.isDark)
    const languageData = [
        {
            title: 'HTML',
            icon: <IoLogoHtml5 className={`text-6xl ${isDark ? 'text-brand-primary group-hover:text-[#101d2e]': 'text-white'}`}/>,
            proficiency: 'Advanced',
            delay: 700
        },
        {
            title: 'CSS',
            icon: <FaCss3Alt className={`text-6xl ${isDark ? 'text-brand-primary group-hover:text-[#101d2e]': 'text-white'}`}/>,
            proficiency: 'Intermediate',
            delay: 800
        },
        {
            title: 'React',
            icon: <FaReact className={`text-6xl ${isDark ? 'text-brand-primary group-hover:text-[#101d2e]': 'text-white'}`}/>,
            proficiency: 'Intermediate',
            delay: 900
        },
        {
            title: 'Boostrap',
            icon: <FaBootstrap className={`text-6xl ${isDark ? 'text-brand-primary group-hover:text-[#101d2e]': 'text-white'}`}/>,
            proficiency: 'Intermediate',
            delay: 1000
        },
        {
            title: 'Tailwindcss',
            icon: <SiTailwindcss className={`text-6xl ${isDark ? 'text-brand-primary group-hover:text-[#101d2e]': 'text-white'}`}/>,
            proficiency: 'Intermediate',
            delay: 1100
        }]


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
