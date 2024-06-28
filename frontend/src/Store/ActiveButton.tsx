import { create } from 'zustand'

type activeListBtnType = {
    isListBtnActive: boolean,
    setListBtnActive: ()=> void,
}

type activeImgBtnType  = {
    isImgbtnActive: boolean,
    setImgBtnActive: ()=> void,
}

type activeSidebarBtnType = {
    isSidebarBtnActive: boolean,
    setSidebarBtnActive: ()=> void,
}

type activeMailModalBtnType = {
    isMailModalBtnActive: boolean,
    setMailModalBtnActive: ()=> void,
}

export const useActiveListBtnStore = create<activeListBtnType>((set) => ({
    isListBtnActive: true,
    setListBtnActive: () => set((state) => ({isListBtnActive: !state.isListBtnActive}))
}))

export const useActiveImgBtnStore = create<activeImgBtnType>((set) => ({
    isImgbtnActive: false,
    setImgBtnActive: () => set((state) => ({isImgbtnActive: !state.isImgbtnActive}))
}))

export const useActiveSidebarBtnStore = create<activeSidebarBtnType>((set) => ({
    isSidebarBtnActive: false,
    setSidebarBtnActive: () => set((state) => ({isSidebarBtnActive:!state.isSidebarBtnActive}))
}))

export const useActiveMailModalBtnStore = create<activeMailModalBtnType>((set) => ({
    isMailModalBtnActive: false,
    setMailModalBtnActive: () => set((state) => ({isMailModalBtnActive:!state.isMailModalBtnActive}))
}))