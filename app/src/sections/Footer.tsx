import { useEffect, useRef } from 'react';
import {
  Briefcase,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  ChevronRight,
  Heart,
} from 'lucide-react';

const Footer = () => {
  const brandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('animate-in');
        });
      },
      { threshold: 0.1 }
    );

    brandRef.current && observer.observe(brandRef.current);
    return () => observer.disconnect();
  }, []);

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Job Seekers', href: '#job-seekers' },
    { label: 'Employers', href: '#employers' },
    { label: 'About Us', href: '#why-choose' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    { label: 'Job Search', href: '#job-seekers' },
    { label: 'Resume Building', href: '#' },
    { label: 'Interview Prep', href: '#' },
    { label: 'Employer Services', href: '#employers' },
    { label: 'Campus Hiring', href: '#' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#' },
    { icon: Facebook, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Twitter, href: '#' },
  ];

  const scrollToSection = (href: string) => {
    if (href === '#') return;
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-black text-white overflow-hidden">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f2ca00] to-transparent" />

      {/* Main Footer */}
      <div className="section-container py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div
            ref={brandRef}
            className="opacity-0 translate-y-6 transition-all duration-700"
            style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
          >
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#f2ca00] rounded-xl flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-bold font-['Figtree']">Workwalaa</span>
            </a>

            <p className="text-[#f2ca00] text-sm mb-3">
              Connecting Work To Worth
            </p>

            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Bridging job seekers and employers with trust and dignity.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href={s.href}
                    className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#f2ca00] transition"
                  >
                    <Icon className="w-4 h-4 text-white hover:text-black" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((l, i) => (
                <li key={i}>
                  <a
                    href={l.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(l.href);
                    }}
                    className="text-gray-400 text-sm hover:text-[#f2ca00] transition"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((s, i) => (
                <li key={i}>
                  <a
                    href={s.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(s.href);
                    }}
                    className="text-gray-400 text-sm hover:text-[#f2ca00] transition"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <a href="tel:8921483992" className="text-gray-400 hover:text-[#f2ca00]">
                8921483992
              </a><br></br><br></br>
              <a href="mailto:info@workwalaa.com" className="text-gray-400 hover:text-[#f2ca00]">
                info@workwalaa.com
              </a><br></br><br></br>
              <p className="text-gray-400">Kerala, India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar (NO extra space, NO big text) */}
      <div className="border-t border-white/10">
        <div className="section-container py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-sm">
          <div className="text-gray-500">© 2024 Workwalaa</div>

          <div className="flex gap-3 text-gray-500">
            <a href="#" className="hover:text-[#f2ca00]">Privacy Policy</a>
            <a href="#" className="hover:text-[#f2ca00]">Terms of Service</a>
          </div>

          <div className="flex items-center gap-1 text-gray-500">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Kerala
          </div>
        </div>
      </div>

      <style>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
