import { useContext } from "react";
import { SortContext, SortContextType } from "../context/Sort";

export function useSort(): SortContextType {
  const context = useContext(SortContext);

  if (!context) {
    throw new Error('useSort deve ser usado dentro de um SortProvider');
  }
  
  return context;
}