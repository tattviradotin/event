import { Cpu, Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const links = [
  { label: 'About Event', href: '#about' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Prizes', href: '#prizes' },
  { label: 'Guests & Judges', href: '#guests' },
  { label: 'Collaborators', href: '#collaborators' },
  { label: 'Organizers', href: '#organizers' },
  { label: 'Terms & Conditions', href: '#terms' },
];

const social = [
  { icon: <Instagram size={18} />, href: '#' },
  { icon: <Twitter size={18} />, href: '#' },
  { icon: <Linkedin size={18} />, href: '#' },
  { icon: <Youtube size={18} />, href: '#' },
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded bg-amber-500 flex items-center justify-center">
                <Cpu size={18} className="text-black" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-sm tracking-widest uppercase">CSE ( Artificial Intelligence)</span>
                <span className="text-amber-500 text-xs tracking-[0.2em] uppercase">AI Powered Solution Expo 2026</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mt-4 max-w-xs">
              The Annual Project Presentation Competition of the Department of Computer Science Engineering -
              Artificial Intelligence.
            </p>
            <div className="flex gap-4 mt-6">
              {social.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-gray-600 hover:text-amber-500 hover:border-amber-500/30 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => handleNav(l.href)}
                    className="text-gray-500 hover:text-amber-400 text-sm transition-colors text-left"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-500 text-sm leading-relaxed">
                  Dept. of CSE-AI, Sri Venkateshwara College of Engineering,<br />
                  Vidyanagar,Kempegowda International Airport Road, Bengaluru - 562159
                </span>
              </li>
            </ul>

            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm tracking-widest uppercase rounded transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25"
            >
              Register Now
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-xs">
            &copy; 2026 Dept. of CSE-AI, Sri Venkateshwara College of Engineering. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs">
            Organized by the CSE-AI Student Council &mdash; AI Powered Solution Expo 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
