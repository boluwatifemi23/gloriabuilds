'use client'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      {/* Parallax background */}
      <div ref={parallaxRef} style={{ position: 'absolute', inset: '-10%', zIndex: 0 }}>
        <img
          src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg"
          alt="Premium property"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(28,25,23,0.88) 0%, rgba(28,25,23,0.6) 50%, rgba(28,25,23,0.75) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(28,25,23,1) 0%, transparent 40%)' }} />
      </div>

      {/* Decorative rings */}
      <div className="hero-bg-fade" style={{ position: 'absolute', top: '20%', right: '8%', width: 180, height: 180, border: '1px solid rgba(234,88,12,0.15)', borderRadius: '50%', zIndex: 1 }} />
      <div className="hero-bg-fade" style={{ position: 'absolute', top: '22%', right: '9.5%', width: 130, height: 130, border: '1px solid rgba(234,88,12,0.08)', borderRadius: '50%', zIndex: 1 }} />
      <div style={{ position: 'absolute', top: 0, left: '38%', width: 1, height: '100%', background: 'linear-gradient(to bottom, transparent, rgba(234,88,12,0.12), transparent)', zIndex: 1 }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto', padding: '140px 28px 80px', width: '100%' }}>
        <div style={{ maxWidth: 720 }}>
          <div className="hero-1" style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
            <div style={{ width: 40, height: 1, background: 'var(--terracotta)' }} />
            <span className="eyebrow">Premium Real Estate · Nigeria</span>
          </div>

          <h1 className="font-display hero-2" style={{ fontSize: 'clamp(3rem, 7.5vw, 6.5rem)', fontWeight: 300, lineHeight: 1.02, marginBottom: 28, color: 'var(--cream)' }}>
            Where Land
            <br />
            <em style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>Becomes</em>
            <br />
            Legacy.
          </h1>

          <p className="hero-3" style={{ fontSize: 16, color: 'var(--stone-light)', lineHeight: 1.8, maxWidth: 480, marginBottom: 44, borderLeft: '2px solid var(--terracotta)', paddingLeft: 20 }}>
            Premium land acquisitions across Nigeria&apos;s fastest-growing corridors —
            verified, secured, and delivered with total confidence.
          </p>

          <div className="hero-4" style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 70 }}>
            <Link href="#properties" className="filled-btn">
              View Properties
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link href="#contact" className="outline-btn">Book Consultation</Link>
          </div>

          <div className="hero-5" style={{ display: 'flex', gap: 'clamp(24px, 5vw, 60px)', flexWrap: 'wrap' }}>
            {[
              { num: '1,300+', label: 'Hectares Available' },
              { num: '₦215M', label: 'Portfolio Value' },
              { num: '500+', label: 'Happy Clients' },
            ].map((s, i) => (
              <div key={i}>
                <div className="font-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 300, color: 'var(--terracotta)', lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--stone)', marginTop: 6 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-6" style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--stone)' }}>Scroll</span>
        <div className="scroll-pulse" style={{ width: 1, height: 50, background: 'linear-gradient(to bottom, var(--terracotta), transparent)' }} />
      </div>
    </section>
  )
}