import { useAuth } from "../customHooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export default function PublicOnlyRoute() {
  const { authLoading, user } = useAuth();

  if (authLoading) return <p>Loading...</p>;

  if (user) {
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
}