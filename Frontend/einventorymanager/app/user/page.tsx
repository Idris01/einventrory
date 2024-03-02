'use client'

import { useCountries } from '@/contexts/countries-context';
import { useUser } from '@/contexts/user-context'
import React from 'react'

function UserPage() {
  const { user } = useUser()
  const { countries } = useCountries();
  return (
    <div>
      UserPage {user?.email}
      {countries[0].country}
    </div>
  )
}

export default UserPage