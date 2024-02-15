import { ReactNode } from "react";
import { useTheme } from "../hooks/useTheme";

interface PropsLayout {
  children: ReactNode
}

// cor da logo = #d4b59d

export function Layout({ children }: PropsLayout) {
  const { theme } = useTheme()

  return (
    <div className={theme}>
      {children}
    </div>
  )
}