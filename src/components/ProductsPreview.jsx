import { motion } from 'framer-motion';
import { Package, Box, Grid, Layers, Cube, Cog } from 'lucide-react';

const products = [
  { title: 'Thermopole Sheets', icon: Layers, href: '#', desc: 'High-density EPS sheets for insulation and packaging.' },
  { title: 'Insulated Boxes', icon: Box, href: '#', desc: 'Food, pharma and cold-chain transport grade boxes.' },
  { title: 'Roof Insulation Panels', icon: Grid, href: '#', desc: 'Energy-efficient roofing insulation panels.' },
  { title: 'Pipe Insulation', icon: Package, href: '#', desc: 'Precision-cut EPS pipe sections for HVAC and process lines.' },
  { title: 'Decorative EPS Shapes', icon: Cube, href: '#', desc: 'Architectural mouldings and creative shapes.' },
  { title: 'Custom EPS Packaging', icon: Cog, href: '#', desc: 'OEM protective foam packaging solutions.' },
];

export default function ProductsPreview() {
  return (
    <section id="products" className="relative bg-[#F2F2F2] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0C1A2B]">Products</h2>
            <p className="text-[#1E3A5F] mt-2">Engineered EPS solutions for demanding environments</p>
          </div>
          <a href="#" className="text-[#F29227] hover:underline font-semibold">View all</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group bg-white rounded-xl shadow-sm border border-black/5 overflow-hidden"
            >
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-[#0C1A2B] text-[#F29227] flex items-center justify-center mb-4">
                  <p.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-[#0C1A2B]">{p.title}</h3>
                <p className="mt-2 text-[#1E3A5F]">{p.desc}</p>
              </div>
              <div className="h-1 bg-gradient-to-r from-[#F29227] via-amber-400 to-[#F29227] opacity-0 group-hover:opacity-100 transition" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
