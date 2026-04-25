import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-[#1A1A1A] py-12 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 border border-[#C9A84C] rotate-45 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-[#C9A84C]"></div>
          </div>
          <span className="font-display text-sm tracking-widest text-[#F5F0E8]">
            GLORIA<span className="text-[#C9A84C]">BUILDS</span>
          </span>
        </div>

        <p className="text-xs tracking-widest uppercase text-[#888880]">
          © 2026 GloriaBuilds. All rights reserved.
        </p>

        <div className="flex gap-8">
          {['Properties', 'Services', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs tracking-widest uppercase text-[#888880] hover:text-[#C9A84C] transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}