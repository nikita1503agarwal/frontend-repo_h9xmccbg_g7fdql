export default function CTA() {
  return (
    <section id="contact" className="relative bg-black text-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(400px_200px_at_10%_50%,rgba(236,72,153,0.15),transparent),radial-gradient(400px_200px_at_90%_40%,rgba(6,182,212,0.15),transparent)]" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold">Let’s produce something exceptional</h2>
        <p className="mt-4 text-zinc-300">Tell us a bit about your goals and we’ll reply within 24 hours.</p>
        <form className="mt-10 grid sm:grid-cols-2 gap-4 text-left">
          <input className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Name" />
          <input className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Email" type="email" />
          <input className="sm:col-span-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Company" />
          <textarea rows="4" className="sm:col-span-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Project details" />
          <button className="sm:col-span-2 rounded-lg bg-white text-black px-6 py-3 font-medium hover:bg-zinc-200 transition">Request a quote</button>
        </form>
        <p className="mt-4 text-xs text-zinc-400">By submitting, you agree to our terms and privacy policy.</p>
      </div>
    </section>
  )
}
