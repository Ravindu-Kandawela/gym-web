
import { Globe, Star, Mail, MapPin, Phone, Clock } from 'lucide-react';
import logo from '../../assets/logo.png';

export const Footer = () => {
  return (
    <footer className="bg-[#0a0f1c] text-white py-16 px-6 md:px-20 border-t border-slate-800 text-center md:text-left">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="mb-6 flex justify-center md:justify-start">
            <img src={logo} alt="Apex Fitness Logo" className="h-30 w-auto object-contain block" />
          </div>
          <h2 className="text-2xl font-black uppercase tracking-tighter mt-4">Apex Fitness</h2>
          
          <p className="text-slate-400 max-w-sm mt-4 text-sm leading-relaxed mx-auto md:mx-0">
            The ultimate destination for those who want to push their limits and transform their lives. Modern science, community spirit.
          </p>
          
          <div className="flex gap-4 mt-8 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-xl bg-slate-800/80 flex items-center justify-center hover:bg-[#f2df0d] hover:text-slate-900 cursor-pointer transition-colors border border-slate-700">
              <Globe className="w-4 h-4" />
            </div>
            <div className="w-10 h-10 rounded-xl bg-slate-800/80 flex items-center justify-center hover:bg-[#f2df0d] hover:text-slate-900 cursor-pointer transition-colors border border-slate-700">
              <Star className="w-4 h-4" />
            </div>
            <div className="w-10 h-10 rounded-xl bg-slate-800/80 flex items-center justify-center hover:bg-[#f2df0d] hover:text-slate-900 cursor-pointer transition-colors border border-slate-700">
              <Mail className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Middle Column - Links */}
        <div className="space-y-6">
          <h4 className="font-bold uppercase tracking-wider text-sm text-[#f2df0d]">Quick Links</h4>
          <ul className="space-y-4 text-slate-300 text-sm">
            <li><a className="hover:text-white transition-colors" href="#">Classes</a></li>
            <li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
            <li><a className="hover:text-white transition-colors" href="#">Career</a></li>
          </ul>
        </div>

        {/* Right Column - Location */}
        <div className="space-y-6">
          <h4 className="font-bold uppercase tracking-wider text-sm text-[#f2df0d]">Location</h4>
          <ul className="space-y-4 text-slate-300 text-sm">
            <li className="flex items-start md:items-start justify-center md:justify-start gap-3 text-center md:text-left">
              <MapPin className="text-[#f2df0d] w-5 h-5 shrink-0 mt-0.5 border-2 border-[#f2df0d] rounded-full p-0.5 bg-transparent" />
              <span className="leading-snug">123 Muscle Way, Iron City, IC<br />56789</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <Phone className="text-[#f2df0d] w-5 h-5 shrink-0" />
              <span>(555) 123-4567</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <Clock className="text-[#f2df0d] w-5 h-5 shrink-0" />
              <span>Open 24/7 for Elite Members</span>
            </li>
          </ul>
        </div>
        
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800/50 text-slate-500 text-xs text-center md:text-left">
        © 2025 Apex Fitness Systems. All Rights Reserved. Designed for performance.
      </div>
    </footer>
  );
};
