import { useEffect, useRef } from 'react';
import { ArrowRight, Users, Building2, Briefcase } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  /* ---------------- ENTRANCE ANIMATIONS ---------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    contentRef.current
      ?.querySelectorAll('.animate-item')
      .forEach((el) => observer.observe(el));

    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-white pt-24 lg:pt-0"
    >
      {/* HEADER */}
      <div className="absolute top-6 left-0 right-0 z-40 bg-white">
        <div className="section-container flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#f2ca00] rounded-xl flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-bold text-black font-['Figtree']">
              Workwalaa
            </span>
          </div>

          {/* WHATSAPP CONNECT BUTTON */}
          <div className="flex items-center gap-4">

            <a
              href="https://wa.me/918921483992"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                px-6 py-3
                bg-black
                text-white
                text-sm font-semibold
                rounded-full
                transition-all duration-300
                hover:bg-[#f2ca00]
                hover:text-black
                hover:scale-105
              "
            >
              <img
                src="/whatsapp.png"
                alt="WhatsApp"
                className="w-4 h-4"
              />
              Connect Us
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>
        </div>
      </div>

      {/* FULL-WIDTH WHITE WRAPPER */}
      <div className="relative z-10 w-full bg-white">
        <div className="section-container">
          <div className="min-h-[85vh] flex items-center">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-12">

              {/* LEFT CONTENT */}
              <div ref={contentRef}>
                <h1 className="mt-24 lg:mt-28 font-bold text-black text-2xl sm:text-3xl lg:text-[36px] leading-tight whitespace-nowrap animate-item">
                  Connecting Work To Worth
                </h1>

                <p className="text-[#666] max-w-md mt-3 text-[15px] leading-relaxed animate-item">
                  We connect skilled professionals with verified employers through AI powered matching for faster, smarter hiring.
                  Our AI and human led screening ensures trusted, high quality candidates every time.
                </p>

                <div className="flex gap-4 mt-5 animate-item">
                  <button
                    onClick={() => scrollToSection('#job-seekers')}
                    className="btn-primary flex items-center gap-2"
                  >
                    <Users className="w-5 h-5" />
                    Find Jobs 🔍︎
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <button
                    onClick={() => scrollToSection('#employers')}
                    className="btn-secondary flex items-center gap-2"
                  >
                    <Building2 className="w-5 h-5" />
                    Post vacancy
                  </button>
                </div>
              </div>

              {/* RIGHT VIDEO */}
              <div
                ref={imageRef}
                className="opacity-0 transition-all duration-1000 mt-10 lg:translate-x-10"
              >
                <div className="w-full max-w-md mx-auto h-[420px] rounded-3xl bg-white overflow-hidden">
                  <video
                    src="/hero-video.mp4"
                    className="w-full h-full object-cover bg-white"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <style>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) scale(1) !important;
        }
      `}</style>
    </section>
  );
};

export default Hero;
