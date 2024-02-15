import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { ButtonTheme } from "./ButtonTheme"
import { MenuNavigate } from './MenuNavigate'

export function Header() {

  return (
    <header className="w-full h-20 mb-4 bg-slate-400 text-slate-950 dark:bg-slate-800 dark:text-slate-50 flex items-center flex-col">
      <div className="w-full h-full max-w-[90rem] flex items-center justify-between">
        <Link to='/' className="flex flex-shrink-0 items-center">
          <img
            className="h-10 w-auto"
            src={logo}
            alt="Logotipo PictoFlow"
          />
        </Link>
        <MenuNavigate />
        <ButtonTheme />
      </div>
      <hr className="w-full dark:border-slate-700 border-slate-400" />
    </header>
  )
}