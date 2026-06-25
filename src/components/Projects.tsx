import { motion } from 'framer-motion';
import { projects } from '../data/resume';

export function Projects() {
  return (
    <section id="projects" className="py-[110px] bg-bg-alt">
      <div className="max-w-[1040px] mx-auto px-[22px]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-[64px]"
        >
          <p className="text-[15px] font-semibold text-apple-link mb-2">Projects</p>
          <h2 className="text-[clamp(32px,4.6vw,52px)] font-semibold tracking-[-0.022em] text-ink leading-[1.07]">
            Things I've built.
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          {projects.map((proj, index) => (
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              key={proj.id} 
              className="bg-card rounded-[28px] p-[44px] md:p-[42px] border border-line-soft min-h-[320px] flex flex-col hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              <p className="text-[14px] font-semibold text-apple-link">{proj.year}</p>
              <h3 className="text-[30px] font-semibold tracking-[-0.022em] mt-[10px]">{proj.title}</h3>
              <p className="text-[17px] text-ink-soft mt-[16px] leading-[1.5] tracking-[-0.008em] flex-1">
                {proj.description[0]}
              </p>
              
              <div className="mt-[26px] flex flex-wrap gap-[8px]">
                {proj.tech.map(t => (
                  <span key={t} className="text-[12.5px] text-ink-soft bg-bg-alt border border-line-soft px-[12px] py-[5px] rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
