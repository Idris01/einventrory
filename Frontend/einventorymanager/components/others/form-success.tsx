'use client'

import React from "react"
import { CheckCircledIcon } from '@radix-ui/react-icons'


interface formSuccessProps {
    message?: string
}

export default function FormSuccess ({
    message,
}: formSuccessProps) {
    if (!message) return
    return (
        <div
            className="w-full flex space-x-2 bg-emerald-500 px-3 py-2 rounded-md
                items-center gap-x-2 text-sm text-white"
        >
            <CheckCircledIcon className="text-xl"/>
            <p>{message}</p>
        </div>
    )
}