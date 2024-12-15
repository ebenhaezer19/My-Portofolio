import create from 'zustand'

interface AppState {
  theme: 'light' | 'dark'
  toggleTheme: () => void
  isLoading: boolean
  setLoading: (loading: boolean) => void
}

export const useStore = create<AppState>((set) => ({
  theme: 'dark',
  toggleTheme: () => set((state) => ({ 
    theme: state.theme === 'dark' ? 'light' : 'dark' 
  })),
  isLoading: false,
  setLoading: (loading) => set({ isLoading: loading })
})) 