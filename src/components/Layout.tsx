import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../data/resume';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [pageViews, setPageViews] = useState<number | null>(null);

  useEffect(() => {
    fetch('https://api.counterapi.dev/v1/nadirsiddiqui/portfolio/up')
      .then(res => res.json())
      .then(data => {
        if (data && typeof data.count === 'number') {
          setPageViews(data.count);
        }
      })
      .catch(() => {});
  }, []);

  const navItems = ['About', 'Experience', 'Projects', 'Skills', 'Contact'];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 h-[48px] bg-[#fbfbfd]/70 backdrop-blur-[20px] border-b border-black/5 z-[1000] flex items-center">
        <div className="max-w-[1040px] w-full mx-auto px-[22px] flex items-center justify-between">
          <a href="#top" className="text-[18px] font-semibold tracking-tight text-ink">{personalInfo.name}</a>
          <div className="hidden md:flex gap-[30px]">
            {navItems.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase() === 'experience' ? 'work' : item.toLowerCase()}`}
                className="text-[13px] text-ink opacity-85 hover:opacity-50 transition-opacity"
              >
                {item}
              </a>
            ))}
          </div>
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-[13px] text-white bg-apple-blue px-[15px] py-[6px] rounded-full hover:bg-[#0077ed] transition-colors hidden md:block">
            Resume
          </a>
          
          <button 
            className="md:hidden text-ink"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[48px] z-[999] bg-bg/95 backdrop-blur-xl p-[22px] md:hidden">
          <div className="flex flex-col gap-6 text-lg">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase() === 'experience' ? 'work' : item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-ink font-medium"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-line-soft py-[34px] text-center mt-auto">
        <div className="max-w-[1040px] mx-auto px-[22px]">
          <div className="flex gap-[22px] justify-center flex-wrap mb-3">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-[12.5px] text-ink-faint hover:text-apple-link transition-colors">GitHub</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-[12.5px] text-ink-faint hover:text-apple-link transition-colors">LinkedIn</a>
            <a href={`mailto:${personalInfo.email}`} className="text-[12.5px] text-ink-faint hover:text-apple-link transition-colors">Email</a>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-[10px] md:gap-[20px] text-[12.5px] text-ink-faint">
            <p>© {new Date().getFullYear()} {personalInfo.name}. Designed & built with care.</p>
            {pageViews !== null && (
              <p className="flex items-center gap-1 bg-bg-alt px-2 py-1 rounded-md border border-line-soft">
                <span className="w-2 h-2 rounded-full bg-apple-blue"></span>
                {pageViews.toLocaleString()} Profile Views
              </p>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
