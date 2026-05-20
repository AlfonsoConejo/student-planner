import { useAuth } from "../customHooks/useAuth";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const {authLoading, user} = useAuth();

     if (authLoading) return <p>Loading...</p>;
     
     if (!user) return <Navigate to="/login" replace />;

    return children;
}