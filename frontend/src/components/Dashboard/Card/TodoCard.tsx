import React from 'react'
import { FaCalendar, FaCheck, FaTrash } from 'react-icons/fa'
import { MdEdit } from 'react-icons/md'
import { IoRemoveOutline } from 'react-icons/io5'

type TodoCardType = {
    description: string
    dateCreated: string
    status: string
    timeLeft: string
    todoType: string
}

export const TodoCard:React.FC<TodoCardType> = ({description, dateCreated, status, timeLeft, todoType}) => {
  return (
    <div className='w-full bg-[#1a202c] rounded-xl p-4 relative hover:scale-[1.02] transition-all cursor-pointer ease-in-out'>
        <div className='relative min-h-[10rem] bg-slate-800 rounded-lg p-2 flex justify-center items-center'>
        <p className='text-white text-xl text-center font-karla'>{description}</p>
        <div className='absolute bottom-2 left-0 px-3 bg-slate-800 text-white font-karla'>
            {status === 'Done' ? 
                <small className='text-green-500 text-[13px]'>{timeLeft}</small> : 
                <small className='text-gray-300 text-[13px]'>{timeLeft}</small>
            }
        </div>
        </div>
        <div className='flex justify-between items-center py-2'>
        <div className='flex items-center gap-2 mt-2 font-karla text-gray-400 text-sm'>
            <FaCalendar />
            {dateCreated}
        </div>
        <div className='bg-green-500 px-3 font-karla text-sm text-slate-800 font-medium rounded-sm'>
            {todoType === 'Everyday' ? 
                <small>Everyday</small> : 
                todoType === 'Every Week' ? 
                <small>Every Week</small> : 
                <small>Every Month</small>
            }
        </div>
        </div>
        <div className='flex justify-end gap-2 mt-3'>
        <button className='bg-brand-primary px-3 py-1 font-karla text-white rounded-sm text-[16px] hover:bg-brand-secondary
        transition-all delay-50 ease-in-out focus:outline-none focus:ring-4 ring-brand-primary/30 flex items-center gap-1'>
            <MdEdit />
            Edit
        </button>
        <button className='bg-red-500 px-3 py-1 font-karla text-white rounded-sm text-[16px] hover:bg-red-500/60
        transition-all delay-50 ease-in-out focus:outline-none focus:ring-4 ring-red-500/30 flex items-center gap-1'>
            <FaTrash />
            Remove
        </button>
        </div>
        <div className='absolute top-0 right-0'>
        {status === 'Done' ? 
        <button className='bg-green-500 p-2 rounded-full'>
            <FaCheck />
        </button> : 
        <button className='bg-orange-500 p-2 rounded-full'>
            <IoRemoveOutline />
        </button>

        }
        </div>
    </div>
  )
}
