import React from 'react'

export const ActivitySkeleton: React.FC = () => {
    const skeletonItems = Array.from({ length: 28 });

    return (
        <div className='flex flex-col w-full h-screen bg-[#101d2e]/70 p-3 '>
            <div className='flex items-center justify-end py-3 gap-3'>
                {[...Array(2)].map((_, index) => (
                    <div key={index} className='w-16 h-8 bg-[#101d2e] rounded-md'></div>
                ))}
            </div>
            <div className='w-full h-full rounded-md grid gap-3 grid-cols-7 animate-pulse'>
                    {skeletonItems.map((_, index) => (
                        <div key={index} className='w-full bg-[#101d2e] h-[10rem]'></div>
                    ))}
            </div>
        </div>
    );
};
