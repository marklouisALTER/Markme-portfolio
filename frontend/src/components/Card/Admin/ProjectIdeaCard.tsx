import React from 'react'

type projectIdeaType = {
    title: string;
    description: string;
    date: string;
}

export const ProjectIdeaCard:React.FC<projectIdeaType> = ({title, description, date}) => {
  return (
    <article className='bg-[#101d2e] p-4 rounded-lg cursor-pointer hover:scale-[1.01] transition-all ease-in-out'>
        <h2 className='text-xl lg:text-2xl font-semibold font-karla text-brand-primary'>{title}</h2>
        <div className='flex flex-col mt-2 gap-2'>
            <p className='text-[16px] md:text-base lg:text-[17px] font-normal font-karla text-gray-300'>{description}</p>
            <small className='text-xs text-gray-400 font-ubuntu'>{date}</small>
        </div>
    </article>
  )
}
