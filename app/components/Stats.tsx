'use client'
import { useEffect, useRef, useState } from 'react'

function useCountUp(target: number, duration = 2000, trigger: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!trigger) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [trigger, target, duration])
  return count
}

const stats = [
  { value: 1300, suffix: '+', label: 'Hectares Available' },
  { value: 215,  suffix: 'M', label: 'Portfolio Value (₦)' },
  { value: 500,  suffix: '+', label: 'Happy Clients' },
  { value: 12,   suffix: '+', label: 'Years Experience' },
]

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTriggered(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const c0 = useCountUp(stats[0].value, 2000, triggered)
  const c1 = useCountUp(stats[1].value, 2000, triggered)
  const c2 = useCountUp(stats[2].value, 2000, triggered)
  const c3 = useCountUp(stats[3].value, 2000, triggered)
  const counts = [c0, c1, c2, c3]

  return (
    <section ref={ref} style={{ padding: '80px 0', background: 'var(--terracotta)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -60, right: -60, width: 300, height: 300, border: '1px solid rgba(253,248,240,0.1)', borderRadius: '50%' }} />
      <div style={{ position: 'absolute', bottom: -80, left: -40, width: 240, height: 240, border: '1px solid rgba(253,248,240,0.08)', borderRadius: '50%' }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '40px 20px', textAlign: 'center' }}>
          {stats.map((s, i) => (
            <div key={i}>
              <div className="font-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 300, color: 'white', lineHeight: 1, marginBottom: 8 }}>
                {i === 1 ? '₦' : ''}{counts[i].toLocaleString()}{s.suffix}
              </div>
              <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}