'use client'

import IframeEmbed from "@/components/others/ifram-embed";
import MenuDrawer from "@/components/others/menu-drawer";
import Link from "next/link";
import { useState } from "react";
import {
  IoLogoInstagram as InstramIcon,
  IoLogoTwitter as TwitterIcon,
  IoLogoFacebook as FacebookIcon,
  IoLogoYoutube as YouTubeIcon
 } from "react-icons/io";
import { GoCheckCircle } from 'react-icons/go'
import { PiNotepad } from 'react-icons/pi'
import { TiShoppingCart } from 'react-icons/Ti'
import { FaRegStar as StarIcon } from "react-icons/fa6";
import heroImage from '@/assets/images/heroImage.png'
import Image from "next/image";


export default function Home() {
  const [showMenu, setShowMenu] = useState(false)

  const onMenuClick = () => {
    setShowMenu(!showMenu)
  }

  return (
    <main className="relative min-h-screen">
      <header className="sticky top-0 z-10 bg-background text-center md:text-start border-b px-4 mb-12 flex flex-row h-16 w-full justify-between items-center">
        <div className="flex-grow">
          <h1 className="text-xl font-semibold text-neutral-600">
            <span className="text-2xl font-extrabold text-green-600">go</span> Inventory Manager
          </h1>
        </div>
        <div className="block md:hidden">
          <MenuDrawer />
        </div>
        <div className="hidden md:flex md:items-center md:justify-end md:gap-8">
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
          <Link href='/login' className="bg-green-600 hover:bg-green-400 rounded-2xl px-8 py-1.5">
            <h1 className=" text-white font-bold hover:text-green-600 transition-colors duration-300">Login</h1>
          </Link>
        </div>
      </header>
      <div className="space-y-20">
        <div className="md:flex justify-center space-y-10 md:space-x-12 items-center pl-4 md:pl-16">
          <div className="md:w-4/5 md:pl-12 space-y-3">
            <h1 className='font-bold text-7xl text-green-600'>Ways to manage your inventory?</h1>
            <p className="text-xl font-medium text-neutral-600">
              Forget the old ways.
              You can do it walking. You can do it travelling.
              You can do it on go
            </p>
            <Link href='/sign-up' className="text-white block w-max font-medium px-6 py-2 rounded-full bg-green-600">Get started</Link>
          </div>
          <div className="md:w-3/5 md:pr-0 pr-4">
              <Image src={heroImage} alt='hero image' className='md:w-3/5'/>
          </div>
        </div>
        <div className="md:flex md:space-x-12 space-y-10 md:space-y-0 px-4 md:justify-center">
          <IframeEmbed embedId="BNmyYzosV-E?si=SApQmVW-OSbgWbLc"/>
          <div className="space-y-4 p-0">
            <h2 className='font-bold text-4xl m-0 p-0'>Up your work game, it’s easy</h2>
            <div className="space-y-3">
              <div className="flex gap-6">
                <GoCheckCircle className='text-xl'/>
                <div>
                  <h3 className="font-bold">No hassle</h3>
                  <p>Sign up as easy as clicking a button</p>
                </div>
              </div>
              <div className="flex gap-6">
                <TiShoppingCart className='text-xl'/>
                <div>
                  <h3 className="font-bold">Manage your inventory</h3>
                  <p>Know exactly how your inventory is moving.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <PiNotepad className='text-xl'/>
                <div>
                  <h3 className="font-bold">Reports</h3>
                  <p>Generate reports like a magician.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 pt-4">
                <Link href='/login' className="bg-green-600 hover:bg-green-400 rounded-full w-full text-center px-8 py-1.5">
                  <h1 className=" text-white font-bold hover:text-green-600 transition-colors duration-300">Login to your account</h1>
                </Link>
                <Link href='/login' className="border-2 border-green-600 hover:border-green-400 w-full text-center rounded-full px-8 py-1.5">
                  <h1 className="text-green-600 font-bold hover:text-green-600 transition-colors duration-300">Sign up for free</h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2 px-4 md:px-20">
          <h1 className="font-bold text-4xl">Super rich features and functionalities</h1>
          <p className='font-medium text-neutral-600'>A look at some of our features for a compreemsize application.</p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 pt-6">
            <div className='space-y-4 p-6 rounded-md bg-neutral-200 text-neutral-800'>
              <h1 className='font-bold text-2xl;'>Organization customization</h1>
              <div className='flex gap-2 items-center'>
                <StarIcon className='text-green-600'/>
                <p>4.5/3409</p>
              </div>
            </div>
            <div className='space-y-4 p-6 rounded-md bg-neutral-200 text-neutral-800'>
              <h1 className='font-bold text-2xl;'>Organization customization</h1>
              <div className='flex gap-2 items-center'>
                <StarIcon className='text-green-600'/>
                <p>4.5/3409</p>
              </div>
            </div>
            <div className='space-y-4 p-6 rounded-md bg-neutral-200 text-neutral-800'>
              <h1 className='font-bold text-2xl;'>Organization customization</h1>
              <div className='flex gap-2 items-center'>
                <StarIcon className='text-green-600'/>
                <p>4.5/3409</p>
              </div>
            </div>
            <div className='space-y-4 p-6 rounded-md bg-neutral-200 text-neutral-800'>
              <h1 className='font-bold text-2xl;'>Organization customization</h1>
              <div className='flex gap-2 items-center'>
                <StarIcon className='text-green-600'/>
                <p>4.5/3409</p>
              </div>
            </div>
            <div className='space-y-4 p-6 rounded-md bg-neutral-200 text-neutral-800'>
              <h1 className='font-bold text-2xl;'>Organization customization</h1>
              <div className='flex gap-2 items-center'>
                <StarIcon className='text-green-600'/>
                <p>4.5/3409</p>
              </div>
            </div>
            <div className='space-y-4 p-6 rounded-md bg-neutral-200 text-neutral-800'>
              <h1 className='font-bold text-2xl;'>Organization customization</h1>
              <div className='flex gap-2 items-center'>
                <StarIcon className='text-green-600'/>
                <p>4.5/3409</p>
              </div>
            </div>
            <div className='space-y-4 p-6 rounded-md bg-neutral-200 text-neutral-800'>
              <h1 className='font-bold text-2xl;'>Organization customization</h1>
              <div className='flex gap-2 items-center'>
                <StarIcon className='text-green-600'/>
                <p>4.5/3409</p>
              </div>
            </div>
            <div className='space-y-4 p-6 rounded-md bg-neutral-200 text-neutral-800'>
              <h1 className='font-bold text-2xl;'>Organization customization</h1>
              <div className='flex gap-2 items-center'>
                <StarIcon className='text-green-600'/>
                <p>4.5/3409</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="mt-12 mb-4 mx-4 px-4 bg-green-800 rounded-3xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 text-white pt-12">
          <div className="space-y-3">
            <h1 className="font-semibold underline">Company</h1>
            <Link href='/about-us' className="font-medium text-sm block hover:underline">About Us</Link>
            <Link href='/leadership' className="font-medium text-sm block hover:underline">Leadership</Link>
            <Link href='/press' className="font-medium text-sm block hover:underline">Press</Link>
            <Link href='/contact-us' className="font-medium text-sm block hover:underline">Contact Us</Link>
            <Link href='/careers' className="font-medium text-sm block hover:underline">Careers</Link>
            <Link href='/investor relation' className="font-medium text-sm block hover:underline">Investor Relations</Link>
          </div>
          <div className="space-y-3">
            <h1 className="font-semibold underline">Help & Resources</h1>
            <Link href='/about-us' className="font-medium text-sm block hover:underline">Help: Oranization</Link>
            <Link href='/leadership' className="font-medium text-sm block hover:underline">Help: Admin</Link>
            <Link href='/press' className="font-medium text-sm block hover:underline">Help: Employee</Link>
            <Link href='/contact-us' className="font-medium text-sm block hover:underline">FAQ</Link>
            <Link href='/general' className="font-medium text-sm block hover:underline">General</Link>
          </div>
          <div className="space-y-3">
            <h1 className="font-semibold underline">Features</h1>
            <p className="font-medium">Create Oranization</p>
            <p className="font-medium">Add Branches</p>
            <p className="font-medium">Add Employees</p>
            <p className="font-medium">Manage Inventory</p>
            <p className="font-medium">Reports</p>
          </div>
          <div className="space-y-3">
            <h1 className="font-semibold underline">Other Information</h1>
            <Link href='/success-stories' className="font-medium text-sm block hover:underline">Success Stories</Link>
            <Link href='/go-reviews' className="font-medium text-sm block hover:underline">Go Reviews</Link>
            <Link href='/community' className="font-medium text-sm block hover:underline">Community</Link>
            <Link href='/blog' className="font-medium text-sm block hover:underline">Blog</Link>
            <Link href='/general' className="font-medium text-sm block hover:underline">General</Link>
          </div>
        </div>
        <div className="flex md:justify-center items-center font-medium text-white space-x-4 py-8">
          <p>Connect with us   </p>
          <Link href='www.instagram.com/'>
            <InstramIcon />
          </Link>
          <Link href='www.twitter.com'>
            <TwitterIcon />
          </Link>
          <Link href='www.facebook.com'>
            <FacebookIcon />
          </Link>
          <Link href='www.youtube.com'>
            <YouTubeIcon />
          </Link>
        </div>
        <div className="md:flex md:justify-center items-center font-medium md:space-x-8 space-y-4 text-white py-12 border-t border-white">
          <span className="block md:inline">© 2024 Go® Global Inc.</span>
          <Link href='/terms-of-service' className="block md:inline hover:underline md:pb-4">Terms of Service</Link>
          <Link href='/privacy-policy' className="block md:inline hover:underline md:pb-4">Privacy Policy</Link>
        </div>
      </footer>
    </main>
  );
}
