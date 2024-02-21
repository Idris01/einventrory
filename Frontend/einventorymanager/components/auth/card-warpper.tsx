'use client'

import React from "react"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
 } from "@/components/ui/card"
import Link from "next/link"


interface cardWrapperProps {
    children: React.ReactNode,
    title: string,
    description?: string,
    backButtonLabel?: string,
    backButtonHref?: string,
}

export default function CardWrapper ({
    children,
    title,
    description,
    backButtonLabel,
    backButtonHref,
}: cardWrapperProps) {
    return (
        <Card className="w-full h-full px-4">
            <CardHeader>
                <h1 className="font-extrabold text-4xl">{title}</h1>
                <p className="text-sm text-muted-foreground">{description}</p>
            </CardHeader>
            <CardContent className="px-4">
                {children}
            </CardContent>
            <CardFooter>
                <Link href={backButtonHref || ''}>{backButtonLabel}</Link>
            </CardFooter>
        </Card>
    )
}