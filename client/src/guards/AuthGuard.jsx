import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import  Home  from '../components/Home/Home';

import AuthContext from "../contexts/authContext";


export default function AuthGuard(props) {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to="/login" />

    }
    return <Outlet />;

}

export const UserGuard = ({ children }) => {

    const { isAuthenticated } = useContext(AuthContext);
    if (isAuthenticated) {

        return <Navigate to={'/'} />
    }
    return (
        children ? children : <Home />
    )
}