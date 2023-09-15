import React from "react";
import { useLocation } from "react-router-dom";
function Footer(){
    const location = useLocation();
    if(location.pathname.substring(0,6)!="/admin"){
        return(
            <div className="bg-[#F0F0F0] h-[25vh] flex flex-wrap justify-between items-center p-10 ">
                <div className="font-[MaiseeMedium]">Developed by Me</div>
                <div className="font-[MaiseeMedium]">Logo</div>
                <div className="font-[MaiseeMedium]">&copy;Copyright 2023</div>
            </div>
        );
    }else{
        return null;
    }
}
export default Footer;