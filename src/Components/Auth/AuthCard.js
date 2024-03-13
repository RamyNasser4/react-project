import React, { useState } from "react";
import InputBox from "./InputBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useSignIn } from "react-auth-kit";
import { updateAuth } from "../../Redux/AuthSlice";
function AuthCard(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const signIn = useSignIn();
    const [invalid,setInvalid] = useState(false);
    const Uname = useSelector(state => state.Signup.name);
    const Uemail = useSelector(state => state.Signup.email);
    const Upassword = useSelector(state => state.Signup.password);
    const Iemail = useSelector(state => state.Signin.email);
    const Ipassword = useSelector(state => state.Signin.password);
    const valid = useSelector(state => state.Signup.valid);
    const Ivalid = useSelector(state => state.Signin.valid);
    const csrf = () => axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie');
    const onSubmit = async (e) => {
        e.preventDefault();
        await csrf();
        if (!props.signin && valid) {
            try {
                await axios.post("http://127.0.0.1:8000/api/signup", { name: Uname, email: Uemail, password: Upassword }).then(res => {
                    signIn({
                        token : res.data.token,
                        expiresIn : 1440,
                        tokenType : "Bearer",
                        authState : {name : res.data.user.name,role:res.data.role}
                    });
                    dispatch(updateAuth());
                    navigate('/');
                });
            } catch (err) {
                /* console.log(err); */
            }
        }else if(Ivalid){
            try {
                await axios.post("http://127.0.0.1:8000/api/signin", {email: Iemail, password: Ipassword }).then(res => {
                    if(res.data.message!= "Bad Credentials"){
                        signIn({
                            token : res.data.token,
                            expiresIn : 1440,
                            tokenType : "Bearer",
                            authState : {name : res.data.user.name,role:res.data.role}
                        });
                        dispatch(updateAuth());
                        navigate('/');
                    }else{
                        setInvalid(true);
                    }
                });
            } catch (err) {
                /* console.log(err); */
            }
        }
    }
    return (
        <div className="flex flex-col w-[85%] lg:w-4/5 xl:w-3/5 2xl:w-[55%] ">
            {invalid ? <div className="flex justify-center items-center py-4 mb-4 border-[#F73036] border-[0.1px] font-[AwanZaman] font-semibold text-lg w-full bg-[#FEF2F2] text-[#F73036]">Incorrect email or password</div> : null}
            <div className="flex flex-col border-[0.1px] border-solid border-[#c5c5c5] p-10">
                <div className="flex flex-col lg:flex-row">
                    <div className="flex flex-wrap flex-col items-start w-full lg:w-1/2">
                        <h3 className="font-[AwanZaman] font-medium text-2xl pb-8">{props.title}</h3>
                        <form onSubmit={onSubmit} className="flex flex-col items-start w-full">
                            {props.signin ? <><InputBox type="email" signin={true} name="Email"></InputBox><InputBox type="password" signin={true} name="Password"></InputBox></> : <><InputBox type="text" signup={true} name="Full Name"></InputBox><InputBox type="email" signup={true} name="Email"></InputBox><InputBox type="password" signup={true} name="Password"></InputBox></>}
                            <div className="flex lg:flex-row flex-wrap justify-between items-center w-full">
                                <Link className="font-[AwanZaman] font-semibold underline text-[#6C6B6C]" to="/ForgetPassword">Forgot Password?</Link>
                                <button type="submit" className="flex items-center text-xl font-[AwanZaman] text-white py-3 px-4 bg-black hover:bg-[#2A2A2A] hover:border-[#2A2A2A] cursor-pointer duration-300 border-2 border-black">
                                    <span className="font-semibold pr-1">{props.signin ? "Sign In" : "Sign Up"}</span>
                                    <FontAwesomeIcon icon={faArrowRight} className="text-white text-lg" />
                                </button>
                            </div>
                        </form>

                    </div>
                    <div className="flex lg:flex-col justify-around lg:justify-center items-center w-full lg:w-32">
                        <div className="lg:w-[0.1px] lg:h-16 w-16 md:w-20 h-[0.1px] bg-[#E1E1E1]"></div>
                        <div className="font-[AwanZaman] font-semibold text-[0.9rem] my-2">OR</div>
                        <div className="lg:w-[0.1px] lg:h-16 w-16 md:w-20 h-[0.1px] bg-[#E1E1E1]"></div>
                    </div>
                    <div className="flex flex-col justify-center grow">
                        <a className="bg-[#0078FF] hover:bg-[#006CE6] duration-300 cursor-pointer p-3 w-full flex justify-around items-center border-[0.1px] border-solid">
                            <FontAwesomeIcon icon={faFacebookF} className=" text-white text-sm" />
                            <span className="font-[AwanZaman] font-medium text-lg text-white">Continue with Facebook</span>
                        </a>
                        <a className="bg-white hover:bg-[#E1E1E1] duration-300 cursor-pointer p-3 w-full flex justify-around items-center border-[0.1px] border-[#c5c5c5] border-solid my-3">
                            <FontAwesomeIcon icon={faGoogle} className="text-[#4A4A4A] text-sm" />
                            <span className="font-[AwanZaman] font-medium text-lg text-[#4A4A4A]">Continue with Google</span>
                        </a>
                        <a className="bg-[#24292E] hover:bg-[#2F363C] duration-300 cursor-pointer p-3 w-full flex justify-around items-center border-[0.1px] border-solid">
                            <FontAwesomeIcon icon={faGithub} className=" text-white text-sm" />
                            <span className="font-[AwanZaman] font-medium text-lg text-white">Continue with GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center bg-[#F2F2F2] border-x-[0.1px] border-b-[0.1px] border-solid border-[#c5c5c5]">
                <div className="flex justify-between items-center p-4 w-full lg:w-1/3">
                    <span className="font-[AwanZaman] font-semibold text-[#4A4A4A]">{props.signin ? "Don't Have an account?" : "Already have an account?"}</span>
                    <Link className="text-lg font-[AwanZaman] text-[#907F7D] py-1 px-4 bg-[#F2F2F2] hover:bg-[#E1E1E1] cursor-pointer duration-300 border-[0.1px]" to={props.signin ? "/Signup" : "/Signin"}>{props.signin ? "Sign up" : "Sign in"}</Link>
                </div>
            </div>
        </div>

    );
}
export default AuthCard;