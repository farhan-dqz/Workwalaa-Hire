import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
} from 'lucide-react';

const Contact = () => {
  const [userType, setUserType] = useState<'jobseeker' | 'employer'>('jobseeker');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((r) => setTimeout(r, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', phone: '', email: '', message: '' });

    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-16 bg-[#f7f7f5] scroll-mt-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-white" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">

        {/* HEADER ROW */}
        {/* HEADER — TEXT + VIDEO SAME LINE */}
        <div className="flex items-center justify-center gap-3 mb-4">

          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#111]">
            Contact <span className="text-[#f2ca00]">Workwalaa</span>
          </h2>

          <video
            src="/contact.mp4"
            className="w-20 h-20 object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        <p className="text-sm text-[#777] text-center mb-12">
          We’ll respond shortly. No spam. No pressure.
        </p>


        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">

          {/* LEFT - CONTACT DETAILS */}
          <div>
            <div className="h-full bg-white rounded-3xl p-8 border border-black/5">
              <h3 className="text-base font-semibold text-[#111] mb-6">
                Reach Us
              </h3>

              {[
                {
                  icon: Phone,
                  label: 'Phone',
                  value: '8921483992',
                  href: 'tel:8921483992',
                },
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'info@workwalaa.com',
                  href:
                    'https://mail.google.com/mail/?view=cm&fs=1&to=info@workwalaa.com',
                },
                {
                  icon: MapPin,
                  label: 'Location',
                  value: 'Kerala, India',
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href?.startsWith('http') ? '_blank' : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl transition-all hover:bg-[#fafafa]"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#f2ca00]/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#f2ca00]" />
                    </div>
                    <div>
                      <div className="text-xs text-[#888]">{item.label}</div>
                      <div className="text-sm font-medium text-[#111]">
                        {item.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* RIGHT - FORM */}
          <div>
            <div className="h-full bg-white rounded-3xl p-8 border border-black/5">

              {/* Toggle */}
              <div className="flex gap-3 mb-6">
                {['jobseeker', 'employer'].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setUserType(t as any)}
                    className={`px-5 py-2 rounded-full text-xs font-medium transition-all ${userType === t
                      ? 'bg-[#f2ca00] text-black'
                      : 'bg-[#f2f2f2] text-[#555]'
                      }`}
                  >
                    {t === 'jobseeker' ? 'Job Seeker' : 'Employer'}
                  </button>
                ))}
              </div>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-[220px]">
                  <CheckCircle className="w-12 h-12 text-green-600 mb-3" />
                  <p className="text-sm text-[#666]">
                    Message sent successfully
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { name: 'name', placeholder: 'Your name' },
                    { name: 'phone', placeholder: 'Phone number' },
                    { name: 'email', placeholder: 'Email address' },
                  ].map((field) => (
                    <input
                      key={field.name}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#fafafa] border border-black/10 text-sm text-[#222] outline-none focus:border-[#f2ca00]"
                    />
                  ))}

                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#fafafa] border border-black/10 text-sm text-[#222] outline-none focus:border-[#f2ca00] resize-none"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#f2ca00] text-black font-semibold text-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                  >
                    {isSubmitting ? 'Sending…' : 'Send Message'}
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
