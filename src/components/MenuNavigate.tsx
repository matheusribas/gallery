import { NavLink } from "react-router-dom";

export function MenuNavigate() {

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <nav className="hidden sm:ml-6 sm:block h-full">
      <ul className="flex space-x-10 h-full items-center">
        <NavLink 
          to="/"
          className={({ isActive }) => classNames(isActive 
            ? 'dark:border-b-slate-500 border-b-slate-700 border-transparent border-b-2 dark:text-white text-slate-950'
            : 'dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-slate-900 hover:border-b-slate-700 hover:border-b-2',
            'px-5 py-2 font-semibold h-full flex items-center transition duration-200'
          )}
        >
          Todas
        </NavLink>
        <NavLink 
          to="/favorites"
          className={({ isActive }) => classNames(isActive 
            ? 'dark:border-b-slate-500 border-b-slate-700 border-transparent border-b-2 dark:text-white text-slate-950'
            : 'dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-slate-900 hover:border-b-slate-700 hover:border-b-2',
            'px-5 py-2 font-semibold h-full flex items-center transition duration-200'
          )}
        >
          Favoritas
        </NavLink>
        <NavLink 
          to="/albums"
          className={({ isActive }) => classNames(isActive 
            ? 'dark:border-b-slate-500 border-b-slate-700 border-transparent border-b-2 dark:text-white text-slate-950'
            : 'dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-slate-900 hover:border-b-slate-700 hover:border-b-2',
            'px-5 py-2 font-semibold h-full flex items-center transition duration-200'
          )}
        >
          Álbuns
        </NavLink>
      </ul>
    </nav>
  )
}