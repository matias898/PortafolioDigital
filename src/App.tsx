import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { ExperienceSection } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { EducationSection } from './components/sections/Education';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';

export default function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <ExperienceSection />
      <Skills />
      <EducationSection />
      <Projects />
      <Contact />
    </Layout>
  );
}
