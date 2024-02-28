'use client'

import { AddProductFormSchema, SearchProductFormSchema } from '@/schemas'
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Item } from '@/interface'
import Cookies from 'js-cookie'
import { useOrganization } from '@/contexts/organization-context'
import { FiSearch as SearchIcon } from 'react-icons/fi'
import { CircleLoader } from 'react-spinners'


function AddNewProductForm() {
  const [isPending, startTransition] = useTransition()
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const { organization } = useOrganization()
  const organizationId = organization?.id

  const form = useForm<z.infer<typeof AddProductFormSchema>>({
      resolver: zodResolver(AddProductFormSchema)
  })

  const onSubmit = (values: z.infer<typeof AddProductFormSchema>)  => {
    console.log({values})
  }

  const [productsSearchResults, setProductsSearchResults] = useState<Item [] | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchIspending, startSearchTransition] = useTransition()

  const handleSearchProducts = () => {
    setErrorMessage('')
    setSuccessMessage('')
    console.log({searchTerm})
    const formData = new FormData();
    formData.append('keyword', searchTerm);
    startTransition(async () => {
      try {
        const token = Cookies.get('jwt')
        const response = await fetch(`https://test-goinventorymanager.koyeb.app/api/v1/organizations/${organizationId}/products/search`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          },
        })

        if (response.status === 200) {
          const products: Item[] = await response.json()
          setProductsSearchResults(products)
        } else {
          const data = await response.json()
          setErrorMessage(data.error)
          setProductsSearchResults(null)
        }
      } catch (error) {
        setErrorMessage('')
        setProductsSearchResults(null)
      }
    })
  }
    
  return (
    <div className='w-full text-center space-y-6'>
        <div>
          <h2 className='text-2xl'>Add product</h2>
          <p className='text-sm text-muted-foreground'>Choose product and enter quantity</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='w-full space-y-4'>
                <div className='w-full px-4 rounded-md border border-input flex items-center'>
                  <div className='border-r min-w-max border-input pr-4'>
                    <p className='text-muted-foreground'>Product</p>
                  </div>
                  <FormField
                    control={form.control}
                    name='id'
                    render={({ field }) => (
                        <FormItem>
                            <Select
                                onValueChange={(value) => {
                                    field.onChange(value);
                                }}
                                defaultValue={field.value}>
                                <FormControl className='w-full'>
                                    <SelectTrigger className='border-none border-r pr-0 mr-0 text-right w-full flex-grow focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-none'>
                                        <SelectValue placeholder='Select product' className='border-none pr-0 mr-0 text-right w-full flex-grow focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-none'/>
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <div className='w-full pb-3'>
                                    <div className='py-3 text-center'>
                                      <p className='font-bold text-primary/80'>Search products</p>
                                    </div>
                                      <div  className='flex w-full gap-4 items-center'>
                                        <Input
                                        className='shadow-none border w-full'
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        disabled={searchIspending}
                                        placeholder='Olive oil'
                                        />
                                        <Button
                                          onClick={handleSearchProducts}
                                          disabled={searchIspending}
                                          className='bg-background rounded-md text-primary/50'>
                                            <SearchIcon />
                                        </Button>
                                      </div>
                                    {searchIspending && (
                                      <CircleLoader />
                                    )}
                                  </div>
                                  {productsSearchResults?.map((pro) => (
                                      <SelectItem key={pro.id} value={pro.id}>
                                          <div>
                                            <p>{pro.name}</p>
                                            <p>{pro.sale_price} | {pro.quantity}</p>
                                          </div>
                                      </SelectItem>
                                  ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                  />
                </div>
                <div className='w-full px-4 rounded-md border border-input flex items-center'>
                  <div className='border-r min-w-max border-input pr-4'>
                    <p className='text-muted-foreground'>Quantity</p>
                  </div>
                  <FormField
                  control={form.control}
                  name='quantity'
                  render={({ field}) => (
                      <FormItem>
                          <FormControl>
                              <Input
                              className='shadow-none border-none w-full'
                              {...field}
                              disabled={isPending}
                              placeholder='57'
                              type='number'
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

export default AddNewProductForm