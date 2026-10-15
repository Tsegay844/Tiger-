import { company, companyProfile } from '../content';

export function About() {
  return (
    <section className="section section-tinted" id="about" aria-labelledby="about-title">
      <div className="container about-grid">
        <div className="about-copy reveal">
          <p className="eyebrow">About Tiger</p>
          <h2 id="about-title">A producer and importer of fiberglass and plastic products.</h2>
          <p>
            {company.name} supplies two things: fiberglass materials for fabrication and production work, and fiberglass
            and plastic water tanks for water storage.
          </p>
          <p>Enquiries are handled directly by phone or WhatsApp, so you speak with Tiger from the first message.</p>
        </div>
        <dl className="profile reveal" aria-label="Company profile">
          {companyProfile.map(({ term, detail, lang, href }) => (
            <div className="profile-row" key={term}>
              <dt>{term}</dt>
              <dd lang={lang} className={lang ? 'ethiopic' : undefined}>
                {Array.isArray(detail) ? (
                  <ul>
                    {detail.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : href ? (
                  <a href={href} {...(href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}>
                    {detail}
                  </a>
                ) : (
                  detail
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
