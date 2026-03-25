import { useEffect, useState } from 'react';
import SiteNav from './components/SiteNav';
import TypingIntro from './components/TypingIntro';
import About from './sections/About';
import Contact from './sections/Contact';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Resume from './sections/Resume';
import Skills from './sections/Skills';
import { about, contact, hero, navLinks, projects, resume, skills } from './data/content';

const trackedSections = ['hero', ...navLinks.map((link) => link.id)];

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (showIntro) {
      return undefined;
    }

    const elements = trackedSections
      .map((sectionId) => document.getElementById(sectionId))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        threshold: [0.25, 0.45, 0.7],
        rootMargin: '-12% 0px -50% 0px',
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [showIntro]);

  if (showIntro) {
    return <TypingIntro onComplete={() => setShowIntro(false)} />;
  }

  return (
    <>
      <a
        className="skip-link"
        href="#content"
      >
        Skip to content
      </a>

      <div className="page-shell">
        <SiteNav
          links={navLinks}
          activeSection={activeSection}
        />

        <main id="content">
          <Hero content={hero} />
          <About content={about} />
          <Resume content={resume} />
          <Projects content={projects} />
          <Contact content={contact} />
          <Skills content={skills} />
        </main>

        <footer className="site-footer">
          <div className="container footer-inner">
            <p>Alexander Aranda</p>
            <p>Built with Bun, Vite, and React.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
