import { education } from '../data/resume';

export function Background() {
  return (
    <section id="education" className="py-[110px] bg-bg-alt">
      <div className="max-w-[1040px] mx-auto px-[22px]">
        <div className="text-center mb-[64px]">
          <p className="text-[15px] font-semibold text-apple-link mb-2">Background</p>
          <h2 className="text-[clamp(32px,4.6vw,52px)] font-semibold tracking-[-0.022em] text-ink leading-[1.07]">
            Education & credentials.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px] max-w-[880px] mx-auto">
          {education.map(edu => (
            <div key={edu.id} className="bg-card border border-line-soft rounded-[20px] p-[32px_34px] hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.07)] transition-all duration-300">
              <div className="text-[14px] font-semibold text-apple-link mb-[12px]">Education</div>
              <div className="text-[21px] font-semibold tracking-[-0.018em] text-ink">{edu.degree}</div>
              <div className="text-[16px] text-ink-soft mt-[6px]">{edu.institution} · {edu.period}</div>
            </div>
          ))}
          
          <div className="bg-card border border-line-soft rounded-[20px] p-[32px_34px] hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.07)] transition-all duration-300">
            <div className="text-[14px] font-semibold text-apple-link mb-[12px]">Certifications</div>
            <ul className="list-none mt-[12px] flex flex-col gap-[7px]">
              <li className="text-[15.5px] text-ink-soft pl-[18px] relative">
                <span className="absolute left-[2px] top-[9px] w-[4px] h-[4px] rounded-full bg-ink-faint"></span>
                Cybersecurity Analyst Job Simulation – TCS
              </li>
              <li className="text-[15.5px] text-ink-soft pl-[18px] relative">
                <span className="absolute left-[2px] top-[9px] w-[4px] h-[4px] rounded-full bg-ink-faint"></span>
                Remote Sensing, GIS & GNSS – ISRO
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
