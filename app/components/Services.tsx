import ScrollReveal from './ScrollReveal'

const services = [
  { num: '01', title: 'Land Acquisition', icon: '🗺️', desc: "We source, verify, and secure premium land across Nigeria's fastest-growing corridors — so you buy with total confidence." },
  { num: '02', title: 'Title Verification', icon: '📋', desc: "Every plot undergoes rigorous legal due diligence. We confirm C of O, Governor's Consent, and survey accuracy before you commit." },
  { num: '03', title: 'Investment Advisory', icon: '📈', desc: 'Our analysts identify high-yield land corridors based on infrastructure development data, government plans, and market trends.' },
  { num: '04', title: 'Documentation & Transfer', icon: '📝', desc: 'From offer letters to deed of assignment — we handle every document, every signature, every step of the transfer process.' },
]

export default function Services() {
  return (
    <section id="services" style={{ padding: '100px 0', background: 'var(--charcoal)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>

        <ScrollReveal className="reveal">
          <div style={{ textAlign: 'center', marginBottom: 70 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 20 }}>
              <div className="rust-line" />
              <span className="eyebrow">What We Do</span>
              <div className="rust-line" />
            </div>
            <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, color: 'var(--cream)', lineHeight: 1.1 }}>
              Our <em style={{ color: 'var(--terracotta)' }}>Main Focus</em>
            </h2>
          </div>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 2 }}>
          {services.map((s, i) => (
            <ScrollReveal key={s.num} className="reveal" delay={i * 0.1}>
              <div className="svc-card" style={{ height: '100%' }}>
                <div className="font-display" style={{ fontSize: '4rem', fontWeight: 300, color: 'var(--charcoal-light)', marginBottom: 20, lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: 28, marginBottom: 16 }}>{s.icon}</div>
                <h3 className="font-display" style={{ fontSize: '1.5rem', fontWeight: 400, color: 'var(--cream)', marginBottom: 14 }}>{s.title}</h3>
                <p style={{ color: 'var(--stone-light)', fontSize: 13.5, lineHeight: 1.8 }}>{s.desc}</p>
                <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terracotta)' }}>
                  <span>Learn More</span>
                  <span>→</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}