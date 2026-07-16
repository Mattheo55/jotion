import { Notebook } from '@/types/notebook';
import { usePage } from '@inertiajs/react'
import React from 'react'

export default function NoteSidebar() {
    const {activeNotebook} = usePage<{activeNotebook?: Notebook}>().props;

  return (
    <div className='w-70 bg-[#1C1C1C] p-5'>
        <p className='text-white text-xl font-bold'>{activeNotebook ? activeNotebook.name : "Séléctionner un carnet"}</p>
    </div>
  )
}
