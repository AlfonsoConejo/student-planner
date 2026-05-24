import { Navigate, Outlet } from "react-router-dom";

export default function PublicOnlyRoute() {
  const isAuthenticated = true;

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}s