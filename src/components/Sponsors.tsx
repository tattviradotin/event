import tattviraLogo from '../images/WHITE_TATTVIRA.png';
import llpLogo from '../images/llp.jpg';

const tiers = [
  {
    tier: 'Platinum Collaborators',
    sponsors: [
      { name: 'Tattvira Private Limited', logo: tattviraLogo, desc: 'Leading AI solution providers' },
    ],
    cardClass: 'border-amber-500/30 bg-amber-500/5 col-span-1',
    nameClass: 'text-2xl',
  },
  {
    tier: 'Gold Collaborators',
    sponsors: [
      { name: 'Github Club, CSE-AI', logo: null, desc: 'Student Community' },
      { name: 'Student Innovation Council', logo: null, desc: 'Innovation Partner' },
      { name: 'Startup Club, CSE-AI', logo: null, desc: 'Entrepreneurship Hub' },
    ],
    cardClass: 'border-white/10 bg-white/2 col-span-1',
    nameClass: 'text-xl',
  },
];

export default function Sponsors() {
  return (
    <section id="collaborators" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-amber-500 text-xs tracking-[0.4em] uppercase font-semibold mb-4">
            Our Partners
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Collaborators & Partners</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            We are grateful to our collaborators who make this event possible and provide incredible
            opportunities to participants.
          </p>

          {/* Key Partners Section */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-12 md:gap-20 p-8 sm:p-12 rounded-3xl border border-white/5 bg-white/2 backdrop-blur-xl">
            <div className="flex flex-col items-center justify-between gap-6 w-full sm:w-72">
              <div className="h-20 flex items-center justify-center w-full">
                <img
                  src={llpLogo}
                  alt="LLP"
                  className="max-h-full w-auto object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
              <span className="text-white font-black text-[20px] tracking-[0.2em] uppercase text-center leading-relaxed">
                REVERSEGAZE TECHNOLOGIES LLP
              </span>
            </div>

            <div className="hidden sm:block w-px bg-white/10" />

            <div className="flex flex-col items-center justify-between gap-6 w-full sm:w-72">
              <div className="h-20 flex items-center justify-center w-full">
                <img
                  src={tattviraLogo}
                  alt="Tattvira"
                  className="max-h-full w-auto object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
              <span className="text-white font-black text-[20px] tracking-[0.2em] uppercase text-center leading-relaxed">
                TATTVIRA PRIVATE LIMITED
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
