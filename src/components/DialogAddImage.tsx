import { FormEvent, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from '@radix-ui/react-select';
import { LuCheck, LuChevronDown, LuChevronUp, LuPlus, LuX } from "react-icons/lu";

interface AlbumDB {
  id: string;
  name: string;
  created_at: Date
}

export function DialogAddImage() {
  const [openDialog, setOpenDialog] = useState(false)

  async function fetchAlbums() {
    const response = await axios.get('http://localhost:8080/albums')
    return response.data
  }

  const { data: albums } = useQuery<AlbumDB[]>('albums', fetchAlbums)

  function handleOpenChange() {
    setOpenDialog(prev => !prev)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log('submit')
  }

  return (
    <Dialog.Root
      open={openDialog}
      onOpenChange={handleOpenChange}
    >
      <Dialog.Trigger asChild>
        <button
          className="flex items-center gap-2 font-semibold shadow-md border dark:border-green-700 border-green-400 dark:bg-green-400/10 dark:text-green-400 bg-green-600/10 text-green-800 dark:hover:bg-green-500 dark:hover:text-white hover:bg-green-400 hover:text-black rounded-md p-2 transition duration-200 hover:-translate-y-1" 
        >
          <LuPlus size={18} /> Nova imagem
        </button>
      </Dialog.Trigger>
      <Dialog.Portal container={document.getElementById('layout')}>
        <Dialog.Overlay className="z-10 bg-black/60 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="z-10 shadow-[0_2px_10px] shadow-black/20 bg-white text-slate-950 dark:bg-slate-800 dark:text-slate-50 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-md p-6 outline-none">
          <header className="mb-6">
            <Dialog.Title className="text-lg font-semibold">
              Nova Imagem
            </Dialog.Title>
            <Dialog.Description className="text-sm leading-normal">
              Preencha os campos para adicionar uma imagem.
            </Dialog.Description>
            <Dialog.Close asChild>
              <button
                className="hover:text-red-500 absolute top-2 right-2 inline-flex h-6 w-6 items-center justify-center rounded-full focus:outline-none focus:shadow-[0_0_0_1px] focus:shadow-red-500 focus:text-red-500"
                aria-label="Fechar"
              >
                <LuX />
              </button>
            </Dialog.Close>
          </header>
          <form onSubmit={handleSubmit} id="newImage">
            <fieldset className="mb-4 flex flex-col gap-1">
              <label 
                htmlFor="name"
                className="dark:text-white text-slate-950" 
              >
                Álbum
              </label>
              <Select.Root>
                <Select.Trigger
                  className="bg-white dark:bg-slate-700/50 dark:text-white text-slate-950 flex justify-between p-3 rounded-md text-sm leading-none shadow-[0_0_0_1px] shadow-slate-400/50 outline-none focus:shadow-[0_0_0_2px] focus:shadow-slate-400"
                  aria-label="Álbum"
                >
                  <Select.Value placeholder="Selecione um álbum" />
                  <Select.Icon>
                    <LuChevronDown />
                  </Select.Icon>
                </Select.Trigger>
                <Select.Content 
                  autoFocus
                  position='popper'
                  side='bottom'
                  align='center'
                  sideOffset={4}
                  className="overflow-hidden bg-white dark:bg-slate-700 dark:text-white text-slate-950 rounded-md shadow-[0_2px_10px] shadow-black/20"
                >
                  <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white dark:bg-slate-700 dark:text-white text-slate-950 cursor-default">
                    <LuChevronUp />
                  </Select.ScrollUpButton>
                  <Select.Viewport className="p-2 w-[402px] max-h-48">
                    {albums?.map(album => (
                      <Select.Item
                        key={album.id}
                        value={album.id}
                        className='truncate text-ellipsis overflow-hidden text-sm leading-none dark:text-white text-slate-950 flex items-center p-3 pl-7 relative select-none data-[disabled]:text- data-[disabled]:pointer-events-none data-[highlighted]:outline-none dark:data-[highlighted]:bg-slate-800/50 data-[highlighted]:bg-slate-300/50 rounded-md'
                        role='button'
                      >
                        <Select.ItemText className='truncate'>{album.name}</Select.ItemText>
                        <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                          <LuCheck />
                        </Select.ItemIndicator>
                      </Select.Item>
                    ))}
                  </Select.Viewport>
                  <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white dark:bg-slate-700 dark:text-white text-slate-950 cursor-default">
                    <LuChevronDown />
                  </Select.ScrollDownButton>
                </Select.Content>
              </Select.Root>
            </fieldset>
          </form>
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              form="newImage"
              className="dark:border-green-700 border-green-400 dark:bg-green-400/10 dark:text-green-400 bg-green-600/10 text-green-800 dark:hover:bg-green-500 dark:hover:text-white hover:bg-green-400 hover:text-black transition duration-200 hover:-translate-y-1 rounded-md py-2 px-3 h-[35px] font-semibold leading-none focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-green-700"
            >
              Adicionar
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
