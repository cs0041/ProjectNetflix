import React, { useEffect, useState } from 'react'
import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import Image from 'next/image'
import useAuth from '../hooks/useAuth'
import BasicMenu from './BasicMenu'
type Props = {}

function Header({}: Props) {
  const [isScrolled, setisScrolled] = useState(false)
  const { logout } = useAuth()

  
  useEffect(() => {
   const hadnleScroll = () => {
    if(window.scrollY > 0) {
      setisScrolled(true)
    } else {
      setisScrolled(false)
    }
   }

   window.addEventListener("scroll",hadnleScroll)

   return () => {
    window.removeEventListener("scroll",hadnleScroll)
   }
  }, [])
  
  return (
    <header className={`${isScrolled && 'bg-red-500'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

       <BasicMenu/>

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <Link href="/account">
        <Image
          src="https://rb.gy/g1pwyx"
          alt="pic"
          width={24}
          height={1}
          objectFit="contain"
          className="cursor-pointer rounded"
       
        />
        </Link>
      </div>
    </header>
  )
}

export default Header