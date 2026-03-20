/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI, Modality } from "@google/genai";
import { 
  Hammer, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ArrowRight,
  Award,
  ShieldCheck,
  Clock,
  Users,
  Instagram
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Awards', href: '#awards' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Transformations', href: '#before-after' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img 
            src="https://i.imgur.com/TRPZ0Fi.jpeg" 
            alt="MC Trim Carpenters Logo" 
            className="h-10 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-zinc-800' : 'text-white'}`}>
            MC TRIM <span className="font-light">CARPENTERS</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a 
              key={link.name} 
              href={link.href}
              whileHover={{ scale: 1.05 }}
              className={`text-sm font-medium transition-all duration-300 relative group ${
                isScrolled ? 'text-zinc-700' : 'text-white/90'
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
          <motion.a 
            href="#contact" 
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(245, 158, 11, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-zinc-900 hover:bg-zinc-800 text-white px-7 py-3 rounded-full text-sm font-semibold transition-all duration-500 shadow-lg shadow-black/20 border border-white/10"
          >
            Get a Free Quote
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className={isScrolled ? 'text-zinc-800' : 'text-white'} /> : <Menu className={isScrolled ? 'text-zinc-800' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-zinc-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-zinc-800 hover:text-amber-700"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-amber-600 text-white px-6 py-3 rounded-xl text-center font-semibold"
            >
              Get a Free Quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img 
          src="https://i.imgur.com/dUJr1QV.jpeg" 
          alt="Carpentry Work" 
          className="w-full h-full object-cover brightness-[0.85] contrast-[1.1]"
          referrerPolicy="no-referrer"
          animate={{ scale: 1.05 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/80 via-zinc-900/40 to-zinc-900/80 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-600/10 border border-amber-600/20 text-amber-600 text-xs font-bold uppercase tracking-[0.2em] mb-8">
            <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
            Serving Milton & The GTA
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-[1.05] mb-8 tracking-tight drop-shadow-2xl">
            Precision Trim & <span className="text-amber-600">Finish</span> Carpentry
          </h1>
          <p className="text-xl md:text-2xl text-zinc-200 mb-12 leading-relaxed max-w-2xl font-light drop-shadow-lg">
            Over 20 years of experience. Founded in 2001. Serving Milton & the GTA with clean, detailed craftsmanship you can trust — done right the first time.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(245, 158, 11, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-5 rounded-full text-lg font-bold transition-all duration-500 flex items-center justify-center gap-2 shadow-2xl shadow-amber-900/40"
            >
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="#portfolio" 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-5 rounded-full text-lg font-bold transition-all duration-500 text-center"
            >
              View Our Work
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Dotted lines visual element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 dotted-border opacity-20 pointer-events-none" />
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Trim & Finish Carpentry",
      desc: "Clean, precise installations that elevate your interior space with professional finishing.",
      icon: <Hammer className="w-6 h-6" />
    },
    {
      title: "Crown Moulding",
      desc: "Add elegance and value to your home with flawless crown moulding installations.",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Wainscoting",
      desc: "Classic and modern wall treatments that add character and depth to any room.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Feature Walls",
      desc: "Custom accent walls and paneling designed to make your space stand out.",
      icon: <Star className="w-6 h-6" />
    },
    {
      title: "Built-in Cabinetry",
      desc: "Custom storage solutions and built-ins designed and built to match your exact vision.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Fireplace Renovations",
      desc: "Complete fireplace façade renovations that transform your living area.",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Custom Shelving",
      desc: "Functional and beautiful shelving units tailored to your home's unique layout.",
      icon: <ArrowRight className="w-5 h-5" />
    },
    {
      title: "Waffle Ceilings",
      desc: "Sophisticated ceiling designs that add architectural interest and luxury.",
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <section id="services" className="py-32 bg-zinc-50 overflow-hidden border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-zinc-800 mb-6 tracking-tight">Our Services</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full" />
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 30px 60px -12px rgba(0,0,0,0.12), 0 18px 36px -18px rgba(0,0,0,0.15)"
              }}
              className="bg-white p-10 rounded-[2rem] shadow-sm border border-zinc-100 transition-all duration-500 group"
            >
              <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-600 mb-8 group-hover:bg-amber-600 group-hover:text-white transition-all duration-500 shadow-inner">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold text-zinc-800 mb-4 tracking-tight">{s.title}</h3>
              <p className="text-zinc-600 leading-relaxed text-lg font-light">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    { img: "https://i.imgur.com/GQI5YGE.jpeg", title: "Custom Trim Work" },
    { img: "https://i.imgur.com/U3Y2Psq.jpeg", title: "Elegant Wainscoting" },
    { img: "https://i.imgur.com/wI32wES.jpeg", title: "Modern Feature Wall" },
    { img: "https://i.imgur.com/toTy0bl.jpeg", title: "Built-in Cabinetry" },
    { img: "https://i.imgur.com/ZjfZ37k.jpeg", title: "Crown Moulding Detail" },
    { img: "https://i.imgur.com/bzuJJEt.jpeg", title: "Fireplace Transformation" },
    { img: "https://i.imgur.com/uIXSxnI.jpeg", title: "Custom Shelving Unit" },
    { img: "https://i.imgur.com/5oo3D4g.jpeg", title: "Architectural Ceiling" },
    { img: "https://i.imgur.com/3hu7Xdr.jpeg", title: "Premium Finish Carpentry" }
  ];

  return (
    <section id="portfolio" className="py-32 bg-white overflow-hidden border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
        >
          <div className="max-w-2xl">
            <h2 className="text-5xl font-bold text-zinc-800 mb-6 tracking-tight">Our Work Speaks for Itself</h2>
            <p className="text-zinc-600 text-xl font-light leading-relaxed">
              Take a look at some of our recent projects across Milton and the GTA. We focus on clean lines, precision, and long-lasting quality.
            </p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-zinc-100 mx-12" />
          <motion.a 
            href="#contact" 
            whileHover={{ scale: 1.05, color: "#d97706" }}
            className="inline-flex items-center gap-2 text-amber-600 font-bold text-lg group transition-all duration-300"
          >
            Start Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </motion.a>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 30px 60px -12px rgba(0,0,0,0.12), 0 18px 36px -18px rgba(0,0,0,0.15)"
              }}
              className="relative aspect-square overflow-hidden rounded-[2.5rem] group cursor-pointer shadow-sm transition-all duration-500 border border-zinc-100"
            >
              <motion.img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover transition-all duration-1000 brightness-[0.95] contrast-[1.05] group-hover:scale-110 group-hover:brightness-100 group-hover:contrast-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                <h3 className="text-white font-bold text-2xl mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 tracking-tight">{project.title}</h3>
                <div className="w-12 h-1 bg-amber-600 mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 rounded-full" />
                <span className="text-white/90 text-xs uppercase tracking-[0.2em] font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">View Project Details</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      text: "The attention to detail is unmatched. Our crown moulding looks absolutely perfect. Highly recommend!",
      author: "Sarah M.",
      location: "Milton"
    },
    {
      text: "Professional, clean, and efficient. They transformed our living room with custom wainscoting.",
      author: "Mark T.",
      location: "Oakville"
    },
    {
      text: "Custom work done exactly how we wanted. You can tell they take pride in their craftsmanship.",
      author: "David L.",
      location: "Mississauga"
    },
    {
      text: "Fair pricing, great communication, and the job was completed smoothly.",
      author: "Emily W.",
      location: "Burlington"
    }
  ];

  return (
    <section className="py-32 bg-zinc-900 text-white overflow-hidden relative border-t border-white/5">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/5 rounded-full blur-[120px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/5 rounded-full blur-[120px] -ml-48 -mb-48" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6 tracking-tight">What Our Clients Say</h2>
          <p className="text-amber-600 font-bold uppercase tracking-[0.3em] text-xs">Excellence Recognized</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((r, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                backgroundColor: "rgba(255, 255, 255, 0.08)"
              }}
              className="bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 flex flex-col justify-between transition-all duration-500 group shadow-2xl shadow-black/40"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-600 text-amber-600" />
                    ))}
                  </div>
                  <div className="text-amber-600/20 group-hover:text-amber-600/40 transition-colors duration-500">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H13.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C7.46472 8 7.017 8.44772 7.017 9V12C7.017 12.5523 6.56928 13 6.017 13H5.017V21H6.017Z"/></svg>
                  </div>
                </div>
                <p className="text-xl text-zinc-300 italic mb-10 leading-relaxed font-light">"{r.text}"</p>
              </div>
              <div className="flex items-center gap-4 border-t border-white/5 pt-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center font-bold text-lg shadow-lg shadow-amber-900/40">
                  {r.author[0]}
                </div>
                <div>
                  <p className="font-bold text-lg tracking-tight">{r.author}</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-[0.2em] font-medium">{r.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      title: "Request a Quote",
      desc: "Tell us about your project and vision. We'll provide a detailed estimate tailored to your needs."
    },
    {
      title: "Plan & Design",
      desc: "We collaborate on details, materials, and timelines to ensure every element meets our standards."
    },
    {
      title: "Build & Install",
      desc: "Our master carpenters execute the vision with clean, precise work that transforms your space."
    }
  ];

  return (
    <section className="py-32 bg-white overflow-hidden border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-zinc-800 mb-6 tracking-tight">Simple & Stress-Free Process</h2>
          <p className="text-zinc-600 text-xl font-light">How we bring your vision to life with precision</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-16 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/3 left-0 right-0 h-px bg-zinc-100 z-0" />
          
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative z-10 text-center group"
            >
              <motion.div 
                whileHover={{ scale: 1.1, borderColor: "#d97706", backgroundColor: "#fffbeb" }}
                className="w-20 h-20 bg-white border-2 border-zinc-100 rounded-[2rem] flex items-center justify-center text-3xl font-bold text-zinc-800 mx-auto mb-10 transition-all duration-500 shadow-xl shadow-zinc-100"
              >
                {i + 1}
              </motion.div>
              <h3 className="text-2xl font-bold text-zinc-800 mb-6 tracking-tight">{step.title}</h3>
              <p className="text-zinc-600 text-lg font-light leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TransformationCard = ({ before, after, title }: { before: string; after: string; title: string }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isSideBySide, setIsSideBySide] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (containerRef.current && !isSideBySide) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width) * 100;
      setSliderPos(Math.min(Math.max(x, 0), 100));
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-[2.5rem] group cursor-pointer shadow-2xl border border-zinc-100 transition-all duration-700 hover:-translate-y-4"
      onMouseMove={(e) => handleMove(e.clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onMouseLeave={() => !isSideBySide && setSliderPos(50)}
      onClick={() => setIsSideBySide(!isSideBySide)}
    >
      {isSideBySide ? (
        <div className="flex h-full w-full bg-zinc-900">
          <div className="w-1/2 h-full relative border-r border-white/10">
            <img src={before} className="w-full h-full object-cover brightness-[0.9] contrast-[1.1]" referrerPolicy="no-referrer" alt={`${title} Before`} />
            <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] text-white uppercase font-bold tracking-[0.2em]">Before</div>
          </div>
          <div className="w-1/2 h-full relative">
            <img src={after} className="w-full h-full object-cover brightness-[0.9] contrast-[1.1]" referrerPolicy="no-referrer" alt={`${title} After`} />
            <div className="absolute top-6 right-6 bg-amber-600/80 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] text-white uppercase font-bold tracking-[0.2em]">After</div>
          </div>
        </div>
      ) : (
        <>
          {/* Before Image (Base) */}
          <img 
            src={before} 
            alt={`${title} Before`} 
            className="absolute inset-0 w-full h-full object-cover brightness-[0.9] contrast-[1.1]"
            referrerPolicy="no-referrer"
          />
          
          {/* After Image (Overlay) */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
            style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
          >
            <img 
              src={after} 
              alt={`${title} After`} 
              className="absolute inset-0 w-full h-full object-cover brightness-[0.9] contrast-[1.1]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Slider Line */}
          <div 
            className="absolute top-0 bottom-0 w-0.5 bg-white/50 backdrop-blur-sm z-20 pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-white/20">
               <div className="flex gap-1.5">
                 <div className="w-0.5 h-5 bg-zinc-400 rounded-full" />
                 <div className="w-0.5 h-5 bg-zinc-400 rounded-full" />
               </div>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-6 left-6 z-10 pointer-events-none">
            <span className="px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] bg-zinc-900/90 text-white backdrop-blur-md shadow-2xl">
              Before
            </span>
          </div>
          <div className="absolute top-6 right-6 z-10 pointer-events-none">
            <span className="px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] bg-amber-600/90 text-white backdrop-blur-md shadow-2xl">
              After
            </span>
          </div>
        </>
      )}

      {/* Title Bar */}
      <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none">
        <h3 className="text-white font-bold text-2xl leading-tight tracking-tight mb-2">{title}</h3>
        <div className="flex items-center gap-3">
          <div className="h-px w-10 bg-amber-500"></div>
          <p className="text-white/80 text-[10px] uppercase tracking-[0.3em] font-bold">
            {isSideBySide ? 'Tap to use slider' : 'Hover to reveal • Tap for side-by-side'}
          </p>
        </div>
      </div>
    </div>
  );
};

const BeforeAfter = () => {
  const transformations = [
    {
      title: "Project 1",
      before: "https://i.imgur.com/EuvEB67.jpeg",
      after: "https://i.imgur.com/dUJr1QV.jpeg"
    },
    {
      title: "Project 2",
      before: "https://i.imgur.com/5D1bFBz.jpeg",
      after: "https://i.imgur.com/16m7p8k.jpeg"
    },
    {
      title: "Project 3",
      before: "https://i.imgur.com/GlcxUgn.jpeg",
      after: "https://i.imgur.com/164KENP.jpeg"
    }
  ];

  return (
    <section id="before-after" className="py-24 bg-white border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-zinc-800 mb-6 tracking-tight">Transformation Gallery</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
            From raw framing to finished masterpieces. Witness the precision and detail that defines our custom trim work.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {transformations.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <TransformationCard 
                before={project.before} 
                after={project.after} 
                title={project.title} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Awards = () => {
  const awards = [
    "https://i.imgur.com/Dp2CFdH.jpeg",
    "https://i.imgur.com/fl1Y5Oo.jpeg",
    "https://i.imgur.com/aBUaZds.jpeg"
  ];

  const points = [
    { title: "Attention to Detail", desc: "Meticulous focus on every joint and finish." },
    { title: "Clear Communication", desc: "Transparent updates from start to finish." },
    { title: "Reliable Timelines", desc: "We respect your time and stick to schedules." },
    { title: "Honest Pricing", desc: "No hidden fees, just fair value for excellence." }
  ];

  return (
    <section id="awards" className="py-32 bg-white overflow-hidden border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-zinc-800 mb-6 tracking-tight">Award-Winning Craftsmanship</h2>
          <p className="text-zinc-600 text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Recognized for excellence in carpentry and home renovations across the GTA.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          {awards.map((url, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ 
                y: -10,
                scale: 1.05, 
                boxShadow: "0 30px 60px -12px rgba(0,0,0,0.12)" 
              }}
              className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-xl border border-zinc-100 transition-all duration-500"
            >
              <motion.img 
                src={url} 
                alt={`Award ${i + 1}`} 
                className="w-full h-full object-cover brightness-[0.95] contrast-[1.05] hover:brightness-100 hover:contrast-100 transition-all duration-700"
                whileHover={{ scale: 1.1 }}
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl font-bold text-zinc-800 mb-8 tracking-tight">Trusted Excellence Since 2001</h3>
            <p className="text-zinc-600 mb-10 text-xl font-light leading-relaxed">
              MC Trim Carpenters has built a reputation on quality and reliability. With over 20 years of experience, our commitment to excellence has earned us the trust of homeowners across Milton and the GTA.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {points.map((p, i) => (
                <div key={i} className="flex flex-col gap-4 p-6 rounded-3xl bg-zinc-50 border border-zinc-100 hover:bg-white hover:shadow-xl hover:shadow-zinc-200 transition-all duration-500 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-amber-600 shadow-sm group-hover:bg-amber-600 group-hover:text-white transition-all duration-500">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-zinc-800 mb-2">{p.title}</h4>
                    <p className="text-zinc-600 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-zinc-100">
              <img 
                src="https://i.imgur.com/fl1Y5Oo.jpeg" 
                alt="Craftsmanship" 
                className="w-full h-full object-cover brightness-[0.9] contrast-[1.1]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-amber-600 text-white p-10 rounded-[2.5rem] shadow-2xl hidden md:block">
              <p className="text-5xl font-bold mb-2">20+</p>
              <p className="text-sm uppercase tracking-[0.2em] font-bold">Years of Mastery</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const QuoteForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");

  const pricing = [
    { item: "Crown Moulding", price: "$10–$25 per linear foot" },
    { item: "Wainscoting", price: "$15–$40 per linear foot" },
    { item: "Feature Walls", price: "$800–$3500+" },
    { item: "Built-in Cabinetry", price: "$1500–$6000+" },
    { item: "Fireplace Renovations", price: "$1200–$4000+" },
    { item: "Waffle Ceilings", price: "$2500–$8000+" }
  ];

  const [status, setStatus] = useState("idle");
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Helper to wrap raw PCM in a WAV header
  const wrapWav = (pcmData: Uint8Array, sampleRate: number = 24000) => {
    const buffer = new ArrayBuffer(44 + pcmData.length);
    const view = new DataView(buffer);

    const writeString = (offset: number, string: string) => {
      for (let i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
      }
    };

    writeString(0, 'RIFF');
    view.setUint32(4, 36 + pcmData.length, true);
    writeString(8, 'WAVE');
    writeString(12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true); // PCM format
    view.setUint16(22, 1, true); // Mono
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * 2, true); // Byte rate
    view.setUint16(32, 2, true); // Block align
    view.setUint16(34, 16, true); // Bits per sample
    writeString(36, 'data');
    view.setUint32(40, pcmData.length, true);

    for (let i = 0; i < pcmData.length; i++) {
      view.setUint8(44 + i, pcmData[i]);
    }

    return new Blob([buffer], { type: 'audio/wav' });
  };

  const generateAndPlayVoice = async (name: string, service: string) => {
    const confirmationText = `Hey ${name}, thanks for reaching out to MC Trim Carpenters about ${service}. We received your request and will contact you shortly. We're looking forward to helping you with your home transformation, eh!`;

    try {
      const apiKey = process.env.GEMINI_API_KEY || "";
      if (!apiKey) {
        throw new Error("Gemini API key is missing.");
      }
      
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: `Say this in a strongly Canadian accent male voice that's engaging and professional: ${confirmationText}` }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Fenrir' },
            },
          },
        },
      });

      const part = response.candidates?.[0]?.content?.parts?.[0];
      const base64Audio = part?.inlineData?.data;
      
      if (base64Audio) {
        const binaryString = atob(base64Audio);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        
        const blob = wrapWav(bytes, 24000);
        const audioUrl = URL.createObjectURL(blob);
        setAudioUrl(audioUrl);
        
        if (audioRef.current) {
          audioRef.current.src = audioUrl;
          audioRef.current.play().catch(e => console.error("Auto-play failed after generation:", e));
        }
      }
    } catch (err) {
      console.error("Voice error:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    
    // Prime the audio element on user interaction to bypass autoplay restrictions
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }
    // Playing a tiny silent sound or just calling play() on an empty source 
    // often "unlocks" the audio context for future async play() calls.
    audioRef.current.play().catch(() => {});
    
    setStatus("sending");
    
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
      setAudioUrl(null);
    }

    const data = {
      name,
      email,
      phone,
      service,
      budget,
      message
    };

    const scriptUrl = "https://script.google.com/macros/s/AKfycbyDZSsapzlMoc-VNINux_-1xCGzCJi2MFTlGR6HESrPy-qbYeJkhtzEPPlDu_H8f05l4Q/exec";

    try {
      console.log("Submitting to Google Script and generating voice...");
      
      // Trigger both in parallel for maximum speed
      const scriptPromise = fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(data)
      });

      const voicePromise = generateAndPlayVoice(data.name, data.service);

      // Wait for the script to at least be sent
      await scriptPromise;
      console.log("Data sent to Google Script URL.");

      // Show success message
      setStatus("success");
      
      // Clear form
      setName("");
      setEmail("");
      setPhone("");
      setService("");
      setBudget("");
      setMessage("");

      // Voice is already running in parallel and will play when ready
      await voicePromise;

      // Auto reset after 3 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 3000);

    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("error");
      alert("Something went wrong. Please try again or call us directly.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-32 bg-white overflow-hidden border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-zinc-50 p-10 md:p-16 rounded-[3rem] border border-zinc-100 shadow-2xl shadow-zinc-100"
          >
            <h2 className="text-4xl font-bold text-zinc-800 mb-10 tracking-tight">Get a Free Quote</h2>
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em]">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-white border border-zinc-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-600 outline-none transition-all shadow-sm" 
                    placeholder="John Doe" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em]">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-white border border-zinc-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-600 outline-none transition-all shadow-sm" 
                    placeholder="john@example.com" 
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em]">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full bg-white border border-zinc-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-600 outline-none transition-all shadow-sm" 
                    placeholder="(647) 771-0076" 
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em]">Service Type</label>
                  <select 
                    name="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-white border border-zinc-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-600 outline-none transition-all appearance-none shadow-sm"
                    required
                  >
                    <option value="" disabled>Select a service</option>
                    <option>Trim & Finish Carpentry</option>
                    <option>Crown Moulding</option>
                    <option>Wainscoting</option>
                    <option>Feature Walls</option>
                    <option>Built-in Cabinetry</option>
                    <option>Fireplace Renovations</option>
                    <option>Custom Shelving</option>
                    <option>Waffle Ceilings</option>
                  </select>
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em]">Budget Range</label>
                <select 
                  name="budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-white border border-zinc-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-600 outline-none transition-all appearance-none shadow-sm"
                  required
                >
                  <option value="" disabled>Select a budget</option>
                  <option>$500 – $1,500</option>
                  <option>$1,500 – $5,000</option>
                  <option>$5,000+</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em]">Project Description</label>
                <textarea 
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4} 
                  className="w-full bg-white border border-zinc-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-amber-600 outline-none transition-all shadow-sm" 
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              {status === "sending" && (
                <p className="text-amber-600 font-bold uppercase tracking-widest text-xs animate-pulse">Sending request...</p>
              )}
              {status === "success" && (
                <p className="text-emerald-600 font-bold uppercase tracking-widest text-xs">Request sent successfully</p>
              )}
              {status === "error" && (
                <p className="text-rose-600 font-bold uppercase tracking-widest text-xs">Something went wrong. Please try again.</p>
              )}
              <div className="flex flex-col gap-6">
                {audioUrl && (
                  <motion.button 
                    type="button"
                    whileHover={{ scale: 1.02, backgroundColor: "#18181b" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      if (audioRef.current) {
                        audioRef.current.currentTime = 0;
                        audioRef.current.play().catch(e => console.error("Playback failed:", e));
                      }
                    }}
                    className="w-full bg-zinc-800 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-zinc-200"
                  >
                    <span className="text-xl">🔊</span> Replay Confirmation Message
                  </motion.button>
                )}
                
                <motion.button 
                  type="submit"
                  whileHover={{ 
                    scale: 1.02, 
                    backgroundColor: "#b45309",
                    boxShadow: "0 20px 40px -10px rgba(217, 119, 6, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status === "sending"}
                  className={`w-full bg-amber-600 text-white font-bold py-5 rounded-2xl transition-all shadow-2xl shadow-amber-900/20 text-lg ${status === "sending" ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {status === "sending" ? 'Sending...' : 'Submit Request'}
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Pricing Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-zinc-800 mb-8 tracking-tight">Pricing Guide</h2>
              <p className="text-zinc-600 mb-12 text-xl font-light leading-relaxed">
                Transparent pricing for your home upgrades. Prices vary depending on project size and complexity. Request a quote for an accurate estimate.
              </p>
              <div className="space-y-6">
                {pricing.map((p, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ x: 15, color: "#d97706" }}
                    className="flex items-center justify-between py-6 border-b border-zinc-100 last:border-0 transition-all group"
                  >
                    <span className="font-bold text-zinc-800 text-lg tracking-tight group-hover:text-amber-600 transition-colors">{p.item}</span>
                    <span className="font-bold text-amber-600 text-lg">{p.price}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-zinc-900 text-white p-12 rounded-[2.5rem] border border-white/5 transition-all shadow-2xl shadow-black/20 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/10 rounded-full blur-3xl group-hover:bg-amber-600/20 transition-all duration-700" />
              <h3 className="text-2xl font-bold mb-6 tracking-tight">Professional Carpentry Services in Milton & GTA</h3>
              <p className="text-zinc-400 leading-relaxed text-lg font-light">
                We proudly serve Milton, Mississauga, Oakville, Burlington, and surrounding areas. MC Trim Carpenters specializes in high-quality trim and finish carpentry for homeowners looking to upgrade their space.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white py-24 border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-8 group cursor-pointer">
              <div className="w-10 h-10 bg-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-900/20 group-hover:scale-110 transition-transform duration-500">
                <Hammer className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase italic">MC<span className="text-amber-500">Trim</span></span>
            </div>
            <p className="text-zinc-500 leading-relaxed mb-8 max-w-xs">
              Elevating homes across Milton and the GTA with precision trim carpentry and bespoke interior finishes.
            </p>
            <div className="flex gap-4">
              <motion.a 
                whileHover={{ scale: 1.1, backgroundColor: "#d97706" }}
                whileTap={{ scale: 0.95 }}
                href="https://www.instagram.com/mctrimcarpenters/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center transition-colors border border-white/10 hover:border-amber-500/50"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, backgroundColor: "#d97706" }}
                whileTap={{ scale: 0.95 }}
                href="https://www.facebook.com/MCTrimCarpenters/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center transition-colors border border-white/10 hover:border-amber-500/50"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </motion.a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-8 uppercase tracking-[0.2em] text-xs text-amber-500">Quick Links</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><motion.a whileHover={{ x: 5, color: "#fff" }} href="#" className="transition-colors inline-block hover:text-white">Home</motion.a></li>
              <li><motion.a whileHover={{ x: 5, color: "#fff" }} href="#awards" className="transition-colors inline-block hover:text-white">Awards</motion.a></li>
              <li><motion.a whileHover={{ x: 5, color: "#fff" }} href="#services" className="transition-colors inline-block hover:text-white">Services</motion.a></li>
              <li><motion.a whileHover={{ x: 5, color: "#fff" }} href="#portfolio" className="transition-colors inline-block hover:text-white">Portfolio</motion.a></li>
              <li><motion.a whileHover={{ x: 5, color: "#fff" }} href="#before-after" className="transition-colors inline-block hover:text-white">Transformations</motion.a></li>
              <li><motion.a whileHover={{ x: 5, color: "#fff" }} href="#contact" className="transition-colors inline-block hover:text-white">Contact</motion.a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-[0.2em] text-xs text-amber-500">Contact</h4>
            <ul className="space-y-4 text-zinc-400">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-amber-500" />
                <span>Milton, Ontario</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-500" />
                <span>Serving the GTA</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-500" />
                <span>info@mctrim.ca</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-8 uppercase tracking-[0.2em] text-xs text-amber-500">Our Promise</h4>
            <p className="text-zinc-500 italic leading-relaxed">
              "We don't just build trim; we craft the character of your home. Every cut is intentional, every joint is perfect."
            </p>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500 text-xs tracking-widest uppercase">
          <p>© {new Date().getFullYear()} MC Trim Carpenters. Masterfully Crafted.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-32 bg-zinc-950 relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 dotted-border opacity-5" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-600/50 to-transparent" />
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6 relative z-10 text-center"
      >
        <span className="inline-block text-amber-500 font-bold tracking-[0.3em] uppercase text-xs mb-8">Begin Your Transformation</span>
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-10 tracking-tight leading-[1.1]">
          Ready to Upgrade <br className="hidden md:block" /> Your Living Space?
        </h2>
        <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Experience the difference that master craftsmanship makes. Contact us today for an exclusive consultation and bespoke quote.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(245, 158, 11, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            href="#contact" 
            className="inline-flex items-center gap-3 bg-amber-600 text-white px-12 py-5 rounded-full text-lg font-bold transition-all shadow-2xl shadow-amber-900/40"
          >
            Get a Free Quote <ChevronRight className="w-5 h-5" />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.98 }}
            href="#portfolio" 
            className="inline-flex items-center gap-3 bg-white/5 text-white px-12 py-5 rounded-full text-lg font-bold transition-all border border-white/10"
          >
            View Portfolio
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="font-sans selection:bg-amber-200 selection:text-amber-900">
      <Navbar />
      <main>
        <Hero />
        <Awards />
        <Services />
        <Portfolio />
        <BeforeAfter />
        <Testimonials />
        <HowItWorks />
        <FinalCTA />
        <QuoteForm />
      </main>
      <Footer />

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-6 left-6 right-6 z-40 md:hidden">
        <a 
          href="#contact" 
          className="flex items-center justify-center gap-2 bg-zinc-900 text-white py-4 rounded-2xl font-bold shadow-2xl shadow-black/40 border border-white/10"
        >
          <Phone className="w-5 h-5" /> Get a Free Quote
        </a>
      </div>
    </div>
  );
}
