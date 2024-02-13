import React from 'react'
import { lastTenTransactions } from '@/assets/mock/inventory'
import Image from 'next/image'
import { Button } from '../ui/button'

function DashboardContent() {
    // test
  return (
    <div className='flex-1 h-full w-full'>
        <div className='sm:flex space-y-4 sm:space-y-0 flex-1 h-full gap-4 py-4'>
            <div className='flex-1 gap-4 space-y-4 overflow-auto custom-scrollbar'>
                <div className='flex-1 gap-4 grid grid-cols-1 md:grid-cols-3'>
                    <div className='bg-background w-full p-4 h-32 rounded-xl'>
                        <h1>Revenue overview</h1>
                    </div>
                    <div className='bg-background w-full p-4 h-32 rounded-xl'>
                        <h1>Sales overview</h1>
                    </div>
                    <div className='bg-background w-full p-4 h-32 rounded-xl'>
                        <h1>Purchases overview</h1>
                    </div>
                </div>
                <div className='bg-background w-full p-4 h-80 rounded-xl'></div>
            </div>
            <div className='w-full sm:max-w-[16.2rem] flex-1 flex flex-col gap-4'>
                <div className='w-full h-10 flex gap-2 justify-between items-center px-3 rounded-full bg-background'>
                    <Button
                        variant='noStyling'
                        className={`bg-secondary w-max rounded-full h-6 flex`}>
                        Daily
                    </Button>
                    <Button
                        variant='noStyling'
                        className={`bg-secondary w-max rounded-full h-6 flex`}>
                        Weekly
                    </Button>
                    <Button
                        variant='noStyling'
                        className={`bg-secondary w-max rounded-full h-6 flex`}>
                        Yearly
                    </Button>
                </div>
                <div className='bg-background w-full flex-1 space-y-2 p-4 rounded-xl'>
                    <h1 className='font-bold text-blue-600'>Recent transactions</h1>
                    <div className='space-y-3'>
                        {lastTenTransactions.map((transaction): any => (
                            <div key={transaction.id} className='flex pb-1 border-b gap-2 items-center'>
                                <Image alt='image' src={transaction.imageUrl} className='w-6 h-6 rounded-sm'/>
                                <div className='flex-1 overflow-hidden'>
                                    <p className='font-semi-bold text-sm p-0 m-0 text-foreground/70 font-semibold'>{transaction.productName}</p>
                                    <p className='text-accent-foreground/40 text-xs text-ellipsis overflow-hidden whitespace-nowrap'>{transaction.description}</p>
                                </div>
                                <p className='text-2xl font-bold text-green-800'>{transaction.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='bg-background w-full p-4 flex-1 rounded-xl'></div>
            </div>
        </div>
    </div>
  )
}

export default DashboardContent