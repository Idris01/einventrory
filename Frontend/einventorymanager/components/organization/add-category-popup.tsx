import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import AddCategoryForm from './add-category-form'


function AddCategoryPopUp() {
  return (
    <Dialog>
        <DialogTrigger>
            <Button>Add category</Button>
        </DialogTrigger>
        <DialogContent>
            <AddCategoryForm />
        </DialogContent>
    </Dialog>
  )
}

export default AddCategoryPopUp