import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import TerminalModal from './TerminalModal';
import { useTheme } from '../context/ThemeContext';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
    <motion.nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled 
          ? isDark 
            ? 'bg-gray-900/90 backdrop-blur-md border-b border-cyan-500/20' 
            : 'bg-white/80 backdrop-blur-md border-b border-gray-200/50'
          : 'bg-transparent'
        }
      `}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className={`text-xl font-bold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}
            whileHover={{ scale: 1.05 }}
          >
            Dhruv Jindal
          </motion.div>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-8 md:flex">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`
                  relative px-3 py-2 text-sm font-medium transition-colors duration-200
                  ${isDark 
                    ? 'text-gray-300 hover:text-cyan-400' 
                    : 'text-gray-700 hover:text-blue-600'
                  }
                `}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.label}
                <motion.div
                  className={`
                    absolute bottom-0 left-0 right-0 h-0.5 
                    ${isDark ? 'bg-cyan-400' : 'bg-blue-600'}
                  `}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}
            
            {/* Terminal Button */}
            <motion.button
              onClick={() => setIsTerminalOpen(true)}
              className={`
                p-2 rounded-lg transition-colors duration-200
                ${isDark 
                  ? 'text-green-400 hover:bg-gray-800' 
                  : 'text-gray-700 hover:bg-gray-100'
                }
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Terminal size={18} />
            </motion.button>
            
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <motion.button
              onClick={() => setIsTerminalOpen(true)}
              className={`p-2 ${isDark ? 'text-green-400' : 'text-gray-700'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Terminal size={18} />
            </motion.button>
            <ThemeToggle />
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`
            md:hidden overflow-hidden
            ${isDark ? 'bg-gray-900/95' : 'bg-white/95'}
            backdrop-blur-md border-t ${isDark ? 'border-cyan-500/20' : 'border-gray-200/50'}
          `}
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isMobileMenuOpen ? 'auto' : 0, 
            opacity: isMobileMenuOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`
                  block px-3 py-2 text-base font-medium w-full text-left
                  ${isDark 
                    ? 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }
                  rounded-md transition-colors duration-200
                `}
                whileHover={{ x: 10 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
    
    <TerminalModal 
      isOpen={isTerminalOpen} 
      onClose={() => setIsTerminalOpen(false)} 
    />
    </>
  );
};

export default Navigation;