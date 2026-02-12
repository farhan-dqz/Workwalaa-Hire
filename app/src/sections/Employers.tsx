import { useEffect, useRef } from 'react';
import { UserCheck, Zap, UserCog, ArrowRight, Building2 } from 'lucide-react';

const features = [
  {
    icon: UserCheck,
    title: 'Verified Candidates',
    description: 'Pre-screened applicants matched to your needs.',
  },
  {
    icon: Zap,
    title: 'Faster Hiring',
    description: 'Hire up to 60% faster with our streamlined process.',
  },
  {
    icon: UserCog,
    title: 'Dedicated Support',
    description: 'A consultant guiding your hiring journey end-to-end.',
  },
];

const Employers = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.animate-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-in');
              }, index * 80);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (contentRef.current) observer.observe(contentRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="employers"
      ref={sectionRef}
      className="relative w-full pt-6 pb-8 bg-white overflow-hidden"
    >
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">

          {/* IMAGE */}
          <div
            ref={imageRef}
            className="relative opacity-0 translate-x-[-40px] transition-all duration-800 order-2 lg:order-1"
          >
            <img
              src="/employers.jpg"
              alt="Employers"
              className="w-full max-h-[360px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* CONTENT */}
          <div ref={contentRef} className="order-1 lg:order-2">

            {/* LABEL - BLACK */}
            <div className="animate-item opacity-0 translate-x-[30px] mb-3 transition-all duration-600">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-black text-white text-xs font-semibold rounded-full">
                <Building2 className="w-3.5 h-3.5 text-white" />
                For Employers
              </span>
            </div>

            {/* HEADLINE */}
            <h2 className="animate-item opacity-0 translate-x-[30px] font-['Figtree'] text-2xl lg:text-3xl font-bold text-black mb-3 transition-all duration-600">
              Hire the <span className="text-[#f2ca00]">Right Talent</span>
            </h2>

            {/* DESCRIPTION */}
            <p className="animate-item opacity-0 translate-x-[30px] text-sm text-[#666] mb-4 transition-all duration-600 delay-100">
              Find verified candidates faster with structured, AI-supported hiring assistance.
            </p>

            {/* FEATURES */}
            <div className="space-y-2 mb-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={index}
                    className="
                      group
                      animate-item opacity-0 translate-x-[30px]
                      flex items-start gap-3 p-2.5 rounded-xl
                      transition-transform transition-colors
                      duration-200 ease-out
                      hover:-translate-y-1
                      hover:bg-[#f6f6f6]
                    "
                    style={{ transitionDelay: `${(index + 2) * 80}ms` }}
                  >
                    <div
                      className="
                        w-9 h-9
                        bg-black
                        rounded-lg
                        flex items-center justify-center
                        flex-shrink-0
                        transition-colors duration-150 ease-out
                        group-hover:bg-[#f2ca00]
                      "
                    >
                      <Icon
                        className="
                          w-4.5 h-4.5
                          text-white
                          transition-colors duration-150 ease-out
                          group-hover:text-black
                        "
                      />
                    </div>

                    <div>
                      <h3 className="font-['Figtree'] text-sm font-semibold text-black mb-0.5">
                        {feature.title}
                      </h3>
                      <p className="text-[#666] text-xs leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="animate-item opacity-0 translate-x-[30px] transition-all duration-600 delay-400">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-semibold rounded-full transition-all duration-300 hover:bg-[#f2ca00] hover:text-black"
              >
                Post a Vacancy
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .animate-item.animate-in {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
      `}</style>
    </section>
  );
};

export default Employers;
