import { Camera, Cpu, Palette, Triangle } from 'lucide-react'

export default function Features() {
  const items = [
    {
      icon: Camera,
      title: 'End-to-end production',
      desc: 'From concept to delivery, we handle script, shoot, edit, VFX, and sound.'
    },
    {
      icon: Cpu,
      title: 'Tech-forward workflow',
      desc: '3D, AI-assisted editing, and cloud collaboration to deliver faster.'
    },
    {
      icon: Palette,
      title: 'Distinct visual identity',
      desc: 'Clean, minimal, and premium aesthetic that elevates your brand.'
    },
    {
      icon: Triangle,
      title: 'On-time, on-budget',
      desc: 'Clear scopes, transparent pricing, and reliable delivery.'
    },
  ]

  return (
    <section id="services" className="relative bg-black text-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_20%,rgba(99,102,241,0.15),transparent),radial-gradient(600px_200px_at_80%_30%,rgba(20,184,166,0.15),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-violet-500 to-cyan-400 grid place-items-center mb-4 shadow-[0_0_30px_rgba(139,92,246,0.4)]">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
