import React, { ReactNode } from 'react'
import MainLayout from './MainLayout'
import {File} from "lucide-react"
import { usePage } from '@inertiajs/react'

export default function EmptyState() {
  return (
    <div className='flex flex-col gap-4 h-full items-center justify-center'>
        <File color='white' size={60}/>
        <p className='text-white text-2xl'>Séléctionner une note</p>
        <p className='text-gray-400 w-100 text-center'>Choisir une note dans le menu a gauche ou créer un carnet pour créer de nouvelle note</p>
    </div>
  )
}

EmptyState.layout = (page: ReactNode) => <MainLayout children={page} />