import { ReactNode, createContext, useState } from "react";

type Theme = 'dark' | 'light'

export interface ThemeContextType {
  theme: Theme,
  onChangeTheme: (theme: Theme) => void
}

interface ThemeProvider {
  children: ReactNode
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: ThemeProvider) {
  const [theme, setTheme] = useState<Theme>('dark')

  function onChangeTheme(theme: Theme) {
    setTheme(theme)
  }

  return (
    <ThemeContext.Provider value={{theme, onChangeTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}
