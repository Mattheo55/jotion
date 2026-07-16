import NoteSidebar from '@/component/NoteSidebar'
import Sidebar from '@/component/Sidebar'
import React, { ReactNode } from 'react'

export default function MainLayout({children}: {children: ReactNode}) {
  return (
    <div className='h-screen flex flex-row overflow-hidden'>
        <Sidebar/>
        <NoteSidebar/>
        <div className='flex-1 p-8 overflow-y-auto bg-[#181818]'>
          {children}
        </div>
    </div>
  )
}
