import { StrictMode } from 'react';
import { App } from './App';
import { ErrorBoundary } from './components/ErrorBoundary';
import { UIProvider } from './state/UIContext';

/** Shared by the browser entry and the build-time prerender so both render the same tree. */
export function Root() {
  return (
    <StrictMode>
      <ErrorBoundary>
        <UIProvider>
          <App />
        </UIProvider>
      </ErrorBoundary>
    </StrictMode>
  );
}
