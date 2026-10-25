import React from 'react'

export default function Hero() {
  return (
    <div className="bg-[url('/images/hero.jpeg')] w-full h-screen bg-cover bg-center" >
      <div className='flex flex-col w-[50%] p-25'>
        <span className='text-neutral-500 mb-4 text-sm'>BEST BOOKS TO EVER EXIST</span>
        <span className='text-neutral-200 text-6xl mb-8'>Discover your next favourite book.</span>
        <span className='text-neutral-300 text-lg'>Folio is your online bookstore, offering a curated selection of books for every reader.
            From timeless classics to modern bestsellers, find the stories that inspire, annoy and stay with you.
        </span>
        <button className='text-black bg-gray-200 w-1/3 h-12 mt-6 cursor-pointer animation-all duration-200 hover:bg-gray-300'>Shop now</button>
      </div>
    </div>
  )
}
