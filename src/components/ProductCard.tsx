import { contact, type Product } from '../content';
import { Icon } from './Icon';

export function ProductCard({ name, category, icon, description, enquiry }: Product) {
  return (
    <article className="product-card reveal">
      <div className="product-icon">
        <Icon name={icon} />
      </div>
      <p className="product-category">{category}</p>
      <h3>{name}</h3>
      <p>{description}</p>
      <a className="text-link" href={contact.whatsappHref(enquiry)} target="_blank" rel="noopener noreferrer">
        Ask on WhatsApp
        <span className="visually-hidden"> about {name.toLowerCase()} (opens in a new tab)</span>
        <Icon name="arrowRight" />
      </a>
    </article>
  );
}
