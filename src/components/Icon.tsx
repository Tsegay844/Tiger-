const paths = {
  phone: (
    <path d="M6.6 3.5h3l1.6 4.2-2 1.3a11.5 11.5 0 0 0 5.8 5.8l1.3-2 4.2 1.6v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z" />
  ),
  chat: <path d="M4 18.5 5.3 15A8 8 0 1 1 8.6 18l-4.6.5ZM9 10.5h6M9 13.5h4" />,
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  tank: (
    <path d="M6 7.5C6 5.6 8.7 4 12 4s6 1.6 6 3.5v9c0 1.9-2.7 3.5-6 3.5s-6-1.6-6-3.5v-9ZM6 7.5c0 1.9 2.7 3.5 6 3.5s6-1.6 6-3.5M6 12c0 1.9 2.7 3.5 6 3.5s6-1.6 6-3.5" />
  ),
  drop: <path d="M12 3.5S6 10.2 6 14.5a6 6 0 0 0 12 0C18 10.2 12 3.5 12 3.5ZM9.2 15a3 3 0 0 0 2.8 2.6" />,
  layers: <path d="m3.5 9 8.5-4.5L20.5 9 12 13.5 3.5 9ZM3.5 13l8.5 4.5 8.5-4.5M3.5 17l8.5 4.5 8.5-4.5" />,
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
