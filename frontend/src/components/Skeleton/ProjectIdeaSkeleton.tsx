import React from 'react'

export const ProjectIdeaSkeleton:React.FC = () => {
  return (
    <div className='w-full bg-[#101d2e]/70 rounded-xl animate-pulse p-5'>
      <div className='w-full bg-[#101d2e] h-[3rem]'></div>
      <div className='w-full bg-[#101d2e] h-[5rem] mt-5'></div>
    </div>
  )
}
