# Tiger Fiberglass & Plastic website

The company website, built with React and Vite. The build output is a plain static site (HTML, CSS, JS and images), so any web host can serve it.

## 1. Run it on your computer

Install [Node.js 22](https://nodejs.org) (npm comes with it), then in this folder:

```bash
npm install     # first time only: downloads the dependencies
npm run dev     # live preview at http://localhost:5173
```

Changes show up in the browser as soon as you save a file.

## 2. Change the content

- **Phone, email, addresses, products, services and gallery slides:** `src/content.ts`
- **Headings and paragraphs:** `src/sections/` (one file per page section)
- **Images:** `src/assets/images/` (each image as WebP and JPEG)
- **Colours and layout:** `src/styles.css`
- **Gallery slides:** add a 16:9 image as `gallery-<name>-<width>.webp` and `.jpg` at widths 240, 640, 960 and 1280, then add an entry to `gallery` in `src/content.ts`. Slides 3 to 6 are generic AI images, not Tiger's products. Replace them with real photos when possible.

Only publish facts the client has confirmed.

## 3. Build

```bash
npm run check     # finds errors before you build
npm run build     # creates the finished site in dist/
npm run preview   # optional: view the built site at http://localhost:4173
```

## 4. Deploy

