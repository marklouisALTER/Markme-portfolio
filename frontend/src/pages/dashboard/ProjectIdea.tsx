import { projectIdeaDumpData } from '@/Data/ProjectIdeaDumpData'
import { ProjectIdeaCard } from '@/components/Card/Admin/ProjectIdeaCard';
import { ProjectIdeaSkeleton } from '@/components/Skeleton/ProjectIdeaSkeleton';
import { toast, Toaster } from 'sonner';
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
                toast.success('Project Idea Loaded Successfully', {
                style: {
                    background: '#101d2e',
                    },
                });
            }, 2000)
        }   

        fetchProjectIdeaCard();
    },[])

    return (
        <section className='w-full'>
            <Toaster richColors position="top-right" />
            <div className='flex flex-col gap-4 px-5'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold font-karla text-white'>Project Idea</h1>
            </div>
            <div className='w-full mt-10 grid grid-cols-1 px-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                {loading ? (
                    <>
                        <ProjectIdeaSkeleton />
                        <ProjectIdeaSkeleton />
                        <ProjectIdeaSkeleton />
                        <ProjectIdeaSkeleton />
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
