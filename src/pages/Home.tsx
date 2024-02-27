import { useQuery } from "react-query";
import axios from "axios";
import { LuCheckSquare, LuPlus } from "react-icons/lu";

import { ButtonSort } from '../components/ButtonSort';
import { ItemImage } from "../components/ItemImage";
import { ItemImagePulse } from "../components/ItemImagePulse";

export interface ImageDB {
  id: string; 
  name: string; 
  url: string;
  size: number;
  is_favorite: boolean;
  albumId: string;
  created_at: Date
}

export function Home() {

  async function fetchImages() {
    const response = await axios.get('http://localhost:8080/images')
    return response.data
  }

  const { data: images, isLoading } = useQuery<ImageDB[]>('images', fetchImages)
  
  return (
    <div className="w-full mt-14 px-6 pb-6">
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
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row auto-rows-[300px] gap-6 mt-14">
        {isLoading || !images ? (
          <>
            <ItemImagePulse />
            <ItemImagePulse />
            <ItemImagePulse />
            <ItemImagePulse />
          </>
        ) : images.map(image => (
          <ItemImage 
            id={image.id}
            isFavorite={image.is_favorite}
            name={image.name}
            url={image.url}
          />
        ))}
      </div>
    </div>
  )
}