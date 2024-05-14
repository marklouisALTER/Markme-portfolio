import React from 'react'
import { useThemeStore } from '../Store/ThemeManagement'
import { FaGitAlt } from "react-icons/fa";
import { ToolCard } from '../components/Card/ToolCard';
import { SiXampp } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaUbuntu } from "react-icons/fa";


const Tools:React.FC = () => {
    
  const isDark = useThemeStore(state => state.isDark)

  const toolsData = [
    {
      icon: <FaGitAlt className={`text-6xl ${isDark ? 'text-brand-primary group-hover:text-brand-secondary': 'text-brand-primary group-hover:text-brand-secondary'}`}/>,
      title: 'Git',
      proficiency: 'Advanced'
    },
    {
      icon: <SiXampp className={`text-6xl ${isDark ? 'text-brand-primary group-hover:text-brand-secondary': 'text-brand-primary group-hover:text-brand-secondary'}`}/>,
      title: 'Xampp',
      proficiency: 'Intermediate'
    },
    {
      icon: <SiVisualstudiocode className={`text-6xl ${isDark ? 'text-brand-primary group-hover:text-brand-secondary': 'text-brand-primary group-hover:text-brand-secondary'}`}/>,
      title: 'VsCode',
      proficiency: 'Intermediate'
    },
    {
      icon: <FaGithub className={`text-6xl ${isDark ? 'text-brand-primary group-hover:text-brand-secondary': 'text-brand-primary group-hover:text-brand-secondary'}`}/>,
      title: 'Github',
      proficiency: 'Advanced'
    },
    {
      icon: <FaFigma className={`text-6xl ${isDark ? 'text-brand-primary group-hover:text-brand-secondary': 'text-brand-primary group-hover:text-brand-secondary'}`}/>,
      title: 'Figma',
      proficiency: 'Intermediate'
    },
    {
      icon: <SiPostman className={`text-6xl ${isDark ? 'text-brand-primary group-hover:text-brand-secondary': 'text-brand-primary group-hover:text-brand-secondary'}`}/>,
      title: 'Postman',
      proficiency: 'Intermediate'
    },
    {
      icon: <FaUbuntu className={`text-6xl ${isDark ? 'text-brand-primary group-hover:text-brand-secondary': 'text-brand-primary group-hover:text-brand-secondary'}`}/>,
      title: 'Ubuntu',
      proficiency: 'Beginner'
    }

]

  
  return (
    <section 
    id="tools" 
    className={`w-full transition-all delay-50 ease-in-out 
    ${isDark ? 'bg-slate-800': 'bg-white'} px-10 md:px-20 lg:px-30 xl:px-40 py-20`}
  >
    <div className="flex flex-col justify-center items-center">
        <p className={`font-ubuntu ${isDark ? 'text-gray-400': 'text-gray-500'}`}>Tools that i used</p>
        <h3 className={`font-ubuntu text-3xl ${isDark ? 'text-brand-primary': 'text-brand-secondary'}`}>I'm familiar with</h3>
    </div>

    <div className='mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
        {toolsData.map((tool, index) => (
            <ToolCard key={index} title={tool.title} icon={tool.icon} proficiency={tool.proficiency}/>
        ))}
    </div>

    </section>
  )
}

export default Tools;