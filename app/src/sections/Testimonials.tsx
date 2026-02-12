import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Software Developer',
    image: '/testimonial-1.jpg',
    quote:
      'Workwalaa helped me find my dream job within 2 weeks. The support made all the difference.',
    rating: 5,
  },
  {
    name: 'Rahul Patel',
    role: 'HR Manager',
    image: '/testimonial-2.jpg',
    quote:
      "We've hired 15+ candidates through Workwalaa. The verification process saved us huge time.",
    rating: 5,
  },
  {
    name: 'Anita Desai',
    role: 'Marketing Executive',
    image: '/testimonial-3.jpg',
    quote:
      'As a fresher, Workwalaa guided me from resume to interview. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Mohammed Riyas',
    role: 'Accounts Executive',
    image: '/testimonial-4.jpg',
    quote:
      'Very genuine consultancy. No hidden charges and excellent guidance throughout.',
    rating: 5,
  },
];

// duplicate for seamless loop
const sliderItems = [...testimonials, ...testimonials];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative w-full py-12 bg-white overflow-hidden scroll-mt-24"
    >
      {/* Header */}
      <div className="section-container mb-8">
        <div className="text-center max-w-xl mx-auto">
          <span className="inline-block px-4 py-2 bg-[#f2ca00]/15 text-black text-sm font-semibold rounded-full mb-3">
            Testimonials
          </span>
          <h2 className="font-['Figtree'] text-3xl lg:text-4xl font-bold text-black mb-2">
            Success <span className="text-[#f2ca00]">Stories</span>
          </h2>
          <p className="text-sm text-[#666]">
            What people say about Workwalaa
          </p>
        </div>
      </div>

      {/* Slider */}
      <div className="relative w-full overflow-hidden">
        <div className="testimonial-track">
          {sliderItems.map((t, i) => (
            <div
              key={i}
              className="testimonial-card"
            >
              <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-black/5 h-full">
                <div className="absolute top-4 right-4 w-10 h-10 bg-[#f2ca00]/15 rounded-xl flex items-center justify-center">
                  <Quote className="w-5 h-5 text-[#f2ca00]" />
                </div>

                <div className="flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4 fill-[#f2ca00] text-[#f2ca00]"
                    />
                  ))}
                </div>

                <p className="text-sm text-[#333] leading-relaxed mb-4">
                  “{t.quote}”
                </p>

                <div className="flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#f2ca00]"
                  />
                  <div>
                    <div className="font-semibold text-black text-sm">
                      {t.name}
                    </div>
                    <div className="text-xs text-[#666]">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .testimonial-track {
          display: flex;
          gap: 16px;
          width: max-content;
          animation: slideLeft 22s linear infinite;
        }

        .testimonial-track:hover {
          animation-play-state: paused;
        }

        .testimonial-card {
          width: 320px;
          flex-shrink: 0;
        }

        @keyframes slideLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
