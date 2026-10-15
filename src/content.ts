import import480Jpg from './assets/images/fiberglass-import-container-480.jpg';
import import480Webp from './assets/images/fiberglass-import-container-480.webp';
import import960Jpg from './assets/images/fiberglass-import-container-960.jpg';
import import960Webp from './assets/images/fiberglass-import-container-960.webp';
import tanks640Jpg from './assets/images/tiger-fiberglass-water-tanks-640.jpg';
import tanks640Webp from './assets/images/tiger-fiberglass-water-tanks-640.webp';
import tanks960Jpg from './assets/images/tiger-fiberglass-water-tanks-960.jpg';
import tanks960Webp from './assets/images/tiger-fiberglass-water-tanks-960.webp';
import type { IconName } from './components/Icon';
import type { ResponsiveImage } from './components/Picture';

/*
 * All business facts below come from material supplied by the client:
 * the company description and contact details the owner provided (English + Ethiopic),
 * and the product photos.
 * Do not add claims here that the client has not confirmed.
 */

export const company = {
  name: 'Tiger Fiberglass & Plastic Production and Importer',
  shortName: 'Tiger',
  tagline: 'Fiberglass & Plastic · Production & Import',
  // Exactly as written by the owner (Tigrinya spelling).
  nameLocal: 'ታይገር ፕፋይበር ፕላስቲክ ውጤቶች ኣምራች እና ኣስመጪ',
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
] as const;

export const images = {
  tanks: {
    sources: [
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
