import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const sections = [
  {
    title: 'Eligibility',
    items: [
      'The competition is open to all currently enrolled undergraduate and postgraduate students of the institution.',
      'Teams must consist of 2 to 4 members from the same or different departments.',
      'Each participant may be a member of only one team.',
      'Faculty members and research scholars are not eligible to compete but may serve as mentors.',
    ],
  },
  {
    title: 'Project Guidelines',
    items: [
      'Projects must be original work developed by the registered team members.',
      'Projects that have won prizes in other competitions must be disclosed during registration.',
      'Teams must submit a working prototype or a high-fidelity demo for evaluation.',
      'Plagiarism or use of entirely pre-existing open-source projects without substantial modification is strictly prohibited.',
    ],
  },
  {
    title: 'Registration & Submission',
    items: [
      'Teams must complete the online registration form before April 20, 2026.',
      'A project abstract of 300 words must be submitted along with the registration form.',
      'Incomplete submissions will be disqualified without prior notice.',
    ],
  },
  {
    title: 'Evaluation Criteria',
    items: [
      'Projects will be evaluated on Innovation & Originality (25%), Technical Complexity (25%), Practicality & Impact (25%), and Presentation Quality (25%).',
      'A panel of at least three judges will evaluate each project independently.',
      'The decision of the judges is final and binding.',
      'Judges reserve the right to ask any technical question related to the submitted project.',
    ],
  },
  {
    title: 'Code of Conduct',
    items: [
      'All participants must conduct themselves professionally and respectfully.',
      'Any form of harassment, discrimination, or unsportsmanlike behavior will result in immediate disqualification.',
      'Use of AI-generated content for reports or presentations must be clearly disclosed.',
    ],
  },
  {
    title: 'Intellectual Property',
    items: [
      'Teams retain full intellectual property rights to their submitted projects.',
      'By participating, teams grant the organizing institution the right to feature their project in college publications, social media, and promotional materials.',
      'The institution will not commercialize or exploit team projects without explicit written consent.',
    ],
  },
];

function Accordion({ title, items }: { title: string; items: string[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/5 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-white/2 transition-colors"
      >
        <span className="text-white font-semibold">{title}</span>
        <ChevronDown
          size={18}
          className={`text-amber-500 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 border-t border-white/5 bg-white/1">
          <ul className="mt-4 space-y-3">
            {items.map((item, i) => (
              <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                <span className="text-amber-500 mt-1 flex-shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Terms() {
  return (
    <section id="terms" className="py-16 bg-[#050505]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-amber-500 text-xs tracking-[0.4em] uppercase font-semibold mb-4">
            Rules & Regulations
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Terms & Conditions</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Please read all terms carefully before registering. By submitting your application, you
            agree to abide by these rules.
          </p>
        </div>

        <div className="space-y-3">
          {sections.map((s) => (
            <Accordion key={s.title} title={s.title} items={s.items} />
          ))}
        </div>
      </div>
    </section>
  );
}
