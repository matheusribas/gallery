import { NavLink } from "react-router-dom"
import { classNames } from "../utils/classNames"
import { useTheme } from "../hooks/useTheme"
import { CiDark, CiSun } from "react-icons/ci"

interface PropsMenuNavigateMobile {
  isOpen: boolean,
  onClose: () => void
}

export function MenuNavigateMobile({ isOpen, onClose }: PropsMenuNavigateMobile) {
  const { theme, onChangeTheme } = useTheme()
  
  function handleChangeTheme() {
    onChangeTheme(theme === 'light' ? 'dark' : 'light')
  }

  return isOpen && (
    <div className="sm:hidden">
      <nav className="pb-2">
        <ul className="flex flex-col">
          <NavLink
            onClick={onClose}
            to="/"
            className={({ isActive }) => classNames(isActive 
              ? 'dark:bg-black/20 bg-slate-500/50 dark:border-b-slate-500 border-l-slate-700 border-x-2 dark:text-white text-slate-950'
              : 'dark:text-slate-300 text-slate-700 dark:hover:text-white',
              'px-6 py-2 mb-1 font-bold h-full flex items-center border-r-transparent'
            )}
          >
            Todas
          </NavLink>
          <NavLink
            onClick={onClose}
            to="/favorites"
            className={({ isActive }) => classNames(isActive 
              ? 'dark:bg-black/20 bg-slate-500/50 dark:border-b-slate-500 border-l-slate-700 border-x-2 dark:text-white text-slate-950'
              : 'dark:text-slate-300 text-slate-700 dark:hover:text-white',
              'px-6 py-2 mb-1 font-bold h-full flex items-center border-r-transparent'
            )}
          >
            Favoritas
          </NavLink>
          <NavLink
            onClick={onClose}
            to="/albums"
            className={({ isActive }) => classNames(isActive 
              ? 'dark:bg-black/20 bg-slate-500/50 dark:border-b-slate-500 border-l-slate-700 border-x-2 dark:text-white text-slate-950'
              : 'dark:text-slate-300 text-slate-700 dark:hover:text-white',
              'px-6 py-2 mb-1 font-bold h-full flex items-center border-r-transparent'
            )}
          >
            Álbuns
          </NavLink>
        </ul>
      </nav>
      <div className="border-t border-t-black/20 py-2">
        <button 
          className="border-none px-6 py-2 transition duration-200" 
          title={theme === 'light' ? "Mudar para tema escuro" : "Mudar para tema claro"}
          onClick={handleChangeTheme}
        >
          {theme === 'light' ? (
            <div className="flex items-center gap-2 text-slate-800 dark:text-slate-300 font-semibold">
              <CiDark size={24} /> <span>Alterar para tema escuro</span>
            </div>
          ) : 
          <div className="flex items-center gap-2 text-slate-800 dark:text-slate-300 font-semibold">
            <CiSun size={24} /> <span>Alterar para tema claro</span>
          </div>}
        </button>
      </div>
    </div>
  )
}