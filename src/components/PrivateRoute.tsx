import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // or same file if you're still Option B
import type { ReactNode } from "react";

type PrivateRouteProps = {
  children: ReactNode;
};

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return currentUser ? children : <Navigate to="/signup" replace />;
}
