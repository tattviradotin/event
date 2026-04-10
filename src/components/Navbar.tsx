import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../images/logo.png';
import tattviraLogo from '../images/WHITE_TATTVIRA.png';

const navLinks = [
  { label: 'College', href: '#college' },
  { label: 'About', href: '#about' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Prizes', href: '#prizes' },
  { label: 'Guests', href: '#guests' },
  { label: 'Collaborators', href: '#collaborators' },
  { label: 'Organizers', href: '#organizers' },
  { label: 'Terms', href: '#terms' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = `#${entry.target.id}`;
            // When the hero section is visible, clear the active link
            if (id === '#hero') {
              setActiveSection('');
            } else {
              setActiveSection(id);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    // Also observe the hero section to detect when user is at the top
    const heroEl = document.querySelector('#hero');
    if (heroEl) observer.observe(heroEl);

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  const handleNav = (href: string) => {
    setActiveSection(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/95 backdrop-blur-xl border-b border-amber-900/40 py-3 shadow-2xl' : 'bg-black/40 backdrop-blur-md py-5'
      }`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-14">
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between gap-6 py-4">
          <button 
            onClick={() => handleNav('#hero')}
            className="flex-shrink-0 flex flex-col border-l-0 pl-0 max-w-[180px] xl:max-w-none hover:opacity-80 transition-opacity text-left"
          >
            <h1 className="text-white font-black text-xs xl:text-sm tracking-wider uppercase leading-none">CSE (Artificial Intelligence)</h1>
            <p className="text-amber-500 font-bold text-[9px] xl:text-[10px] tracking-[0.15em] xl:tracking-[0.2em] uppercase mt-1">AI-Powered Solution Expo</p>
          </button>

          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-x-4 lg:gap-x-5 xl:gap-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`text-[12px] tracking-[0.2em] uppercase font-bold transition-all duration-300 relative group ${
                    activeSection === link.href ? 'text-amber-500' : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full ${activeSection === link.href ? 'w-full' : ''}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="flex-shrink-0 flex items-center gap-6">
            <a
              href="https://forms.gle/wB85hFJQGzHXXBAU7"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-amber-500 hover:bg-amber-400 text-black text-[11px] font-black tracking-widest uppercase rounded-sm transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/40 whitespace-nowrap"
            >
              Apply Now
            </a>
            <div className="border-l border-white/10 pl-6 h-12 flex items-center gap-4">
              <a 
                href="https://www.tattvira.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group block"
              >
                <img 
                  src={tattviraLogo} 
                  alt="Tattvira Logo" 
                  className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
                />
              </a>
              <a 
                href="https://svcengg.edu.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group block"
              >
                <img 
                  src={logo} 
                  alt="College Logo" 
                  className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
                />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex items-center justify-between py-2">
          <a href="#hero" onClick={() => handleNav('#hero')} className="flex items-center gap-3">
            <img src={logo} alt="College Logo" className="h-18 w-auto object-contain" />
          </a>
          
          <button
            className="text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>


      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 top-[80px] bg-black/98 backdrop-blur-xl border-t border-amber-900/20 px-8 py-10 flex flex-col gap-6 overflow-y-auto">
          <button 
            onClick={() => { handleNav('#hero'); setMenuOpen(false); }}
            className="mb-4 text-left"
          >
            <h1 className="text-white font-black text-xl tracking-wider uppercase leading-none hover:text-amber-500 transition-colors">CSE-AI</h1>
            <p className="text-amber-500 text-xs tracking-[0.3em] uppercase mt-2">Solution Expo 2026</p>
          </button>

          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`text-lg tracking-widest uppercase font-bold text-left py-2 border-b border-white/5 ${
                activeSection === link.href ? 'text-amber-500' : 'text-gray-300'
              }`}
            >
              {link.label}
            </button>
          ))}
          
          <a
            href="https://forms.gle/wB85hFJQGzHXXBAU7"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-5 py-4 bg-amber-500 text-black text-sm font-black tracking-widest uppercase rounded text-center shadow-lg shadow-amber-500/20"
          >
            Apply Now
          </a>

        </div>
      )}
    </nav>
  );
}
