import { create } from 'zustand'

type OpenSidebarType = {
    isOpen: boolean,
    toggleSidebar: () => void,
}

export const openSidebarBtnStore = create<OpenSidebarType>((set) => ({
    isOpen: false,
    toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
}))