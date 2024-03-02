import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import CreateNewProductForm from './create-new-product-form'


function CreateNewProductPopup() {
  return (
    <Dialog>
        <DialogTrigger>
            <Button>New product</Button>
        </DialogTrigger>
        <DialogContent>
            <CreateNewProductForm />
        </DialogContent>
    </Dialog>
  )
}

export default CreateNewProductPopup