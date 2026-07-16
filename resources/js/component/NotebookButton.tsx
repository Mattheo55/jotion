import { Notebook } from '@/types/notebook'
import clsx from 'clsx';
import { Folder, FolderOpen } from 'lucide-react'
import React from 'react'

interface NotebookButtonProps {
    notebook: Notebook;
    active?: boolean
    onPress: (note: Notebook) => void;
}

export default function NotebookButton({notebook, active, onPress}: NotebookButtonProps) {
  return (
    <button onClick={() => onPress(notebook)} className={clsx('cursor-pointer h-10 no-drag flex px-5 gap-3 items-center', active ? 'bg-gray-500/10' : 'hover:bg-gray-500/10')}>
        {active ? <FolderOpen size={20}/> : <Folder size={20}/>}
        <p>{notebook.name}</p>
    </button>
  )
}
