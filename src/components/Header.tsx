import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoCloseOutline } from 'react-icons/io5'
import { RiMenuLine } from 'react-icons/ri'

import { ButtonTheme } from "./ButtonTheme"
import { MenuNavigate } from './MenuNavigate'
import { useTheme } from '../hooks/useTheme'
import { MenuNavigateMobile } from './MenuNavigateMobile'

import logoLight from '../assets/logotipo-preta.png'
import logoDark from '../assets/logotipo-branca.png'

export function Header() {
  const { theme } = useTheme()
  const [openMenuMobile, setOpenMenuMobile] = useState(false)

  function handleCloseMenuMobile() {
    setOpenMenuMobile(false)
  }

  function handleToggleMenuMobile() {
    setOpenMenuMobile(prev => !prev)
  }

  return (
    <header className="bg-slate-400 text-slate-950 dark:bg-slate-800 dark:text-slate-50 shadow-sm border-b dark:border-black/30 border-black/10 mb-4">
      <div className="w-full h-20 px-6 max-w-[90rem] flex items-center justify-between mx-auto">
        <Link to='/' className="flex flex-shrink-0 items-center">
          <img
            className="h-12 w-auto"
            src={theme === 'dark' ? logoDark : logoLight}
            alt="Logotipo PictoFlow"
          />
        </Link>
        <MenuNavigate />
        <ButtonTheme />
        <button 
          className="block sm:hidden border-none dark:hover:bg-slate-700 hover:bg-slate-200 dark:text-slate-300 text-slate-700 rounded-md p-2 transition duration-200 hover:-translate-y-1" 
          title={!openMenuMobile ? "Expandir menu" : "Diminuir menu"}
          onClick={handleToggleMenuMobile}
        >
          {!openMenuMobile ? <RiMenuLine size={24} /> : <IoCloseOutline size={24} />}
        </button>
      </div>
      <MenuNavigateMobile 
        isOpen={openMenuMobile}
        onClose={handleCloseMenuMobile}
      />
    </header>
  )
}