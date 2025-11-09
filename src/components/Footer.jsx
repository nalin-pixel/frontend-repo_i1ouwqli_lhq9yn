export default function Footer() {
  return (
    <footer id="contact" className="bg-[#111111] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-md bg-gradient-to-br from-[#F29227] to-amber-500 flex items-center justify-center text-[#111111] font-extrabold">FT</div>
              <p className="font-semibold">Friends Thermopole Industry</p>
            </div>
            <p className="text-white/70 max-w-sm">Leading Pakistani manufacturer of EPS products for insulation, packaging, and industrial applications.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-white/90">Contact</h4>
            <ul className="space-y-2 text-white/70">
              <li>+92 300 123 4567</li>
              <li>sales@friendsthermopole.com</li>
              <li>Karachi, Pakistan</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-white/90">Quick Links</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#products" className="hover:text-white">Products</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#industries" className="hover:text-white">Industries</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-white/90">Request a Quote</h4>
            <p className="text-white/70 mb-3">Tell us about your requirements. Our team will respond within 24 hours.</p>
            <a href="#" className="inline-flex items-center justify-center bg-[#F29227] text-[#111111] font-semibold px-4 py-2 rounded-md hover:bg-[#e1841f] transition">Get Started</a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-sm text-white/60">© {new Date().getFullYear()} Friends Thermopole Industry. All rights reserved.</div>
      </div>
    </footer>
  );
}
