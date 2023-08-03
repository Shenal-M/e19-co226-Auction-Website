import { useLocation, Navigate, Outlet } from "react-router-dom";
import UseAuth  from "./hooks/UseAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = UseAuth();
    const location = useLocation();
    console.log(auth, allowedRoles);

    return (
        (auth && auth.roles == allowedRoles)
            ? <Outlet />
            : auth?.userName
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;