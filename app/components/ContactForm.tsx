'use client'
import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

export default function ContactForm() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', interest: '', budget: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [focused, setFocused] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

 const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ firstName: '', lastName: '', email: '', phone: '', interest: '', budget: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const fieldStyle = (name: string): React.CSSProperties => ({
    borderBottomColor: focused === name ? 'var(--terracotta)' : undefined,
  })

  return (
    <section id="contact" style={{ padding: '100px 0', background: 'var(--charcoal-mid)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '80px', alignItems: 'start' }}>

          {/* Left info */}
          <ScrollReveal className="reveal-left">
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
              <div className="rust-line" />
              <span className="eyebrow">Get In Touch</span>
            </div>
            <h2 className="font-display" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--cream)', marginBottom: 20 }}>
              Start Your<br /><em style={{ color: 'var(--terracotta)' }}>Journey</em>
            </h2>
            <p style={{ color: 'var(--stone-light)', fontSize: 14, lineHeight: 1.85, marginBottom: 48, maxWidth: 400 }}>
              Tell us what you&apos;re looking for. Our consultants will reach out within 24 hours — no pressure, just clarity.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 28, marginBottom: 52 }}>
              {[
                { label: 'Email', value: 'hello@gloriabuilds.com', icon: '✉' },
                { label: 'Phone', value: '+234 800 000 0000', icon: '📞' },
                { label: 'Office', value: 'Lagos, Nigeria', icon: '📍' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                  <div style={{ width: 40, height: 40, background: 'rgba(234,88,12,0.12)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 15 }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: 5, fontWeight: 500 }}>{item.label}</div>
                    <div style={{ color: 'var(--stone-light)', fontSize: 14 }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <img src="https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg" alt="Property" style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block', filter: 'brightness(0.7)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(234,88,12,0.4) 0%, transparent 60%)' }} />
              <div style={{ position: 'absolute', bottom: 20, left: 20 }}>
                <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 4 }}>Response within</div>
                <div className="font-display" style={{ fontSize: '1.8rem', fontWeight: 300, color: 'white' }}>24 Hours</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right form */}
          <ScrollReveal className="reveal-right" delay={0.15}>
            {status === 'success' ? (
              <div style={{ border: '1px solid rgba(234,88,12,0.3)', padding: '80px 40px', textAlign: 'center' }}>
                <div style={{ fontSize: 48, marginBottom: 20 }}>✓</div>
                <h3 className="font-display" style={{ fontSize: '2.5rem', fontWeight: 300, color: 'var(--terracotta)', marginBottom: 16 }}>Thank You</h3>
                <p style={{ color: 'var(--stone-light)', fontSize: 14, lineHeight: 1.7 }}>
                  Your enquiry has been received. Our team will contact you within 24 hours.
                </p>
                <button onClick={() => setStatus('idle')} className="outline-btn" style={{ marginTop: 32 }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                  <div>
                    <label style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--stone)', display: 'block', marginBottom: 8 }}>First Name</label>
                    <input name="firstName" value={form.firstName} onChange={handleChange} required placeholder="Gloria"
                      className="gb-input" style={fieldStyle('firstName')}
                      onFocus={() => setFocused('firstName')} onBlur={() => setFocused(null)} />
                  </div>
                  <div>
                    <label style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--stone)', display: 'block', marginBottom: 8 }}>Last Name</label>
                    <input name="lastName" value={form.lastName} onChange={handleChange} required placeholder="Aguedu"
                      className="gb-input" style={fieldStyle('lastName')}
                      onFocus={() => setFocused('lastName')} onBlur={() => setFocused(null)} />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--stone)', display: 'block', marginBottom: 8 }}>Email Address</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@example.com"
                    className="gb-input" style={fieldStyle('email')}
                    onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} />
                </div>

                <div>
                  <label style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--stone)', display: 'block', marginBottom: 8 }}>Phone Number</label>
                  <input name="phone" type="tel" value={form.phone} onChange={handleChange} required placeholder="+234 800 000 0000"
                    className="gb-input" style={fieldStyle('phone')}
                    onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)} />
                </div>

                <div>
                  <label style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--stone)', display: 'block', marginBottom: 8 }}>I Am Interested In</label>
                  <select
                  title='Select'
                   name="interest" value={form.interest} onChange={handleChange} required
                    className="gb-input" style={fieldStyle('interest')}
                    onFocus={() => setFocused('interest')} onBlur={() => setFocused(null)}>
                    <option value="" disabled>Select a property type</option>
                    <option value="Ibeju-Lekki Plots">Ibeju-Lekki Plots</option>
                    <option value="Epe Waterfront">Epe Waterfront</option>
                    <option value="Mowe Estate Lands">Mowe Estate Lands</option>
                    <option value="Eko Atlantic">Eko Atlantic</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--stone)', display: 'block', marginBottom: 8 }}>Budget Range</label>
                  <select
                  title='Select' name="budget" value={form.budget} onChange={handleChange}
                    className="gb-input" style={fieldStyle('budget')}
                    onFocus={() => setFocused('budget')} onBlur={() => setFocused(null)}>
                    <option value="" disabled>Select budget range</option>
                    <option value="Under ₦5M">Under ₦5M</option>
                    <option value="₦5M – ₦15M">₦5M – ₦15M</option>
                    <option value="₦15M – ₦50M">₦15M – ₦50M</option>
                    <option value="₦50M+">₦50M+</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--stone)', display: 'block', marginBottom: 8 }}>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                    placeholder="Tell us more about what you're looking for..."
                    className="gb-input" style={{ resize: 'none', ...fieldStyle('message') }}
                    onFocus={() => setFocused('message')} onBlur={() => setFocused(null)} />
                </div>

                <button type="submit" className="submit-btn" disabled={status === 'loading'}>
                  <span>{status === 'loading' ? 'Sending...' : 'Send Enquiry →'}</span>
                </button>

                {status === 'error' && (
                  <p style={{ color: '#F87171', fontSize: 13, textAlign: 'center' }}>Something went wrong. Please try again.</p>
                )}
              </form>
            )}
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}