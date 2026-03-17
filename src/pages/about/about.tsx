import React from 'react';
import { SectionHeader } from '../../components/ui/SectionHeader';

export const About = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-white" id="about">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <SectionHeader 
            align="left"
            label="Our Philosophy"
            title="PUSHING BOUNDARIES SINCE DAY ONE"
            description="At Apex Fitness, we don't just provide equipment; we build communities. Our mission is to provide a high-energy environment where every individual can achieve their peak physical condition through expert coaching and cutting-edge science."
          />
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="border-l-4 border-primary pl-4">
              <h4 className="text-3xl font-black">15+</h4>
              <p className="text-sm uppercase font-bold text-slate-500">Expert Trainers</p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="text-3xl font-black">24/7</h4>
              <p className="text-sm uppercase font-bold text-slate-500">Gym Access</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl"></div>
          <img 
            className="rounded-xl shadow-2xl relative z-10 w-full object-cover aspect-square md:aspect-auto h-[500px]" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5Ubf4_M-68sgAU51lXMUNyM1OQUwV4lrtKtMgTVHo7w0hWGwXySyZYSkifVgibsKbV_DhxFMcRQ4MgB2q0eCaR7VLXJ6aUktyeFcPVl8VvTYSowZLJEjENbThtTbK4PdMlSTku1pDyrGV3hVJNnf9Rg1SqZV5s8_rf8Iv5ez4qU1vGfpunNNm0F3I5IsP1mOU-FPwNSqr1W3el6IVcBz6LRBLfs7DzD4VNCp43s7_WeIL8hFiYfF8T-Oipr4Qzh_vx-8jpZBUPy1L" 
            alt="Athlete Training"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
};
