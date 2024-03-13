import React, { useEffect, useState } from "react";
import { useAuthHeader, useAuthUser } from "react-auth-kit";
import { Navigate, Outlet } from "react-router-dom";
import axios from "./axios";
function AdminRoute(){
    const authheader = useAuthHeader();
    const [isAdmin,setIsAdmin] = useState(false);
    const [Loaded,setLoaded] = useState(false);
    useEffect(() => {
        const getData = async () => {
            const token = authheader();
            try {
                await axios.get(`http://127.0.0.1:8000/api/user`, {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Content-type": "Application/json",
                        Authorization: `Bearer ${token}`,
                        'Accept': "application/json"
                    }
                }).then(res => {
                    if(res.data.role_id == 1){
                        setIsAdmin(true);
                    }
                    setLoaded(true);
                })
            } catch (err) {

            }
        }
        getData();
    },[]);
    if(!Loaded){
        return null;
    }
    return isAdmin ? <Outlet></Outlet> : <Navigate to="/"></Navigate>
}
export default AdminRoute;