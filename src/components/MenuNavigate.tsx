import { NavLink } from "react-router-dom";
import { classNames } from "../utils/classNames";

export function MenuNavigate() {

  return (
    <nav className="hidden sm:block h-full">
      <ul className="flex space-x-10 h-full items-center">
        <NavLink 
          to="/"
          className={({ isActive }) => classNames(isActive 
            ? 'dark:border-b-slate-500 border-b-slate-700 border-y-2 dark:text-white text-slate-950'
            : 'dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-slate-900 hover:border-b-slate-700 hover:border-y-2',
            'px-8 py-2 font-bold h-full flex items-center border-t-transparent'
          )}
        >
          Todas
        </NavLink>
        <NavLink 
          to="/favorites"
          className={({ isActive }) => classNames(isActive 
            ? 'dark:border-b-slate-500 border-b-slate-700 border-y-2 dark:text-white text-slate-950'
            : 'dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-slate-900 hover:border-b-slate-700 hover:border-y-2',
            'px-8 py-2 font-bold h-full flex items-center border-t-transparent'
          )}
        >
          Favoritas
        </NavLink>
        <NavLink 
          to="/albums"
          className={({ isActive }) => classNames(isActive 
            ? 'dark:border-b-slate-500 border-b-slate-700 border-y-2 dark:text-white text-slate-950'
            : 'dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-slate-900 hover:border-b-slate-700 hover:border-y-2',
            'px-8 py-2 font-bold h-full flex items-center border-t-transparent'
          )}
        >
          Álbuns
        </NavLink>
      </ul>
    </nav>
  )
}