import React from "react";
import CartCard from "./CartCard";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { controlBasket,clearBasket } from "../../Redux/BasketSlice";
import { Link } from "react-router-dom";
import { useAuthUser, useIsAuthenticated } from "react-auth-kit";
import { togglePopup } from "../../Redux/PopupSlice";
function Basket() {
    const dispatch = useDispatch();
    const basketState = useSelector(state => state.Basket.visible);
    const products = useSelector(state =>state.Basket.products);
    const total = useSelector(state => state.Basket.total);
    const auth = useIsAuthenticated();
    const baskethidden = classNames({
        'fixed' : true,
        'flex' : true,
        'duration-300' : true,
        'flex-col' : true,
        'top-0' : true,
        'bg-white' : true,
        'w-full' : true,
        'lg:w-3/5' : true,
        'xl:w-2/5' : true,
        'px-4' : true,
        'pt-8' : true,
        'h-screen' : true,
        'z-20' : true,
        'translate-x-[100vw]' : true
    });
    const basketshown = classNames({
        'fixed' : true,
        'flex' : true,
        'duration-300' : true,
        'flex-col' : true,
        'top-0' : true,
        'bg-white' : true,
        'w-full' : true,
        'lg:w-3/5' : true,
        'xl:w-2/5' : true,
        'px-4' : true,
        'pt-8' : true,
        'h-screen' : true,
        'z-20' : true,
        'lg:translate-x-[40vw]' : true,
        'xl:translate-x-[60vw]' : true
    });
    const closeBasket = () =>{
        dispatch(controlBasket());
    }
    const emptyBasket = () =>{
        console.log("emsaaa7");
        dispatch(clearBasket());
    }
    return (
        <div className={basketState ? basketshown : baskethidden}>
            <div className="flex justify-between items-center pb-2">
                <div className="flex items-baseline">
                    <div className="font-[AwanZaman] text[#1A1A1A] font-semibold text-2xl leading-8">My Basket</div>
                    <div className="font-[FallingSkyRegular] text-[#504A4A] font-medium text-sm leading-none pl-2">({products.length} items)</div>
                </div>
                <div>
                    <button onClick={closeBasket} className="text-sm font-[FallingSkyRegular] font-medium text-[#4A4A5B] py-3 px-4 bg-white hover:bg-[#E1E1E1] cursor-pointer duration-300 border-[0.1px] border-solid">Close</button>
                    <button onClick={emptyBasket} className="text-sm font-[FallingSkyRegular] font-medium text-[#4A4A5B] py-3 px-4 bg-white hover:bg-[#E1E1E1] cursor-pointer duration-300 border-[0.1px] border-solid">Clear Basket</button>
                </div>
            </div>
            {products[0] ? <div className="flex overflow-y-scroll no-scrollbar flex-col h-5/6 w-full">
                {products.map((item,pos) =>{
                    return <CartCard id={pos} name={item.name} quantity={item.quantity} size={item.size} color={item.color} price={item.price} image={item.image}></CartCard>
                })}
            </div> : <div className="flex justify-center items-center h-5/6 w-full font-[FallingSkyRegular] text-[#818181]">Your basket is empty</div>}
            <div className="flex py-6 grow justify-between items-center border-t-[0.1px] ">
                <div className="flex flex-col items-start h-full justify-around">
                    <div className="text-lg font-semibold text-[#4A4A4A] font-[AwanZaman]">Subtotal Amount:</div>
                    <div className="text-3xl font-[FallingSkyRegular]">${Math.floor(total) == total ? total + ".00" : total.toFixed(2)}</div>
                </div>
                <Link onClick={total ? auth() ? null :(e)=>{e.preventDefault();document.body.style.overflow = "hidden";dispatch(togglePopup())} : (e) => {e.preventDefault()}} to={total ? auth() ? "/checkout/step1" : null : null } style={total ? null : {opacity : 0.7,cursor : "not-allowed"}} className="py-4 px-8 text-white bg-black hover:bg-[#1E1E1E] duration-300 font-medium font-[FallingSkyRegular] text-base">CHECK OUT</Link>
            </div>
        </div>
    );
}
export default Basket;