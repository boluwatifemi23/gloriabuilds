import Link from 'next/link'
import ScrollReveal from './ScrollReveal'

export default function About() {
  return (
    <section id="about" style={{ padding: '100px 0', background: 'var(--charcoal-mid)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '80px', alignItems: 'center' }}>

          <ScrollReveal className="reveal-left">
            <div style={{ position: 'relative', paddingBottom: 48, paddingRight: 30 }}>
              <img
                src="https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_1280.jpg"
                alt="Luxury interior"
                className="about-img-primary"
                style={{ display: 'block' }}
              />
              <img
                src="https://cdn.pixabay.com/photo/2016/11/22/19/25/house-1851201_1280.jpg"
                alt="Exterior view"
                className="about-img-accent"
              />
              <div style={{ position: 'absolute', top: 32, right: -10, background: 'var(--terracotta)', color: 'white', padding: '20px 24px', textAlign: 'center' }}>
                <div className="font-display" style={{ fontSize: '2.5rem', fontWeight: 300, lineHeight: 1 }}>12+</div>
                <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: 6, opacity: 0.9 }}>Years Experience</div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="reveal-right">
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
              <div className="rust-line" />
              <span className="eyebrow">About Us</span>
            </div>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, lineHeight: 1.15, color: 'var(--cream)', marginBottom: 20 }}>
              The Leading Real Estate<br /><em style={{ color: 'var(--terracotta)' }}>Marketplace in Nigeria</em>
            </h2>
            <p style={{ color: 'var(--stone-light)', fontSize: 14, lineHeight: 1.85, marginBottom: 28 }}>
              Over 500 families have trusted us to secure their most important investment. We operate across Nigeria&apos;s fastest-growing corridors — bringing you verified land, transparent processes, and unmatched after-sale support.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 32px', marginBottom: 40 }}>
              {[
                { icon: '🏠', text: 'Smart Home Designs' },
                { icon: '🌿', text: 'Beautiful Surroundings' },
                { icon: '⚡', text: 'Exceptional Lifestyle' },
                { icon: '🔒', text: '24/7 Security' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 38, height: 38, background: 'rgba(234,88,12,0.12)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <span style={{ fontSize: 13, color: 'var(--cream-muted)' }}>{item.text}</span>
                </div>
              ))}
            </div>
            <div style={{ borderLeft: '3px solid var(--terracotta)', paddingLeft: 20, marginBottom: 40, color: 'var(--stone-light)', fontSize: 14, lineHeight: 1.7 }}>
              Don&apos;t wait — your dream land is just one call away. Let us help you secure it today.
            </div>
            <Link href="#services" className="filled-btn">
              Our Services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}