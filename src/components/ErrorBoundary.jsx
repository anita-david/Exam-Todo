import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("Caught by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-red-50 text-red-700 p-6">
          <h1 className="text-2xl font-bold mb-2">Something went wrong.</h1>
          <p>{this.state.error?.message || "An unexpected error occurred."}</p>
          <button
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
            onClick={() => window.location.reload()}
          >
            Reload Page
          </button>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
