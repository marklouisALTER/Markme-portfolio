import React from 'react'
import face_recognition from '../../assets/images/project/face_recognition.png'
import inventory_website from '../../assets/images/project/inventory_website.png'
import meme_generator from '../../assets/images/project/meme_generator.png'
import receipt_website from '../../assets/images/project/receipt_website.png'
import todo_list from '../../assets/images/project/todo_list.png'
import travel_website from '../../assets/images/project/travel_website.png'
import { ProjectCard } from '../Card/ProjectCard';

export const PersonalProject:React.FC = () => {

    
  const projectData = [
        {
            id: 1,
            title: 'Meme Generator',
            stack: ['React JS', 'Vite', 'Tailwind'],
            image: meme_generator,
            links: {
                view: '',
                readme: '',
            }
        },
        {
            id: 2,
            title: 'Inventory Management',
            stack: ['Php', 'Bootstrap', 'JS', 'Ajax', 'MySQL'],
            image: inventory_website,
            links: {
                view: '',
                readme: '',
            }
        },
        {
            id: 3,
            title: 'Face Recognition Attendance',
            stack: ['React TS', 'Vite', 'Tailwind', 'Flask', 'Zustand', 'MySQL'],
            image: face_recognition,
            links: {
                view: '',
                readme: '',
            }
        },
        {
            id: 4,
            title: 'Travel Reservation Website',
            stack: ['Php', 'Bootstrap', 'JS', 'Ajax', 'MySQL'],
            image: travel_website,
            links: {
                view: '',
                readme: '',
            }
        },
        {
            id: 5,
            title: 'Receipt Generator Mangement',
            stack: ['React TS', 'Vite', 'Tailwind', 'Zustand', 'NodeJS', 'MySQL', 'Express'],
            image: receipt_website,
            links: {
                view: '',
                readme: '',
            }
        },
        {
            id: 7,
            title: 'Todo list',
            stack: ['HTML', 'CSS', 'JS'],
            image: todo_list,
            links: {
                view: '',
                readme: '',
            }
        },
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
