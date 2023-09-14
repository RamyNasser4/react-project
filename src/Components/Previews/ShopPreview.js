import React from "react";
function ShopPreview(props){
    return (
        <div className="flex bg-[#F3F3F3] w-full justify-between items-center overflow-hidden h-[30rem] sm:h-[25rem]">
            <div className="font-[AwanZaman] text-6xl text-left pl-14">{props.Featured ? "Featured Products" : "Recommended Products"}</div>
            <img className="box-content max-w-2xl w-1/2 hidden md:block" src={props.Featured ? "https://salinaka-ecommerce.web.app/images/banner-guy.fbf4f0f7396fe31ca288dc1dd9822342.png" : "https://salinaka-ecommerce.web.app/images/banner-girl-1.24e9b8f48d5a0ac32680edd194503695.png"} ></img>
        </div>
    );
}
export default ShopPreview;