import { ContactActions } from '../components/ContactActions';
import { Icon } from '../components/Icon';
import { Picture } from '../components/Picture';
import { company, images, products } from '../content';

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{company.name}</p>
          <h1 id="hero-title">Water tanks and fiberglass materials from one supplier.</h1>
          <p className="hero-lead">
            Tiger supplies fiberglass water tanks, plastic water tanks and fiberglass materials. Call or message us to
            discuss sizes, quantities and availability.
          </p>
          <ContactActions message="Hello Tiger, I would like to make an enquiry." />
          <ul className="hero-list" aria-label="What we supply">
            {products.map((product) => (
              <li key={product.name}>
                <Icon name="check" />
                {product.name}
              </li>
            ))}
          </ul>
        </div>
        <figure className="hero-media">
          <Picture image={images.tanks} sizes="(min-width: 900px) 50vw, 100vw" priority />
          <figcaption>
            <span lang="am" className="amharic">
              {company.nameAmharic}
            </span>
            <span>Tiger fiberglass water tanks</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
