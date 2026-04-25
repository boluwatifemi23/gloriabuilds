const services = [
  {
    number: '01',
    title: 'Land Acquisition',
    description:
      'We source, verify, and secure premium land across Nigeria\'s fastest-growing corridors — so you buy with total confidence.',
  },
  {
    number: '02',
    title: 'Title Verification',
    description:
      'Every plot undergoes rigorous legal due diligence. We confirm C of O, Governor\'s Consent, and survey accuracy before you commit.',
  },
  {
    number: '03',
    title: 'Investment Advisory',
    description:
      'Our analysts identify high-yield land corridors based on infrastructure development data, government plans, and market trends.',
  },
  {
    number: '04',
    title: 'Documentation & Transfer',
    description:
      'From offer letters to deed of assignment — we handle every document, every signature, every step of the transfer process.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-32 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">

        
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="gold-line"></div>
            <span className="text-xs tracking-[0.3em] uppercase text-[#C9A84C]">
              What We Do
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-light">
            Our <em className="text-[#C9A84C]">Services</em>
          </h2>
        </div>

        
        <div className="grid md:grid-cols-2 gap-px bg-[#222]">
          {services.map((service) => (
            <div
              key={service.number}
              className="bg-[#111111] p-10 group hover:bg-[#161616] transition-colors duration-300"
            >
              <div className="font-display text-5xl font-light text-[#1A1A1A] group-hover:text-[#222] transition-colors mb-6">
                {service.number}
              </div>
              <h3 className="font-display text-2xl font-light mb-4 group-hover:text-[#C9A84C] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-[#888880] text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}