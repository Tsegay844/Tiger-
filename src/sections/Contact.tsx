import { ContactActions } from '../components/ContactActions';
import { contact } from '../content';

export function Contact() {
  return (
    <section className="contact on-dark" id="contact" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div className="reveal">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Talk to Tiger about tanks or materials.</h2>
          <p>
            Calls and WhatsApp messages go to the same number. Tell us the product, the size or quantity, and where it
            is needed.
          </p>
        </div>
        <div className="contact-card reveal">
          <p className="contact-label">Phone &amp; WhatsApp</p>
          <a className="contact-number" href={contact.phoneHref}>
            {contact.phoneDisplay}
          </a>
          <ContactActions tone="light" message="Hello Tiger, I would like to make an enquiry." />
        </div>
      </div>
    </section>
  );
}
