import React from 'react'
import { useThemeStore } from '../../Store/ThemeManagement';

type cardProps = {
    icon: JSX.Element;
    title: string;
    proficiency: string;
}


export const LanguageCard:React.FC<cardProps> = ({
    title,
    icon,
    proficiency
}) => {

    const isDark = useThemeStore(state => state.isDark);

  return (
    <article 
        className={`group rounded-lg flex flex-col gap-3 justify-center items-center
        transition-all delay-50 ease-in-out hover:cursor-pointer py-7 hover:scale-105
        ${isDark ? 'bg-[#101d2e] hover:bg-brand-primary ' : 'bg-brand-primary hover:bg-brand-secondary'}`}>
        {icon}
        
        <div className='flex flex-col items-center justify-center'>
            <h3 
                className={`text-xl font-karla 
                    ${isDark ? 'group-hover:text-white text-white' : 
                    'group-hover:text-white text-white'}`}
            >
                        {title}
            </h3>
            <small 
                className={`text-gray-400 text-xs font-ubuntu 
                    ${isDark ? 'group-hover:text-[#101d2e]' : 
                    'group-hover:text-gray-200 text-white'}`}
            >
                        {proficiency}
            </small>
        </div>
    </article>
  )
}
