import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
      <div className="absolute inset-0 bg-[#0D0D0D]">
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#C9A84C]/20 to-transparent"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A84C]/10 to-transparent"></div>

        <div className="absolute bottom-0 left-0 font-display text-[20vw] font-bold text-[#1A1A1A] leading-none select-none pointer-events-none">
          LAND
        </div>

        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full border border-[#C9A84C]/10"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full border border-[#C9A84C]/5 translate-x-8 translate-y-8"></div>
      </div>

      
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          
          <div className="flex items-center gap-4 mb-8 fade-up fade-up-delay-1">
            <div className="gold-line"></div>
            <span className="text-xs tracking-[0.3em] uppercase text-[#C9A84C]">
              Premium Real Estate
            </span>
          </div>

          
          <h1 className="font-display text-6xl md:text-8xl font-light leading-none mb-8 fade-up fade-up-delay-2">
            Where Land
            <br />
            <em className="text-[#C9A84C] not-italic">Becomes</em>
            <br />
            Legacy
          </h1>

          
          <p className="text-[#888880] text-lg font-light max-w-lg leading-relaxed mb-12 fade-up fade-up-delay-3">
            Premium land acquisitions across Nigeria most strategic locations.
            We connect discerning buyers to land that appreciates, protects, and endures.
          </p>

         
          <div className="flex flex-col sm:flex-row gap-4 fade-up fade-up-delay-4">
            <Link
              href="#properties"
              className="text-xs tracking-widest uppercase bg-[#C9A84C] text-[#0D0D0D] px-8 py-4 hover:bg-[#E8D5A3] transition-all duration-300 text-center font-medium"
            >
              View Properties
            </Link>

            <Link
              href="#contact"
              className="text-xs tracking-widest uppercase border border-[#333] text-[#F5F0E8] px-8 py-4 hover:border-[#C9A84C] transition-all duration-300 text-center"
            >
              Book Consultation
            </Link>
          </div>

          
          <div className="flex gap-12 mt-20 fade-up fade-up-delay-5">
            {[
              { number: '1,300+', label: 'Hectares Available' },
              { number: '₦215M', label: 'Portfolio Value' },
              { number: '500+', label: 'Happy Clients' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl text-[#C9A84C] font-light">
                  {stat.number}
                </div>
                <div className="text-xs tracking-widest uppercase text-[#888880] mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 fade-up fade-up-delay-5">
        <span className="text-xs tracking-widest uppercase text-[#888880]">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[#C9A84C] to-transparent"></div>
      </div>
    </section>
  )
}