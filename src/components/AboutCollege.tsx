import { useState, useEffect } from 'react';
import { BookOpen, GraduationCap, Building2, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../images/image 1.png';
import img2 from '../images/Image 2.png';
import img3 from '../images/Image 3.png';
import img4 from '../images/Image 4.png';
import img5 from '../images/Image 5.png';
import img6 from '../images/Image 6.png';
import img7 from '../images/Image 7.png';
import img8 from '../images/Image 8.png';
import img9 from '../images/Image 9.png';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const facts = [
  { icon: <GraduationCap size={20} />, value: '2001', label: 'Established' },
  { icon: <BookOpen size={20} />, value: '15+', label: 'Programs' },
  { icon: <Building2 size={20} />, value: '10K+', label: 'Alumni' },
  { icon: <Globe size={20} />, value: 'NAAC B++', label: 'Accreditation' },
];

export default function AboutCollege() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="college" className="py-28 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-amber-500/5 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden border border-white/5">
              <img
                key={currentIdx}
                src={images[currentIdx]}
                alt={`College Campus ${currentIdx + 1}`}
                className="w-full h-96 object-cover opacity-70 animate-in fade-in duration-500"
              />
              <button
                onClick={() => setCurrentIdx((i) => (i === 0 ? images.length - 1 : i - 1))}
                className="absolute left-4 top-[35%] w-10 h-10 flex items-center justify-center rounded-full bg-black/60 text-white hover:bg-amber-500 hover:text-black transition-colors z-20"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => setCurrentIdx((i) => (i === images.length - 1 ? 0 : i + 1))}
                className="absolute right-4 top-[35%] w-10 h-10 flex items-center justify-center rounded-full bg-black/60 text-white hover:bg-amber-500 hover:text-black transition-colors z-20"
              >
                <ChevronRight size={24} />
              </button>
              <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-3 py-2 rounded-full border border-white/10 z-20">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIdx(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === currentIdx ? 'w-4 bg-amber-500' : 'w-1.5 bg-white/40 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="grid grid-cols-4 gap-3">
                  {facts.map((f) => (
                    <div key={f.label} className="text-center">
                      <div className="flex justify-center text-amber-500 mb-1">{f.icon}</div>
                      <div className="text-white font-black text-lg">{f.value}</div>
                      <div className="text-gray-400 text-xs tracking-widest uppercase">{f.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-amber-500 text-xs tracking-[0.4em] uppercase font-semibold mb-4">
              Our Institution
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              A Legacy of
              <span className="block text-amber-500">Academic Excellence</span>
            </h2>
            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              Sri Venkateshwara College of Engineering has emerged as a dynamic hub of technical education since its establishment in 2001. Known for its strong academic foundation, modern infrastructure, and a commitment to nurturing innovation, the institution continues to shape skilled professionals ready to meet global industry demands.
            </p>
            <p className="mt-4 text-gray-500 leading-relaxed">
              The Department of CSE (Artificial Intelligence) is one of the most dynamic departments on campus, fostering innovation through emerging technologies, interdisciplinary learning, and strong industry engagement. It actively promotes research, hands-on projects, and student-driven initiatives that reflect real-world impact and growing recognition across academic and professional communities.

            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                'NAAC B++ Accredited',
                'NBA Accredited Programs',
                'Approved by AICTE',
                'Ranked among Top Private Engineering Colleges (ARIIA Band B – Top 50)',
              ].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 rounded-full border border-amber-500/20 text-amber-500/80 text-xs tracking-wider"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
