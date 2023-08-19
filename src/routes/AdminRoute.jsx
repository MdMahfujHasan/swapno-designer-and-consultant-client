import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();

    // TODO: useAdmin()
    // const [isAdmin, isAdminLoading]= useAdmin();
    const isAdmin = true; //testing
    const isAdminLoading = true; //testing

    const location = useLocation();
    if (loading || isAdminLoading) {
        return <div className="flex items-center justify-center">
            <span className="loading loading-spinner loading-md text-indigo-500"></span>
        </div>;
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;