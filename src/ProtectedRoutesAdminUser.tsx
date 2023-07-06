import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutesAdminUser = () => {
    const [isAuth, setAuth] = useState(localStorage.getItem("token"));
    return isAuth ? <Outlet/> : <Navigate to="/Authentication"/>
}


export default ProtectedRoutesAdminUser;