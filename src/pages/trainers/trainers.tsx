import { useRef } from 'react';
import { motion } from 'motion/react';
import { Share2, Info, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { trainers } from '../../constants/constant';
import { SectionHeader } from '../../components/ui/SectionHeader';
import trainersBg from '../../assets/Modern_luxury_gym_interior_background_for_trainer__delpmaspu.png';

export const Trainers = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 px-6 md:px-20 overflow-hidden" id="trainers">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${trainersBg})` }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeader 
          title="Meet Our Experts"
          description="Certified professionals dedicated to your progress."
          light
        />
        
        <div className="relative group">
          {/* Carousel Controls - Floating on Sides */}
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-20 w-12 h-12 rounded-full border border-slate-700 bg-slate-900/80 hidden md:flex items-center justify-center text-white hover:bg-primary hover:text-slate-900 transition-colors backdrop-blur-sm shadow-xl"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-20 w-12 h-12 rounded-full border border-slate-700 bg-slate-900/80 hidden md:flex items-center justify-center text-white hover:bg-primary hover:text-slate-900 transition-colors backdrop-blur-sm shadow-xl"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 sm:gap-10 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-p-0 md:scroll-p-6"
          >
          {trainers.map((trainer, index) => (
            <motion.div 
              key={trainer.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-slate-200 shrink-0 w-[85vw] sm:w-[50vw] md:w-[calc(33.333%-1rem)] snap-start aspect-[3/4]"
            >
              <img 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                src={trainer.image} 
                alt={trainer.name}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                <h4 className="text-2xl font-black">{trainer.name}</h4>
                <p className="text-primary text-sm font-bold uppercase mb-2">{trainer.specialty}</p>
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity mt-4">
                  <Share2 className="w-5 h-5 cursor-pointer hover:text-primary" />
                  <Info className="w-5 h-5 cursor-pointer hover:text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipe Indicator */}
        <div className="flex items-center justify-center gap-2 mt-4 text-slate-400 md:hidden animate-pulse">
          <span className="text-sm font-medium uppercase tracking-widest">Swipe for more</span>
          <ArrowRight className="w-4 h-4" />
        </div>

        </div>
      </div>
    </section>
  );
};
