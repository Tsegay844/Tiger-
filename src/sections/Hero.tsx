import { ContactActions } from '../components/ContactActions';
import { Gallery } from '../components/Gallery';
import { Icon } from '../components/Icon';
import { company, gallery, products, servicePromises } from '../content';

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{company.name}</p>
          <h1 id="hero-title">Get water tanks and fiberglass materials from us!</h1>
          <p className="hero-lead">
            Tiger is a producer and importer supplying fiberglass water tanks, plastic water tanks and fiberglass
            materials from Addis Ababa and Mekelle. Call or message us to discuss sizes, quantities and availability.
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
        <Gallery slides={gallery} label="Tiger photo gallery" sizes="(min-width: 900px) 50vw, 100vw" />
      </div>
      <ul className="container service-list" aria-label="Warranty, repair and delivery">
        {servicePromises.map((promise) => (
          <li className="service-item" key={promise.title}>
            <span className="service-icon">
              <Icon name={promise.icon} />
            </span>
            <div>
              <p className="service-title">{promise.title}</p>
              <p>{promise.detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
