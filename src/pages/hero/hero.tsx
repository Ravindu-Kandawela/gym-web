import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../../components/ui/button';
import heroImage from '../../assets/Premium_gym_website_hero_section_ultrarealistic_mo_delpmaspu.png';

export const Hero = () => {
  return (
    <section className="relative h-[870px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover brightness-50" 
          src={heroImage}
          alt="Gym Interior"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-5xl md:text-8xl font-black leading-none tracking-tighter mb-6 uppercase"
        >
          Unleash Your <span className="text-primary italic">Potential</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-slate-200 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto"
        >
          Experience a fitness journey tailored to your goals with our state-of-the-art facilities and world-class expert guidance.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="hover:scale-105">
            Start Your Journey
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:!bg-white hover:!text-black">
            View Classes
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
