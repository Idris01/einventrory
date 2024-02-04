import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import {
  IoLogoInstagram as InstramIcon,
  IoLogoTwitter as TwitterIcon,
  IoLogoFacebook as FacebookIcon,
  IoLogoYoutube as YouTubeIcon
} from "react-icons/io";
import AuthPopup from "@/components/others/auth-popup";
import MenuDrawer from "@/components/others/menu-drawer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative min-h-screen`}>
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
            <div className="bg-green-600 hover:bg-green-400 rounded-2xl px-8 py-1.5">
              <AuthPopup type="login" title='Login'/>
            </div>
          </div>
        </header>
        {children}
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
      </body>
    </html>
  );
}
