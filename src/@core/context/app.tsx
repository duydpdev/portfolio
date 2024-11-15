import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode
} from 'react'

interface AppContextType {
  theme: string
  setTheme: (_theme: string) => void
}

const AppContext = createContext<AppContextType | null>(null)

interface AppContextProviderProps {
  children: ReactNode
}

export const AppProvider: React.FC<AppContextProviderProps> = ({
  children
}) => {
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem('theme') || 'dark'
  })

  useEffect(() => {
    const mode = localStorage.getItem('theme') || 'dark'
    setTheme(mode)
    document.documentElement.setAttribute('data-bs-theme', mode)
    localStorage.setItem('theme', mode)
  }, [])

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useCurrentApp = (): AppContextType => {
  const currentAppContext = useContext(AppContext)

  if (!currentAppContext) {
    throw new Error('useCurrentApp has to be used within <AppContext.Provider>')
  }

  return currentAppContext
}
