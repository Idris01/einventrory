'use client'


import {
    Form,
    FormItem,
    FormControl,
    FormField,
    FormMessage,
} from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { SignupSchema } from '@/schemas'
import { Button } from '../ui/button'
import { useState, useTransition } from 'react'
import FormError from '@/components/others/form-error'
import FormSuccess from '@/components/others/form-success'
import CardWrapper from './card-warpper'
import axios from 'axios'


export default function SignupForm () {
    const [isPending, startTransition] = useTransition()
    const [resErrorMessage, setResErrorMessage] = useState('')
    const [resSuccessMessage, setResSuccessMessage] = useState('')

    const form = useForm<z.infer<typeof SignupSchema>>({
        resolver: zodResolver(SignupSchema),
    })

    const onSubmit = (values: z.infer<typeof SignupSchema>) => {
        setResErrorMessage('')
        setResSuccessMessage('')

        const formData = new FormData();
        formData.append('email', values.email);
        formData.append('password', values.password);
        formData.append('firstName', values.firstName);
        formData.append('lastName', values.lastName);

        startTransition(async () => {
            try {
                const res = await axios.post('https://test-goinventorymanager.koyeb.app/api/v1/signup', formData)
                if(res.status === 200) {
                    localStorage.setItem('jwt', res.data.jwt)
                    setResSuccessMessage(res.data.message)
                } else {
                    setResErrorMessage(res.data.message)
                }
            } catch (error: any) {
                setResErrorMessage(error.message.error)
            }
        })
    }

    return (
        <CardWrapper
            title='Sign up'
            description='Enter credentials below and click the sign up button.'
            backButtonHref='/login'
            backButtonLabel='Already have an account? Login'
        >
            <Form {...form}>
                <form 
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-6'
                >
                    <div className='space-y-4'>
                        <FormField
                            control={form.control}
                            name='email'
                            render={({ field}) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                         {...field}
                                         disabled={isPending}
                                         placeholder='johndoe@example.com'
                                         type='email'
                                        />
                                    </FormControl>
                                    <FormMessage className=''/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='password'
                            render={({ field}) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                         {...field}
                                         disabled={isPending}
                                         placeholder='******'
                                         type='password'
                                        />
                                    </FormControl>
                                    <FormMessage className=''/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='firstName'
                            render={({ field}) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                         {...field}
                                         disabled={isPending}
                                         placeholder='john'
                                        />
                                    </FormControl>
                                    <FormMessage className=''/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='lastName'
                            render={({ field}) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                         {...field}
                                         disabled={isPending}
                                         placeholder='john'
                                        />
                                    </FormControl>
                                    <FormMessage className=''/>
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormError message={resErrorMessage}/>
                    <FormSuccess message={resSuccessMessage}/>
                    <Button
                        disabled={isPending}
                        className='w-full'
                        type='submit'
                    >
                        Register
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}