import { MdDashboard } from "react-icons/md";
import { RiTodoFill } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";
import { TbBulbFilled } from "react-icons/tb";

export type subLinkType = {
    label: string,
    path: string,
}

export type sidebarLinkType = {
    icon: React.ReactNode,
    label: string,
    path: string,
    subLink?: subLinkType[]
}[]

export const sidebarLink:sidebarLinkType = [
    {
        icon: <MdDashboard />,
        label: 'Dashboard',
        path: '.',
    },
    {
        icon: <RiTodoFill />,
        label: 'Todo List',
        path: './todo-list',
    },
    {
        icon: <FaCalendarAlt />,
        label: 'Activities',
        path: './sched-activity'
    },
    {
        icon: <TbBulbFilled />,
        label: 'Project Ideas',
        path: './proj-ideas'
    }
]