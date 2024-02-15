import { ReactNode } from "react";
import { useTheme } from "../hooks/useTheme";

interface PropsLayout {
  children: ReactNode
}

export function Layout({ children }: PropsLayout) {
  const { theme } = useTheme()

  return (
    <main className={theme}>
      {children}
    </main>
  )
}