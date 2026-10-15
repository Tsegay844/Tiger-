import { company, contact, locations, products } from '../content';

/**
 * schema.org Organization markup for search engines, built only from client-confirmed content.
 * Add `url` (and `logo`) once the production domain and a logo exist.
 */
const data = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: company.name,
  alternateName: company.nameLocal,
  description: `Producer and importer of fiberglass and plastic products. Supplier of ${products
    .map((product) => product.name.toLowerCase())
    .join(', ')}.`,
  telephone: contact.phoneE164,
  email: contact.email,
  address: locations.map((location) => ({
    '@type': 'PostalAddress',
    streetAddress: location.detail,
    addressLocality: location.city,
    addressCountry: 'ET',
  })),
};

// Escape "<" so the JSON can never close the script element early.
const json = JSON.stringify(data).replace(/</g, '\\u003c');

export function StructuredData() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
