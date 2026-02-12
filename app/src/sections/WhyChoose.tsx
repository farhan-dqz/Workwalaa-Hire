import { useEffect, useRef, useState } from 'react';
import { Shield, BookOpen, Tag, HandHeart, MapPin } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Verified Job Opportunities',
    description:
      'Every job posting is manually verified by our team to ensure authenticity and quality.',
  },
  {
    icon: BookOpen,
    title: 'Transparent Hiring Process',
    description:
      'Clear communication at every step of your journey',
  },
  {
    icon: Tag,
    title: 'AI-Powered Smart Matching',
    description:
      'Advanced AI screening and automated skill evaluation ensure only the most relevant, high-quality candidates reach employers.',
  },

  {
    icon: HandHeart,
    title: 'Support for All Candidates',
    description:
      'From freshers to experienced professionals, we help everyone find their worth.',
  },
  {
    icon: MapPin,
    title: 'Local & Regional Focus',
    description:
      'Strong presence in local job markets with deep understanding of regional needs.',
  },
];

const WhyChoose = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const hasAnimatedStats = useRef(false);

  const [jobs, setJobs] = useState(0);
  const [hires, setHires] = useState(0);
  const [employers, setEmployers] = useState(0);

  /* ---------------- CARD ENTRANCE ANIMATION ---------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const cards = entry.target.querySelectorAll('.feature-card-item');
        cards.forEach((card, index) => {
          setTimeout(() => card.classList.add('animate-in'), index * 80);
        });
      },
      { threshold: 0.2 }
    );

    if (cardsRef.current) observer.observe(cardsRef.current);
    return () => observer.disconnect();
  }, []);

  /* ---------------- STATS COUNT (ON SCROLL) ---------------- */
  useEffect(() => {
    if (!sectionRef.current) return;

    let raf1 = 0;
    let raf2 = 0;
    let raf3 = 0;

    const animateCount = (
      target: number,
      setter: React.Dispatch<React.SetStateAction<number>>,
      setRaf: (id: number) => void
    ) => {
      const duration = 5000; // 5 seconds
      const start = performance.now();

      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

      const update = (time: number) => {
        const progress = Math.min((time - start) / duration, 1);
        setter(Math.floor(easeOutCubic(progress) * target));

        if (progress < 1) {
          setRaf(requestAnimationFrame(update));
        }
      };

      setRaf(requestAnimationFrame(update));
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimatedStats.current) return;

        hasAnimatedStats.current = true;

        animateCount(10000, setJobs, (id) => (raf1 = id));
        animateCount(5000, setHires, (id) => (raf2 = id));
        animateCount(613, setEmployers, (id) => (raf3 = id));
      },
      { threshold: 0.4 } // starts when ~40% visible
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      cancelAnimationFrame(raf3);
    };
  }, []);

  return (
    <section
      id="why-choose"
      ref={sectionRef}
      className="relative w-full pt-4 pb-6 bg-white overflow-hidden scroll-mt-24"
    >
      {/* Header */}
      <div className="section-container text-center mb-5">
        <span className="inline-block px-3 py-1.5 bg-[#f2ca00]/10 text-[#f2ca00] text-xs font-semibold rounded-full mb-3">
          Why Choose Us
        </span>

        <h2 className="text-2xl lg:text-[28px] font-bold text-black mb-2">
          Why Choose <span className="text-[#f2ca00]">Workwalaa</span>
        </h2>

        <p className="text-sm text-[#666]">
          What makes us different from traditional job consultancies
        </p>
      </div>

      {/* STATS */}
      <div className="flex justify-center gap-12 mb-6">
        <Stat value={jobs} label="Jobs Posted" />
        <Stat value={hires} label="Successful Hires" />
        <Stat value={employers} label="Verified Employers" />
      </div>

      {/* CARDS */}
      <div
        ref={cardsRef}
        className="section-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3"
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="feature-card-item opacity-0 translate-y-6 group"
              style={{ transition: 'all 0.6s var(--ease-expo-out)' }}
            >
              <div className="h-full p-4 rounded-xl bg-white shadow-sm transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:scale-[1.02] group-hover:shadow-xl">
                <div className="w-12 h-12 bg-[#f6f6f6] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#f2ca00] transition">
                  <Icon className="w-6 h-6 text-[#333]" />
                </div>

                <h3 className="text-base font-semibold mb-1">
                  {feature.title}
                </h3>

                <p className="text-xs text-[#666] leading-snug">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

/* -------- Small stat component -------- */
const Stat = ({ value, label }: { value: number; label: string }) => (
  <div className="text-center">
    <div className="text-[26px] font-bold">{value.toLocaleString()}+</div>
    <div className="text-sm text-[#666]">{label}</div>
  </div>
);

export default WhyChoose;
