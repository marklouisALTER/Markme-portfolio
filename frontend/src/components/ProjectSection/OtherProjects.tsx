import React from 'react';
import { useThemeStore } from '../../Store/ThemeManagement';
import { IoFolderOpen } from "react-icons/io5";
import { Tooltip } from 'antd';
import { FaSquareGithub } from "react-icons/fa6";

export const OtherProjects: React.FC = () => {

    const OtherProject = [
        {
            id: 1,
            title: 'Web Scrapping',
            proficiency: 'Google Colab',
            language: 'Python',
            link: 'https://colab.research.google.com/drive/11lrlUD3wvuvFB7tsBo3WlcnEVb_tQTa5?usp=sharing',
            summary: 'I made a web scraping project to extract John Wick quotes from a website and save them in a CSV file.',
        },
        {
            id: 2,
            title: 'Face Recognition',
            proficiency: 'Jupyter Notebook',
            language: 'Python',
            link: 'https://github.com/marklouisALTER/Face_Recognition-GoogleColab-',
            summary: 'I made face recognition in jupyter notebook with help of chatgpt.',
        },
        {
            id: 3,
            title: 'Python Data Excercise',
            proficiency: 'VS Code',
            language: 'Python',
            link: 'https://github.com/marklouisALTER/python-exercises',
            summary: 'Bunch of python projects, data visualization, exercises, etc. in VS code',
        }
    ];

    const isDark = useThemeStore(state => state.isDark);

    return (
        <div className='w-full grid grid-cols-2 mt-5 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {
                OtherProject.map((project, index) => (
                    <article key={index} className={`relative group border rounded-lg flex flex-col gap-3
                        transition-all delay-50 ease-in-out hover:cursor-pointer p-3 group hover:scale-105 shadow shadow-spread-md
                        ${isDark ? 'border-white hover:bg-brand-primary ' : 'bg-brand-primary hover:bg-brand-secondary'}`}

                    >
                        <div className='flex flex-col lg:flex-row gap-3'>
                            <div className={`w-[60px] h-[60px] flex items-center justify-center rounded-md 
                            ${isDark ? 'bg-brand-secondary text-white': 'bg-brand-secondary text-white'}`}>
                                <IoFolderOpen className='text-4xl'/>
                            </div>
                            <div className='flex flex-col'>
                                <p className={`text-[16px] lg:text-[17px] xl:text-[19px] font-medium font-karla flex
                                ${isDark ? 'text-brand-primary group-hover:text-brand-secondary ': 'text-white'}`}>{project.title}</p>
                                <small className={`font-ubuntu ${isDark ? 'text-gray-400': 'text-gray-300'}`}>{project.proficiency}</small>
                            </div>
                        </div>
                        <div className='flex flex-row flex-wrap gap-2'>
                            <Tooltip title="python">
                                <span className={`font-karla text-[10px] px-2 flex items-center gap-1 py-1 rounded-full
                                    ${isDark ? 'bg-brand-secondary text-white' : 'bg-brand-secondary group-hover:bg-brand-primary text-white'}`}>
                                    <div className='w-1 h-1 rounded-full bg-blue-500'></div>
                                    {project.language}
                                </span>
                            </Tooltip>
                        </div>
                        <p className='hidden sm:flex font-karla text-white text-xs md:text-sm lg:text-[15px]'>
                            {project.summary}
                        </p>
                        <div className='absolute hidden w-full h-full group-hover:flex blur-sm bg-black opacity-50 rounded-lg top-0 left-0 z-[5]'></div>
                        <div className='absolute hidden w-full h-full top-0 left-0 group-hover:flex items-center justify-center z-[10]'>
                            <Tooltip title='View'>
                                <a href={project.link} target='_blank' rel='noreferrer'>
                                    <FaSquareGithub className={`text-white text-5xl ${isDark ? 'group-hover:text-white hover:text-gray-300' : 'hover:text-gray-300'}`} />
                                </a>
                            </Tooltip>
                        </div>
                    </article>
                ))
            }
        </div>
    );
};
