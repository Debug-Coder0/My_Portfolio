import { personalInfo } from '../data/resume';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <header id="top" className="relative pt-[168px] pb-[130px] text-center overflow-hidden">
      {/* Background Glow */}
      <div 
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[700px] pointer-events-none z-0 blur-[10px]"
        style={{
          background: 'radial-gradient(closest-side, rgba(0,113,227,.10), transparent 70%), radial-gradient(closest-side, rgba(120,80,220,.08), transparent 70%)',
          backgroundPosition: '30% 40%, 70% 30%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '60% 80%, 55% 70%'
        }}
      />
      
      <div className="relative z-10 max-w-[1040px] mx-auto px-[22px]">
        <motion.p 
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.2, 0.7, 0.3, 1] }}
          className="text-[19px] font-medium text-apple-link tracking-tight mb-[14px]"
        >
          {personalInfo.role}
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.2, 0.7, 0.3, 1] }}
          className="text-[clamp(40px,7vw,80px)] leading-[1.05] font-semibold tracking-[-0.025em] text-ink max-w-[14ch] mx-auto"
        >
          Building reliable systems, <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0071e3] via-[#6a3fd6] to-[#bf4da0] inline-block">end to end.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.2, 0.7, 0.3, 1] }}
          className="text-[clamp(19px,2.4vw,25px)] text-ink-soft max-w-[40ch] mx-auto mt-[26px] leading-[1.42] tracking-[-0.01em]"
        >
          I'm a computer science undergraduate with hands-on experience building robust software systems. Proven ability to design and ship production-grade features across the stack, focusing on performance, reliability, and clean code.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.2, 0.7, 0.3, 1] }}
          className="mt-[38px] flex gap-[26px] justify-center items-center flex-wrap"
        >
          <motion.a 
            href="#contact" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-apple-blue text-white px-[26px] py-[13px] rounded-full text-[17px] hover:bg-[#0077ed] transition-colors"
          >
            Get in touch
          </motion.a>
          <motion.a 
            href="#work" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-[17px] text-apple-link flex items-center gap-1 group"
          >
            See my work <span className="group-hover:translate-x-1 transition-transform">›</span>
          </motion.a>
        </motion.div>
      </div>
    </header>
  );
}
