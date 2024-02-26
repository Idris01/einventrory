'use client'


import CreateOrgaizationDrawer from '@/components/organization/create-organization-drawer'
import CreateOrgaizationPopup from '@/components/organization/create-organization-popup'
import React, { useEffect, useState, useTransition } from 'react'
import Navbar from '../../../components/others/navbar'
import SpaceHelper4 from '@/components/others/space-helper-4'
import { Organization } from '@/interface'
import axios from 'axios'
import { Accordion } from '@radix-ui/react-accordion'
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Image from 'next/image'

// Delete starts ----------------------
import macdonalds from '@/assets/images/macdonals.png'
import papaye from '@/assets/images/papaye.jpg'

const orgsMock: Organization[] = [
  {
    id: '2871bgw28282922i22',
    name: 'Mac Donalds',
    country: 'Ghana',
    address: 'Shop No 43, Oxford street',
    created_at: 'Monday, April 13, 2022',
    creator_id: '342455',
    time_zone: 'GMT+1',
    mobile: '552228888',
    description: 'Ive got my camera on conversation\
    just have a conversation this is going on your YouTube channel and\
    I don\'t want it to go on your YouTube channel well don\'t \
    talk me then Carrie listen listen she\' \
    krie we are in Britain we\'re in a public\
    space we got fre countries first the matter is communist',
    image: 'https://images.pexels.com/photos/18262756/pexels-photo-18262756/free-photo-of-smiling-woman-carrying-basket-on-back-with-flowers.jpeg?auto-compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '2871bgw2828238302i22',
    name: 'Papaye',
    country: 'Nigeria',
    address: 'Market Avenue, Lagos',
    created_at: 'Thursday, July 12, 2021',
    creator_id: '342455',
    time_zone: 'GMT+1',
    mobile: '248882129',
    description: 'Brendan continues to stick up for\
    himself and this causes her to start\
    getting kind of nervous and annoyed at the same\
    time then br starts to completely \
    dismantle her argument and show her that\
    she\'s being unreasonable and not doing things',
    image: 'https://images.pexels.com/photos/18262756/pexels-photo-18262756/free-photo-of-smiling-woman-carrying-basket-on-back-with-flowers.jpeg?auto-compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
]


// Delete ends ----------------------


function OrganizationPages() {
  const [isPending, startTransition] = useTransition()
  const [organizations, setOrganizations] = useState<Organization[]>(orgsMock)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  // FOR ACTUAL ORGS
  // useEffect(() => {
  //   const getAllOrganizations = () => {
  //     startTransition(async () => {
  //       await axios.get('https://test-goinventorymanager.koyeb.app/organizations')
  //       .then((res) => {
  //           if (res.status === 200) {
  //             setOrganizations(res.data.organizations)
  //           }
  //           else {
  //             setErrorMessage(res.statusText)
  //           }
  //       })
  //       .catch(() => setErrorMessage('Somethin went wrong. Please reload page'))
  //     })
  //   }
  // }, [setOrganizations])

  return (
    <div className='w-full h-screen flex flex-col'>
      <div className='fixed top-0 left-0 h-[70px] bg-slate-400 md:h-14 w-full'>
        <Navbar />
      </div>
      <div className='flex flex-1 flex-col px-4 pt-[76px] md:pt-14'>
        <SpaceHelper4 />
        <div className='w-full hidden md:flex'>
              <CreateOrgaizationPopup />
          </div>
          <div className='w-full md:hidden'>
              <CreateOrgaizationDrawer />
        </div>
        <div className='w-full flex-grow'>
          <div className='w-full h-full grid grid-cols-1 md:grid-cols-2'>
            <Accordion type='multiple' className='w-full'>
              <div className='w-full pt-8'>
                <p className='text-3xl font-extrabold'>Your organizations</p>
              </div>
              {organizations.map((org) => (
                <AccordionItem value={org.id} key={org.id}>
                    <AccordionTrigger>
                        <div className=''>
                            <p className='text-left font-extrabold'>{org.name} | {org.country}</p>
                            <p className='text-xs text-muted-foreground truncate'>{org.address} | {org.mobile}</p>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className='w-full'>
                        {org.image && (
                          
                          <img alt='text' src={org.image} className='rounded-xl h-60 w-full'/>
                        )}
                        <div className='py-4'>
                          <span className='font-bold text-sx text-muted-foreground'>Description</span>
                          <p className='text-muted-foreground text-xs overflow-hidden line-clamp-2'>
                            {org.description}</p>
                        </div>
                      </div>
                    </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <SpaceHelper4 />
      </div>
      
    </div>
  )
}

export default OrganizationPages