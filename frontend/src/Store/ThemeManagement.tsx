import { create } from 'zustand'

type themeType = {
    isDark: boolean,
    updateTheme : () => void;
}

export const useThemeStore = create<themeType>((set) => ({
    isDark: true,
    updateTheme: () => set((state) => ({ isDark: !state.isDark }))
}))