import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { useReveal } from './hooks/useReveal';
import { useSectionObserver } from './hooks/useSectionObserver';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Hero } from './sections/Hero';
import { Materials } from './sections/Materials';
import { Ordering } from './sections/Ordering';
import { Products } from './sections/Products';

export function App() {
  useSectionObserver();
  useReveal();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Products />
        <Materials />
        <Ordering />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
