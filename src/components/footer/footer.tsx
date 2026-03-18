
import { Globe, Star, Mail, MapPin, Phone, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import logo from '../../assets/logo.png';

export const Footer = () => {
  return (
    <footer className="bg-[#080808] text-[#f0ebe3] py-16 px-6 md:px-20 border-t border-[#3d3322] text-center md:text-left">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="col-span-1 md:col-span-2 space-y-6"
        >
          <div className="mb-6 flex justify-center md:justify-start">
            <img src={logo} alt="Apex Fitness Logo" className="h-30 w-auto object-contain block" />
          </div>
          <h2 className="text-2xl font-black uppercase tracking-tighter mt-4">Apex Fitness</h2>
          
          <p className="text-[#f0ebe3]/60 max-w-sm mt-4 text-sm leading-relaxed mx-auto md:mx-0">
            The ultimate destination for those who want to push their limits and transform their lives. Modern science, community spirit.
          </p>
          
          <div className="flex gap-4 mt-8 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-xl bg-[#333333]/80 flex items-center justify-center hover:bg-[#d4a017] hover:text-[#080808] cursor-pointer transition-colors border border-[#3d3322]">
              <Globe className="w-4 h-4" />
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#333333]/80 flex items-center justify-center hover:bg-[#d4a017] hover:text-[#080808] cursor-pointer transition-colors border border-[#3d3322]">
              <Star className="w-4 h-4" />
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#333333]/80 flex items-center justify-center hover:bg-[#d4a017] hover:text-[#080808] cursor-pointer transition-colors border border-[#3d3322]">
              <Mail className="w-4 h-4" />
            </div>
          </div>
        </motion.div>

        {/* Middle Column - Links */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <h4 className="font-bold uppercase tracking-wider text-sm text-[#d4a017]">Quick Links</h4>
          <ul className="space-y-4 text-[#f0ebe3]/80 text-sm">
            <li><a className="hover:text-[#f0ebe3] transition-colors" href="#">Classes</a></li>
            <li><a className="hover:text-[#f0ebe3] transition-colors" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-[#f0ebe3] transition-colors" href="#">Terms of Service</a></li>
            <li><a className="hover:text-[#f0ebe3] transition-colors" href="#">Career</a></li>
          </ul>
        </motion.div>

        {/* Right Column - Location */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-6"
        >
          <h4 className="font-bold uppercase tracking-wider text-sm text-[#d4a017]">Location</h4>
          <ul className="space-y-4 text-[#f0ebe3]/80 text-sm">
            <li className="flex items-start md:items-start justify-center md:justify-start gap-3 text-center md:text-left">
              <MapPin className="text-[#d4a017] w-5 h-5 shrink-0 mt-0.5 border-2 border-[#d4a017] rounded-full p-0.5 bg-transparent" />
              <span className="leading-snug">123 Muscle Way, Iron City, IC<br />56789</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <Phone className="text-[#d4a017] w-5 h-5 shrink-0" />
              <span>(555) 123-4567</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <Clock className="text-[#d4a017] w-5 h-5 shrink-0" />
              <span>Open 24/7 for Elite Members</span>
            </li>
          </ul>
        </motion.div>
        
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#3d3322] text-[#f0ebe3]/60 text-xs text-center md:text-left">
        © 2025 Apex Fitness Systems. All Rights Reserved. Designed for performance.
      </div>
    </footer>
  );
};
