import { motion } from 'framer-motion';
import { experiences } from '../data/resume';

export function Experience() {
  return (
    <section id="work" className="py-[110px]">
      <div className="max-w-[1040px] mx-auto px-[22px]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-[64px]"
        >
          <p className="text-[15px] font-semibold text-apple-link mb-2">Experience</p>
          <h2 className="text-[clamp(32px,4.6vw,52px)] font-semibold tracking-[-0.022em] text-ink leading-[1.07]">
            Where I've shipped.
          </h2>
        </motion.div>
        
        <div className="flex flex-col gap-[22px] max-w-[880px] mx-auto">
          {experiences.map((exp, index) => (
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              key={exp.id} 
              className="bg-card border border-line-soft rounded-[22px] p-[34px] md:p-[38px] hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.07)] transition-all duration-300"
            >
              <div className="flex justify-between items-baseline flex-wrap gap-x-[18px] gap-y-[6px] mb-[18px]">
                <div className="text-[23px] font-semibold tracking-[-0.02em]">
                  {exp.role} <span className="text-apple-link">· {exp.company}</span>
                </div>
                <div className="text-[15px] text-ink-faint whitespace-nowrap">
                  {exp.period}
                </div>
              </div>
              <ul className="flex flex-col gap-[10px] list-none">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="text-[17px] text-ink-soft leading-[1.5] pl-[22px] relative tracking-[-0.008em]">
                    <span className="absolute left-[4px] top-[11px] w-[5px] h-[5px] rounded-full bg-apple-blue"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
