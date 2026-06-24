/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Toolkit } from './components/Toolkit';
import { Background } from './components/Background';

export default function App() {
  return (
    <Layout>
      <Hero />
      <Stats />
      
      <section className="bg-bg-alt py-[110px]" id="about">
        <div className="max-w-[1040px] mx-auto px-[22px] text-center">
          <p className="text-[clamp(24px,3.2vw,36px)] font-medium tracking-[-0.02em] leading-[1.3] max-w-[22ch] mx-auto text-ink">
            I build software that holds up in production — <span className="text-ink-faint">tested, debugged, and owned end to end.</span>
          </p>
          <p className="text-[19px] text-ink-soft max-w-[62ch] mx-auto mt-[36px] leading-[1.55] tracking-[-0.01em]">
            I work across the stack: triaging production incidents, hardening access-control systems, writing the regression tests that catch problems before release, and building tools. I'm actively growing toward distributed systems, Linux internals, and infrastructure.
          </p>
        </div>
      </section>

      <Experience />
      <Projects />
      <Toolkit />
      <Background />
      
      <section className="text-center py-[130px]" id="contact">
        <div className="max-w-[1040px] mx-auto px-[22px]">
          <h2 className="text-[clamp(34px,5vw,60px)] font-semibold tracking-[-0.025em] leading-[1.06]">
            Let's build something <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0071e3] to-[#6a3fd6]">reliable.</span>
          </h2>
          <p className="text-[21px] text-ink-soft mx-auto mt-[22px] max-w-[40ch] tracking-[-0.01em]">
            Open to software engineering roles and interesting problems in systems, reliability, and infrastructure.
          </p>
          <div className="mt-[40px] flex gap-[14px] justify-center flex-wrap">
            <a href="mailto:nadirsiddiqui092@gmail.com" className="text-[16px] px-[24px] py-[12px] rounded-full border border-apple-blue bg-apple-blue text-white hover:bg-[#0077ed] transition-colors">
              Email me
            </a>
            <a href="https://github.com/Debug-Coder0" target="_blank" rel="noopener noreferrer" className="text-[16px] px-[24px] py-[12px] rounded-full border border-line text-ink bg-card hover:border-ink hover:-translate-y-[2px] transition-all">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/nadir-siddiqui-2ab92921b/" target="_blank" rel="noopener noreferrer" className="text-[16px] px-[24px] py-[12px] rounded-full border border-line text-ink bg-card hover:border-ink hover:-translate-y-[2px] transition-all">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
