import React, { useState } from "react";
import { updateEmail, updateName, updatePassword, updateValid } from "./Redux/SignupSlice";
import { useDispatch } from "react-redux";
import { IupdateEmail, IupdatePassword, IupdateValid } from "./Redux/SigninSlice";
function InputBox(props) {
    const dispatch = useDispatch();
    const [invalid, setInvalid] = useState(false);
    const [invalidMessage, setInvalidMessage] = useState("");
    const checkInput = (e) => {
        if (props.name == "Full Name" && props.signup) {
            dispatch(updateName(e.target.value));
            if (e.target.value == "") {
                setInvalid(true);
                dispatch(updateValid(false));
                setInvalidMessage("A name is required");
            } else {
                dispatch(updateValid(true));
                setInvalid(false);
            }
        } else if (props.name == "Email" && props.signup) {
            dispatch(updateEmail(e.target.value));
            var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,18}$/;
            // If email's pattern is found in variable re
            if (!re.test(e.target.value)) {
                setInvalid(true);
                dispatch(updateValid(false));
                setInvalidMessage("A valid email is required");
            }else{
                dispatch(updateValid(true));
                setInvalid(false);
            }
        } else if (props.signup) {
            dispatch(updatePassword(e.target.value));
            if(e.target.value.length<8){
                setInvalid(true);
                dispatch(updateValid(false));
                setInvalidMessage("Password should be at least 8 characters");
            }else{
                dispatch(updateValid(true));
                setInvalid(false);
            }
        } else if (props.name == "Email") {
            dispatch(IupdateEmail(e.target.value));
            var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,18}$/;
            // If email's pattern is found in variable re
            if (!re.test(e.target.value)) {
                setInvalid(true);
                dispatch(IupdateValid(false));
                setInvalidMessage("A valid email is required");
            }else{
                setInvalid(false);
                dispatch(IupdateValid(true));
            }
        } else {
            dispatch(IupdatePassword(e.target.value));
        }
    }
    return (
        <>
            <label style={{ color: invalid ? 'red' : '#7C7F7F' }} className="font-[AwanZaman] font-semibold pl-2 pb-2" htmlFor={props.name}>*{invalid ? invalidMessage : props.name}</label>
            <input type={props.type} onChange={checkInput} className="font-[AwanZaman] font-semibold border-[1px] border-solid border-[#c5c5c5] w-full py-[0.40rem] px-4 mb-5 placeholder:font-semibold placeholder:text-[#9D9D9D]" id={props.name} name={props.name} placeholder={props.name}></input>
        </>
    );
}
export default InputBox;