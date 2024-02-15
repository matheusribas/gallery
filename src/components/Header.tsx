import { Link } from 'react-router-dom'
import logoLight from '../assets/logotipo-preta.png'
import logoDark from '../assets/logotipo-branca.png'
import { ButtonTheme } from "./ButtonTheme"
import { MenuNavigate } from './MenuNavigate'
import { useTheme } from '../hooks/useTheme'

export function Header() {
  const { theme } = useTheme()

  return (
    <>
      <header className="px-6 h-20 bg-slate-400 text-slate-950 dark:bg-slate-800 dark:text-slate-50 shadow-sm">
        <div className="w-full h-full max-w-[90rem] flex items-center justify-between mx-auto">
          <Link to='/' className="flex flex-shrink-0 items-center">
            <img
              className="h-12 w-auto"
              src={theme === 'dark' ? logoDark : logoLight}
              alt="Logotipo PictoFlow"
            />
          </Link>
          <MenuNavigate />
          <ButtonTheme />
        </div>
      </header>
      <hr className="w-full dark:border-black/50 border-black/30 mb-4" />
    </>
  )
}