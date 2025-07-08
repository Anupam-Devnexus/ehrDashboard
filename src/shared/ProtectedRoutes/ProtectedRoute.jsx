
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export default function ProtectedRoute({ allowedRole }) {
    const role = localStorage.getItem("role");
    const location = useLocation();

    if (!role) {
        return <Navigate to="/" replace />;
    }

    if (role !== allowedRole) {
        return <Navigate to={`/dashboard/${role}`} replace />;
    }

    return <Outlet />;
}
