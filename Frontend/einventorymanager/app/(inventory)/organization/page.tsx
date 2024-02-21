import CreateOrgaizationDrawer from '@/components/organization/create-organization-drawer'
import CreateOrgaizationPopup from '@/components/organization/create-organization-popup'
import React from 'react'


function OrganizationPage() {
  return (
    <div className='w-full'>
        <div className='w-full hidden md:flex'>
            <CreateOrgaizationPopup />
        </div>
        <div className='w-full md:hidden'>
            <CreateOrgaizationDrawer />
        </div>
    </div>
  )
}

export default OrganizationPage