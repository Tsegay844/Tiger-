import { ContactActions } from '../components/ContactActions';
import { Icon } from '../components/Icon';
import { Picture } from '../components/Picture';
import { images, materialChecklist } from '../content';

export function Materials() {
  return (
    <section className="section section-tinted" id="materials" aria-labelledby="materials-title">
      <div className="container materials-grid">
        <figure className="materials-media reveal">
          <Picture image={images.materialRolls} sizes="(min-width: 900px) 420px, (min-width: 600px) 480px, 100vw" />
        </figure>
        <div className="materials-copy reveal">
          <p className="eyebrow">Fiberglass materials</p>
          <h2 id="materials-title">Materials for your own fiberglass production.</h2>
          <p>
            Alongside finished tanks, Tiger supplies fiberglass materials for fabrication and production work. To get a
            useful answer quickly, include the following in your enquiry:
          </p>
          <ul className="check-list">
            {materialChecklist.map((item) => (
              <li key={item}>
                <Icon name="check" />
                {item}
              </li>
            ))}
          </ul>
          <ContactActions message="Hello Tiger, I would like to ask about fiberglass materials." />
        </div>
      </div>
    </section>
  );
}
