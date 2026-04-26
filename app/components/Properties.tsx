'use client'
import Link from 'next/link'
import ScrollReveal from './ScrollReveal'
import { useState } from 'react'

const properties = [
  {
    id: 1, title: 'Home In Merrick Way', location: 'Ibeju-Lekki, Lagos',
    desc: 'Enchanting three bedrooms, three bath home with spacious one bedroom suite in premium gated estate.',
    price: '₦15,000,000', beds: 3, baths: 3, area: '4,300',
    tag: 'Featured', hot: true,
    img: 'https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg',
  },
  {
    id: 2, title: 'Villa In Alexandria', location: 'Epe Waterfront, Lagos',
    desc: 'Enjoy serenity of Deering Bay whole day from this spectacular North and South facing waterfront estate.',
    price: '₦8,000,000', beds: 3, baths: 3.5, area: '3,500',
    tag: 'New Listing', hot: true,
    img: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg',
  },
  {
    id: 3, title: 'Villa In Cairo', location: 'Mowe Estate, Ogun',
    desc: 'The very best waterfront location beside many cool places. Spacious layout with premium finishes.',
    price: '₦3,500,000', beds: 3, baths: 2, area: '1,800',
    tag: 'Fast Selling', hot: false,
    img: 'https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_1280.jpg',
  },
  {
    id: 4, title: 'Luxury Estate Plot', location: 'Eko Atlantic, Lagos',
    desc: 'Prime land in the heart of Eko Atlantic City — Africa\'s boldest urban development project.',
    price: '₦42,000,000', beds: 5, baths: 4, area: '3,450',
    tag: 'High Demand', hot: true,
    img: 'https://cdn.pixabay.com/photo/2016/11/22/19/25/house-1851201_1280.jpg',
  },
  {
    id: 5, title: 'Garden Terrace Home', location: 'Abuja, FCT',
    desc: 'Tranquil and beautifully landscaped terrace property with panoramic garden views in a serene setting.',
    price: '₦22,000,000', beds: 4, baths: 3, area: '2,900',
    tag: 'New Listing', hot: false,
    img: 'https://cdn.pixabay.com/photo/2014/07/31/00/30/architecture-405877_1280.jpg',
  },
  {
    id: 6, title: 'Riverside Retreat', location: 'Port Harcourt, Rivers',
    desc: 'Spectacular riverside property with private jetty access and stunning waterway views throughout.',
    price: '₦18,500,000', beds: 4, baths: 3, area: '3,100',
    tag: 'Hot Deal', hot: true,
    img: 'https://cdn.pixabay.com/photo/2016/09/07/13/17/swimming-pool-1651426_1280.jpg',
  },
]

function BedIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20v-8a2 2 0 012-2h16a2 2 0 012 2v8"/><path d="M2 12V6a2 2 0 012-2h3"/><rect x="6" y="10" width="12" height="4" rx="1"/></svg>
}
function BathIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6 6.5 3.5a1.5 1.5 0 00-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 002 2h12a2 2 0 002-2v-5"/><line x1="3" y1="12" x2="21" y2="12"/></svg>
}
function AreaIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/></svg>
}

export default function Properties() {
  const [liked, setLiked] = useState<number[]>([])

  return (
    <section id="properties" style={{ padding: '100px 0', background: 'var(--charcoal)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 60, gap: 24 }}>
          <ScrollReveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
              <div className="rust-line" />
              <span className="eyebrow">Our Portfolio</span>
            </div>
            <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--cream)' }}>
              Available<br /><em style={{ color: 'var(--terracotta)' }}>Properties</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal className="reveal" delay={0.2}>
            <p style={{ color: 'var(--stone-light)', maxWidth: 360, lineHeight: 1.7, fontSize: 14 }}>
              Every plot comes with verified title documents, survey plans, and full legal backing.
            </p>
          </ScrollReveal>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))', gap: 2 }}>
          {properties.map((p, i) => (
            <ScrollReveal key={p.id} className="reveal-scale" delay={i * 0.08}>
              <div className="prop-card" style={{ height: '100%' }}>
                <div className="card-top" style={{ position: 'relative' }}>
                  <img src={p.img} alt={p.title} loading="lazy" />
                  <div className="top-overlay" />
                  <button className="view-prop-btn">View Property</button>

                  {i === 0 && (
                    <div className="badge-wrap">
                      <span className="badge-label">Featured</span>
                      <div className="badge-arrow" />
                    </div>
                  )}
                  {p.hot && <span className="badge-hot">Hot</span>}

                  <div className="card-action-icons">
                    <button
                      onClick={() => setLiked(l => l.includes(p.id) ? l.filter(x => x !== p.id) : [...l, p.id])}
                      title="Save property"
                    >
                      {liked.includes(p.id) ? '♥' : '♡'}
                    </button>
                    <button title="Compare">⇄</button>
                  </div>
                </div>

                <div className="card-bottom">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>

                  <div className="prop-stats">
                    <div className="prop-stat">
                      <span className="stat-label">Bedrooms</span>
                      <span className="stat-val"><BedIcon /><strong>{p.beds}</strong></span>
                    </div>
                    <div className="prop-stat">
                      <span className="stat-label">Bathrooms</span>
                      <span className="stat-val"><BathIcon /><strong>{p.baths}</strong></span>
                    </div>
                    <div className="prop-stat">
                      <span className="stat-label">Area</span>
                      <span className="stat-val"><AreaIcon /><strong>{p.area}</strong><span style={{ fontSize: 11, color: 'var(--stone)', marginLeft: 3 }}>Sq Ft</span></span>
                    </div>
                  </div>

                  <div className="prop-price-row">
                    <span className="sale-label">For Sale</span>
                    <span className="price-val">{p.price}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="reveal" delay={0.2}>
          <div style={{ textAlign: 'center', marginTop: 64 }}>
            <Link href="#contact" className="outline-btn">View All Properties</Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}