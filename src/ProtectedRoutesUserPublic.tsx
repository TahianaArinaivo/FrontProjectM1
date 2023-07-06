import { Navigate, Outlet } from "react-router-dom";
import Authentification from "./components/publicUser/authentification/Authentification";
import { useState } from "react";


const ProtectedRoutesUserPublic = () => {
    const [isAuth, setAuth] = useState(localStorage.getItem("token"));
    return (
        isAuth ? <Outlet/> : <Navigate to="/"/>
    )
}


export default ProtectedRoutesUserPublic;