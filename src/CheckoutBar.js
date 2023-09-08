import React from "react";
function CheckoutBar(props) {
    return (
        <div className="w-3/4 relative flex justify-center">
            <div className="flex justify-between w-full mb-4 items-center before:w-[75%] lg:before:w-[85%] before:left-[12.5%] lg:before:left-[7.5%] before:right-0 before:h-1 before:bg-[#ECECEC] before:absolute before:translate-y-[-1rem] before:-z-10">
                <div style={props.step != 1 ? { opacity: "0.5" } : null} className="flex flex-col justify-center items-center w-32">
                    <div className="w-9 h-9 flex justify-center items-center rounded-full text-lg font-[FallingSkyRegular] text-white bg-black">1</div>
                    <div className="font-[AwanZaman] font-semibold mt-2">Order Summary</div>
                </div>
                <div style={props.step > 2 ? { opacity: "0.5" } : null} className="flex flex-col justify-center items-center w-32">
                    <div style={props.step < 2 ? { backgroundColor: "#E1E1E1", color: "#818181" } : { backgroundColor: "black", color: "white" }} className="w-9 h-9 flex justify-center items-center rounded-full text-lg font-[FallingSkyRegular]">2</div>
                    <div style={props.step < 2 ? { color: "#BAB8B6" } : null} className="font-[AwanZaman] font-semibold mt-2">Shipping Details</div>
                </div>
                <div className="flex flex-col justify-center items-center w-32">
                    <div style={props.step < 3 ? { backgroundColor: "#E1E1E1", color: "#818181" } : { backgroundColor: "black", color: "white" }} className="w-9 h-9 flex justify-center items-center rounded-full text-lg font-[FallingSkyRegular] text-[#818181] bg-[#E1E1E1]">3</div>
                    <div style={props.step < 3 ? { color: "#BAB8B6" } : null} className="font-[AwanZaman] font-semibold mt-2">Payment</div>
                </div>
            </div>
        </div>
    );
}
export default CheckoutBar;