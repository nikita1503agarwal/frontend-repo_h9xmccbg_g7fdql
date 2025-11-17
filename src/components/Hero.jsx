import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.15),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.15),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(34,197,94,0.12),transparent_35%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Now booking for Q4 productions
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-white via-white to-zinc-300 bg-clip-text text-transparent">
            Production studio crafting standout visuals
          </h1>
          <p className="mt-6 text-lg text-zinc-300 max-w-xl">
            We partner with brands to produce cinematic commercials, product films, and social content with a technology-first approach.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white text-black px-5 py-3 font-medium hover:bg-zinc-200 transition">Start a project</a>
            <a href="#work" className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 font-medium text-white hover:bg-white/10 transition">See our work</a>
          </div>
        </div>
      </div>
    </section>
  )
}
