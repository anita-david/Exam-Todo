import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/"); // redirect to home after signup
    } catch (err) {
  if (err instanceof FirebaseError) {
    setError(err.message);
  } else {
    setError("An unexpected error occurred");
  }
} finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-purple-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Sign Up</h2>

        {error && (
          <p className="text-red-600 text-sm mb-3">{error}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-purple-300 rounded mb-4"
          required
        />
        <input
          type="password"
          placeholder="Password (min 6 chars)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border border-purple-300 rounded mb-4"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full px-4 py-2 rounded bg-purple-600 text-white hover:bg-purple-700 disabled:bg-purple-300"
        >
          {loading ? "Creating account..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}
