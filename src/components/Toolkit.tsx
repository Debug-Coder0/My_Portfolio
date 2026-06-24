import { skills } from '../data/resume';

export function Toolkit() {
  return (
    <section id="skills" className="py-[110px]">
      <div className="max-w-[1040px] mx-auto px-[22px]">
        <div className="text-center mb-[64px]">
          <p className="text-[15px] font-semibold text-apple-link mb-2">Toolkit</p>
          <h2 className="text-[clamp(32px,4.6vw,52px)] font-semibold tracking-[-0.022em] text-ink leading-[1.07]">
            What I work with.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] max-w-[900px] mx-auto">
          {/* Languages */}
          <div className="bg-card border border-line-soft rounded-[20px] p-[28px_30px] hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.07)] transition-all duration-300">
            <h4 className="text-[14px] font-semibold text-apple-link mb-[16px] tracking-normal">Languages</h4>
            <div className="flex flex-wrap gap-[9px]">
              {skills.languages.map(skill => (
                <span key={skill} className="text-[14.5px] text-ink bg-bg-alt border border-line-soft px-[14px] py-[7px] rounded-full tracking-[-0.005em]">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Systems & Infrastructure */}
          <div className="bg-card border border-line-soft rounded-[20px] p-[28px_30px] hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.07)] transition-all duration-300">
            <h4 className="text-[14px] font-semibold text-apple-link mb-[16px] tracking-normal">Systems & Infrastructure</h4>
            <div className="flex flex-wrap gap-[9px]">
              {skills.systems.map(skill => (
                <span key={skill} className="text-[14.5px] text-ink bg-bg-alt border border-line-soft px-[14px] py-[7px] rounded-full tracking-[-0.005em]">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend & Data */}
          <div className="bg-card border border-line-soft rounded-[20px] p-[28px_30px] hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.07)] transition-all duration-300">
            <h4 className="text-[14px] font-semibold text-apple-link mb-[16px] tracking-normal">Backend & Data</h4>
            <div className="flex flex-wrap gap-[9px]">
              {skills.backend.map(skill => (
                <span key={skill} className="text-[14.5px] text-ink bg-bg-alt border border-line-soft px-[14px] py-[7px] rounded-full tracking-[-0.005em]">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div className="bg-card border border-line-soft rounded-[20px] p-[28px_30px] hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.07)] transition-all duration-300">
            <h4 className="text-[14px] font-semibold text-apple-link mb-[16px] tracking-normal">Frontend</h4>
            <div className="flex flex-wrap gap-[9px]">
              {skills.frontend.map(skill => (
                <span key={skill} className="text-[14.5px] text-ink bg-bg-alt border border-line-soft px-[14px] py-[7px] rounded-full tracking-[-0.005em]">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-card border border-line-soft rounded-[20px] p-[28px_30px] hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.07)] transition-all duration-300">
            <h4 className="text-[14px] font-semibold text-apple-link mb-[16px] tracking-normal">Tools</h4>
            <div className="flex flex-wrap gap-[9px]">
              {skills.tools.map(skill => (
                <span key={skill} className="text-[14.5px] text-ink bg-bg-alt border border-line-soft px-[14px] py-[7px] rounded-full tracking-[-0.005em]">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* AI / LLM */}
          <div className="bg-card border border-line-soft rounded-[20px] p-[28px_30px] hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.07)] transition-all duration-300">
            <h4 className="text-[14px] font-semibold text-apple-link mb-[16px] tracking-normal">AI / LLM</h4>
            <div className="flex flex-wrap gap-[9px]">
              {skills.ai.map(skill => (
                <span key={skill} className="text-[14.5px] text-ink bg-bg-alt border border-line-soft px-[14px] py-[7px] rounded-full tracking-[-0.005em]">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        <p className="text-center mt-[30px] text-[15px] text-ink-faint">Active on LeetCode · Data Structures & Algorithms</p>
      </div>
    </section>
  );
}
