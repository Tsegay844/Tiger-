import { company, contact, navigation } from '../content';
import { Brand } from './Brand';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-intro">
          <Brand footer />
          <p lang="am" className="amharic">
            {company.nameAmharic}
          </p>
          <p>Fiberglass water tanks, plastic water tanks and fiberglass materials.</p>
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
          <ul>
            <li>
              <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
            </li>
            <li>
              <a href={contact.whatsappHref()} target="_blank" rel="noopener noreferrer">
                WhatsApp<span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
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
