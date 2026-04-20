import { MapPin } from 'lucide-react';

const events = [
  {
    date: '8:00 AM',
    title: 'Registration Process',
    venue: 'Welcome Centre',
    desc: 'Welcome and check-in for all participating teams. Please arrive on time to collect your event badges and kits.',
    status: 'active',
  },
  {
    date: '10:00 AM',
    title: 'Inaugural Ceremony',
    venue: 'Seminar Hall',
    desc: 'Welcome address by the chief guest and a brief overview of the guidelines for the day.',
    status: 'active',
  },
  {
    date: '10:30 AM',
    title: 'Presentations Start',
    venue: 'Seminar Hall',
    desc: 'Project presentations begin in the Seminar Hall. Please wait until your team is called.',
    status: 'active',
  },
  {
    date: '11:30 AM',
    title: 'Refreshments',
    venue: 'Seminar Hall',
    desc: 'Refreshments will be provided for all participants.',
    status: 'active',
  },
  {
    date: '1:00 PM',
    title: 'Networking Lunch',
    venue: '',
    desc: 'Lunch break and an opportunity to interact with mentors, judges, and fellow participants.',
    status: 'active',
  },
  {
    date: '4:30 PM',
    title: 'Valedictory & Awards',
    venue: 'Seminar Hall',
    desc: 'Winner announcements, prize distribution, and the official closing ceremony.',
    status: 'active',
  },
];

const statusStyle: Record<string, string> = {
  done: 'bg-amber-500 border-amber-500',
  active: 'bg-black border-amber-500 ring-4 ring-amber-500/20',
  upcoming: 'bg-black border-white/20',
};

export default function Timeline() {
  return (
    <section id="timeline" className="py-16 bg-[#050505]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-500 text-xs tracking-[0.4em] uppercase font-semibold mb-4">
            Schedule
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Event Timeline</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Key milestones leading up to the grand presentation day.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/50 via-amber-500/20 to-transparent md:-translate-x-1/2" />

          <div className="flex flex-col gap-10">
            {events.map((event, i) => {
              const isRight = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`relative flex items-start gap-6 md:gap-0 ${isRight ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                >
                  <div
                    className={`hidden md:block w-1/2 ${isRight ? 'pr-12 text-right' : 'pl-12 text-left'}`}
                  >
                    <div
                      className={`inline-block p-6 w-full max-w-sm rounded-2xl border transition-all duration-300 hover:border-amber-500/30 hover:bg-amber-500/3 ${event.status === 'done'
                          ? 'border-amber-500/20 bg-amber-500/5'
                          : event.status === 'active'
                            ? 'border-amber-500/40 bg-amber-500/8'
                            : 'border-white/5 bg-white/2'
                        }`}
                    >
                      <div className={`mb-4 flex flex-col ${isRight ? 'items-end text-right' : 'items-start text-left'}`}>
                        <span
                          className={`text-xs font-semibold tracking-widest uppercase mb-2 ${event.status === 'done' || event.status === 'active'
                              ? 'text-amber-500'
                              : 'text-gray-600'
                            }`}
                        >
                          {event.date}
                        </span>
                        <h3 className="text-white text-xl font-bold">{event.title}</h3>
                      </div>

                      {event.venue && (
                        <div className={`flex items-center gap-2 text-amber-500/90 text-sm font-medium mb-4 bg-amber-500/10 px-3 py-1.5 rounded-lg w-fit ${isRight ? 'ml-auto' : ''}`}>
                          <MapPin size={16} className="shrink-0" />
                          <span>{event.venue}</span>
                        </div>
                      )}

                      <p className={`text-gray-400 text-sm leading-relaxed ${isRight ? 'text-right' : 'text-left'}`}>
                        {event.desc}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                    <div
                      className={`w-3 h-3 rounded-full border-2 mt-1 md:mt-0 ${statusStyle[event.status]}`}
                    />
                  </div>

                  <div className="md:hidden pl-4 flex-1">
                    <div
                      className={`p-6 rounded-2xl border ${event.status === 'done'
                          ? 'border-amber-500/20 bg-amber-500/5'
                          : event.status === 'active'
                            ? 'border-amber-500/40 bg-amber-500/8'
                            : 'border-white/5 bg-white/2'
                        }`}
                    >
                      <div className="mb-4 flex flex-col items-start">
                        <span
                          className={`text-xs font-semibold tracking-widest uppercase mb-2 ${event.status === 'done' || event.status === 'active'
                              ? 'text-amber-500'
                              : 'text-gray-600'
                            }`}
                        >
                          {event.date}
                        </span>
                        <h3 className="text-white text-xl font-bold">{event.title}</h3>
                      </div>

                      {event.venue && (
                        <div className="flex items-center gap-2 text-amber-500/90 text-sm font-medium mb-4 bg-amber-500/10 px-3 py-1.5 rounded-lg w-fit">
                          <MapPin size={16} className="shrink-0" />
                          <span>{event.venue}</span>
                        </div>
                      )}

                      <p className="text-gray-400 text-sm leading-relaxed">{event.desc}</p>
                    </div>
                  </div>

                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
