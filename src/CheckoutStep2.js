import classNames from "classnames";
import React, { useState } from "react";
import { useAuthUser } from "react-auth-kit";
import CheckoutBar from "./CheckoutBar";
import PhoneInput from "react-phone-input-2";
import { useEffect } from "react";
import { Link, useNavigate, useNavigationType } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import axios from "./axios";
import { updateClickable } from "./Redux/BasketSlice";
function CheckoutStep2() {
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const type = useNavigationType();
    if(type=="POP"){
        navigate("/");
    }
    const dispatch = useDispatch();
    dispatch(updateClickable(false));
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [invalidName, setInvalidName] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [invalidAddress, setInvalidAddress] = useState(false);
    const [invalidPhone, setInvalidPhone] = useState(false);
    const total = useSelector(state => state.Basket.total);
    const auth = useAuthUser();
    let id = auth().id;
    useEffect(() => {
        const getData = async () => {
            const token = Cookies.get("_auth");
            try {
                await axios.get(`http://127.0.0.1:8000/api/user/${id}`, {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Content-type": "Application/json",
                        Authorization: `Bearer ${token}`,
                        'Accept': "application/json"
                    }
                }).then(res => {
                    setName(res.data.name);
                    setEmail(res.data.email);
                    setAddress(res.data.address);
                    /* Initialaddress = res.data.address; */
                    setPhone(res.data.phone_number.split("+")[1]);
                    /* Initialphone = res.data.phone_number.split("+")[1]; */
                })
            } catch (err) {
                console.log(err);
            }
        }
        getData();
    }, [id]);
    const [classes, setClasses] = useState(classNames({
        'flex': true,
        'flex-col': true,
        'justify-center': true,
        'items-center': true,
        'w-full': true,
        'py-40': true,
        'sm:px-24': true,
        'duration-700': true,
        'translate-y-[10vh]': true,
        'opacity-20': true
    }));
    useEffect(() => {
        setClasses(classNames({
            'flex': true,
            'flex-col': true,
            'justify-center': true,
            'items-center': true,
            'w-full': true,
            'py-40': true,
            'sm:px-24': true,
            'duration-700': true
        }))
    }, []);
    const checkName = (e) => {
        setName(e.target.value);
        if (e.target.value == "") {
            setInvalidName(true);
        } else {
            setInvalidName(false);
        }
    }
    const checkEmail = (e) => {
        setEmail(e.target.value);
        var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,18}$/;
        if (!re.test(e.target.value)) {
            setInvalidEmail(true);
        } else {
            setInvalidEmail(false);
        }
    }
    const checkAddress = (e) => {
        setAddress(e.target.value);
        if (e.target.value == "") {
            setInvalidAddress(true);
        } else {
            setInvalidAddress(false);
        }
    }
    const checkPhone = (e) => {
        setPhone(e);
        if (e == "") {
            setInvalidPhone(true);
        } else {
            setInvalidPhone(false);
        }
    }
    const HandleSubmit = () =>{
        if(!address){
            setInvalidAddress(true);
        }
        if(!phone){
            setInvalidPhone(true);
        }
        if(!invalidName && !invalidEmail && !invalidAddress && !invalidPhone && address && phone){
            navigate("/checkout/step3");
        }
    }
    
    return (
        <div className={classes}>
            <div className="w-[85%] lg:w-2/3 flex flex-col justify-center items-center">
                <CheckoutBar step={2}></CheckoutBar>
            </div>
            <div className="font-[FallingSkyRegular] text-xl">Shipping Details</div>
            <div className="flex flex-col justify-between items-start lg:grid grid-cols-2 gap-x-8 gap-y-4 w-[90%] lg:w-1/2 my-4">
                <div className="flex flex-col items-start w-full lg:w-auto">
                    <label style={{ color: invalidName ? 'red' : '#7C7F7F' }} htmlFor="name" className="font-[AwanZaman] font-semibold pl-2 pb-2">*{invalidName ? "Full Name is required" : "Full Name"}</label>
                    <input placeholder="Enter your Full Name" style={{borderColor : invalidName ? 'red' : null}} value={name} onChange={checkName} type="text" id="name" className="font-[AwanZaman] font-semibold border-[1px] border-solid border-[#c5c5c5] text-xl w-full py-2 px-4 placeholder:font-semibold placeholder:text-[#9D9D9D]"></input>
                </div>
                <div className="flex flex-col items-start w-full lg:w-auto">
                    <label style={{ color: invalidEmail ? 'red' : '#7C7F7F' }} htmlFor="email" className="font-[AwanZaman] font-semibold pl-2 pb-2">*{invalidEmail ? "Email is required" : "Email"}</label>
                    <input placeholder="Enter your email" style={{borderColor : invalidEmail ? 'red' : null}} value={email} onChange={checkEmail} type="email" id="email" className="font-[AwanZaman] font-semibold border-[1px] border-solid border-[#c5c5c5] text-xl w-full py-2 px-4 placeholder:font-semibold placeholder:text-[#9D9D9D]"></input>
                </div>
                <div className="flex flex-col items-start w-full lg:w-auto">
                    <label style={{ color: invalidAddress ? 'red' : '#7C7F7F' }} htmlFor="address" className="text-[#7C7F7F] font-[AwanZaman] font-semibold pl-2 pb-2">*{invalidAddress ? "Address is required" : "Shipping Address"}</label>
                    <input placeholder="Enter your full shipping address" style={{borderColor : invalidAddress ? 'red' : null}} value={address} onChange={checkAddress} type="text" id="address" className="font-[AwanZaman] font-semibold border-[1px] border-solid border-[#c5c5c5] text-xl w-full py-2 px-4 placeholder:font-semibold placeholder:text-[#9D9D9D]"></input>
                </div>
                <div className="flex flex-col items-start w-full lg:w-auto">
                    <label style={{ color: invalidPhone ? 'red' : '#7C7F7F'}} htmlFor="phone" className="text-[#7C7F7F] font-[AwanZaman] font-semibold pl-2 pb-2">*{invalidPhone ? "Phone number is required" : "Phone number"}</label>
                    <PhoneInput onChange={checkPhone} containerStyle={{ display: "flex", width: "100%" }} inputStyle={{ flexGrow: 1, height: "45.78px", borderRadius: 0,borderColor : invalidPhone ? 'red' : null }} className="w-full text-[#7C7F7F] font-[AwanZaman] font-semibold" country={"eg"} id="phone" value={phone} />
                </div>
            </div>
            <div className="flex flex-col w-[90%] lg:w-1/2">

            </div>
            <div className="flex flex-col w-[90%] lg:w-1/2">
                <div className="flex items-center self-end">
                    <span className="font-[AwanZaman] font-semibold text-[#4A4A4A] pr-4">Total:</span>
                    <div className="text-3xl font-[FallingSkyRegular] my-4">${Math.floor(total) == total ? total + ".00" : total.toFixed(2)}</div>
                </div>
            </div>
            <div className="flex justify-between w-[90%] lg:w-[52%] my-4">
                <Link to="/checkout/step1" className="text-lg font-[FallingSkyRegular] text-[#909190] py-4 px-4 bg-[#F2F2F2] border-[0.1px] border-[#c5c5c5] hover:bg-white duration-300 mb-3"><FontAwesomeIcon className="pr-2" icon={faArrowLeft} />Go Back</Link>
                <button onClick={HandleSubmit} className="text-lg flex items-center font-[FallingSkyRegular] text-white py-4 px-4 bg-black border-[0.1px] border-black hover:bg-[#2A2A2A] hover:border-[#2A2A2A] duration-300 mb-3">Next Step<FontAwesomeIcon className="pl-2" icon={faArrowRight}></FontAwesomeIcon></button>
            </div>
        </div>
    );
}
export default CheckoutStep2;