import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
function Header() {
    return (
        <div className="w-[100%] p-8 flex justify-between">
            <div className="w-[30%] flex justify-between items-center align-middle">
                <a className="text-4xl py-2 px-3 hover:bg-[#F5F5F5] font-[AwanZaman]">Logo</a>
                <a href="/" className="text-lg py-2 px-3 hover:bg-[#F5F5F5] font-[AwanZaman]">Home</a>
                <a className="text-lg py-2 px-3 hover:bg-[#F5F5F5] font-[AwanZaman]">Shop</a>
                <a className="text-lg py-2 px-3 hover:bg-[#F5F5F5] font-[AwanZaman]">Featured</a>
                <a className="text-lg py-2 px-3 hover:bg-[#F5F5F5] font-[AwanZaman]">Recommended</a>
            </div>
            <div className="w-[13%] flex justify-between items-center">
                <FontAwesomeIcon icon={faBagShopping} className="text-2xl" />
                <a className="text-lg font-[AwanZaman] text-white py-1 px-4 bg-black border-2 border-black">Sign up</a>
                <a className="text-lg font-[AwanZaman] text-[#907F7D] py-1 px-4 bg-[#F2F2F2] border-2">Sign in</a>
            </div>
        </div>
    );
}
export default Header;