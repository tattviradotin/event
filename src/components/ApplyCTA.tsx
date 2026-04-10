import { ArrowRight, FileText, Users } from 'lucide-react';

const steps = [
  { icon: <Users size={20} />, step: '01', title: 'Form Your Team', desc: 'Gather 2-4 members and decide on a project idea.' },
  { icon: <FileText size={20} />, step: '02', title: 'Submit Abstract', desc: 'Write a 300-word abstract and fill the application form.' },
];

export default function ApplyCTA() {
  return (
    <section className="py-28 bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-[120px]" />
      </div>
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-500 text-xs tracking-[0.4em] uppercase font-semibold mb-4">
            Get Started
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Ready to Present Your
            <span className="block text-amber-500">Innovation?</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Registrations close on April 20, 2026. Don't miss your chance to compete on the biggest
            stage of the year.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto gap-6 mb-12">
          {steps.map((s) => (
            <div
              key={s.step}
              className="relative p-6 rounded-2xl border border-white/5 bg-white/2 text-center"
            >
              <div className="text-6xl font-black text-white/3 absolute top-4 right-5 leading-none">
                {s.step}
              </div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 mx-auto mb-4">
                {s.icon}
              </div>
              <h3 className="text-white font-bold mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://forms.gle/wB85hFJQGzHXXBAU7"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-amber-500 hover:bg-amber-400 text-black font-black text-base tracking-widest uppercase rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105"
          >
            Apply Now — It's Free
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="mt-4 text-gray-600 text-sm">No registration fee. Open to all enrolled students.</p>
        </div>
      </div>
    </section>
  );
}
