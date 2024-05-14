import React from 'react'
import python_event from '../../assets/images/webinar/python_webinar.jpg';
import { ProjectCard } from '../Card/ProjectCard';

export const PersonalProject:React.FC = () => {

    
  const projectData = [
        {
            id: 1,
            title: 'Meme Generator',
            stack: ['React JS', 'Vite', 'Tailwind'],
            image: python_event,
            links: {
                view: '',
                readme: '',
            }
        },
        {
            id: 2,
            title: 'Inventory Management',
            stack: ['Php', 'Bootstrap', 'JS', 'Ajax', 'MySQL'],
            image: python_event,
            links: {
                view: '',
                readme: '',
            }
        },
        {
            id: 3,
            title: 'Face Recognition Attendance',
            stack: ['React TS', 'Vite', 'Tailwind', 'Flask', 'Zustand', 'MySQL'],
            image: python_event,
            links: {
                view: '',
                readme: '',
            }
        },
        {
            id: 4,
            title: 'Travel Reservation Website',
            stack: ['Php', 'Bootstrap', 'JS', 'Ajax', 'MySQL'],
            image: python_event,
            links: {
                view: '',
                readme: '',
            }
        },
        {
            id: 5,
            title: 'Receipt Generator Mangement',
            stack: ['React TS', 'Vite', 'Tailwind', 'Zustand', 'NodeJS', 'MySQL', 'Express'],
            image: python_event,
            links: {
                view: '',
                readme: '',
            }
        },
        {
            id: 7,
            title: 'Todo list',
            stack: ['HTML', 'CSS', 'JS'],
            image: python_event,
            links: {
                view: '',
                readme: '',
            }
        },
        {
            id: 8,
            title: 'Face Recognition Attendance',
            stack: ['React TS', 'Vite', 'Tailwind', 'Flask', 'Zustand', 'MySQL'],
            image: python_event,
            links: {
                view: '',
                readme: '',
            }
        }
    ]

  return (
    <div className='w-full grid grid-cols-2 mt-5 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {
            projectData.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))
        }
    </div>
  )
}
