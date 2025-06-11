// pages/NotFound.jsx
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-purple-50 p-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-purple-700 mb-4">404</h1>
        <p className="text-lg mb-6">Oops! Page not found.</p>
        <Link to="/" className="text-purple-600 hover:underline text-lg">
          Go Home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
