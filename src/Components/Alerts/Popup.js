import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { togglePopup } from "../../Redux/PopupSlice";
import { closeBasket } from "../../Redux/BasketSlice";
function Popup() {
    const visible = useSelector(state => state.Popup.visible);
    const dispatch = useDispatch();
    const handleClick = () =>{
        document.body.style.overflow = "";
        dispatch(togglePopup());
        dispatch(closeBasket());
    }
    return (
        <div style={visible ? {opacity : 1,zIndex : 50}:{opacity : 0,zIndex : -5}} className="flex justify-center items-center fixed w-screen h-screen bg-[rgb(255,255,255,0.75)] duration-300">
            <div style={ visible ? {transform : "scale(1)"}:{transform : "scale(0)"}} className="flex flex-col justify-center items-center p-5 shadow-xl bg-white h-60 rounded-md border-2 duration-700">
                <div className="font-[AwanZaman] text-[#4A4A4A] text-2xl font-semibold mb-10">You must sign in to continue checking out</div>
                <div className="flex justify-between items-center">
                    <button onClick={handleClick} className="text-lg font-[AwanZaman] text-[#907F7D] py-2 px-4 bg-[#F2F2F2] hover:bg-[#E1E1E1] cursor-pointer duration-300 border-[0.1px]">Continue Shopping</button>
                    <Link onClick={handleClick} className="flex items-center text-xl font-[AwanZaman] text-white py-2 px-4 bg-black hover:bg-[#2A2A2A] hover:border-[#2A2A2A] cursor-pointer duration-300 border-[0.1px] border-black" to="/Signin">Sign in to checkout</Link>
                </div>
            </div>
        </div>
    );
}
export default Popup;