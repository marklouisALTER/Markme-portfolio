import { projectIdeaDumpData } from '@/Data/ProjectIdeaDumpData'
import { ProjectIdeaCard } from '@/components/Card/Admin/ProjectIdeaCard';
// import { ProjectIdeaSkeleton } from '@/components/Skeleton/ProjectIdeaSkeleton';
import { Skeleton } from 'antd';

import React, { useEffect, useState } from 'react'

type projectIdeaDataType = {
    id: number;
    title: string;
    description: string;
    date: string;
}[]

export const ProjectIdea:React.FC = () => {

    const [projectIdeaData, setProjectIdea] = useState<projectIdeaDataType>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProjectIdeaCard = () => {
            // Fetch API data and populate the grid with project idea cards
            setTimeout(() => {
                const result = projectIdeaDumpData;
                setProjectIdea(result);
                setLoading(false);
            }, 2000)
        }   

        fetchProjectIdeaCard();

    },[])

    return (
        <section className='w-full'>
            <div className='flex flex-col gap-4 px-5'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold font-karla text-white'>Project Idea</h1>
            </div>
            <div className='w-full mt-10 grid grid-cols-1 px-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                {loading ? (
                    <>
                        <Skeleton active />
                        <Skeleton active />
                        <Skeleton active />
                        <Skeleton active />
                    </>
                ) : (
                    projectIdeaData?.map((item) => (
                        <ProjectIdeaCard key={item.id} title={item.title} description={item.description} date={item.date} />
                    || console.log('error')))
                )}
            </div>
        </section>
    )
}
