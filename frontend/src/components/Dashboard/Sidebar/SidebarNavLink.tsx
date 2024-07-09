import React, { useState } from 'react'

import { IoChevronDown } from "react-icons/io5";
import { LuDot } from "react-icons/lu";
import { NavLink } from 'react-router-dom';
import { sidebarLinkType } from './SidebarLink';

export const SidebarNavLink:React.FC<{item:sidebarLinkType[number]}> = ({item}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <ul className='px-5'>
        <li
            className={`flex items-center justify-between rounded-md px-2 py-4 duration-300`}>
                <NavLink
                    to={item.path}
                    end
                    className={({isActive}) => isActive ? `flex font-karla text-xl w-full px-5 justify-between  
                    items-center bg-brand-primary text-white transition-all delay-50 py-3 rounded-md ease-in-out` : 
                    `flex font-karla text-xl w-full px-5 justify-between items-center gap-2 bg-slate-800 text-white   
                    transition-all delay-50 ease-in-out hover:text-white py-3 rounded-md hover:bg-brand-primary`}
                >
                    <div className='flex items-center gap-2'>
                        {item.icon}
                        {item.label}
                    </div>

                    {item.subLink && (
                        <div 
                            onClick={() => setIsOpen(!isOpen)}
                        >
                        <IoChevronDown 
                        className={`${isOpen ? '' : 'rotate-90'} cursor-pointer duration-300`}/>
                    </div>
                    )}

                </NavLink>
            </li>
            {item.subLink && item.subLink.map((sublink, index) => (
                <div
                    key={index}
                    className={`overflow-hidden transition-all duration-300   ${
                    isOpen ? 'max-h-40' : 'max-h-0'
                    }`}
                >
                    <NavLink 
                        to={sublink.path}
                        className={`i px-5 mt-2 flex items-center rounded-md pl-4 text-sm text-white group transition-all delay-50 ease-in-out hover:bg-green-500`}>
                        <LuDot size={45}/>
                        <span className="text-white text-lg">{sublink.label}</span>
                    </NavLink>
                </div>
            ))
                
            }
    </ul>
  )
}
