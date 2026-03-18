import React from 'react';
import { Globe, Star, Mail, MapPin, Phone, Clock } from 'lucide-react';
import logoTransparent from '../../assets/logo-transparent.png';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-16 px-6 md:px-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="flex items-center gap-2">
            <img src={logoTransparent} alt="Apex Fitness Logo" className="w-10 h-10 object-contain" />
            <h2 className="text-2xl font-black uppercase tracking-tighter">Apex Fitness</h2>
          </div>
          <p className="text-slate-400 max-w-sm">
            The ultimate destination for those who want to push their limits and transform their lives. Modern science, community spirit.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-slate-900 cursor-pointer transition-colors">
              <Globe className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-slate-900 cursor-pointer transition-colors">
              <Star className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-slate-900 cursor-pointer transition-colors">
              <Mail className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-primary">Quick Links</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><a className="hover:text-white transition-colors" href="#">Classes</a></li>
            <li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
            <li><a className="hover:text-white transition-colors" href="#">Career</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-primary">Location</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="text-primary w-5 h-5 shrink-0" />
              123 Muscle Way, Iron City, IC 56789
            </li>
            <li className="flex items-center gap-2">
              <Phone className="text-primary w-5 h-5 shrink-0" />
              (555) 123-4567
            </li>
            <li className="flex items-center gap-2">
              <Clock className="text-primary w-5 h-5 shrink-0" />
              Open 24/7 for Elite Members
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
        © 2024 Apex Fitness Systems. All Rights Reserved. Designed for performance.
      </div>
    </footer>
  );
};
