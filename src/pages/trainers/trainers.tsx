import React from 'react';
import { motion } from 'motion/react';
import { Share2, Info } from 'lucide-react';
import { trainers } from '../../constants/constant';
import { SectionHeader } from '../../components/ui/SectionHeader';
import trainersBg from '../../assets/Modern_luxury_gym_interior_background_for_trainer__delpmaspu.png';

export const Trainers = () => {
  return (
    <section className="relative py-24 px-6 md:px-20 overflow-hidden" id="trainers">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${trainersBg})` }}
      />

      {/* Content */}
      <div className="relative z-10">
        <SectionHeader 
          title="Meet Our Experts"
          description="Certified professionals dedicated to your progress."
          light
        />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {trainers.map((trainer, index) => (
          <motion.div 
            key={trainer.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-xl bg-slate-200 aspect-[3/4]"
          >
            <img 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              src={trainer.image} 
              alt={trainer.name}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h4 className="text-2xl font-black">{trainer.name}</h4>
              <p className="text-primary text-sm font-bold uppercase mb-2">{trainer.specialty}</p>
              <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Share2 className="w-5 h-5 cursor-pointer hover:text-primary" />
                <Info className="w-5 h-5 cursor-pointer hover:text-primary" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};
