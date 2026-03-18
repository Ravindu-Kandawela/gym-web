import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { Toaster } from 'sonner';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './pages/hero/hero';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { Membership } from './pages/membership/membership';
import { Trainers } from './pages/trainers/trainers';
import { Contact } from './pages/contact/contact';
import { Footer } from './components/footer/footer';

function App() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;

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
    <div className="min-h-screen bg-background-light dark:bg-[#080808] text-slate-900 dark:text-[#f0ebe3] selection:bg-primary selection:text-[#080808] transition-colors duration-300">
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

      {/* Scroll Navigation Arrows */}
      <motion.div 
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="fixed bottom-[104px] right-7 z-50 flex flex-col gap-3"
      >
        <button
          onClick={() => lenisRef.current?.scrollTo(0, { duration: 1.5 })}
          className="p-3 bg-[#080808]/90 text-[#d4a017] border border-[#3d3322] rounded-full shadow-lg hover:scale-110 hover:border-[#d4a017] hover:-translate-y-1 transition-all duration-300 group backdrop-blur-sm"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:text-white transition-colors" />
        </button>
        <button
          onClick={() => lenisRef.current?.scrollTo(document.body.scrollHeight, { duration: 1.5 })}
          className="p-3 bg-[#080808]/90 text-[#d4a017] border border-[#3d3322] rounded-full shadow-lg hover:scale-110 hover:border-[#d4a017] hover:translate-y-1 transition-all duration-300 group backdrop-blur-sm"
          aria-label="Scroll to bottom"
        >
          <ArrowDown className="w-5 h-5 group-hover:text-white transition-colors" />
        </button>
      </motion.div>
      <motion.a 
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || '1234567890'}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-[#080808] p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:scale-110 hover:-translate-y-2 transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 group-hover:text-white transition-colors duration-300">
          <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.651.84 5.14 2.378 7.228L.68 24l4.909-1.688A11.96 11.96 0 0012.031 24c6.646 0 12.031-5.385 12.031-12.031S18.677 0 12.031 0zm0 21.996c-2.223 0-4.321-.575-6.126-1.579l-.44-.24-3.567 1.229.957-3.411-.3-.497a9.982 9.982 0 01-1.611-5.592c0-5.524 4.496-10.02 10.02-10.02s10.02 4.496 10.02 10.02-4.496 10.02-10.02 10.02zm5.422-7.461c-.297-.15-1.761-.871-2.032-.971-.271-.1-.468-.15-.666.149-.197.299-.768.971-.941 1.171-.173.197-.348.223-.645.074-.297-.149-1.259-.464-2.399-1.479-.887-.789-1.488-1.763-1.661-2.064-.173-.298-.018-.46.131-.609.133-.133.297-.348.448-.521.15-.174.197-.298.297-.497.098-.198.05-.373-.025-.521-.074-.15-.666-1.608-.913-2.202-.24-.578-.485-.5-.666-.508-.173-.008-.372-.008-.57-.008-.197 0-.521.074-.794.373-.272.298-1.04 1.018-1.04 2.484s1.066 2.879 1.215 3.078c.149.199 2.094 3.199 5.073 4.482.709.307 1.264.49 1.696.626.711.226 1.36.194 1.868.118.572-.086 1.761-.72 2.01-1.416.248-.696.248-1.293.173-1.415-.074-.124-.271-.198-.568-.348z" />
        </svg>
      </motion.a>
    </div>
  );
}

export default App;
