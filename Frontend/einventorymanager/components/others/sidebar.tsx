'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  HiOutlineMenuAlt3 as MenuIcon
} from 'react-icons/hi'
import {
  AiOutlineAppstore as DashboardIconInactive,
  AiFillAppstore as DashboardIconActive
} from 'react-icons/ai'
import {
  MdOutlineLocalGroceryStore as PurchasesIconInactive,
  MdLocalGroceryStore as PurchasesIconActive,
  MdOutlineSell as SalesIconInactive,
  MdSell as SalesIconActive
} from 'react-icons/md'
import { 
  CiCalculator1 as PosIconInactive,
} from 'react-icons/ci'
import { 
  IoCalculator as PosIconActive,
} from 'react-icons/io5'
import { useRouter } from 'next/navigation'

interface SidebarProps {
  organizationId: string
}

function Sidebar({ organizationId}: SidebarProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState(1)

  // const sidebarClick = (number: number, link: string ) => {
  //   setActiveTab(number)
  //   router.push(link)
  // }

  return (
    <aside className='w-0 sm:w-max h-screen gap-4 flex flex-col bg-secondary'>
        <div className='h-16 w-full border-b bg-background flex items-center'>
    	    <Button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            variant='noStyling' className='space-x-1 w-max ml-4'>
            <div className='bg-red-600 rounded-full w-2 h-2'></div>
            <div className='bg-yellow-600 rounded-full w-2 h-2'></div>
            <div className='bg-green-600 rounded-full w-2 h-2'></div>
          </Button>
        </div>
        <div className={`py-4 rounded-2xl ${isSidebarOpen ? 'w-48' : 'w-max'}
          mb-4 ml-4 flex-1 bg-background space-y-2 px-2 transition-all duration-5000`}>
            <Link href={`/organization/${organizationId}`}
              className={`w-full h-10 px-2 rounded-2xl flex gap-2 items-center
                justify-start text-neutral-600 font-semibold
               hover:text-white hover:bg-green-400 ${activeTab === 1 ? 'text-white bg-green-600' : ''}`}>
                {activeTab === 1 ? <DashboardIconActive className='text-2xl'/> : <DashboardIconInactive className='text-2xl'/>}
                {isSidebarOpen && (<span>Dashboard</span>)}
            </Link>
            <Link href={`/organization/${organizationId}/pos`}
              className={`w-full h-10 px-2 rounded-xl flex gap-2 items-center
              hover:text-white hover:bg-green-400 justify-start text-neutral-600 font-semibold
                ${activeTab === 2 ? 'text-white bg-green-600' : ''}`}>
                {activeTab === 2 ? <PosIconActive className='text-3xl'/> : <PosIconInactive className='text-3xl'/>}
                {isSidebarOpen && (<span>Pos</span>)}
            </Link>
            <Link href={`/organization/${organizationId}/items`}
              className={`w-full h-10 px-3 rounded-xl flex gap-2 items-center
                hover:text-white hover:bg-green-400 justify-start text-neutral-600 font-semibold
                ${activeTab === 3 ? 'text-white bg-green-600' : ''}`}>
                {activeTab === 3 ? <DashboardIconActive className='text-2xl'/> : <DashboardIconInactive className='text-2xl'/>}
                {isSidebarOpen && (<span>Items</span>)}
            </Link>
            <Link href={`/organization/${organizationId}/purchases`}
              className={`w-full h-10 px-2 rounded-xl flex gap-2 items-center
              hover:text-white hover:bg-green-400 justify-start text-neutral-600 font-semibold
                ${activeTab === 4 ? 'text-white bg-green-600' : ''}`}>
                {activeTab === 4 ? <PurchasesIconActive className='text-2xl'/> : <PurchasesIconInactive className='text-2xl'/>}
                {isSidebarOpen && (<span>Purchases</span>)}
            </Link>
            <Link href={`/organization/${organizationId}/sales`}
              className={`w-full h-10 px-2 rounded-xl flex gap-2 items-center
              hover:text-white hover:bg-green-400 justify-start text-neutral-600 font-semibold
                ${activeTab === 5 ? 'text-white bg-green-600' : ''}`}>
                {activeTab === 5 ? <SalesIconActive className='text-2xl'/> : <SalesIconInactive className='text-2xl'/>}
                {isSidebarOpen && (<span>Sales</span>)}
            </Link>
        </div>
    </aside>
  )
}

export default Sidebar