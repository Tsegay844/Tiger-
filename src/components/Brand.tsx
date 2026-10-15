import { company } from '../content';

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a className={`brand${footer ? ' brand-footer' : ''}`} href="#top">
      <span className="brand-mark" aria-hidden="true">
        T
      </span>
      <span className="brand-copy">
        <strong>{company.shortName}</strong>
        <small>Fiberglass &amp; Plastic Production</small>
      </span>
      <span className="visually-hidden">, back to top</span>
    </a>
  );
}
