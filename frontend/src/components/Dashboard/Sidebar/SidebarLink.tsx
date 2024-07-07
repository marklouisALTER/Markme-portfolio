import { MdDashboard } from "react-icons/md";
import { RiTodoFill } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";

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
        path: '/dashboard',
    },
    {
        icon: <RiTodoFill />,
        label: 'Todo List',
        path: '/todo',
    },
    {
        icon: <FaCalendarAlt />,
        label: 'Activities',
        path: '/sched-activity'
    }
]