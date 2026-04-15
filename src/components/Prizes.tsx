import { Award, Star, Gift } from 'lucide-react';

const prizes = [
  {
    position: '1st Place',
    label: 'Gold Award',
    amount: '₹5,000',
    icon: <Award size={32} />,
    perks: ['Cash Prize', 'Internship Opportunity', 'Certificate of Excellence'],
    accent: 'from-amber-400 to-amber-600',
    border: 'border-amber-500/40',
    bg: 'bg-amber-500/8',
    glow: 'shadow-amber-500/20',
    featured: true,
  },
  {
    position: '2nd Place',
    label: 'Silver Award',
    amount: '₹3,000',
    icon: <Star size={28} />,
    perks: ['Cash Prize', 'Certificate of Excellence', 'Internship Referral'],
    accent: 'from-gray-300 to-gray-500',
    border: 'border-gray-500/30',
    bg: 'bg-white/3',
    glow: 'shadow-gray-400/10',
    featured: false,
  },
  {
    position: '3rd Place',
    label: 'Bronze Award',
    amount: '₹2,000',
    icon: <Gift size={26} />,
    perks: ['Cash Prize', 'Certificate of Excellence'],
    accent: 'from-orange-700 to-orange-900',
    border: 'border-orange-700/30',
    bg: 'bg-orange-900/5',
    glow: 'shadow-orange-700/10',
    featured: false,
  },
];



export default function Prizes() {
  return (
    <section id="prizes" className="pt-16 pb-6 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-amber-500 text-xs tracking-[0.4em] uppercase font-semibold mb-4">
            Rewards
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Prizes & Recognition</h2>
        </div>

        <div className="flex flex-col md:flex-row items-end justify-center gap-6 mb-16">
          {[prizes[1], prizes[0], prizes[2]].map((prize) => (
            <div
              key={prize.position}
              className={`relative w-full md:w-72 rounded-3xl border p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 shadow-2xl ${prize.border} ${prize.bg} ${prize.glow} ${
                prize.featured ? 'md:-translate-y-8 md:scale-110' : ''
              }`}
            >
              {prize.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-500 rounded-full text-black text-xs font-bold tracking-widest uppercase">
                  Top Prize
                </div>
              )}
              <div className={`bg-gradient-to-br ${prize.accent} bg-clip-text text-transparent mb-4`}>
                {prize.icon}
              </div>
              <p className="text-gray-500 text-xs tracking-widest uppercase mb-1">{prize.position}</p>
              <h3 className="text-white font-black text-lg mb-2">{prize.label}</h3>
              <div className={`text-4xl font-black bg-gradient-to-br ${prize.accent} bg-clip-text text-transparent mb-6`}>
                {prize.amount}
              </div>
              <ul className="flex flex-col gap-2 w-full">
                {prize.perks.map((perk) => (
                  <li key={perk} className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-amber-500 flex-shrink-0" />
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
