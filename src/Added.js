import classNames from "classnames";
import React from "react";
import { useSelector } from "react-redux";
function Added(){
    const state = useSelector(state => state.Alert.visible);
    const hidden = classNames({
        'flex' : true,
        'px-3' : true,
        'py-4' : true,
        'text-sm' : true,
        'z-0' : true,
        'fixed' : true,
        'top-0' : true,
        'right-7' : true,
        'shadow-lg' : true,
        'duration-500' : true,
        'justify-center' : true,
        'items-center' : true,
        'border-2' : true,
        'border-[#3B9620]' : true,
        'border-solid' : true,
        'bg-[#F0FBED]' : true,
        'text-[#4EA136]' : true,
        'font-[FallingSkyRegular]': true,
        'opacity-0' : true
    })
    const shown = classNames({
        'flex' : true,
        'px-3' : true,
        'py-4' : true,
        'text-sm' : true,
        'z-40' : true,
        'fixed' : true,
        'top-0' : true,
        'right-7' : true,
        'shadow-lg' : true,
        'duration-500' : true,
        'justify-center' : true,
        'items-center' : true,
        'border-2' : true,
        'border-[#3B9620]' : true,
        'border-solid' : true,
        'bg-[#F0FBED]' : true,
        'text-[#4EA136]' : true,
        'font-[FallingSkyRegular]': true,
        'translate-y-20' : true
    })
    return(
        <div className={state ? shown : hidden}>
            Item added to Basket
        </div>
    );
}
export default Added;