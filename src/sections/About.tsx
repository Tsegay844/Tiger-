import { company, companyProfile } from '../content';

export function About() {
  return (
    <section className="section section-tinted" id="about" aria-labelledby="about-title">
      <div className="container about-grid">
        <div className="about-copy reveal">
          <p className="eyebrow">About Tiger</p>
          <h2 id="about-title">A producer of fiberglass and plastic products.</h2>
          <p>
            {company.name} supplies two things: fiberglass materials for fabrication and production work, and finished
            fiberglass and plastic water tanks for water storage.
          </p>
          <p>Enquiries are handled directly by phone or WhatsApp, so you speak with Tiger from the first message.</p>
        </div>
        <dl className="profile reveal" aria-label="Company profile">
          {companyProfile.map(({ term, detail, lang }) => (
            <div className="profile-row" key={term}>
              <dt>{term}</dt>
              <dd lang={lang} className={lang === 'am' ? 'amharic' : undefined}>
                {Array.isArray(detail) ? (
                  <ul>
                    {detail.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
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
