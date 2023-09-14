import React from "react";
import { useAuthUser } from "react-auth-kit";
import { Navigate, Outlet, Route } from "react-router-dom";
function AdminRoute(){
    const auth = useAuthUser();
    if(auth() && auth().role=="admin"){
        return <Outlet></Outlet>
    }
    return(
        <Navigate to="/"></Navigate>   
    );
}
export default AdminRoute;