import React, { useState } from "react";
import CheckoutBar from "./CheckoutBar";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "./CartCard";
import { faArrowRight, faStore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate, useNavigationType } from "react-router-dom";
import { useEffect } from "react";
import classNames from "classnames";
import { closeBasket, updateClickable } from "./Redux/BasketSlice";
function CheckoutStep1(){
    const dispatch = useDispatch();
    dispatch(updateClickable(false));
    const navigate = useNavigate();
    const type = useNavigationType();
    if(type=="POP"){
        navigate("/");
    }
    dispatch(closeBasket());
    const products = useSelector(state => state.Basket.products);
    const total = useSelector(state => state.Basket.total);
    const [classes,setClasses] = useState(classNames({
        'flex' : true,
        'flex-col' : true,
        'justify-center' : true,
        'items-center' : true,
        'w-full' : true,
        'py-40' : true,
        'sm:px-24' : true,
        'duration-700' : true,
        'translate-y-[10vh]' : true,
        'opacity-20' : true
    }));
    useEffect(() => {
        setClasses(classNames({
            'flex' : true,
            'flex-col' : true,
            'justify-center' : true,
            'items-center' : true,
            'w-full' : true,
            'py-40' : true,
            'sm:px-24' : true,
            'duration-700' : true
        }))
    },[]);
    return(
        <div className={classes}>
            <div className="w-[85%] lg:w-2/3 flex flex-col justify-center items-center">
                <CheckoutBar step={1}></CheckoutBar>
            </div>
            <div className="font-[FallingSkyRegular] text-xl">Order Summary</div>
            <div className="font-[AwanZaman] font-semibold text-[#4A4A4A] my-4">Review items in your basekt.</div>
            <div className="flex flex-col w-[95%] lg:w-3/5 my-2">
            {products.map((item,pos) =>{
                    return <CartCard id={pos} name={item.name} quantity={item.quantity} size={item.size} color={item.color} price={item.price} image={item.image}></CartCard>
                })}
            </div>
            <div className="flex flex-col w-[90%] lg:w-[62%]">
                <div className="flex flex-col items-start self-end">
                    <span className="font-[AwanZaman] font-semibold text-[#4A4A4A]">Subtotal:</span>
                    <div className="text-3xl font-[FallingSkyRegular] my-4">${Math.floor(total) == total ? total + ".00" : total.toFixed(2)}</div>
                </div>
            </div>
            <div className="flex justify-between w-[90%] lg:w-[62%] my-4">
                <Link to="/" className="text-lg flex items-center font-[FallingSkyRegular] text-[#909190] py-4 px-4 bg-[#F2F2F2] border-[0.1px] border-[#c5c5c5] hover:bg-white duration-300 mb-3"><FontAwesomeIcon className="pr-2" icon={faStore} />Continue Shopping</Link>
                <Link to="/checkout/step2" className="text-lg flex items-center font-[FallingSkyRegular] text-white py-4 px-4 bg-black border-[0.1px] border-black hover:bg-[#2A2A2A] hover:border-[#2A2A2A] duration-300 mb-3">Next Step<FontAwesomeIcon className="pl-2" icon={faArrowRight}></FontAwesomeIcon></Link>
            </div>
        </div>
    );
}
export default CheckoutStep1;