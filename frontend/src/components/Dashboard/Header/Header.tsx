import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { IoMdNotifications } from "react-icons/io";

import { IoChevronDown } from "react-icons/io5";
export const Header:React.FC = () => {
  return (
    <header className='w-full h-[70px] flex items-center justify-end px-5 md:px-10 py-5'>
        <div className='flex items-center gap-5'>
          <div className='p-2 hover:bg-[#101d2e] rounded-lg transition-all delay-50 ease-in-out cursor-pointer'>
            <IoMdNotifications className='text-white text-2xl'/>
          </div>
          <div className='relative flex cursor-pointer items-center gap-2'>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className=" absolute bottom-0 left-4 z-50 flex h-3 w-3 items-center justify-center rounded-full  border-2 border-custom-textGray bg-custom-black text-white md:left-6 md:h-4 md:w-4">
                <IoChevronDown />
            </div>
          </div>
        </div>
    </header>
  )
}
