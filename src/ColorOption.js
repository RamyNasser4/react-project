import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { updateColor } from "./Redux/ColorSlice";
function ColorOption(props) {
    const dispatch = useDispatch();
    const handleClick = () =>{
        dispatch(updateColor({color : props.pos,hex: props.color}));
    }
    return (
        <div className="relative mx-3 flex justify-center items-center">
            <input type="radio" onClick={() => handleClick()} className="relative cursor-pointer opacity-0 w-8 h-8 bg-black z-20"></input>
            <span className={`absolute cursor-pointer top-0 left-0 w-8 h-8 bg-[${props.color}] rounded-full`}></span>
            <FontAwesomeIcon className={`absolute ${props.isClicked ? null : 'hidden'} top-1/5 left-1/5 z-10 text-white`} icon={faCheck}></FontAwesomeIcon>
        </div>
    );
}
export default ColorOption;