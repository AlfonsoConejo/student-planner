import { useAuth } from "../customHooks/useAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function ProtectedRoute() {
    const { authLoading, user } = useAuth();
    const location = useLocation();

    if (authLoading) return <p>Loading...</p>;

    if (!user) {
        return (
            <Navigate
                to="/login"
                replace
                state={{ from: location }}
            />
        );
    }

    return <Outlet />;
}