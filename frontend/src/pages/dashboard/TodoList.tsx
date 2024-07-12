import React from 'react'
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { TodoCard } from '@/components/Dashboard/Card/TodoCard';

export const TodoList:React.FC = () => {
  
  const placeholders = [
    "Take 1hr atleast Course in Coursera?",
    "Code Atleast 3hr React TS specifically",
    "Take 1hr atleast Course in DataCamp?",
    "Create daily byte of knowledge in tiktok",
    "Design Flyers for the client.",
  ];
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  const todoData = [
    {
      description: "Take 1hr atleast Course in Coursera?",
      dateCreated: "2024-06-29",
      status: "Done",
      timeLeft: "Done",
      todoType: "Everyday"
    },
    {
      description: "Take 1hr atleast Course in DataCamp?",
      dateCreated: "2024-06-29",
      status: "In Progress",
      timeLeft: "5 hrs left",
      todoType: "Everyday"
    }
  ]

  return (
    <section className='px-5'>
      <div className='mt-5'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold font-karla text-white'>Hello, <span className='text-brand-primary'>Markme</span></h2>
        <h5 className='text-gray-400 font-ubuntu mt-2 md:text-lg'>Here's all your todo list for today. I hope you finish them all.</h5>
      </div>
    <div className='flex justify-center mt-10'>
      <div className='w-full max-w-[40rem] bg-[#1a202c] rounded-xl p-5 flex flex-col gap-3'>
        <small className='text-white font-karla text-lg'>Create a new todo</small>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
        </div>
    </div>
      {/* <div className='relative w-full border border-gray-400/20 mt-10 flex justify-center items-center'>
        <p className='absolute left-[-1%] bg-slate-800 px-2 text-white font-karla'>To-do List</p>
      </div> */}

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-10'>
        {
          todoData.map((todo, index) => (
            <TodoCard key={index} {...todo} />
          ))
        }
      </div>

    </section>
  )
}
