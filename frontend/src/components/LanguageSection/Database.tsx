import React from 'react'
import { useThemeStore } from '../../Store/ThemeManagement';
import { LanguageCard } from '../Card/LanguageCard';
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSqlite } from "react-icons/si";

export const Database:React.FC = () => {
    
    const isDark = useThemeStore(state => state.isDark)

    const languageData = [
        {
            title: 'MySQL',
            icon: <SiMysql  className={`text-6xl ${isDark ? 'text-brand-primary group-hover:text-[#101d2e]': 'text-white'}`}/>,
            proficiency: 'Advanced'
        },
        {
            title: 'PostgreSQL',
            icon: <BiLogoPostgresql className={`text-6xl ${isDark ? 'text-brand-primary group-hover:text-[#101d2e]': 'text-white'}`}/>,
            proficiency: 'Advanced'
        },
        {
            title: 'SQLite',
            icon: <SiSqlite className={`text-6xl ${isDark ? 'text-brand-primary group-hover:text-[#101d2e]': 'text-white'}`}/>,
            proficiency: 'Intermediate'
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
                        key={index} title={tool.title} icon={tool.icon} proficiency={tool.proficiency}/>
                ))}
            </div>
    </section>
    )
}
