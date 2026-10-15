import rolls480Jpg from './assets/images/fiberglass-material-rolls-container-480.jpg';
import rolls480Webp from './assets/images/fiberglass-material-rolls-container-480.webp';
import rolls720Jpg from './assets/images/fiberglass-material-rolls-container-720.jpg';
import rolls720Webp from './assets/images/fiberglass-material-rolls-container-720.webp';
import tanks640Jpg from './assets/images/tiger-fiberglass-water-tanks-640.jpg';
import tanks640Webp from './assets/images/tiger-fiberglass-water-tanks-640.webp';
import tanks960Jpg from './assets/images/tiger-fiberglass-water-tanks-960.jpg';
import tanks960Webp from './assets/images/tiger-fiberglass-water-tanks-960.webp';
import type { IconName } from './components/Icon';
import type { ResponsiveImage } from './components/Picture';

/*
 * All business facts below come from material supplied by the client:
 * the company description message (English + Amharic) and the product photos.
 * Do not add claims here that the client has not confirmed.
 */

export const company = {
  name: 'Tiger Fiberglass & Plastic Production',
  shortName: 'Tiger',
  nameAmharic: 'ታይገር የፋይበር እና ፕላስቲክ ውጤቶች አምራች',
} as const;

// Number as stencilled on the client's tanks; confirmed for publication by the site owner.
const phoneE164 = '+251914165688';

export const contact = {
  // Non-breaking spaces keep the number on one line.
  phoneDisplay: '+251 914 165 688',
  phoneHref: `tel:${phoneE164}`,
  whatsappHref: (message?: string) =>
    `https://wa.me/${phoneE164.slice(1)}${message ? `?text=${encodeURIComponent(message)}` : ''}`,
} as const;

export type NavigationItem = { label: string; href: `#${string}` };

export const navigation: readonly NavigationItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Materials', href: '#materials' },
  { label: 'How to order', href: '#ordering' },
  { label: 'Contact', href: '#contact' },
];

export type ProfileItem = { term: string; detail: string | readonly string[]; lang?: 'am' };

export const companyProfile: readonly ProfileItem[] = [
  { term: 'Company', detail: company.name },
  { term: 'Name in Amharic', detail: company.nameAmharic, lang: 'am' },
  { term: 'Activity', detail: 'Production of fiberglass and plastic products' },
  { term: 'We supply', detail: ['Fiberglass materials', 'Fiberglass water tanks', 'Plastic water tanks'] },
  { term: 'Phone & WhatsApp', detail: contact.phoneDisplay },
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
      'Fiberglass materials for fabrication and production work. Tell us the material and quantity you need.',
    enquiry: 'Hello Tiger, I would like to ask about fiberglass materials.',
  },
];

export const materialChecklist = [
  'The type of fiberglass material you need',
  'The quantity required',
  'When and where you need it',
] as const;

export const orderSteps = [
  { title: 'Get in touch', detail: `Call or send a WhatsApp message to ${contact.phoneDisplay}.` },
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
  materialRolls: {
    sources: [
      { width: 480, webp: rolls480Webp, jpg: rolls480Jpg },
      { width: 720, webp: rolls720Webp, jpg: rolls720Jpg },
    ],
    width: 720,
    height: 960,
    alt: 'An open shipping container on a truck, stacked with large wrapped rolls of fiberglass material.',
  },
} satisfies Record<string, ResponsiveImage>;
