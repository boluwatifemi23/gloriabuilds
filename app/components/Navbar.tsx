'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0D0D0D]/95 backdrop-blur-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
       
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border border-[#C9A84C] rotate-45 flex items-center justify-center">
            <div className="w-2 h-2 bg-[#C9A84C]"></div>
          </div>
          <span className="font-display text-xl tracking-widest text-[#F5F0E8]">
            GLORIA<span className="text-[#C9A84C]">BUILDS</span>
          </span>
        </div>

      
        <div className="hidden md:flex items-center gap-10">
          {['Properties', 'About', 'Services', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover-line text-xs tracking-widest text-[#888880] hover:text-[#C9A84C] transition-colors duration-300 uppercase"
            >
              {item}
            </Link>
          ))}
        </div>

        
        <Link
          href="#contact"
          className="hidden md:block text-xs tracking-widest uppercase border border-[#C9A84C] text-[#C9A84C] px-6 py-2.5 hover:bg-[#C9A84C] hover:text-[#0D0D0D] transition-all duration-300"
        >
          Enquire Now
        </Link>

      
        <button
        title='c'
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-px bg-[#C9A84C] transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`block w-6 h-px bg-[#C9A84C] transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`block w-6 h-px bg-[#C9A84C] transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>
      </div>

     
      {menuOpen && (
        <div className="md:hidden bg-[#0D0D0D]/98 px-6 py-8 flex flex-col gap-6">
          {['Properties', 'About', 'Services', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-widest uppercase text-[#888880] hover:text-[#C9A84C] transition-colors"
            >
              {item}
            </Link>
          ))}

          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-xs tracking-widest uppercase border border-[#C9A84C] text-[#C9A84C] px-6 py-3 text-center hover:bg-[#C9A84C] hover:text-[#0D0D0D] transition-all duration-300"
          >
            Enquire Now
          </Link>
        </div>
      )}
    </nav>
  )
}