import { useEffect, useRef } from 'react';
import { Search, Sparkles, HeadphonesIcon, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'WhatsApp Community Support',
    description:
      'Receive verified job updates, hiring alerts, and direct assistance through our active WhatsApp support community.',
  },
  {
    icon: Sparkles,
    title: 'Interview Preparation Guidance',
    description:
      'Structured mock sessions, communication coaching, and role-specific preparation.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Resume Building Assistance',
    description:
      'Professional resume optimization to improve visibility and selection chances.',
  },
];

const JobSeekers = () => {
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

  // ✅ Controlled scroll (same logic as Header)
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (!element) return;

    const headerOffset = 95;
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="job-seekers"
      ref={sectionRef}
      className="relative w-full pt-6 pb-8 bg-[#f6f6f6] overflow-hidden"
    >
      {/* Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#f2ca00] to-transparent opacity-40" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">

          {/* LEFT CONTENT */}
          <div ref={contentRef}>

            {/* Label */}
            <div className="animate-item opacity-0 translate-x-[-30px] transition-all duration-600">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f2ca00]/20 text-black text-xs font-semibold rounded-full mb-4">
                <Search className="w-3.5 h-3.5" />
                For Job Seekers
              </span>
            </div>

            {/* Headline */}
            <h2 className="animate-item opacity-0 translate-x-[-30px] font-['Figtree'] text-2xl lg:text-3xl font-bold text-black mb-3 transition-all duration-600">
              Find Your <span className="text-[#f2ca00]">Dream Job</span>
            </h2>

            {/* Description */}
            <p className="animate-item opacity-0 translate-x-[-30px] text-sm text-[#666] leading-relaxed mb-4 transition-all duration-600 delay-100">
              Find verified opportunities with personalized guidance built around your skills.
            </p>

            {/* Features */}
            <div className="space-y-2 mb-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="animate-item opacity-0 translate-x-[-30px] flex items-start gap-3 p-2.5 rounded-xl transition-all duration-400 hover:bg-white hover:shadow-md group"
                    style={{ transitionDelay: `${(index + 2) * 80}ms` }}
                  >
                    <div className="w-9 h-9 bg-[#f2ca00] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4.5 h-4.5 text-black" />
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
            <div className="animate-item opacity-0 translate-x-[-30px] transition-all duration-600 delay-400">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#f2ca00] text-black text-sm font-semibold rounded-full transition-all duration-300 hover:bg-black hover:text-[#f2ca00]"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            ref={imageRef}
            className="relative opacity-0 translate-x-[40px] transition-all duration-800"
          >
            <img
              src="/job-seekers.jpg"
              alt="Job Seekers"
              className="w-full rounded-2xl shadow-lg max-h-[360px] object-cover"
            />
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

export default JobSeekers;
