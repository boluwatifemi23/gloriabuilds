const properties = [
  {
    id: '01',
    title: 'Ibeju-Lekki Plots',
    location: 'Lagos State',
    size: 'From 500 sqm',
    price: '₦15M',
    tag: 'High Demand',
  },
  {
    id: '02',
    title: 'Epe Waterfront',
    location: 'Lagos State',
    size: 'From 1,000 sqm',
    price: '₦8M',
    tag: 'New Listing',
  },
  {
    id: '03',
    title: 'Mowe Estate Lands',
    location: 'Ogun State',
    size: 'From 300 sqm',
    price: '₦3.5M',
    tag: 'Fast Selling',
  },
]

export default function Properties() {
  return (
    <section id="properties" className="py-32 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6">

       
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="gold-line"></div>
              <span className="text-xs tracking-[0.3em] uppercase text-[#C9A84C]">
                Our Portfolio
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-light leading-tight">
              Available
              <br />
              <em className="text-[#C9A84C]">Properties</em>
            </h2>
          </div>
          <p className="text-[#888880] max-w-sm mt-6 md:mt-0 leading-relaxed">
            Every plot comes with verified title documents, survey plans,
            and full legal backing.
          </p>
        </div>

       
        <div className="grid md:grid-cols-3 gap-px bg-[#1A1A1A]">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-[#0D0D0D] p-10 group hover:bg-[#1A1A1A] transition-colors duration-300 cursor-pointer"
            >
              
              <div className="font-display text-6xl font-light text-[#1A1A1A] group-hover:text-[#242424] transition-colors mb-6">
                {property.id}
              </div>

             
              <span className="text-xs tracking-widest uppercase text-[#C9A84C] border border-[#C9A84C]/30 px-3 py-1">
                {property.tag}
              </span>

             
              <h3 className="font-display text-2xl font-light mt-6 mb-2">
                {property.title}
              </h3>

             
              <p className="text-xs tracking-widest uppercase text-[#888880] mb-8">
                {property.location}
              </p>

              
              <div className="w-full h-px bg-[#1A1A1A] group-hover:bg-[#242424] mb-8 transition-colors"></div>

              
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-xs tracking-widest uppercase text-[#888880] mb-1">
                    Size
                  </div>
                  <div className="text-sm text-[#F5F0E8]">{property.size}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs tracking-widest uppercase text-[#888880] mb-1">
                    From
                  </div>
                  <div className="font-display text-2xl text-[#C9A84C]">
                    {property.price}
                  </div>
                </div>
              </div>

              
              <div className="mt-8 flex items-center gap-2 text-xs tracking-widest uppercase text-[#888880] group-hover:text-[#C9A84C] transition-colors">
                <span>View Details</span>
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}