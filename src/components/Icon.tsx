const paths = {
  phone: (
    <path d="M6.6 3.5h3l1.6 4.2-2 1.3a11.5 11.5 0 0 0 5.8 5.8l1.3-2 4.2 1.6v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z" />
  ),
  chat: <path d="M4 18.5 5.3 15A8 8 0 1 1 8.6 18l-4.6.5ZM9 10.5h6M9 13.5h4" />,
  mail: <path d="M4 6.5h16v11H4zM4.5 7l7.5 6 7.5-6" />,
  pin: (
    <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11ZM12 12.3a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6Z" />
  ),
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  tank: (
    <path d="M6 7.5C6 5.6 8.7 4 12 4s6 1.6 6 3.5v9c0 1.9-2.7 3.5-6 3.5s-6-1.6-6-3.5v-9ZM6 7.5c0 1.9 2.7 3.5 6 3.5s6-1.6 6-3.5M6 12c0 1.9 2.7 3.5 6 3.5s6-1.6 6-3.5" />
  ),
  drop: <path d="M12 3.5S6 10.2 6 14.5a6 6 0 0 0 12 0C18 10.2 12 3.5 12 3.5ZM9.2 15a3 3 0 0 0 2.8 2.6" />,
  layers: <path d="m3.5 9 8.5-4.5L20.5 9 12 13.5 3.5 9ZM3.5 13l8.5 4.5 8.5-4.5M3.5 17l8.5 4.5 8.5-4.5" />,
  shield: <path d="M12 3.5 5 6.5v5c0 4.4 3 8 7 9.5 4-1.5 7-5.1 7-9.5v-5L12 3.5ZM9 12.2l2.2 2.2 4-4.4" />,
  wrench: (
    <path d="M17.12 4.76 14.83 7.05a1.5 1.5 0 0 0 2.12 2.12l2.29-2.29A4.5 4.5 0 0 1 13.24 12.88l-6.19 6.19a1.5 1.5 0 0 1-2.12-2.12l6.19-6.19A4.5 4.5 0 0 1 17.12 4.76Z" />
  ),
  truck: (
    <path d="M5 16H2.5V5.5H14V16M9 16h6M14 9h4.5l3 3.2V16H19M9 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM19 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  ),
};

export type IconName = keyof typeof paths;

/** Decorative stroke icon. Always pair with visible text or an accessible label on the parent. */
export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      className={className ? `icon ${className}` : 'icon'}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
