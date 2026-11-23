import import480Jpg from './assets/images/fiberglass-import-container-480.jpg';
import import480Webp from './assets/images/fiberglass-import-container-480.webp';
import import960Jpg from './assets/images/fiberglass-import-container-960.jpg';
import import960Webp from './assets/images/fiberglass-import-container-960.webp';
import tanks240Jpg from './assets/images/tiger-fiberglass-water-tanks-240.jpg';
import tanks240Webp from './assets/images/tiger-fiberglass-water-tanks-240.webp';
import tanks640Jpg from './assets/images/tiger-fiberglass-water-tanks-640.jpg';
import tanks640Webp from './assets/images/tiger-fiberglass-water-tanks-640.webp';
import tanks960Jpg from './assets/images/tiger-fiberglass-water-tanks-960.jpg';
import tanks960Webp from './assets/images/tiger-fiberglass-water-tanks-960.webp';
import type { IconName } from './components/Icon';
import type { ResponsiveImage } from './components/Picture';

/*
 * All business facts below come from material supplied by the client:
 * the company description and contact details the owner provided (English + Ethiopic),
 * the service terms (warranty, repair, delivery) and the product photos.
 * Do not add claims here that the client has not confirmed.
 */

export const company = {
  name: 'Tiger Fiberglass & Plastic Production and Importer',
  shortName: 'Tiger',
  tagline: 'Fiberglass & Plastic · Production & Import',
  // Exactly as written by the owner (Tigrinya spelling).
  nameLocal: 'ታይገር የፋይበር  እና ፕላስቲክ ውጤቶች ኣምራች እና ኣስመጪ',
  nameLocalLang: 'ti',
} as const;

// Client-supplied number 0914 765 688, stored in international format.
const phoneE164 = '+251914765688';
const email = 'gmdhing15@gmail.com';

export const contact = {
  // Non-breaking spaces keep the number on one line.
  phoneDisplay: '+251 914 765 688',
  phoneHref: `tel:${phoneE164}`,
  phoneE164,
  email,
  emailHref: `mailto:${email}?subject=${encodeURIComponent('Enquiry from the Tiger website')}`,
  whatsappHref: (message?: string) =>
    `https://wa.me/${phoneE164.slice(1)}${message ? `?text=${encodeURIComponent(message)}` : ''}`,
} as const;

export type Location = {
  city: string;
  /** The address exactly as the client wrote it (Ethiopic script). */
  detail: string;
};

// Order as given by the client (address no. 1, no. 2).
export const locations: readonly Location[] = [
  {
    city: 'Addis Ababa',
    detail: 'ክ/ከተማ ለሚ ኾራ ወረዳ  09 (ጎሮ)',
  },
  {
    city: 'Mekelle',
    detail: 'ሓሚዳይ',
  },
];

export type NavigationItem = { label: string; href: `#${string}` };

export const navigation: readonly NavigationItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Importer', href: '#importer' },
  { label: 'How to order', href: '#ordering' },
  { label: 'Contact', href: '#contact' },
];

export type ProfileItem = { term: string; detail: string | readonly string[]; lang?: string; href?: string };

export const companyProfile: readonly ProfileItem[] = [
  { term: 'Company', detail: `${company.name}/${company.nameLocal}` },
  { term: 'Activity', detail: 'Production and import of fiberglass and plastic products' },
  { term: 'We supply', detail: ['Fiberglass materials', 'Fiberglass water tanks', 'Plastic water tanks'] },
  {
    term: 'Locations',
    detail: locations.map((location) => `${location.city}: ${location.detail}`),
  },
  { term: 'Phone', detail: contact.phoneDisplay, href: contact.phoneHref },
  { term: 'WhatsApp', detail: contact.phoneDisplay, href: contact.whatsappHref() },
  { term: 'Email', detail: contact.email, href: contact.emailHref },
];

export type Product = {
  name: string;
  category: string;
  icon: IconName;
  description: string;
  enquiry: string;
};

export const products: readonly Product[] = [
  {
    name: 'Fiberglass water tanks',
    category: 'Water storage',
    icon: 'tank',
    description: 'Tiger-branded fiberglass tanks for water storage. Ask us which capacities are currently available.',
    enquiry: 'Hello Tiger, I would like to ask about fiberglass water tanks.',
  },
  {
    name: 'Plastic water tanks',
    category: 'Water storage',
    icon: 'drop',
    description: 'Plastic water tanks for everyday storage needs. Contact us for current sizes and availability.',
    enquiry: 'Hello Tiger, I would like to ask about plastic water tanks.',
  },
  {
    name: 'Fiberglass materials',
    category: 'Materials',
    icon: 'layers',
    description:
      'Imported fiberglass materials for fabrication and production work. Tell us the material and quantity you need.',
    enquiry: 'Hello Tiger, I would like to ask about fiberglass materials.',
  },
];

export type ServicePromise = { icon: IconName; title: string; detail: string };

/*
 * Service terms sent by the client in Tigrinya (November 2026). Confirmed with the client: they apply to all
 * products, repairs are always free (not only during the warranty) and delivery is free to any location.
 *   "warrenty ንዓመት በለሉ ፣ ናፃ ግልጋሎት ፅገና ናብ  ገዛ ወይ ትኻል ድርጅት ብኣኻል ተረኺብና ግልጋሎት ፅገና ንህብ ኢና።
 *    ናፃ ግልጋሎት ትራንስፖርት(ናብ ዘደለይዎ) ነብፅሕ ኢና ።"
 */
export const servicePromises: readonly ServicePromise[] = [
  {
    icon: 'shield',
    title: 'One-year warranty',
    detail: 'Everything you buy from Tiger is covered by a one-year warranty.',
  },
  {
    icon: 'wrench',
    title: 'Free on-site repair',
    detail: 'We come in person to your home, business or organization, and repairs are always free of charge.',
  },
  {
    icon: 'truck',
    title: 'Free delivery',
    detail: 'We deliver your order free of charge to any location you choose.',
  },
];

export const materialChecklist = [
  'The type of fiberglass material you need',
  'The quantity required',
  'When and where you need it',
] as const;

export const orderSteps = [
  {
    title: 'Get in touch',
    detail: `Call or send a WhatsApp message to ${contact.phoneDisplay}, or email ${contact.email}.`,
  },
  { title: 'Tell us what you need', detail: 'The product, the capacity or quantity, and where it is needed.' },
  { title: 'Confirm the details', detail: 'We go over availability and the next steps with you directly.' },
  { title: 'Receive your order', detail: 'We deliver it free of charge, wherever it is needed.' },
] as const;

export const images = {
  tanks: {
    sources: [
      { width: 240, webp: tanks240Webp, jpg: tanks240Jpg },
      { width: 640, webp: tanks640Webp, jpg: tanks640Jpg },
      { width: 960, webp: tanks960Webp, jpg: tanks960Jpg },
    ],
    width: 960,
    height: 719,
    alt: 'White fiberglass water tanks stencilled with “Tiger Fiber Glass” in blue, lined up in a gravel yard.',
  },
  // Client photo enhanced (EDSR x2 upscale, colour/noise correction); licence plate and a third-party
  // phone sticker blurred. Master: image-sources/fiberglass-import-container-enhanced-1440x1920.jpg
  importContainer: {
    sources: [
      { width: 480, webp: import480Webp, jpg: import480Jpg },
      { width: 960, webp: import960Webp, jpg: import960Jpg },
    ],
    width: 960,
    height: 1280,
    alt: 'An open shipping container on a truck, packed with large wrapped rolls of fiberglass material.',
  },
} satisfies Record<string, ResponsiveImage>;

// Gallery slide files are named gallery-<name>-<width>.webp|jpg (16:9) and picked up automatically.
// `?no-inline` keeps Vite from embedding the small thumbnails in the JavaScript bundle.
const galleryFiles = import.meta.glob<string>('./assets/images/gallery-*.{webp,jpg}', {
  eager: true,
  import: 'default',
  query: '?no-inline',
});
const galleryWidths = [240, 640, 960, 1280] as const;

function galleryImage(name: string, alt: string): ResponsiveImage {
  const sources = galleryWidths.map((width) => {
    const webp = galleryFiles[`./assets/images/gallery-${name}-${width}.webp`];
    const jpg = galleryFiles[`./assets/images/gallery-${name}-${width}.jpg`];
    if (!webp || !jpg) throw new Error(`Missing gallery image: gallery-${name}-${width}`);
    return { width, webp, jpg };
  });
  return { sources, width: 1280, height: 720, alt };
}

export type GallerySlide = {
  image: ResponsiveImage;
  title: string;
  detail: string;
  /** Language of the title when it is not English (rendered in the Ethiopic font). */
  titleLang?: string;
  /** CSS object-position used to crop the image into the 16:9 frame; defaults to the centre. */
  focus?: string;
};

/*
 * Hero gallery. Slide 1 is the client's own photo; slides 2-6 were designed in Canva in the brand colours
 * (Canva design "Tiger Website Gallery"). Slide 2 uses the client's container photo; slides 3-6 use generic
 * AI-generated images, not photos of Tiger products. Replace them with real photos when the client sends some.
 */
export const gallery: readonly GallerySlide[] = [
  {
    image: images.tanks,
    title: company.nameLocal,
    titleLang: company.nameLocalLang,
    detail: 'Tiger fiberglass water tanks',
    // Keep the bottom of this 4:3 photo so the "Tiger Fiber Glass" stencil sits above the caption card.
    focus: '50% 100%',
  },
  {
    image: galleryImage(
      'fiberglass-materials',
      'An open shipping container on a truck, packed with large rolls of fiberglass material.',
    ),
    title: 'Fiberglass materials',
    detail: 'Imported and supplied by Tiger',
  },
  {
    image: galleryImage('plastic-water-tank', 'A green plastic water tank standing on a concrete base.'),
    title: 'Plastic water tanks',
    detail: 'For everyday water storage',
  },
  {
    image: galleryImage('one-year-warranty', 'A blue and white shield with a check mark.'),
    title: 'One-year warranty',
    detail: 'On everything you buy from Tiger',
  },
  {
    image: galleryImage(
      'on-site-repair',
      'A technician in blue overalls fixing the tap of a water tank outside a house.',
    ),
    title: 'Free on-site repair',
    detail: 'At your home, business or organization',
  },
  {
    image: galleryImage('free-delivery', 'A small truck carrying water tanks along a town road.'),
    title: 'Free delivery',
    detail: 'To any location you choose',
  },
];
