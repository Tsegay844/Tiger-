import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

type UIState = {
  menuOpen: boolean;
  activeSection: string;
  setMenuOpen: (open: boolean) => void;
  setActiveSection: (id: string) => void;
};
const UIContext = createContext<UIState | null>(null);

export function UIProvider({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const value = useMemo(() => ({ menuOpen, activeSection, setMenuOpen, setActiveSection }), [menuOpen, activeSection]);
  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI() {
  const value = useContext(UIContext);
  if (!value) throw new Error('useUI must be used within UIProvider.');
  return value;
}
