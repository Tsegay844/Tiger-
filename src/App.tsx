import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { StructuredData } from './components/StructuredData';
import { useReveal } from './hooks/useReveal';
import { useSectionObserver } from './hooks/useSectionObserver';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Hero } from './sections/Hero';
import { Importer } from './sections/Importer';
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
        <Importer />
        <Ordering />
        <Contact />
      </main>
      <Footer />
      <StructuredData />
    </>
  );
}
