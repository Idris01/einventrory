'use client'

import { AddCategoryFormSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import FormSuccess from '../others/form-success'
import FormError from '../others/form-error'


function AddCategoryForm() {
    const [isPending, startTransition] = useTransition()
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    const form = useForm<z.infer<typeof AddCategoryFormSchema>>({
        resolver: zodResolver(AddCategoryFormSchema)
    })

    const onSubmit = (values: z.infer<typeof AddCategoryFormSchema>)  => {

    }
    
  return (
    <div className='w-full text-center space-y-6'>
        <div>
          <h2 className='text-2xl'>Add Categories</h2>
          <p className='text-sm text-muted-foreground'>Enter category name and description and continue.</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='w-full space-y-4'>
                <div className='w-full px-4 rounded-md border border-input flex items-center'>
                  <div className='border-r min-w-max border-input pr-4'>
                    <p className='text-muted-foreground'>Name</p>
                  </div>
                  <FormField
                  control={form.control}
                  name='name'
                  render={({ field}) => (
                      <FormItem>
                          <FormControl>
                              <Input
                              className='shadow-none border-none w-full'
                              {...field}
                              disabled={isPending}
                              placeholder='Beverages'
                              />
                          </FormControl>
                          <FormMessage />
                      </FormItem>
                  )}
                  />
                </div>
                <div className='w-full rounded-md border border-input flex '>
                  <FormField
                  control={form.control}
                  name='description'
                  render={({ field}) => (
                      <FormItem>
                          <FormControl>
                              <Textarea
                              className='shadow-none border-none'
                              {...field}
                              disabled={isPending}
                              placeholder='Enter Description'
                              />
                          </FormControl>
                          <FormMessage />
                      </FormItem>
                  )}
                  />
                </div>
                <FormSuccess message={successMessage}/>
                <FormError message={errorMessage}/>
                <Button type='submit' className='w-full'>Submit</Button>
            </div>
          </form>
        </Form>
    </div>
  )
}

export default AddCategoryForm