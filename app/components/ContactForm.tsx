'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
        setForm({ firstName: '', lastName: '', email: '', phone: '', interest: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-32 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20">

         
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="gold-line"></div>
              <span className="text-xs tracking-[0.3em] uppercase text-[#C9A84C]">
                Get In Touch
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-light leading-tight mb-8">
              Start Your
              <br />
              <em className="text-[#C9A84C]">Journey</em>
            </h2>
            <p className="text-[#888880] leading-relaxed mb-12 max-w-sm">
              Tell us what you are looking for. Our consultants will reach out within
              24 hours to discuss your property interests.
            </p>

           
            <div className="space-y-6">
              {[
                { label: 'Email', value: 'hello@gloriabuilds.com' },
                { label: 'Phone', value: '+234 800 000 0000' },
                { label: 'Office', value: 'Lagos, Nigeria' },
              ].map((item) => (
                <div key={item.label} className="flex gap-6 items-start">
                  <div className="text-xs tracking-widest uppercase text-[#C9A84C] w-16 pt-0.5">
                    {item.label}
                  </div>
                  <div className="text-[#888880] text-sm">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

         
          <div>
            {status === 'success' ? (
              <div className="border border-[#C9A84C]/30 p-12 text-center">
                <div className="font-display text-4xl text-[#C9A84C] mb-4">Thank You</div>
                <p className="text-[#888880] text-sm leading-relaxed">
                  Your enquiry has been received. Our team will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
               
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs tracking-widest uppercase text-[#888880] block mb-3">
                      First Name
                    </label>
                    <input
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                      placeholder="Gloria"
                      className="luxury-input"
                    />
                  </div>
                  <div>
                    <label className="text-xs tracking-widest uppercase text-[#888880] block mb-3">
                      Last Name
                    </label>
                    <input
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Aguedu"
                      className="luxury-input"
                    />
                  </div>
                </div>

               
                <div>
                  <label className="text-xs tracking-widest uppercase text-[#888880] block mb-3">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="luxury-input"
                  />
                </div>

                
                <div>
                  <label className="text-xs tracking-widest uppercase text-[#888880] block mb-3">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="+234 800 000 0000"
                    className="luxury-input"
                  />
                </div>

                
                <div>
                  <label className="text-xs tracking-widest uppercase text-[#888880] block mb-3">
                    I am Interested In
                  </label>
                  <select
                  title='Select an Option'
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    required
                    className="luxury-input"
                  >
                    <option value="" disabled>Select a property type</option>
                    <option value="Ibeju-Lekki Plots">Ibeju-Lekki Plots</option>
                    <option value="Epe Waterfront">Epe Waterfront</option>
                    <option value="Mowe Estate Lands">Mowe Estate Lands</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>

               
                <div>
                  <label className="text-xs tracking-widest uppercase text-[#888880] block mb-3">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us more about what you're looking for..."
                    className="luxury-input resize-none"
                  />
                </div>

                
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full text-xs tracking-widest uppercase bg-[#C9A84C] text-[#0D0D0D] py-4 hover:bg-[#E8D5A3] transition-all duration-300 font-medium disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Enquiry'}
                </button>

                {status === 'error' && (
                  <p className="text-red-400 text-xs text-center">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}