import { createRoot, hydrateRoot } from 'react-dom/client';
import { Root } from './Root';
import '@fontsource-variable/archivo/wght.css';
import '@fontsource-variable/playfair-display/wght-italic.css';
import './styles.css';

const root = document.getElementById('root');
if (!root) throw new Error('Application root element was not found.');

// Production HTML is prerendered at build time (scripts/prerender.mjs); the dev server serves an empty root.
if (root.hasChildNodes()) hydrateRoot(root, <Root />);
else createRoot(root).render(<Root />);
