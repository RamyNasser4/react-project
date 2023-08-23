import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
function ColorOption() {
    return (
        <div className="relative flex justify-center items-center">
            <input type="radio" className="relative opacity-0 w-7 h-7 bg-black z-20"></input>
            <span className=" absolute top-0 left-0 w-7 h-7 bg-black rounded-full"></span>
            <FontAwesomeIcon className="absolute hidden top-1/5 left-1/5 z-10 text-white" icon={faCheck}></FontAwesomeIcon>
        </div>
    );
}
export default ColorOption;