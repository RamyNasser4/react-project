import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
function ForgetPassword() {
    return (
        <div className="w-full flex justify-center py-[35vh]">
            <div className="flex flex-col w-[85%] lg:w-2/5 justify-center items-start">
                <div className="font-[AwanZaman] font-medium text-2xl text-[#1A1A1A] mb-3">Forgot Your Password?</div>
                <div className="font-[AwanZaman] text-left font-medium text-xl text-[#4A4A4A] mb-8">Enter your email address and we will send you a password reset email.</div>
                <form className="flex flex-col w-full">
                    <input type="email" placeholder="Enter your email" name="email" className="font-[AwanZaman] font-semibold border-[1px] border-solid border-[#c5c5c5] w-full py-[0.40rem] px-4 mb-10 md:mb-5 placeholder:font-semibold placeholder:text-[#9D9D9D] placeholder:text-lg"></input>
                    <button type="submit" className="flex justify-start items-center text-xl font-[AwanZaman] text-white py-3 px-4 bg-black border-2 hover:bg-[#2A2A2A] duration-300 hover:border-[#2A2A2A] border-black w-full lg:w-3/4 xl:w-3/5 2xl:w-[45%]">
                        <FontAwesomeIcon className="pr-1" icon={faCheck} />
                        <span className="font-[AwanZaman] font-semibold text-2xl">Send Password Reset Email</span>
                    </button>
                </form>
            </div>
        </div>
    );
}
export default ForgetPassword;