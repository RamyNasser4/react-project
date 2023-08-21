import React from "react";
import InputBox from "./InputBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
function AuthCard(props) {
    return (
        <div className="flex flex-col w-[4/5] md:w-[55%] ">
            <div className="flex flex-col border-[0.1px] border-solid border-[#c5c5c5] p-10">
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-wrap flex-col items-start w-full md:w-1/2">
                        <h3 className="font-[AwanZaman] font-medium text-2xl pb-8">{props.title}</h3>
                        <form className="flex flex-col items-start w-full">
                            {props.signin ? <><InputBox type="email" name="Email"></InputBox><InputBox type="password" name="Password"></InputBox></> : <><InputBox type="text" name="Full Name"></InputBox><InputBox type="email" name="Email"></InputBox><InputBox type="password" name="Password"></InputBox></>}
                            <div className="flex flex-col sm:flex-row flex-wrap justify-between items-center w-full">
                                <a className="font-[AwanZaman] font-semibold underline text-[#6C6B6C]" href="/ForgetPassword">Forgot Password?</a>
                                <button type="submit" className="flex items-center text-xl font-[AwanZaman] text-white py-3 px-4 bg-black border-2 border-black">
                                    <span className="font-semibold pr-1">{props.signin ? "Sign In" : "Sign Up"}</span>
                                    <FontAwesomeIcon icon={faArrowRight} className="text-white text-lg" />
                                </button>
                            </div>
                        </form>

                    </div>
                    <div className="flex md:flex-col justify-around md:justify-center items-center w-full md:w-32">
                        <div className="md:w-[0.1px] md:h-16 w-16 h-[0.1px] bg-[#E1E1E1]"></div>
                        <div className="font-[AwanZaman] font-semibold text-[0.9rem] my-2">OR</div>
                        <div className="md:w-[0.1px] md:h-16 w-16 h-[0.1px] bg-[#E1E1E1]"></div>
                    </div>
                    <div className="flex flex-col justify-center grow">
                        <a className="bg-[#0078FF] p-3 w-full flex justify-around items-center border-[0.1px] border-solid">
                            <FontAwesomeIcon icon={faFacebookF} className=" text-white text-sm" />
                            <span className="font-[AwanZaman] font-medium text-lg text-white">Continue with Facebook</span>
                        </a>
                        <a className="bg-white p-3 w-full flex justify-around items-center border-[0.1px] border-[#c5c5c5] border-solid my-3">
                            <FontAwesomeIcon icon={faGoogle} className="text-[#4A4A4A] text-sm" />
                            <span className="font-[AwanZaman] font-medium text-lg text-[#4A4A4A]">Continue with Google</span>
                        </a>
                        <a className="bg-[#24292E] p-3 w-full flex justify-around items-center border-[0.1px] border-solid">
                            <FontAwesomeIcon icon={faGithub} className=" text-white text-sm" />
                            <span className="font-[AwanZaman] font-medium text-lg text-white">Continue with GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center bg-[#F2F2F2] border-x-[0.1px] border-b-[0.1px] border-solid border-[#c5c5c5]">
                <div className="flex justify-between items-center p-4 w-full sm:w-1/3">
                    <span className="font-[AwanZaman] font-semibold text-[#4A4A4A]">{props.signin ? "Don't Have an account?" : "Already have an account?"}</span>
                    <a className="text-lg font-[AwanZaman] text-[#907F7D] py-1 px-4 bg-[#F2F2F2] border-[0.1px]" href={props.signin ? "/Signup" : "/Signin"}>{props.signin ? "Sign up" : "Sign in"}</a>
                </div>
            </div>
        </div>

    );
}
export default AuthCard;