import React from "react";
function InputBox(props){
    return(
        <>
           <label className="font-[AwanZaman] text-[#7C7F7F] font-semibold pl-2 pb-2" for={props.name}>*{props.name}</label>
           <input type={props.type} className="font-[AwanZaman] font-semibold border-[1px] border-solid border-[#c5c5c5] w-full py-[0.40rem] px-4 mb-5 placeholder:font-semibold placeholder:text-[#9D9D9D]" id={props.name} name={props.name} placeholder={props.name}></input>
        </>
    );
}
export default InputBox;