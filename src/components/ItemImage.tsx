import { useState } from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { LuHeart } from "react-icons/lu";

import { ImageDB } from "../pages/Home";
import { classNames } from "../utils/classNames";

interface ItemImageProps {
  id: string;
  url: string;
  name: string;
  isFavorite: boolean;
}

interface MutationFavorite {
  id: string;
  is_favorite: boolean;
}

export function ItemImage({ id, url, name, isFavorite }: ItemImageProps) {

  const queryClient = useQueryClient()
  const [imgLoading, setImgLoading] = useState(true)

  async function patchFavorite({id , is_favorite}: MutationFavorite) {
    const response = await axios.patch(`http://localhost:8080/images/${id}`, {is_favorite})

    return response.data
  }

  const mutation = useMutation({
    mutationFn: ({id, is_favorite}: MutationFavorite) => patchFavorite({id, is_favorite}),
    onSuccess(data) {
      toast.success(data.is_favorite ? "Imagem favoritada." : "Imagem desfavoritada.")

      queryClient.setQueryData<Array<ImageDB>>("images", prevImages => {
        if (!prevImages) {
          return []
        }
        
        const updatedImages = prevImages.map(image => {
          if (image.id === data.id) {
            return {...image, is_favorite: data.is_favorite}
          } 

          return image
        })

        return updatedImages
      })
    },
    onError() {
      toast.error(`Erro ao ${!isFavorite ? "favoritar" : "desfavoritar"} imagem.`)
    }
  })

  function handleToggleFavorite() {
    mutation.mutate({ id, is_favorite: !isFavorite })
  }

  function handleImageLoaded() {
    setImgLoading(false)
  }

  const tooltipButton = !isFavorite ? "Favoritar imagem" : "Desfavoritar imagem"

  return (
    <div className="shadow-[0_2px_10px] shadow-black/20 border border-slate-500/10 dark:bg-slate-400/10 bg-slate-600/10 rounded-md overflow-hidden relative">
      <img
        src={url}
        alt={name}
        className={classNames(imgLoading ? "animate-pulse" : "", "h-full w-full object-cover")}
        onLoad={handleImageLoaded} 
      />
      <button 
        title={tooltipButton}
        className="hover:backdrop-blur-md absolute top-1 right-1 p-2 rounded-full group transition duration-200 hover:translate-y-1"
        aria-checked={isFavorite}
        onClick={handleToggleFavorite}
      >
        <LuHeart
          size={22} 
          className="text-zinc-400 group-hover:text-red-600 group-hover:fill-red-500 group-aria-checked:text-red-600 group-aria-checked:fill-red-500"
        />
      </button>
    </div>
  )
}

