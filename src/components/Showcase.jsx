export default function Showcase() {
  const work = [
    { title: 'Lucent Headphones', tag: 'Product Film', img: 'https://images.unsplash.com/photo-1518443895914-6f7417f6aaa7?q=80&w=1400&auto=format&fit=crop' },
    { title: 'Neon Streets', tag: 'Fashion', img: 'https://images.unsplash.com/photo-1517404215738-15263e9f9178?q=80&w=1400&auto=format&fit=crop' },
    { title: 'Aero Dynamics', tag: 'Automotive', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400&auto=format&fit=crop' },
  ]

  return (
    <section id="work" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">Selected work</h2>
          <a href="#" className="text-sm text-zinc-300 hover:text-white">View all</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {work.map((item) => (
            <div key={item.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img src={item.img} alt={item.title} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs text-zinc-300">{item.tag}</p>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
