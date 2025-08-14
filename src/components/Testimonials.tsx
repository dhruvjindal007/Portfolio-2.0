import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Mentor at WoRisGo',
      role: 'Senior Software Engineer',
      company: 'WoRisGo',
      content: 'Dhruv showed exceptional dedication and diligence during his internship. His ability to optimize backend performance and reduce response times by 30% was impressive for someone at his level.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 2,
      name: 'PWOC Coordinator',
      role: 'Open Source Maintainer',
      company: 'PEC Winter of Code',
      content: 'Dhruv was among the top 1% contributors out of 200+ participants in PWOC. His code quality and problem-solving approach stood out throughout the program.',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 3,
      name: 'Team Lead',
      role: 'Project Coordinator',
      company: 'PEC Technical Team',
      content: 'Dhruv consistently delivers high-quality full-stack solutions. His work on the restaurant website with AI integration showcased his ability to work with cutting-edge technologies.',
      avatar: 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      id: 4,
      name: 'Professor',
      role: 'Faculty Advisor',
      company: 'Punjab Engineering College',
      content: 'Dhruv demonstrates excellent technical skills and a strong passion for software development. His participation in various tech competitions and open-source contributions is commendable.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`
            text-4xl md:text-5xl font-bold mb-6
            ${isDark 
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400' 
              : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'
            }
          `}>
            What People Say
          </h2>
          <div className={`w-20 h-1 mx-auto rounded ${isDark ? 'bg-cyan-400' : 'bg-blue-500'}`} />
          <p className={`mt-6 text-lg max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Don't just take my word for it - here's what colleagues and clients have to say about my work.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className={`
                relative p-8 md:p-12 rounded-2xl
                ${isDark 
                  ? 'bg-gray-800/50 border border-cyan-500/20' 
                  : 'bg-gray-50 border border-gray-200'
                }
                backdrop-blur-sm
              `}
            >
              <Quote className={`w-12 h-12 mb-6 ${isDark ? 'text-cyan-400' : 'text-blue-500'} opacity-50`} />
              
              <motion.p
                className={`
                  text-lg md:text-xl leading-relaxed mb-8 italic
                  ${isDark ? 'text-gray-200' : 'text-gray-700'}
                `}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                "{testimonials[currentIndex].content}"
              </motion.p>

              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <motion.img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover"
                  whileHover={{ scale: 1.1 }}
                />
                <div>
                  <h4 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className={`${isDark ? 'text-cyan-400' : 'text-blue-600'} font-medium`}>
                    {testimonials[currentIndex].role}
                  </p>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.button
            onClick={prevTestimonial}
            className={`
              absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full
              ${isDark 
                ? 'bg-gray-800 text-cyan-400 hover:bg-gray-700' 
                : 'bg-white text-blue-600 hover:bg-gray-50'
              }
              border ${isDark ? 'border-cyan-500/20' : 'border-gray-200'}
              transition-all duration-200
            `}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            onClick={nextTestimonial}
            className={`
              absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full
              ${isDark 
                ? 'bg-gray-800 text-cyan-400 hover:bg-gray-700' 
                : 'bg-white text-blue-600 hover:bg-gray-50'
              }
              border ${isDark ? 'border-cyan-500/20' : 'border-gray-200'}
              transition-all duration-200
            `}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`
                  w-3 h-3 rounded-full transition-all duration-200
                  ${index === currentIndex
                    ? isDark
                      ? 'bg-cyan-400 scale-125'
                      : 'bg-blue-500 scale-125'
                    : isDark
                      ? 'bg-gray-600 hover:bg-gray-500'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }
                `}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;