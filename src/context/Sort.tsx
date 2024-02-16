import { ReactNode, createContext, useState } from "react";

export interface SortType {
  field?: 'size' | 'created_at',
  order?: 'ASC' | 'DESC' 
}

export interface SortContextType {
  sort: SortType,
  onChangeSort: (sort: SortType) => void
}

interface SortProvider {
  children: ReactNode
}

export const SortContext = createContext<SortContextType | undefined>(undefined);

export function SortProvider({ children }: SortProvider) {
  const [sort, setSort] = useState<SortType>({})

  function onChangeSort(sort: SortType) {
    setSort(sort)
  }

  return (
    <SortContext.Provider value={{sort, onChangeSort}}>
      {children}
    </SortContext.Provider>
  )
}
