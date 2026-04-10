import { Brain, Lightbulb, Trophy, Zap } from 'lucide-react';

const highlights = [
  {
    icon: <Brain size={22} />,
    title: 'AI-Driven Innovation',
    desc: 'Showcase projects that harness the power of artificial intelligence, machine learning, and data science to solve real-world problems.',
  },
  {
    icon: <Lightbulb size={22} />,
    title: 'Interdisciplinary Ideas',
    desc: 'We welcome projects spanning healthcare, finance, agriculture, smart cities, education, and beyond — powered by technology.',
  },
  {
    icon: <Trophy size={22} />,
    title: 'Compete & Win',
    desc: 'Top teams receive cash prizes, internship opportunities, certificates of excellence, and recognition from industry leaders.',
  },
  {
    icon: <Zap size={22} />,
    title: 'Expert Mentorship',
    desc: 'Get direct feedback from professionals and academic experts who will evaluate and guide your projects.',
  },
];

export default function AboutEvent() {
  return (
    <section id="about" className="py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-amber-500 text-xs tracking-[0.4em] uppercase font-semibold mb-4">
              About the Event
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Where Student Projects
              <span className="block text-amber-500">Shape Tomorrow</span>
            </h2>
            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              AI POWERED SOLUTION EXPO 2026 is the annual flagship project presentation competition organized by Sri Venkateshwara College of Engineering, Department of CSE (Artificial Intelligence). It is a platform where
              brilliant student minds present their innovations before a distinguished panel of
              judges from academia and industry.
            </p>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Open to all undergraduate and postgraduate students, this event celebrates creativity, technical depth, and the spirit of problem-solving. Whether you're building an AI diagnostic tool, designing a sustainable solution, developing innovative hardware, exploring research ideas, or crafting a next-gen system — this stage is yours.

            </p>
            <div className="mt-10 flex flex-wrap gap-6">
              {[
                { num: '100+', label: 'Expected Participants' },
                { num: '25+', label: 'Project Teams' },
                { num: '5+', label: 'Expert Judges' },
                { num: '₹15k', label: 'Prize Pool' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-3xl font-black text-amber-500">{stat.num}</span>
                  <span className="text-gray-500 text-xs tracking-widest uppercase mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group p-6 rounded-2xl border border-white/5 bg-white/2 hover:border-amber-500/20 hover:bg-amber-500/3 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 mb-4 group-hover:bg-amber-500/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
