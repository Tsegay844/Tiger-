import { useEffect, useRef, useState } from 'react';
import { contact, navigation } from '../content';
import { useUI } from '../state/UIContext';
import { Brand } from './Brand';
import { Icon } from './Icon';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { menuOpen, setMenuOpen, activeSection } = useUI();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setMenuOpen(false);
      toggleRef.current?.focus();
    };
    // Close the mobile menu if the viewport grows to the desktop layout.
    const desktop = window.matchMedia('(min-width: 1024px)');
    const onResize = () => desktop.matches && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    desktop.addEventListener('change', onResize);
    document.body.classList.add('menu-open');
    return () => {
      window.removeEventListener('keydown', onKey);
      desktop.removeEventListener('change', onResize);
      document.body.classList.remove('menu-open');
    };
  }, [menuOpen, setMenuOpen]);

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="top">
      <div className="container nav-wrap">
        <Brand />
        <button
          ref={toggleRef}
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="menu-toggle-bars" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="visually-hidden">Menu</span>
        </button>
        <nav id="primary-nav" className={`primary-nav${menuOpen ? ' open' : ''}`} aria-label="Primary">
          <ul>
            {navigation.map((item) => {
              const active = activeSection === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={active ? 'active' : undefined}
                    aria-current={active ? 'location' : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <a className="button button-primary button-small nav-call" href={contact.phoneHref}>
            <Icon name="phone" />
            Call us
          </a>
        </nav>
      </div>
    </header>
  );
}
