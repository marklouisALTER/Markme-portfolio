import React from 'react'
import { useThemeStore } from '../../Store/ThemeManagement';

type cardProps = {
    icon: JSX.Element;
    title: string;
    proficiency: string;
}

export const ToolCard:React.FC<cardProps> = ({title, icon, proficiency}) => {
    
    const isDark = useThemeStore(state => state.isDark);

  return (
    <article 
        className={`group border rounded-lg flex flex-col gap-3 justify-center items-center
        transition-all delay-50 ease-in-out hover:cursor-pointer py-7 
        ${isDark ? 'border-brand-secondary hover:bg-brand-primary ' : 'bg-brand-secondary hover:bg-brand-primary'}`}>
        {icon}
        
        <div className='flex flex-col items-center justify-center'>
            <h6 
                className={`text-xl font-karla 
                    ${isDark ? 'group-hover:text-white text-white' : 
                    'group-hover:text-white text-white'}`}
            >
                        {title}
            </h6>
            <small 
                className={`text-gray-400 text-xs font-ubuntu 
                    ${isDark ? 'group-hover:text-gray-300' : 
                    'group-hover:text-gray-200 text-white'}`}
            >
                        {proficiency}
            </small>
        </div>
    </article>
  )
}
