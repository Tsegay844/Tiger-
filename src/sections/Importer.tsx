import { ContactActions } from '../components/ContactActions';
import { Icon } from '../components/Icon';
import { Picture } from '../components/Picture';
import { images, materialChecklist } from '../content';

export function Importer() {
  return (
    <section className="section section-tinted" id="importer" aria-labelledby="importer-title">
      <div className="container importer-grid">
        <figure className="importer-media reveal">
          <Picture image={images.importContainer} sizes="(min-width: 900px) 420px, (min-width: 600px) 480px, 100vw" />
        </figure>
        <div className="importer-copy reveal">
          <p className="eyebrow">Importer</p>
          <h2 id="importer-title">
            Imported fiberglass materials
            <br />
            supplied by Tiger
          </h2>
          <p>
            As well as producing, Tiger is an importer. We import fiberglass materials and supply them for fabrication
            and production work. To get a useful answer quickly, include the following in your enquiry:
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
