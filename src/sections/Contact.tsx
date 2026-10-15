import { ContactActions } from '../components/ContactActions';
import { Icon } from '../components/Icon';
import { company, contact, locations } from '../content';

export function Contact() {
  return (
    <section className="contact on-dark" id="contact" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div className="contact-intro reveal">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Talk to Tiger about tanks or materials.</h2>
          <p>
            Calls and WhatsApp messages go to the same number. Tell us the product, the size or quantity, and where it
            is needed.
          </p>
          <h3 className="contact-label">Our locations</h3>
          <ul className="location-list">
            {locations.map((location) => (
              <li key={location.city}>
                <Icon name="pin" />
                <div>
                  <strong>{location.city}</strong>
                  <span lang={company.nameLocalLang} className="ethiopic">
                    {location.detail}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="contact-card reveal">
          <p className="contact-label">Phone &amp; WhatsApp</p>
          <ContactActions tone="light" message="Hello Tiger, I would like to make an enquiry." />
          <div className="contact-email">
            <p className="contact-label">Email</p>
            <a href={contact.emailHref}>
              <Icon name="mail" />
              {contact.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
