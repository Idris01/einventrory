'use client'

import React, { createContext, useContext, useEffect, useState } from "react"
import Cookies from 'js-cookie'

interface CookieContextProps {
    jwtToken: string | null,
    updateJwtToken: (newToken: string) => void
    clearJwtToken: () => void
}

const DefaulContextValues =  {
    jwtToken: '',
    updateJwtToken: () => {},
    clearJwtToken: () => {}
}

const CookieContext = createContext<CookieContextProps>(DefaulContextValues)

export function useCookie () {
    const context = useContext(CookieContext)
    if (!context) {
        console.error('useCookie must be use within a provider')
        return
    }

    return context
}

interface CookieProviderProps {
    children: React.ReactNode
}

export function CookieProvider ({ children}: CookieProviderProps) {
    const [jwtToken, setJwtToken] = useState<string | null>(null)

    useEffect(() => {
        const token = Cookies.get('jwt')
        setJwtToken(token || null)
    }, [])

    const updateJwtToken = (newToken: string) => {
        setJwtToken(newToken)
        Cookies.set('jwt', newToken)
    }

    const clearJwtToken = () => {
        setJwtToken(null)
        Cookies.remove('jwt')
    }

    return (
        <CookieContext.Provider value={{ jwtToken, updateJwtToken, clearJwtToken}}>
            {children}
        </CookieContext.Provider>
    )
}