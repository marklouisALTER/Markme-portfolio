import React from 'react'
import { useThemeStore } from '../../Store/ThemeManagement'
import { Image, Tooltip } from 'antd';
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
                className='rounded-lg w-full h-40 object-cover'
            />
            <div className='flex flex-col gap-2'>
                <h3 className={`font-ubuntu text-lg ${isDark ? 'text-brand-primary group-hover:text-white' : 'text-white'}`}>{project.title}</h3>
                <div className='flex flex-row flex-wrap gap-2'>
                    {
                        project.stack.map((stack) => (
                            <Tooltip title={stack} key={stack}>
                                <span className={`font-ubuntu text-xs px-2 py-1 rounded-lg
                                ${isDark ? 'bg-brand-secondary text-white' : 'bg-brand-secondary group-hover:bg-brand-primary text-white'}`}>
                                    {stack}
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
