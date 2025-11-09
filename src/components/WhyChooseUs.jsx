import { ShieldCheck, Building2, Leaf, Award } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Certified Quality',
    desc: 'Manufactured under strict QA with full traceability and compliance.'
  },
  {
    icon: Building2,
    title: 'Modern Production',
    desc: 'High-capacity moulding, CNC cutting, and rapid prototyping.'
  },
  {
    icon: Leaf,
    title: 'Sustainable',
    desc: 'Recyclable EPS with responsible sourcing and minimal waste.'
  },
  {
    icon: Award,
    title: 'Trusted by Leaders',
    desc: 'Serving construction, pharma, food, HVAC and OEM industries.'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0C1A2B]">Why Choose Us</h2>
          <p className="text-[#1E3A5F] mt-2">Precision, reliability, and service excellence</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-xl border border-black/5 bg-[#F2F2F2]">
              <div className="w-12 h-12 rounded-lg bg-[#0C1A2B] text-[#F29227] flex items-center justify-center mb-4">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#0C1A2B]">{f.title}</h3>
              <p className="mt-2 text-[#1E3A5F]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
