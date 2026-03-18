import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { Toaster } from 'sonner';
import { Navbar } from './pages/navbar/navbar';
import { Hero } from './pages/hero/hero';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { Membership } from './pages/membership/membership';
import { Trainers } from './pages/trainers/trainers';
import { Contact } from './pages/contact/contact';
import { Footer } from './pages/footer/footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background-light dark:bg-slate-950 text-slate-900 dark:text-slate-50 selection:bg-primary selection:text-slate-900 transition-colors duration-300">
      <Navbar />
         <main>
        <Hero />
        <About />
        <Services />
        <Membership />
        <Trainers />
        <Contact />
        <Footer />
      </main>
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;
