// Injects the server-rendered app into dist/index.html so content is present without JavaScript.
// Runs after `vite build` (client) and `vite build --ssr` (server entry); see package.json "build".
import { readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const htmlPath = `${root}dist/index.html`;
const ssrDir = `${root}dist-ssr`;
const marker = '<div id="root"></div>';

const { render } = await import(pathToFileURL(`${ssrDir}/entry-server.js`).href);
const template = await readFile(htmlPath, 'utf8');
if (!template.includes(marker)) throw new Error(`Prerender marker ${marker} not found in dist/index.html`);

await writeFile(htmlPath, template.replace(marker, `<div id="root">${render()}</div>`));
await rm(ssrDir, { recursive: true, force: true });
console.log('Prerendered dist/index.html');
