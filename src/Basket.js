import React from "react";
import CartCard from "./CartCard";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { controlBasket } from "./Redux/BasketSlice";
function Basket() {
    const dispatch = useDispatch();
    const basketState = useSelector(state => state.Basket.visible);
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
    return (
        <div className={basketState ? basketshown : baskethidden}>
            <div className="flex justify-between items-center pb-2">
                <div className="flex items-baseline">
                    <div className="font-[AwanZaman] text[#1A1A1A] font-semibold text-2xl leading-8">My Basket</div>
                    <div className="font-[FallingSkyRegular] text-[#504A4A] font-medium text-sm leading-none pl-2">(12 items)</div>
                </div>
                <div>
                    <button onClick={closeBasket} className="text-sm font-[FallingSkyRegular] font-medium text-[#4A4A5B] py-3 px-4 bg-white hover:bg-[#E1E1E1] cursor-pointer duration-300 border-[0.1px] border-solid">Close</button>
                    <button className="text-sm font-[FallingSkyRegular] font-medium text-[#4A4A5B] py-3 px-4 bg-white hover:bg-[#E1E1E1] cursor-pointer duration-300 border-[0.1px] border-solid">Clear Basket</button>
                </div>
            </div>
            <div className="flex overflow-y-scroll no-scrollbar flex-col h-5/6 w-full">
                <CartCard></CartCard>
                <CartCard></CartCard>
                <CartCard></CartCard>
                <CartCard></CartCard>
                <CartCard></CartCard>
                <CartCard></CartCard>
                <CartCard></CartCard>
                <CartCard></CartCard>
                <CartCard></CartCard>
            </div>
            <div className="flex py-6 grow justify-between items-center border-t-[0.1px] ">
                <div className="flex flex-col items-start h-full justify-around">
                    <div className="text-lg font-semibold text-[#4A4A4A] font-[AwanZaman]">Subtotal Amount:</div>
                    <div className="text-3xl font-[FallingSkyRegular]">$6,333.00</div>
                </div>
                <button className="py-4 px-8 text-white bg-black hover:bg-[#1E1E1E] duration-300 font-medium font-[FallingSkyRegular] text-base">CHECK OUT</button>
            </div>
        </div>
    );
}
export default Basket;