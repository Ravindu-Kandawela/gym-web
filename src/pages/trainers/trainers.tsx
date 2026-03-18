import { useRef, useState, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Share2, Info, ChevronLeft, ChevronRight, ArrowRight, Search } from 'lucide-react';
import { trainers } from '../../constants/constant';
import { SectionHeader } from '../../components/ui/SectionHeader';
import trainersBg from '../../assets/Modern_luxury_gym_interior_background_for_trainer__delpmaspu.png';

export const Trainers = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSpecialty, setFilterSpecialty] = useState('All');

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

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

  const specialties = useMemo(() => {
    return ['All', ...new Set(trainers.map(t => t.specialty))];
  }, []);

  const filteredTrainers = useMemo(() => {
    return trainers.filter(trainer => {
      const matchesSearch = trainer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            trainer.specialty.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterSpecialty === 'All' || trainer.specialty === filterSpecialty;
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, filterSpecialty]);

  return (
    <section ref={sectionRef} className="relative py-24 px-6 md:px-20 overflow-hidden" id="trainers">
      {/* True Parallax Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          style={{ y, top: "-25%", height: "150%" }}
          className="absolute w-full object-cover" 
          src={trainersBg}
          alt="Trainers Background"
        />
        <div className="absolute inset-0 bg-[#080808]/70 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeader 
          title="Meet Our Experts"
          description="Certified professionals dedicated to your progress."
          light
        />

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 justify-center items-center">
          <div className="relative w-full md:w-72 shadow-lg">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search trainers..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-[#3d3322] bg-[#080808]/70 text-[#f0ebe3] placeholder:text-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary backdrop-blur-md transition-all"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto snap-x hide-scrollbar [-ms-overflow-style:none] [scrollbar-width:none]">
            {specialties.map(spec => (
              <button
                key={spec}
                onClick={() => setFilterSpecialty(spec)}
                className={`snap-center px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 shadow-lg ${
                  filterSpecialty === spec 
                    ? 'bg-primary text-[#080808] scale-105' 
                    : 'bg-[#080808]/70 text-[#f0ebe3]/80 border border-[#3d3322] hover:border-primary backdrop-blur-md'
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>
        
        <div className="relative group">
          {/* Carousel Controls - Floating on Sides */}
          {filteredTrainers.length > 0 && (
            <>
              <button 
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-20 w-12 h-12 rounded-full border border-[#3d3322] bg-[#080808]/80 hidden md:flex items-center justify-center text-white hover:bg-primary hover:text-[#080808] transition-colors backdrop-blur-sm shadow-xl"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button 
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-20 w-12 h-12 rounded-full border border-[#3d3322] bg-[#080808]/80 hidden md:flex items-center justify-center text-white hover:bg-primary hover:text-[#080808] transition-colors backdrop-blur-sm shadow-xl"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Carousel Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 sm:gap-10 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-p-0 md:scroll-p-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredTrainers.length > 0 ? (
                filteredTrainers.map((trainer, index) => (
                  <motion.div 
                    key={trainer.name}
                    layout
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="group relative overflow-hidden rounded-xl bg-slate-200 shrink-0 w-[85vw] sm:w-[40vw] md:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1rem)] snap-start aspect-[3/4]"
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
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="w-full py-20 text-center"
                >
                  <Search className="w-12 h-12 text-slate-500 mx-auto mb-4 opacity-50" />
                  <h3 className="text-xl font-bold text-[#f0ebe3]">No trainers found</h3>
                  <p className="text-slate-400 mt-2">Try adjusting your search criteria or filter.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Swipe Indicator */}
          {filteredTrainers.length > 0 && (
            <div className="flex items-center justify-center gap-2 mt-4 text-[#f0ebe3]/60 md:hidden animate-pulse">
              <span className="text-sm font-medium uppercase tracking-widest">Swipe for more</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
