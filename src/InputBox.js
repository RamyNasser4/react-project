import React from "react";
import { updateEmail, updateName, updatePassword } from "./Redux/SignupSlice";
import { useDispatch } from "react-redux";
import { IupdateEmail, IupdatePassword } from "./Redux/SigninSlice";
function InputBox(props){
    const dispatch = useDispatch();
    const checkInput = (e) =>{
        if(props.name=="Full Name" && props.signup){
            dispatch(updateName(e.target.value));
        }else if(props.name == "Email" && props.signup){
            dispatch(updateEmail(e.target.value));
        }else if(props.signup){
            dispatch(updatePassword(e.target.value));
        }else if(props.name == "Email"){
            dispatch(IupdateEmail(e.target.value));
        }else{
            dispatch(IupdatePassword(e.target.value));
        }
    }
    return(
        <>
           <label className="font-[AwanZaman] text-[#7C7F7F] font-semibold pl-2 pb-2" htmlFor={props.name}>*{props.name}</label>
           <input type={props.type} onChange={checkInput} className="font-[AwanZaman] font-semibold border-[1px] border-solid border-[#c5c5c5] w-full py-[0.40rem] px-4 mb-5 placeholder:font-semibold placeholder:text-[#9D9D9D]" id={props.name} name={props.name} placeholder={props.name}></input>
        </>
    );
}
export default InputBox;