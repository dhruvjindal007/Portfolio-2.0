import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Contact: React.FC = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jindal10dhruv@gmail.com',
      href: 'mailto:jindal10dhruv@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9876592017',
      href: 'tel:+919876592017'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chandigarh, India',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/dhruvjindal007', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/dhruv-jindal-322408294', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <section id="contact" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Let's Work Together
          </h2>
          <div className={`w-20 h-1 mx-auto rounded ${isDark ? 'bg-cyan-400' : 'bg-blue-500'}`} />
          <p className={`mt-6 text-lg max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`
              p-8 rounded-2xl
              ${isDark 
                ? 'bg-gray-800/50 border border-cyan-500/20' 
                : 'bg-gray-50 border border-gray-200'
              }
              backdrop-blur-sm
            `}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`
                      w-full px-4 py-3 rounded-lg border-2 transition-all duration-300
                      ${isDark 
                        ? 'bg-gray-900/50 border-gray-600 text-white focus:border-cyan-400' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                      }
                      focus:outline-none
                    `}
                    placeholder="Your Name"
                    animate={{
                      scale: focusedField === 'name' ? 1.02 : 1,
                      boxShadow: focusedField === 'name' 
                        ? isDark
                          ? '0 0 0 3px rgba(0, 255, 255, 0.1)'
                          : '0 0 0 3px rgba(59, 130, 246, 0.1)'
                        : '0 0 0 0px transparent'
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </div>

                <div className="relative">
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`
                      w-full px-4 py-3 rounded-lg border-2 transition-all duration-300
                      ${isDark 
                        ? 'bg-gray-900/50 border-gray-600 text-white focus:border-cyan-400' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                      }
                      focus:outline-none
                    `}
                    placeholder="Your Email"
                    animate={{
                      scale: focusedField === 'email' ? 1.02 : 1,
                      boxShadow: focusedField === 'email' 
                        ? isDark
                          ? '0 0 0 3px rgba(0, 255, 255, 0.1)'
                          : '0 0 0 3px rgba(59, 130, 246, 0.1)'
                        : '0 0 0 0px transparent'
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </div>

              <div className="relative">
                <motion.input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`
                    w-full px-4 py-3 rounded-lg border-2 transition-all duration-300
                    ${isDark 
                      ? 'bg-gray-900/50 border-gray-600 text-white focus:border-cyan-400' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    }
                    focus:outline-none
                  `}
                  placeholder="Subject"
                  animate={{
                    scale: focusedField === 'subject' ? 1.02 : 1,
                    boxShadow: focusedField === 'subject' 
                      ? isDark
                        ? '0 0 0 3px rgba(0, 255, 255, 0.1)'
                        : '0 0 0 3px rgba(59, 130, 246, 0.1)'
                      : '0 0 0 0px transparent'
                  }}
                  transition={{ duration: 0.2 }}
                />
              </div>

              <div className="relative">
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={6}
                  className={`
                    w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 resize-none
                    ${isDark 
                      ? 'bg-gray-900/50 border-gray-600 text-white focus:border-cyan-400' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                    }
                    focus:outline-none
                  `}
                  placeholder="Your Message"
                  animate={{
                    scale: focusedField === 'message' ? 1.02 : 1,
                    boxShadow: focusedField === 'message' 
                      ? isDark
                        ? '0 0 0 3px rgba(0, 255, 255, 0.1)'
                        : '0 0 0 3px rgba(59, 130, 246, 0.1)'
                      : '0 0 0 0px transparent'
                  }}
                  transition={{ duration: 0.2 }}
                />
              </div>

              <motion.button
                type="submit"
                className={`
                  w-full px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300
                  ${isDark 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-400 hover:to-purple-400' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-400 hover:to-purple-400'
                  }
                  shadow-lg transform hover:scale-105 active:scale-95
                  flex items-center justify-center gap-2
                `}
                whileHover={{ 
                  boxShadow: isDark 
                    ? '0 20px 40px rgba(0, 255, 255, 0.3)' 
                    : '0 20px 40px rgba(59, 130, 246, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Get In Touch
              </h3>
              <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm always interested in hearing about new opportunities and exciting projects. 
                Whether you're a company looking to hire, or you're a fellow developer wanting to collaborate, 
                I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  className={`
                    flex items-center gap-4 p-4 rounded-lg transition-all duration-300
                    ${isDark 
                      ? 'bg-gray-800/50 border border-cyan-500/20 hover:bg-gray-800 hover:border-cyan-500/40' 
                      : 'bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                    }
                    backdrop-blur-sm group
                  `}
                  whileHover={{ scale: 1.02, x: 10 }}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <info.icon className={`w-6 h-6 ${isDark ? 'text-cyan-400' : 'text-blue-500'} group-hover:scale-110 transition-transform duration-200`} />
                  <div>
                    <div className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {info.label}
                    </div>
                    <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <div>
              <h4 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className={`
                      p-3 rounded-full transition-all duration-300
                      ${isDark 
                        ? 'bg-gray-800 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900' 
                        : 'bg-gray-100 text-blue-600 hover:bg-blue-600 hover:text-white'
                      }
                      border ${isDark ? 'border-cyan-500/20' : 'border-gray-200'}
                    `}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;