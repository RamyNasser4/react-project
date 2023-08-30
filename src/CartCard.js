import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
function CartCard() {
    return (
        <div className="flex mb-3 items-center border-[0.1px] border-solid">
            <div className="flex flex-col h-full">
                <div className="grow text-sm font-[FallingSkyRegular] font-medium text-[#4A4A5B] pb-3 pt-[0.9rem] px-4 bg-white hover:bg-[#E1E1E1] cursor-pointer duration-300 border-[0.1px] border-solid">+</div>
                <div className="grow text-sm font-[FallingSkyRegular] font-medium text-[#4A4A5B] pb-3 pt-[0.9rem] px-4 bg-white hover:bg-[#E1E1E1] cursor-pointer duration-300 border-[0.1px] border-solid">-</div>
            </div>
            <div className="flex grow">
                <div className="flex justify-center items-center">
                    <img className="box-content scale-[0.8] h-fit max-h-[100px]" src="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540"></img>
                </div>
                <div className="flex flex-col w-2/5 pt-4">
                    <div className="font-[AwanZaman] font-semibold underline text-xl text-left text-black">Kibal Batal</div>
                    <div className="flex w-full justify-between grow">
                        <div className="flex flex-col items-start h-full justify-between">
                            <div className="font-[FallingSkyRegular] text-sm text-[#979797]">Quantity</div>
                            <div className="font-[FallingSkyRegular]">1</div>
                        </div>
                        <div className="flex flex-col items-start h-full justify-between">
                            <div className="font-[FallingSkyRegular] text-sm text-[#979797]">Size</div>
                            <div className="font-[FallingSkyRegular]">28mm</div>
                        </div>
                        <div className="flex flex-col items-start h-full justify-between">
                            <div className="font-[FallingSkyRegular] text-sm text-[#979797]">Color</div>
                            <div className="rounded-full w-4 h-4 mb-1 bg-black"></div>
                        </div>
                    </div>
                </div>
                <div className="grow flex justify-evenly items-center">
                    <div className="flex justify-center items-center text-center font-[FallingSkyRegular] font-medium text-xl">
                        $674.00
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="text-base font-[FallingSkyRegular] font-medium text-[#4A4A5B] py-3 px-4 bg-white hover:bg-[#E1E1E1] cursor-pointer duration-300 border-[0.1px] border-solid"><FontAwesomeIcon icon={faX} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CartCard;