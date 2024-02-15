import { CiDark, CiSun } from "react-icons/ci"

import { useTheme } from "../hooks/useTheme"

export function ButtonTheme() {
  const { theme, onChangeTheme } = useTheme()

  function handleChangeTheme() {
    onChangeTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button 
      className="border-none dark:hover:bg-slate-700 hover:bg-slate-200 rounded-full p-2 transition duration-200 hover:-translate-y-1" 
      title={theme === 'light' ? "Mudar para tema escuro" : "Mudar para tema claro"}
      onClick={handleChangeTheme}
    >
      {theme === 'light' ? <CiDark size={24} /> : <CiSun size={24} />}
    </button>
  )
}