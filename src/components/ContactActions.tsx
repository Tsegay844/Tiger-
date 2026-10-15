import { contact } from '../content';
import { Icon } from './Icon';

type ContactActionsProps = {
  /** `light` is for use on the dark brand-blue background. */
  tone?: 'default' | 'light';
  message?: string;
};

export function ContactActions({ tone = 'default', message }: ContactActionsProps) {
  const light = tone === 'light';
  return (
    <div className="button-row">
      <a className={`button ${light ? 'button-light' : 'button-primary'}`} href={contact.phoneHref}>
        <Icon name="phone" />
        Call {contact.phoneDisplay}
      </a>
      <a
        className={`button ${light ? 'button-outline-light' : 'button-secondary'}`}
        href={contact.whatsappHref(message)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="chat" />
        WhatsApp us
        <span className="visually-hidden"> (opens WhatsApp in a new tab)</span>
      </a>
    </div>
  );
}
