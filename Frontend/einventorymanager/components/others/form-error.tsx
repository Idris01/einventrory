'use client'

import React from "react"
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'


interface formErrorProps {
    message?: string
}

export default function FormError ({
    message,
}: formErrorProps) {
    if (!message) return
    return (
        <div
            className="w-full flex space-x-2 bg-red-400 px-3 py-2 rounded-md
                items-center gap-x-2 text-sm text-red-600"
        >
            <ExclamationTriangleIcon className="text-xl"/>
            <p>{message}</p>
        </div>
    )
}