'use client'

import Logo from '@/components/others/logo'
import SpaceHelper4 from '@/components/others/space-helper-4'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { CategoryInterface, Item } from '@/interface'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useEffect, useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { FiShoppingCart as CartIcon } from 'react-icons/fi'
import { FiSearch as SearchIcon } from 'react-icons/fi'
import * as z from 'zod'
import { SearchProductFormSchema } from '@/schemas'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { FiFilter as FilterIcon,
  FiPlus as IncreaseItemQuantityIcon,
  FiMinus as ReduceItemQuantityIcon,
  FiDelete as DeleteFromCartIcon
 } from 'react-icons/fi'
import papaye from '@/assets/images/papaye.jpg'
import AddNewProductPopUp from '@/components/organization/add-new-product-popup'
import { useOrganization } from '@/contexts/organization-context'


const categoryMock: CategoryInterface[] = [
  {
    id: '27910128191721',
    name: 'Meat',
    imageUrl: '',
    description: 'This category is for meat',
    organization_id: '928202029',
  },
  {
    id: '2791083893128191721',
    name: 'Fishes',
    imageUrl: '',
    description: 'This category is for fishes',
    organization_id: '928202029',
  },
  {
    id: '272521910128191721',
    name: 'Beverages',
    imageUrl: '',
    description: 'This category is for beverages',
    organization_id: '928202029',
  },
  {
    id: '27910122920208191721',
    name: 'Cereal',
    imageUrl: '',
    description: 'This category is for cereals',
    organization_id: '928202029',
  },
  {
    id: '2791012819wuuw1721',
    name: 'Meat',
    imageUrl: '',
    description: 'This category is for meat',
    organization_id: '928202029',
  },
  {
    id: '2791083893128192021721',
    name: 'Fishes',
    imageUrl: '',
    description: 'This category is for fishes',
    organization_id: '928202029',
  },
  {
    id: '272521910128191202721',
    name: 'Beverages',
    imageUrl: '',
    description: 'This category is for beverages',
    organization_id: '928202029',
  },
  {
    id: '2791012292020811019091721',
    name: 'Cereal',
    imageUrl: '',
    description: 'This category is for cereals',
    organization_id: '928202029',
  }
]

const itemsMock: Item[] = [
  {
    id: '1',
    name: 'Ideal milk',
    image: '',
    cost_price: 14.5,
    sale_price: 23.2,
    quantity: 240,
    discount: 0.5,
    alert_level: 50,
    obsolete: false,
    category_id: 'a',
    organization_id: '1'
  },
  {
    id: '2',
    name: 'Carnasian Milk',
    image: '',
    cost_price: 11.23,
    sale_price: 17.5,
    quantity: 320,
    discount: 0.5,
    alert_level: 50,
    obsolete: false,
    category_id: 'a',
    organization_id: '1'
  },
  {
    id: '3',
    name: 'Moet',
    image: '',
    cost_price: 700,
    sale_price: 1025,
    quantity: 140,
    discount: 0.5,
    alert_level: 50,
    obsolete: false,
    category_id: 'c',
    organization_id: '1'
  },
  {
    id: '4',
    name: 'Ideal milk',
    image: '',
    cost_price: 14.5,
    sale_price: 23.2,
    quantity: 240,
    discount: 0.5,
    alert_level: 50,
    obsolete: false,
    category_id: 'a',
    organization_id: '1'
  },
  {
    id: '5',
    name: 'Carnasian Milk',
    image: '',
    cost_price: 11.23,
    sale_price: 17.5,
    quantity: 320,
    discount: 0.5,
    alert_level: 50,
    obsolete: false,
    category_id: 'a',
    organization_id: '1'
  },
  {
    id: '6',
    name: 'Moet',
    image: '',
    cost_price: 700,
    sale_price: 1025,
    quantity: 140,
    discount: 0.5,
    alert_level: 50,
    obsolete: false,
    category_id: 'c',
    organization_id: '1'
  },
  {
    id: '7',
    name: 'Ideal milk',
    image: '',
    cost_price: 14.5,
    sale_price: 23.2,
    quantity: 240,
    discount: 0.5,
    alert_level: 50,
    obsolete: false,
    category_id: 'a',
    organization_id: '1'
  },
  {
    id: '8',
    name: 'Carnasian Milk',
    image: '',
    cost_price: 11.23,
    sale_price: 17.5,
    quantity: 320,
    discount: 0.5,
    alert_level: 50,
    obsolete: false,
    category_id: 'a',
    organization_id: '1'
  },
  {
    id: '9',
    name: 'Moet',
    image: '',
    cost_price: 700,
    sale_price: 1025,
    quantity: 140,
    discount: 0.5,
    alert_level: 50,
    obsolete: false,
    category_id: 'c',
    organization_id: '1'
  },
  {
    id: '10',
    name: 'Ideal milk',
    image: '',
    cost_price: 14.5,
    sale_price: 23.2,
    quantity: 240,
    discount: 0.5,
    alert_level: 50,
    obsolete: false,
    category_id: 'a',
    organization_id: '1'
  },
  {
    id: '11',
    name: 'Carnasian Milk',
    image: '',
    cost_price: 11.23,
    sale_price: 17.5,
    quantity: 320,
    discount: 0.5,
    alert_level: 50,
    obsolete: false,
    category_id: 'a',
    organization_id: '1'
  },
  {
    id: '12',
    name: 'Moet',
    image: '',
    cost_price: 700,
    sale_price: 1025,
    quantity: 140,
    discount: 0.5,
    alert_level: 50,
    obsolete: false,
    category_id: 'c',
    organization_id: '1'
  },
  {
    id: '13',
    name: 'Ideal milk',
    image: '',
    cost_price: 14.5,
    sale_price: 23.2,
    quantity: 240,
    discount: 0.5,
    alert_level: 50,
    obsolete: false,
    category_id: 'a',
    organization_id: '1'
  },
  {
    id: '14',
    name: 'Carnasian Milk',
    image: '',
    cost_price: 11.23,
    sale_price: 17.5,
    quantity: 320,
    discount: 0.5,
    alert_level: 50,
    obsolete: false,
    category_id: 'a',
    organization_id: '1'
  },
  {
    id: '15',
    name: 'Moet',
    image: '',
    cost_price: 700,
    sale_price: 1025,
    quantity: 140,
    discount: 0.5,
    alert_level: 50,
    obsolete: false,
    category_id: 'c',
    organization_id: '1'
  },
]


function PosPage() {
  const [isPending, startTransition] = useTransition()
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const { organization } = useOrganization()

  const [categories, setCatgeories] = useState<CategoryInterface[] | null>(categoryMock)
  const [activeCategory, setActiveCategory] = useState<CategoryInterface | null>(null)
  const [items, setItems] = useState<Item[] | null>(itemsMock)
  const [cartItems, setCartItems] = useState<Item[]>([])
  const [totalAmount, setTotalAmount] = useState(0)
  const [totalQuantity, setTotalQuantity] = useState(0)

  const searchForm = useForm<z.infer<typeof SearchProductFormSchema>>({
    resolver: zodResolver(SearchProductFormSchema),
    defaultValues: {
      searchTerm: ''
    }
  })

  const onSearchSubmit = (values: z.infer<typeof SearchProductFormSchema>) => {

  }
  
  const addToCart = (itemId: string) => {
    const item = items?.find((itm) => itm.id === itemId)
    if (item && !cartItems.some(itm => itm.id === itemId)) {
      setCartItems(currentCart => [...currentCart, {...item, quantity: 1}])
    } else if (item) {
      setCartItems(currentCart =>
        currentCart.map(cartItem =>
          cartItem.id === itemId
          ? {...cartItem, quantity: cartItem.quantity + 1}
          : cartItem
        )
      )
    }
  }

  const reduceItemQuantity = (itemId: string) => {
    setCartItems((currentCart: Item[]) => 
      currentCart.reduce<Item[]>((acc, item) => {
        if (item.id === itemId) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1})
          }
        } else {
          acc.push(item)
        }
        return acc
      }, [])
    )
  }

  const removeItemFromCart = (itemId: string) => {
    setCartItems((currentCart: Item[]) => currentCart.filter(item => item.id !== itemId))
  }

  const isItemInCart = (itemId: string) => {
    return cartItems.some((item) => item.id === itemId)
  }

  useEffect(() => {
    const newTotalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0)
    const newTotalAmount = cartItems.reduce((total, item) => total + item.quantity * item.sale_price, 0)

    setTotalAmount(newTotalAmount)
    setTotalQuantity(newTotalQuantity)
  }, [cartItems])


  const handleSearch = (values: z.infer<typeof SearchProductFormSchema>) => {

  }

  const handleCategorization = (catId: string) => {

  }

  const handleCheckout = () => {

  }

  return (
    <div className='w-full h-full flex flex-grow space-x-4 pt-4 md:pt-0 pb-4'>
        <div className='flex-grow flex gap-6 flex-col custom-scrollbar overflow-auto pt-4'>
          <div className='flex flex-col md:flex-row gap-4 justify-between items-center md:gap-2'>
            <div className='flex gap-4 flex-grow'>
              <div className='flex-grow h-full flex items-center'>
                <AddNewProductPopUp /> {organization?.name}
              </div>
              <div className='w-full md:w-60 px-2 bg-background rounded-xl items-center flex'>
                <SearchIcon className='text-muted-foreground'/>
                <Form {...searchForm}>
                  <form onSubmit={searchForm.handleSubmit(onSearchSubmit)}>
                    <FormField
                      control={searchForm.control}
                      name='searchTerm'
                      render={({ field}) => (
                          <FormItem>
                              <FormControl>
                                  <Input
                                  {...field}
                                  disabled={isPending}
                                  placeholder='Enter product name'
                                  className='border-none pr-0 mr-0 flex-1 shadow-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-none'
                                  />
                              </FormControl>
                              <FormMessage/>
                          </FormItem>
                      )}
                    />
                  </form>
                </Form>
              </div>
              <div className='w-full h-10 md:w-60 px-2 bg-background rounded-xl items-center flex focus:border-none focus:ring-0'>
                <Select>
                  <SelectTrigger className='border-none shadow-none px-0'>
                    <SelectValue placeholder='Select a category'/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='null'>
                      Select a category
                    </SelectItem>
                    {categories?.map((cat) => (
                      <SelectItem value={cat.id} key={cat.id} className='border-none h-10'>
                        <div className='flex gap-2'>
                          <CartIcon />
                          <p className='text-xs '>{cat.name}</p>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div className='flex-grow flex flex-col gap-4 custom-scrollbar'>
              <div className='flex gap-2'>
                <h2 className='font-bold text-xl'>Choose</h2>
                <h2 className='font-light text-xl'>Product</h2>
              </div>
              <div className='flex-grow grid grid-cols-2 custom-scrollbar gap-4 md:grid-cols-6 overflow-auto'>
                {items?.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => addToCart(item.id)}
                    className={`rounded-xl cursor-pointer flex flex-col
                    justify-center items-center space-y-3 h-36 w-full shadow-sm ${isItemInCart(item.id) ? 'bg-green-300' : 'bg-background'}`}>
                    <img className='h-16 aspect-square rounded-full' alt='item image' src={item.image || papaye.src}/>
                    <div className={`text-center text-foreground/50 ${isItemInCart(item.id) ? 'text-white' : ''}`}>
                      <p className=' text-sm font-bold'>$ {item.sale_price}</p>
                      <p className='text-xs truncate'>{item.name}</p>
                    </div>
                  </div>
                ))}
              </div>
          </div>
        </div>
        <div className='max-w-[320px] min-w-[320px] hidden md:flex flex-col gap-4 flex-grow bg-background p-4 mt-4 rounded-xl'>
          <div className='flex-grow flex flex-col'>
            <div className='h-14 flex justify-between items-center'>
              <p className='text-2xl font-bold text-foreground/70'>Cart</p>
              <Button className='bg-background p-3 rounded-xl'>
                <CartIcon className='text-foreground/50'/>
              </Button>
            </div>
            <div className='flex flex-grow'>
              {cartItems?.length === 0 && (
                  <div className='flex-grow text-muted-foreground flex flex-col gap-3 justify-center items-center'>
                    <CartIcon />
                    <h3>Cart is empty</h3>
                  </div>
              )}
              {cartItems?.length > 0 && (
                <div className='w-full space-y-3 flex-grow overflow-auto'>
                  {cartItems?.map((item) => (
                    <div key={item.id} className='flex h-10 gap-3 w-full items-center'>
                      <img alt='image' src={papaye.src} className='h-full aspect-square rounded-xl'/>
                      <div className='flex-grow'>
                        <p className='text-muted-foreground font-semibold m-0 p-0 text-sm'>{item.name}</p>
                        <div className='flex justify-end items-center'>
                          <Button variant='outline' className='h-4 text-xs shadow-none border-none justify-start w-min' onClick={() => removeItemFromCart(item.id)}><DeleteFromCartIcon /></Button>
                          <Button variant='outline' className='h-4 text-xs shadow-none border-none justify-start w-min' onClick={() => reduceItemQuantity(item.id)}><ReduceItemQuantityIcon /></Button>
                          <Button variant='outline' className='h-4 text-xs shadow-none border-none justify-start w-min' onClick={() => addToCart(item.id)}><IncreaseItemQuantityIcon /></Button>
                        </div>
                      </div>
                      <div className='w-20'>
                        <p className='text-muted-foreground font-semibold m-0 p-0 text-sm'>{item.quantity * item.sale_price}</p>
                        <p className='text-muted-foreground text-xs m-0 p-0'>{item.sale_price} x {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className='h-14 w-full border-t border-input'>
              <div className='flex justify-between items-center'>
                <span className='text-xs text-muted-foreground'>Qnt</span>
                <span className='text-sm text-muted-foreground font-semibold'>{totalQuantity}</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-xs text-muted-foreground'>Amt</span>
                <span className='text-sm text-muted-foreground font-semibold'>{totalAmount}</span>
              </div>
            </div>
          </div>
          <Button className='bg-green-600 text-md font-bold w-full'>Go</Button>
        </div>
    </div>
  )
}

export default PosPage