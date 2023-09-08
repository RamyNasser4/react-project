import React from "react";
import CheckoutBar from "./CheckoutBar";
function CheckoutStep1(){
    return(
        <div className="flex flex-col justify-center items-center w-full py-40 sm:px-24">
            <div className="w-2/3 flex flex-col justify-center items-center">
                <CheckoutBar step={1}></CheckoutBar>
            </div>
            <div className="font-[FallingSkyRegular] text-xl">Order Summary</div>
        </div>
    );
}
export default CheckoutStep1;