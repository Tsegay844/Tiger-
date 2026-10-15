import { company, contact, locations, navigation } from '../content';
import { Brand } from './Brand';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-intro">
          <Brand footer />
          <p lang={company.nameLocalLang} className="ethiopic">
            {company.nameLocal}
          </p>
          <p>Producer and importer of fiberglass and plastic products: water tanks and fiberglass materials.</p>
        </div>
        <nav aria-label="Footer">
          <h2 className="footer-heading">Explore</h2>
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="footer-heading">Contact</h2>
          <address className="footer-address">
            <ul>
              <li>
                <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
              </li>
              <li>
                <a href={contact.whatsappHref()} target="_blank" rel="noopener noreferrer">
                  WhatsApp<span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a href={contact.emailHref}>{contact.email}</a>
              </li>
            </ul>
            <p>{locations.map((location) => location.city).join(' · ')}</p>
          </address>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>
          © <span suppressHydrationWarning>{new Date().getFullYear()}</span> {company.name}
        </p>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
}
