'use client'
import React from 'react'
import Image from 'next/image'


let searchbarEnabled = false;
function showSearchbar() {
  const searchbar = document.getElementById('searchbar');

  if (searchbar && searchbarEnabled) {
    searchbar.style.display = 'none';
    searchbarEnabled = false;
  } else if (searchbar && !searchbarEnabled) {
    searchbar.style.display = 'flex';
    searchbarEnabled = true;
  }
}

export default function Navbar() {
  return (
    <header className='flex flex-row justify-between items-center bg-neutral-900 py-6 text-white px-20'>
        <h1 className='cursor-pointer font-extrabold tracking-widest'>FOLIO</h1>

        <nav className='flex flex-row gap-8 text-sm'>
            <a href="#home" className='group relative py-1'>
              Home
              <span className='absolute bottom-0 left-0 w-0 bg-white h-[1px] transition-all duration-200 group-hover:w-full'></span>
            </a>
            <a href="#books" className='group relative py-1'>
              Books
              <span className='absolute bottom-0 left-0 w-0 bg-white h-[1px] transition-all duration-200 group-hover:w-full'></span>
            </a>
            <a href="#categories" className='group relative py-1'>
              Categories
              <span className='absolute bottom-0 left-0 w-0 bg-white h-[1px] transition-all duration-200 group-hover:w-full'></span>
            </a>
            <a href="#about" className='group relative py-1'>
              About
              <span className='absolute bottom-0 left-0 w-0 bg-white h-[1px] transition-all duration-200 group-hover:w-full'></span>
            </a>
        </nav>

        <div className='relative flex flex-row gap-6'>
          <input id='searchbar' type="text" className='absolute right-full mr-4 border-white bg-neutral-800'/>
          <Image onClick={showSearchbar} className='cursor-pointer' src={"images/magnify.svg"} alt='Search Icon' width={25} height={25}/>
          <Image className='cursor-pointer' src={"images/account.svg"} alt='Account Icon' width={25} height={25}/>
          <Image className='cursor-pointer' src={"images/cart.svg"} alt='Cart Icon' width={25} height={25}/>
        </div>
    </header>
  )
}
