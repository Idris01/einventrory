import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import AddNewProductForm from './add-new-product-form'
import { FiPlusCircle as AddProductIcon } from 'react-icons/fi'


function AddNewProductPopUp() {
  return (
    <Dialog>
        <DialogTrigger>
            <Button className='bg-background text-primary/50'><AddProductIcon /></Button>
        </DialogTrigger>
        <DialogContent>
            <AddNewProductForm />
        </DialogContent>
    </Dialog>
  )
}

export default AddNewProductPopUp