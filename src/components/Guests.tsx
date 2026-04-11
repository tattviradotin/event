import { Linkedin } from 'lucide-react';
const SG = 'https://res.cloudinary.com/dvceoq11s/image/upload/v1775815144/SG_zzq0qx.jpg';
const VG = 'https://res.cloudinary.com/dvceoq11s/image/upload/v1775815146/VG_fcvvfr.jpg';

const guests = [
  {
    name: 'Supriya G M',
    role: 'RPA developer ',
    org: 'TCS, Bengaluru',
    photo: SG,
    linkedin: 'https://www.linkedin.com/in/supriya-m-reddy-67a94318b?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    bio: 'RPA Developer at Tata Consultancy Services, specializing in automation solutions for ABN AMRO Bank using Power Automate and Kofax Kapow, with strong expertise in Azure and Agile delivery.',
    type: 'Judge',
    position: 'object-[center_40%]',
  },
  {
    name: 'Vanditha Jain',
    role: 'Senior Associate Consultant',
    org: 'TCS, Bengaluru',
    photo: VG,
    linkedin: 'https://www.linkedin.com/in/vanditha-hitha-5342330?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    bio: 'Senior Associate Consultant at Tata Consultancy Services, specializing in RPA solutions using Kofax Kapow and Power Automate, with expertise in Python, DevOps, and Agile methodologies.',
    type: 'Judge',
    position: 'object-[center_100%]',
  }
];

export default function Guests() {
  return (
    <section id="guests" className="py-16 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-amber-500 text-xs tracking-[0.4em] uppercase font-semibold mb-4">
            Distinguished Guests
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Meet Our Judges</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Learn from and be evaluated by some of the brightest minds in AI and technology.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {guests.map((guest) => (
            <div
              key={guest.name}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-80 group relative rounded-2xl border border-white/5 bg-white/2 overflow-hidden hover:border-amber-500/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={guest.photo}
                  alt={guest.name}
                  className={`w-full h-full object-cover ${guest.position} scale-130 opacity-90 group-hover:opacity-100 group-hover:scale-145 transition-all duration-500`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 rounded bg-amber-500 text-black text-xs font-bold tracking-wider">
                    {guest.type}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl text-white font-bold">{guest.name}</h3>
                <p className="text-amber-500 text-sm mt-1">{guest.role}</p>
                <p className="text-gray-400 text-xs mt-1">{guest.org}</p>
                <p className="text-gray-500 text-sm mt-4 leading-relaxed line-clamp-4">{guest.bio}</p>
                <div className="flex gap-4 mt-6">
                  <a href={guest.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500 transition-colors">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
