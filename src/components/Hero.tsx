import { ArrowRight, Calendar, Users } from 'lucide-react';

export default function Hero() {
  const handleApply = () => {
    window.open('https://forms.gle/wB85hFJQGzHXXBAU7', '_blank');
  };

  const scrollToAbout = () => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-28 sm:pt-36 lg:pt-48 pb-20 overflow-hidden bg-black"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-amber-500/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-amber-600/5 blur-[100px]" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-amber-700/5 blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/5 mb-8">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span className="text-amber-400 text-xs tracking-[0.3em] uppercase font-medium">
            Registrations Open
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight mb-4">
          ARTIFICIAL INTELLIGENCE 
          <span className="block text-amber-500">SOLUTION EXPO</span>
          <span className="block text-3xl md:text-4xl lg:text-5xl font-light text-gray-400 tracking-[0.2em] mt-2">
            2026
          </span>
          <span className="block text-sm md:text-base font-bold text-white tracking-[0.4em] uppercase mt-6">
            Organised by CSE (Artificial Intelligence)
          </span>
        </h1>

        <p className="mt-8 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          A premier showcase where innovation meets excellence. <br />
          Present your vision, compete with the best, and redefine the future.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleApply}
            className="group flex items-center gap-3 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm tracking-widest uppercase rounded transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105"
          >
            Apply Now
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={scrollToAbout}
            className="px-8 py-4 border border-white/10 hover:border-amber-500/40 text-white hover:text-amber-400 font-medium text-sm tracking-widest uppercase rounded transition-all duration-300 hover:bg-amber-500/5"
          >
            Learn More
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">
          {[
            { icon: <Calendar size={18} />, label: 'Event Date', value: 'April 21, 2026' },
            { icon: <Users size={18} />, label: 'Team Size', value: '2 – 4 Members' },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-2 px-4 py-4 rounded-xl border border-white/5 bg-white/3 backdrop-blur-sm"
            >
              <span className="text-amber-500">{item.icon}</span>
              <span className="text-gray-500 text-xs tracking-widest uppercase">{item.label}</span>
              <span className="text-white font-semibold text-sm">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-gray-600 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
      </div>
    </section>
  );
}
