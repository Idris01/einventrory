'use client'

import { SignupSchema } from '@/schemas'
import * as z from 'zod'

export async function signupAction(values: z.infer<typeof SignupSchema>) {
    const validatedFields = SignupSchema.safeParse(values)
    if (!validatedFields.success) return { error: 'Enter valid inputs'}
    console.log(validatedFields.data)
}