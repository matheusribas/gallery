import { LuCheckSquare, LuPlus } from "react-icons/lu";
import { ButtonSort } from '../components/ButtonSort';

export function Home() {

  return (
    <div className="w-full mt-14">
      <div className="w-full flex items-center justify-end gap-3">
        <button
          className="flex items-center gap-2 font-semibold shadow-md border dark:border-green-700 border-green-400 dark:bg-green-400/10 dark:text-green-400 bg-green-600/10 text-green-900 dark:hover:bg-green-500 dark:hover:text-white hover:bg-green-400 hover:text-black rounded-md p-2 transition duration-200 hover:-translate-y-1" 
        >
          <LuPlus size={18} /> Nova imagem
        </button>
        <button
          className="flex items-center gap-2 font-semibold shadow-md dark:bg-violet-400/10 dark:text-violet-400 bg-violet-600/10 text-violet-900 dark:hover:bg-violet-400 dark:hover:text-black hover:bg-violet-400 hover:text-black rounded-md p-2 transition duration-200 hover:-translate-y-1" 
        >
          <LuCheckSquare size={18} /> <span>Selecionar</span>
        </button>
        <ButtonSort />
      </div>
      <div className="w-full flex justify-center mt-14">
      </div>
    </div>
  )
}