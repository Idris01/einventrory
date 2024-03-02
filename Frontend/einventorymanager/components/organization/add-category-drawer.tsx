import React from 'react'
import { Drawer, DrawerContent, DrawerTrigger } from '../ui/drawer'
import { Button } from '../ui/button'
import AddCategoryForm from './add-category-form'


function AddCategoryDrawer() {
  return (
    <Drawer>
        <DrawerTrigger>
            <Button>Add category</Button>
        </DrawerTrigger>
        <DrawerContent>
            <AddCategoryForm />
        </DrawerContent>
    </Drawer>
  )
}

export default AddCategoryDrawer