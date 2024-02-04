'use client'

import { LoginSchema } from '@/schemas'
import * as z from 'zod'

export async function loginAction(values: z.infer<typeof LoginSchema>) {
    const validatedFields = LoginSchema.safeParse(values)
    if (!validatedFields.success) return { error: 'Enter valid inputs'}
    console.log(validatedFields.data)
}