'use client'

import { Button } from "@/components/ui/button";
import MenuDrawer from "@/components/others/menu-drawer";
import Link from "next/link";
import { useState } from "react";


export default function Home() {
  const [showMenu, setShowMenu] = useState(false)

  const onMenuClick = () => {
    setShowMenu(!showMenu)
  }

  return (
    <main className="relative min-h-screen">
      <header className="sticky top-0 z-10 text-center px-4 mb-12 flex flex-row h-16 w-full justify-between items-center">
        <div className="flex-grow text-center">
          <h1 className="text-xl font-semibold text-neutral-600">
            <span className="text-2xl font-extrabold text-green-600">e</span> Inventory Manager
          </h1>
        </div>
        <div className="block md:hidden">
          <MenuDrawer />
        </div>
        <div className="hidden md:flex md:items-center md:justify-end md:gap-8 md:pr-4">
          <Link href='/'>
            <h1 className=" text-gray-800 hover:text-green-600 transition-colors duration-300">Home</h1>
          </Link>
          <Link href='/about-us'>
            <h1 className="text-gray-800 hover:text-green-600 transition-colors duration-300">About us</h1>
          </Link>
          <Link href='/our-story'>
            <h1 className=" text-gray-800 hover:text-green-600 transition-colors duration-300">Our story</h1>
          </Link>
          <Link href='/contact-us'>
            <h1 className=" text-gray-800 hover:text-green-600 transition-colors duration-300">Contact us</h1>
          </Link>
        </div>
      </header>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        
      </div>
      <footer className="text-center mt-12">
      </footer>
    </main>
  );
}
