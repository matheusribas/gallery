import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { GoSortDesc } from 'react-icons/go';
import { SortType } from '../context/Sort';
import { useSort } from '../hooks/useSort';
import { classNames } from '../utils/classNames';

export function ButtonSort() {
  const { sort, onChangeSort } = useSort()

  function handleSelectedSort(sortSelected: SortType) {
    if (sort?.field === sortSelected?.field && sort?.order === sortSelected?.order) {
      onChangeSort({})
      return
    } 

    onChangeSort(sortSelected)
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="flex items-center gap-2 font-semibold shadow-md dark:bg-slate-400/10 dark:text-slate-400 bg-slate-600/10 text-slate-900 dark:hover:bg-slate-400 dark:hover:text-black hover:bg-slate-400 hover:text-black rounded-md p-2 transition duration-200 hover:-translate-y-1" 
        >
          <GoSortDesc size={18} /> <span>Ordenar</span>
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content 
        className="shadow-[0_2px_10px] shadow-black/20 dark:bg-slate-800 bg-slate-300 rounded-md overflow-hidden min-w-60" 
        sideOffset={8}
        align="end"
      >
        <DropdownMenu.Item 
          onSelect={() => 
            handleSelectedSort({
              field: 'size',
              order: 'ASC'
            })
          }
          className={classNames(
            (sort?.field === 'size' && sort?.order === 'ASC') ? "dark:bg-slate-300/10 bg-slate-700/10" : '', 
            "outline-none flex justify-between dark:hover:bg-slate-300/10 hover:bg-slate-700/10 dark:text-slate-100 text-slate-900 py-2 px-3 border-b border-black/5"
          )}
          role='button'
        >
          Tamanho em MB <span className="text-slate-400">crescente</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item 
          onSelect={() => 
            handleSelectedSort({
              field: 'size',
              order: 'DESC'
            })
          }
          className={classNames(
            (sort?.field === 'size' && sort?.order === 'DESC') ? "dark:bg-slate-300/10 bg-slate-700/10" : '', 
            "outline-none flex justify-between dark:hover:bg-slate-300/10 hover:bg-slate-700/10 dark:text-slate-100 text-slate-900 py-2 px-3 border-b border-black/5"
          )}
          role='button'
        >
          Tamanho em MB <span className="text-slate-400">decrescente</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item 
          onSelect={() => 
            handleSelectedSort({
              field: 'created_at',
              order: 'ASC'
            })
          }
          className={classNames(
            (sort?.field === 'created_at' && sort?.order === 'ASC') ? "dark:bg-slate-300/10 bg-slate-700/10" : '', 
            "outline-none flex justify-between dark:hover:bg-slate-300/10 hover:bg-slate-700/10 dark:text-slate-100 text-slate-900 py-2 px-3 border-b border-black/5"
          )}
          role='button'
        >
          Data de criação <span className="text-slate-400">crescente</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item 
          onSelect={() => 
            handleSelectedSort({
              field: 'created_at',
              order: 'DESC'
            })
          }
          className={classNames(
            (sort?.field === 'created_at' && sort?.order === 'DESC') ? "dark:bg-slate-300/10 bg-slate-700/10" : '', 
            "outline-none flex justify-between dark:hover:bg-slate-300/10 hover:bg-slate-700/10 dark:text-slate-100 text-slate-900 py-2 px-3 border-b border-black/5"
          )}
          role='button'
        >
          Data de criação <span className="text-slate-400">decrescente</span>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}