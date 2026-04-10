import { Linkedin } from 'lucide-react';

import hod from '../images/HOD.png';
import gp from '../images/GP.png';
import pr from '../images/PR.png';
import v from '../images/v.png';
import pe from '../images/PE.png';

const faculty = [
  {
    name: 'Dr. Prathima V R',
    role: 'Event Patron',
    dept: 'Head of Department, CSE-AI',
    photo: hod,
  },
  {
    name: 'D. Geetha Pawar',
    role: 'Faculty Coordinator',
    dept: 'Associate Professor, CSE-AI',
    photo: gp,
  },
  {
    name: 'Prof. Prathibha A',
    role: 'Faculty Coordinator',
    dept: 'Assistant Professor, CSE-AI',
    photo: pr,
  },
  {
    name: 'Prof. Vimala Devi R',
    role: 'Faculty Coordinator',
    dept: 'Assistant Professor, CSE-AI',
    photo: v,
  },
  {
    name: 'Prof. Preeti M Handiwadi',
    role: 'Faculty Coordinator',
    dept: 'Assistant Professor, CSE-AI',
    photo: pe,
  },
];


function PersonCard({
  photo,
  name,
  role,
  sub,
}: {
  photo: string;
  name: string;
  role: string;
  sub: string;
}) {
  return (
    <div className="group flex flex-col items-center text-center p-5 rounded-2xl border border-white/5 bg-white/2 hover:border-amber-500/20 hover:bg-amber-500/3 transition-all duration-300">
      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-amber-500/20 mb-4">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <h4 className="text-white font-bold text-sm">{name}</h4>
      <p className="text-amber-500 text-xs mt-0.5 font-medium">{role}</p>
      <p className="text-gray-600 text-xs mt-0.5">{sub}</p>
      <div className="flex gap-3 mt-3">
        <a href="#" className="text-gray-600 hover:text-amber-500 transition-colors">
          <Linkedin size={14} />
        </a>
      </div>
    </div>
  );
}

export default function Organizers() {
  return (
    <section id="organizers" className="pt-6 pb-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-amber-500 text-xs tracking-[0.4em] uppercase font-semibold mb-4">
            The Team
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Meet the Organizers</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            A dedicated team of faculty working tirelessly to make this event an unforgettable experience.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-center text-gray-400 text-xs tracking-[0.4em] uppercase font-semibold mb-8">
            Faculty Coordinators
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-2xl mx-auto mb-6">
            {faculty.slice(0, 2).map((f) => (
              <div key={f.name} className="w-full sm:w-1/2">
                <PersonCard photo={f.photo} name={f.name} role={f.role} sub={f.dept} />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {faculty.slice(2, 5).map((f) => (
              <PersonCard key={f.name} photo={f.photo} name={f.name} role={f.role} sub={f.dept} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
