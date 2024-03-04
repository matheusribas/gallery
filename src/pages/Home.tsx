import { useQuery } from "react-query";
import axios from "axios";
import { LuCheckSquare } from "react-icons/lu";

import { ButtonSort } from '../components/ButtonSort';
import { ItemImage } from "../components/ItemImage";
import { ItemImagePulse } from "../components/ItemImagePulse";
import { DialogAddImage } from "../components/DialogAddImage";

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
        <DialogAddImage />
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
            key={image.id}
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