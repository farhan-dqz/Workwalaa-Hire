import { UserPlus, Puzzle, Video, Handshake } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Create Profile',
    description: 'Sign up and add your skills and preferences.',
  },
  {
    number: '02',
    icon: Puzzle,
    title: 'Get Matched',
    description: 'We match you with relevant jobs or candidates.',
  },
  {
    number: '03',
    icon: Video,
    title: 'Connect',
    description: 'Interview and communicate directly.',
  },
  {
    number: '04',
    icon: Handshake,
    title: 'Get Hired',
    description: 'Finalize and start your journey.',
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="relative w-full pt-6 pb-10 bg-[#f6f6f6] overflow-hidden scroll-mt-24"
    >
      <div className="section-container relative z-10">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-6">
          <span className="inline-block px-4 py-2 bg-[#f2ca00]/20 text-black text-sm font-semibold rounded-full mb-3">
            Simple Process
          </span>
          <h2 className="font-['Figtree'] text-3xl lg:text-4xl font-bold text-black mb-2">
            How It <span className="text-[#f2ca00]">Works</span>
          </h2>
          <p className="text-sm text-[#666]">
            From signup to success in four easy steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="
                  transition-all duration-300 ease-out
                  hover:-translate-y-3
                  hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]
                "
              >
                <div className="relative bg-white p-5 rounded-2xl border border-black/5 h-full">

                  {/* Step number */}
                  <div className="absolute -top-3 -right-3 w-9 h-9 bg-[#f2ca00] rounded-lg flex items-center justify-center">
                    <span className="text-black text-sm font-bold">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon — hover ONLY here */}
                  <div
                    className="
                      w-12 h-12
                      bg-[#f6f6f6]
                      rounded-xl
                      flex items-center justify-center
                      mb-4
                      transition-all duration-300
                      hover:bg-[#f2ca00]
                      hover:scale-110
                    "
                  >
                    <Icon
                      className="
                        w-6 h-6
                        text-[#333]
                        transition-colors duration-300
                        hover:text-black
                      "
                    />
                  </div>

                  {/* Content */}
                  <h3 className="font-['Figtree'] text-base font-semibold text-black mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[#666] text-sm leading-snug">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
