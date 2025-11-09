import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero3D() {
  const [SplineComp, setSplineComp] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let mounted = true;
    import('@splinetool/react-spline')
      .then((mod) => {
        if (mounted) setSplineComp(() => mod.default);
      })
      .catch(() => {
        if (mounted) setFailed(true);
      });
    return () => {
      mounted = false;
    };
  }, []);

  const Background = () => (
    <div className="absolute inset-0">
      {SplineComp && !failed ? (
        <SplineComp
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      ) : (
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1E3A5F] via-[#0C1A2B] to-black" />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0C1A2B]/60 via-[#0C1A2B]/70 to-[#0C1A2B] pointer-events-none" />
    </div>
  );

  return (
    <section id="home" className="relative min-h-[92vh] pt-20 flex items-center bg-[#0C1A2B] overflow-hidden">
      <Background />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <p className="text-[#F29227] font-semibold tracking-wider uppercase">Pakistan's Leading EPS Manufacturer</p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Precision Thermopole Solutions for Modern Industry
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            Thermopole sheets, insulated boxes, roof panels, pipe insulation, decorative shapes, and custom packaging—engineered for performance and reliability.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#products" className="inline-flex items-center gap-2 bg-[#F29227] text-[#111111] font-semibold px-5 py-3 rounded-md shadow hover:bg-[#e1841f] transition">
              Explore Products <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 bg-white/10 text-white hover:bg-white/15 px-5 py-3 rounded-md border border-white/10 transition">
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
