'use client'
import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: 'var(--charcoal)', borderTop: '1px solid var(--charcoal-light)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '70px 28px 50px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '50px 40px' }}>

        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <div style={{ width: 28, height: 28, border: '1.5px solid var(--terracotta)', transform: 'rotate(45deg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 7, height: 7, background: 'var(--terracotta)', transform: 'rotate(-45deg)' }} />
            </div>
            <span className="font-display" style={{ fontSize: '1.2rem', letterSpacing: '0.1em', color: 'var(--cream)' }}>
              GLORIA<span style={{ color: 'var(--terracotta)' }}>BUILDS</span>
            </span>
          </div>
          <p style={{ fontSize: 13, color: 'var(--stone-light)', lineHeight: 1.75, marginBottom: 28, maxWidth: 260 }}>
            Your dream land is just a call away. Premium land acquisitions across Nigeria&apos;s most strategic locations.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            {['F', 'W', 'I', 'L'].map((s, i) => (
              <a key={i} href="#" style={{ width: 36, height: 36, border: '1px solid var(--charcoal-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--stone-light)', textDecoration: 'none', fontSize: 13, transition: 'all 0.3s ease' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--terracotta)'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--terracotta)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--charcoal-light)'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--stone-light)'; }}>
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--cream)', marginBottom: 24, fontWeight: 600 }}>Company</h4>
          {['About Us', 'Properties', 'Services', 'Blog', 'FAQ', 'Contact'].map(l => (
            <a key={l} href="#" className="footer-link">{l}</a>
          ))}
        </div>

        {/* Services */}
        <div>
          <h4 style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--cream)', marginBottom: 24, fontWeight: 600 }}>Services</h4>
          {['Land Acquisition', 'Title Verification', 'Investment Advisory', 'Documentation', 'Legal Support', 'After-Sale Service'].map(l => (
            <a key={l} href="#" className="footer-link">{l}</a>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--cream)', marginBottom: 24, fontWeight: 600 }}>Contact</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { icon: '✉', val: 'hello@gloriabuilds.com' },
              { icon: '📞', val: '+234 800 000 0000' },
              { icon: '📍', val: 'Lagos, Nigeria' },
            ].map(c => (
              <div key={c.icon} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--terracotta)', fontSize: 14, flexShrink: 0 }}>{c.icon}</span>
                <span style={{ fontSize: 13, color: 'var(--stone-light)', lineHeight: 1.5 }}>{c.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid var(--charcoal-light)', padding: '22px 28px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 12, color: 'var(--stone)', letterSpacing: '0.05em' }}>
            © {year} <span style={{ color: 'var(--terracotta)' }}>GloriaBuilds</span>. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map(l => (
              <a key={l} href="#" style={{ fontSize: 12, color: 'var(--stone)', textDecoration: 'none', transition: 'color 0.3s ease' }}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--terracotta)'}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--stone)'}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}