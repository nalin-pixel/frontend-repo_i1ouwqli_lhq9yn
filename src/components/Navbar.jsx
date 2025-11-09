import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0C1A2B]/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-gradient-to-br from-[#F29227] to-amber-500 flex items-center justify-center text-[#111111] font-extrabold">
              FT
            </div>
            <div className="leading-tight">
              <p className="text-white font-semibold">Friends Thermopole Industry</p>
              <p className="text-xs text-white/70">Premium EPS Manufacturing</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+923001234567"
              className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white px-3 py-2 rounded-md border border-white/10 hover:border-white/20 transition"
            >
              <Phone className="w-4 h-4" /> +92 300 123 4567
            </a>
            <a
              href="mailto:sales@friendsthermopole.com"
              className="inline-flex items-center gap-2 text-sm text-black bg-[#F29227] hover:bg-[#e1841f] px-3 py-2 rounded-md transition"
            >
              <Mail className="w-4 h-4" /> Get a Quote
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#0C1A2B] border-t border-white/10">
          <nav className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-white/80 hover:text-white px-2 py-2 rounded-md hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2">
              <a
                href="tel:+923001234567"
                className="flex-1 inline-flex items-center justify-center gap-2 text-sm text-white/90 hover:text-white px-3 py-2 rounded-md border border-white/10 hover:border-white/20 transition"
              >
                <Phone className="w-4 h-4" /> Call
              </a>
              <a
                href="mailto:sales@friendsthermopole.com"
                className="flex-1 inline-flex items-center justify-center gap-2 text-sm text-black bg-[#F29227] hover:bg-[#e1841f] px-3 py-2 rounded-md transition"
              >
                <Mail className="w-4 h-4" /> Quote
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
