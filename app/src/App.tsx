import Header from './sections/Header';
import Hero from './sections/Hero';
import WhyChoose from './sections/WhyChoose';
import JobSeekers from './sections/JobSeekers';
import Employers from './sections/Employers';
import HowItWorks from './sections/HowItWorks';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';


function App() {
  return (

    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <WhyChoose />
        <JobSeekers />
        <Employers />
        <HowItWorks />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
