import * as z from 'zod'


export const LoginSchema = z.object({
    email: z.string().email({
        message: 'Enter a valid email'
    }),
    password: z.string().min(8, {
        message: 'Password is required'
    }),
    code: z.optional(z.string())
})

export const SignupSchema = z.object({
    email: z.string().email({
        message: 'Enter a valid email'
    }),
    password: z.string().min(8, {
        message: 'Minimum 8 characters is required'
    }),
    name: z.string().min(1, {
        message: 'Name is required'
    })
})


export const ItemsTableSchema = z.object({
    id: z.string(),
    name: z.string().min(8, {
        message: 'Minimum 8 characters is required'
    }),
    description: z.string().min(1, {
        message: 'Item description is required'
    }),
    price: z.number().min(0, {
        message: 'Price must be bigger than 0'
    }),
    quantity: z.number()
})
