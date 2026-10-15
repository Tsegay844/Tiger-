import { Component, type ErrorInfo, type ReactNode } from 'react';

type Props = { children: ReactNode };
type State = { failed: boolean };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { failed: false };

  static getDerivedStateFromError(): State {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Application render failure', error, info.componentStack);
  }

  render() {
    if (this.state.failed) {
      return (
        <main className="fatal-error">
          <h1>Something went wrong</h1>
          <p>Please refresh the page and try again.</p>
          <button onClick={() => window.location.reload()}>Reload</button>
        </main>
      );
    }
    return this.props.children;
  }
}
