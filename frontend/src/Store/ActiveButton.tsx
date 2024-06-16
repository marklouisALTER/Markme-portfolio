import { create } from 'zustand'

type activeListBtnType = {
    isListBtnActive: boolean,
    setListBtnActive: ()=> void,
}

type activeImgBtnType  = {
    isImgbtnActive: boolean,
    setImgBtnActive: ()=> void,
}

export const useActiveListBtnStore = create<activeListBtnType>((set) => ({
    isListBtnActive: true,
    setListBtnActive: () => set((state) => ({isListBtnActive: !state.isListBtnActive}))
}))

export const useActiveImgBtnStore = create<activeImgBtnType>((set) => ({
    isImgbtnActive: false,
    setImgBtnActive: () => set((state) => ({isImgbtnActive: !state.isImgbtnActive}))
}))