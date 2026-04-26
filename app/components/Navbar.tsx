'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Properties', 'About', 'Services', 'Contact']

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-7'}`}
        style={{
          background: scrolled ? 'rgba(28,25,23,0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(68,64,60,0.4)' : 'none',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{ width: 30, height: 30, border: '1.5px solid var(--terracotta)', transform: 'rotate(45deg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 8, height: 8, background: 'var(--terracotta)', transform: 'rotate(-45deg)' }} />
            </div>
            <span className="font-display" style={{ fontSize: '1.3rem', letterSpacing: '0.12em', color: 'var(--cream)', fontWeight: 400 }}>
              GLORIA<span style={{ color: 'var(--terracotta)' }}>BUILDS</span>
            </span>
          </Link>

          <div className="hidden md:flex" style={{ alignItems: 'center', gap: 36 }}>
            {links.map(l => (
              <Link key={l} href={`#${l.toLowerCase()}`} className="nav-link">{l}</Link>
            ))}
          </div>

          <Link href="#contact" className="filled-btn hidden md:inline-flex" style={{ padding: '11px 26px', fontSize: '11px' }}>
            Enquire Now
          </Link>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 5, padding: 4 }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block', width: 24, height: 1.5, background: 'var(--terracotta)',
                transition: 'all 0.3s ease',
                transform: menuOpen
                  ? i === 0 ? 'rotate(45deg) translate(4px, 5px)'
                  : i === 2 ? 'rotate(-45deg) translate(4px, -5px)'
                  : 'scaleX(0)'
                  : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button
          onClick={() => setMenuOpen(false)}
          style={{ position: 'absolute', top: 28, right: 28, background: 'none', border: 'none', cursor: 'pointer', color: 'var(--stone-light)', fontSize: 28 }}
        >✕</button>
        {links.map(l => (
          <Link key={l} href={`#${l.toLowerCase()}`} className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
            {l}
          </Link>
        ))}
        <Link href="#contact" className="filled-btn" onClick={() => setMenuOpen(false)} style={{ marginTop: 16 }}>
          Enquire Now
        </Link>
      </div>
    </>
  )
}