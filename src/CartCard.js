import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DecQuantity, IncQuantity, RemoveFromBasket } from "./Redux/BasketSlice";
import classNames from "classnames";
function CartCard(props) {
    const dispatch = useDispatch();
    const onInc = () => {
        dispatch(IncQuantity(props.id));
    }
    const onDec = () => {
        if (props.quantity != 1) {
            dispatch(DecQuantity(props.id));
        }
    }
    const onRemove = () =>{
        dispatch(RemoveFromBasket(props.id));
    }
    const Increasble = classNames({
        'grow': true,
        'text-sm': true,
        'font-[FallingSkyRegular]': true,
        'font-medium': true,
        'text-[#4A4A5B]': true,
        'pb-3': true,
        'pt-[0.9rem]': true,
        'px-4': true,
        'bg-white': true,
        'hover:bg-[#E1E1E1]': true,
        'cursor-pointer': true,
        'duration-300': true,
        'border-[0.1px]': true,
        'border-solid': true
    });
    const notIncreasble = classNames({
        'grow': true,
        'text-sm': true,
        'font-[FallingSkyRegular]': true,
        'font-medium': true,
        'text-[#4A4A5B]': true,
        'pb-3': true,
        'pt-[0.9rem]': true,
        'px-4': true,
        'bg-white': true,
        'hover:bg-[#E1E1E1]': true,
        'cursor-not-allowed': true,
        'duration-300': true,
        'border-[0.1px]': true,
        'border-solid': true
    });
    return (
        <div className="flex mb-3 items-center border-[0.1px] border-solid">
            <div className="flex flex-col h-full">
                <div onClick={onInc} className={Increasble}>+</div>
                <div onClick={onDec} className={props.quantity == 1 ? notIncreasble : Increasble}>-</div>
            </div>
            <div className="flex grow">
                <div className="flex justify-center items-center">
                    <img className="box-content scale-[0.8] h-fit max-h-[100px]" src={props.image}></img>
                </div>
                <div className="flex flex-col w-2/5 pt-4">
                    <div className="font-[AwanZaman] font-semibold underline text-xl text-left text-black">{props.name}</div>
                    <div className="flex w-full justify-between grow">
                        <div className="flex flex-col items-start h-full justify-between">
                            <div className="font-[FallingSkyRegular] text-sm text-[#979797]">Quantity</div>
                            <div className="font-[FallingSkyRegular]">{props.quantity}</div>
                        </div>
                        <div className="flex flex-col items-start h-full justify-between">
                            <div className="font-[FallingSkyRegular] text-sm text-[#979797]">Size</div>
                            <div className="font-[FallingSkyRegular]">{props.size}</div>
                        </div>
                        <div className="flex flex-col items-start h-full justify-between">
                            <div className="font-[FallingSkyRegular] text-sm text-[#979797]">Color</div>
                            <div style={{ backgroundColor: props.color }} className="rounded-full w-4 h-4 mb-1"></div>
                        </div>
                    </div>
                </div>
                <div className="grow flex justify-evenly items-center">
                    <div className="flex justify-center items-center text-center font-[FallingSkyRegular] font-medium text-xl">
                        ${props.price}
                    </div>
                    <div className="flex justify-center items-center">
                        <button onClick={onRemove} className="text-base font-[FallingSkyRegular] font-medium text-[#4A4A5B] py-3 px-4 bg-white hover:bg-[#E1E1E1] cursor-pointer duration-300 border-[0.1px] border-solid"><FontAwesomeIcon icon={faX} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CartCard;