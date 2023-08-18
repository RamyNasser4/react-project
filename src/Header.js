import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faBars } from "@fortawesome/free-solid-svg-icons";
function Header() {
    return (
        <div className="w-[100%] px-8 py-2 flex justify-between fixed bg-white z-10">
            <div className="w-[30%] flex justify-between items-center align-middle">
                <a className="text-4xl py-2 px-3 font-[AwanZaman]">Logo</a>
                <a href="/" className="text-lg py-2 px-3 hover:bg-[#F5F5F5] duration-300 font-[AwanZaman] hidden sm:block">Home</a>
                <a className="text-lg py-2 px-3 hover:bg-[#F5F5F5] duration-300 font-[AwanZaman] hidden sm:block">Shop</a>
                <a className="text-lg py-2 px-3 hover:bg-[#F5F5F5] duration-300 font-[AwanZaman] hidden sm:block">Featured</a>
                <a className="text-lg py-2 px-3 hover:bg-[#F5F5F5] duration-300 font-[AwanZaman] hidden sm:block">Recommended</a>
            </div>
            <div className="w-[13%] flex justify-between items-center">
                <FontAwesomeIcon icon={faBagShopping} className="text-2xl" />
                <FontAwesomeIcon icon={faBars} className="text-2xl sm:hidden px-4" />
                <a className="text-lg font-[AwanZaman] text-white py-1 px-4 bg-black border-2 border-black hidden sm:block">Sign up</a>
                <a className="text-lg font-[AwanZaman] text-[#907F7D] py-1 px-4 bg-[#F2F2F2] border-2 hidden sm:block">Sign in</a>
            </div>
        </div>
    );
}
export default Header;