import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [compactNav, setCompactNav] = useState(false);
  const [hoverExpand, setHoverExpand] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'JobSeekers', href: '#job-seekers' },
    { label: 'Employers', href: '#employers' },
    { label: 'AboutUs', href: '#why-choose' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const onScroll = () => {
      setCompactNav(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ✅ FIXED SCROLL OFFSET FUNCTION
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (!element) return;

    const headerOffset = 95; // Adjust if needed
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

    setIsMobileMenuOpen(false);
  };

  const isExpanded = !compactNav || hoverExpand;

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div
        onMouseEnter={() => setHoverExpand(true)}
        onMouseLeave={() => setHoverExpand(false)}
        className={`
          relative
          h-[40px]
          flex items-center justify-center
          rounded-full
          bg-white/25 backdrop-blur-2xl
          border border-white/30
          shadow-[0_10px_40px_rgba(0,0,0,0.12)]
          transition-[width]
          duration-700
          ease-out
          ${isExpanded ? 'w-[500px]' : 'w-[140px]'}
        `}
      >
        <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/20" />

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-1 relative z-10">
          {isExpanded ? (
            navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="
                  relative
                  px-3 py-1.5
                  text-[13px] font-medium
                  text-black/80 hover:text-black
                  transition-colors duration-300
                  group
                "
              >
                {item.label}
                <span
                  className="
                    absolute bottom-0.5 left-3 right-3
                    h-[2px] rounded-full
                    bg-gradient-to-r from-transparent via-[#f2ca00] to-transparent
                    scale-x-0 group-hover:scale-x-100
                    transition-transform duration-300
                  "
                />
              </a>
            ))
          ) : (
            <span className="text-[13px] font-semibold tracking-wide text-black/70">
              Buttons
            </span>
          )}
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setIsMobileMenuOpen((p) => !p)}
          className="
            lg:hidden
            absolute right-1
            w-9 h-9
            flex items-center justify-center
            rounded-xl
            bg-white/40
            backdrop-blur-md
            hover:bg-[#f2ca00]/80
            transition-colors duration-300
          "
        >
          {isMobileMenuOpen ? (
            <X className="w-4 h-4 text-black" />
          ) : (
            <Menu className="w-4 h-4 text-black" />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden mt-3 overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
          }`}
      >
        <nav className="flex flex-col gap-1 p-4 bg-white/95 backdrop-blur-xl rounded-2xl border border-black/5 shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="px-4 py-2 text-sm font-medium text-[#333] hover:bg-[#f6f6f6] rounded-xl transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
