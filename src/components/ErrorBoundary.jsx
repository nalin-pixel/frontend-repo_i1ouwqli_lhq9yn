import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Silently handle errors to avoid blank screens
    // Optionally log to a monitoring service
    // console.error('ErrorBoundary caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="relative min-h-[60vh] flex items-center justify-center bg-[#0C1A2B]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1E3A5F] via-[#0C1A2B] to-black" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C1A2B]/60 via-[#0C1A2B]/70 to-[#0C1A2B] pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-white text-3xl font-bold">Welcome to Friends Thermopole Industry</h2>
            <p className="mt-3 text-white/80">Interactive background failed to load. The rest of the site is fully functional.</p>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}
