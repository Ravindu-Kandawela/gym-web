import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';
import { navLinks } from '../../constants/constant';
import { Button } from '../../components/ui/button';
import logo from '../../assets/logo.png';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDark) {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <header className="fixed top-0 w-full z-50 bg-background-light/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 md:px-20 py-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Apex Fitness Logo" className="w-10 h-10 object-contain shrink-0" />
          <h2 className="text-xl font-black uppercase tracking-tighter hidden sm:block">Apex Fitness</h2>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-primary dark:text-slate-200 dark:hover:text-primary transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors shrink-0"
          >
            {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5" />}
          </button>
          <a href="#contact" className="hidden lg:block">
            <Button>
              Join Now
            </Button>
          </a>
          <button 
            className="lg:hidden p-2 dark:text-white shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-bold uppercase tracking-wider dark:text-slate-200"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            <Button fullWidth>
              Join Now
            </Button>
          </a>
        </motion.div>
      )}
    </header>
  );
};
