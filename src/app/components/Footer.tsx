'use client'
import React, { useState } from 'react'
import Link from 'next/link'

export default function Footer() {
  const [currentYear] = useState(() => {
    if (typeof window !== 'undefined') {
      return new Date().getFullYear().toString()
    }
    return '2026'
  })

  return (
    <footer className="w-full bg-neutral-900 text-neutral-300 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 py-12 lg:px-20">
        
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 xl:gap-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="text-xl font-extrabold tracking-widest text-white">
              FOLIO
            </Link>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Your curated sanctuary for physical and digital literature. Connecting passionate readers with extraordinary authors.
            </p>
            
            {/* Socials */}
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors" aria-label="Twitter">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors" aria-label="Instagram">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">Shop</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/books" className="hover:text-white transition-colors">All Books</Link></li>
              <li><Link href="/#categories" className="hover:text-white transition-colors">Categories</Link></li>
              <li><Link href="/bestsellers" className="hover:text-white transition-colors">Bestsellers</Link></li>
            </ul>
          </div>

          {/* Info Links */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">About</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/#about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Newsletter Input */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">Newsletter</h3>
            <p className="text-xs text-neutral-400 mb-3 leading-relaxed">
              Subscribe to get exclusive literary reviews and discount codes.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full bg-neutral-800 border border-neutral-700 text-white px-3 py-2 text-sm rounded-none focus:outline-none focus:border-white placeholder-neutral-500"
              />
              <button
                type="submit"
                className="w-full bg-white text-black font-semibold px-3 py-2 text-sm rounded-none hover:bg-neutral-200 active:bg-neutral-300 transition-colors"
              >
                Join Newsletter
              </button>
            </form>
          </div>

        </div>

        {/* Legal Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500 order-2 sm:order-1">
            &copy; {currentYear} FOLIO. Designed and developed as a portfolio showcase. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6 text-xs text-neutral-500 order-1 sm:order-2">
            <Link href="/privacy" className="hover:text-neutral-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-neutral-300 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
