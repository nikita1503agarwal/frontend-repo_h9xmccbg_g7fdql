import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/10 dark:bg-black/30 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between h-16 px-4">
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-violet-500 to-cyan-400 grid place-items-center shadow-[0_0_30px_rgba(139,92,246,0.6)]">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-white font-semibold tracking-wide">Blue Studio</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-sm text-zinc-300 hover:text-white transition">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="text-sm px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-zinc-200 transition">
                Get a Quote
              </a>
            </nav>

            <button className="md:hidden inline-flex items-center justify-center h-10 w-10 text-white/90" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 pb-4">
              <nav className="flex flex-col gap-2 pt-3">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} className="text-sm text-zinc-200 hover:text-white py-2">
                    {item.label}
                  </a>
                ))}
                <a href="#contact" className="text-sm px-4 py-2 rounded-lg bg-white text-black font-medium text-center">
                  Get a Quote
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
