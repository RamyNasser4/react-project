import classNames from "classnames";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CheckoutBar from "./CheckoutBar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useNavigationType } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheck } from "@fortawesome/free-solid-svg-icons";
import { updateClickable } from "./Redux/BasketSlice";
function CheckoutStep3() {
    const navigate = useNavigate();
    const type = useNavigationType();
    const dispatch = useDispatch();
    dispatch(updateClickable(false));
    if(type=="POP"){
        navigate("/");
    }
    const total = useSelector(state => state.Basket.total);
    const [isClicked,setIsClicked] = useState("CreditCard");
    const hiddenClass = classNames({
        'flex': true,
        'flex-col': true,
        'w-full': true,
        'overflow-y-hidden': true,
        'duration-700': true,
        'h-0': true,
    });
    const visibleClass = classNames({
        'flex': true,
        'flex-col': true,
        'w-full': true,
        'overflow-y-hidden': true,
        'duration-700': true,
        'lg:h-96': true,
        'h-[35rem]' : true
    });
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
    const [visible, setVisible] = useState(hiddenClass);
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
        }));
        setVisible(visibleClass);
    }, []);
    const [name, setName] = useState("");
    const [invalidName, setInvalidName] = useState(false);
    const checkName = (e) => {
        setName(e.target.value);
        if (e.target.value == "") {
            setInvalidName(true);
        } else {
            setInvalidName(false);
        }
    }
    const [card, setCard] = useState("");
    const [invalidCard, setInvalidCard] = useState(false);
    const [invalidCardMessage, setInvalidCardMessage] = useState("");
    const checkCard = (e) => {
        setCard(e.target.value);
        if (e.target.value == "") {
            setInvalidCard(true);
            setInvalidCardMessage("Card number is required");
        } else if (e.target.value.length < 13) {
            setInvalidCard(true);
            setInvalidCardMessage("Card number should be 13-19 digits long");
        } else {
            setInvalidCard(false);
        }
    }
    const [date, setDate] = useState("");
    const [invalidDate, setInvalidDate] = useState(false);
    const checkDate = (e) => {
        setDate(e.target.value);
        console.log(e.target.value);
        if (e.target.value == "") {
            setInvalidDate(true);
        } else {
            setInvalidDate(false);
        }
    }
    const [CCV, setCCV] = useState("");
    const [invalidCCV, setInvalidCCV] = useState(false);
    const [invalidCCVMessage, setInvalidCCVMessage] = useState("");
    const checkCCV = (e) => {
        setCCV(e.target.value);
        if (e.target.value == "") {
            setInvalidCCV(true);
            setInvalidCCVMessage("CCV is required");
        } else if (e.target.value.length < 13) {
            setInvalidCCV(true);
            setInvalidCCVMessage("CCV should be 3-4 digits long");
        } else {
            setInvalidCCV(false);
        }
    }
    return (
        <div className={classes}>
            <div className="w-[85%] lg:w-2/3 flex flex-col justify-center items-center">
                <CheckoutBar step={3}></CheckoutBar>
            </div>
            <div className="font-[FallingSkyRegular] text-xl">Payment</div>
            <div className="flex flex-col w-[90%] xl:w-3/4 2xl:w-[55%] items-start">
                <div className="p-4 font-[AwanZaman] font-semibold text-[#4A4A4A]">Payment option</div>
                <div className="flex flex-col w-full items-start border-[0.1px] border-[#c5c5c5]">
                    <div onClick={() => {setIsClicked("CreditCard");setVisible(visibleClass);}} style={{opacity : isClicked=="CreditCard" ? 1 : null}} className="flex justify-between opacity-50 hover:opacity-100 duration-300 cursor-pointer px-4 py-8 w-full bg-[#F1F1F1] border-b-[0.1px] border-b-[#c5c5c5]">
                        <div className="flex items-center">
                            <div style={{backgroundColor : isClicked=="CreditCard" ? "black" : "white",borderColor : isClicked=="CreditCard" ? "black" : "#CACACA"}} className="w-7 h-7 rounded-full bg-black border-[0.1px] border-[black] mr-2"><FontAwesomeIcon style={{color : isClicked=="CreditCard" ? "white" : "#E4E4E4"}} className="pt-[0.4rem]" icon={faCheck}></FontAwesomeIcon></div>
                            <div className="flex flex-col items-start">
                                <div className="font-[AwanZaman] font-semibold text-xl">Credit Card</div>
                                <div className="font-[AwanZaman] font-semibold text-[#4A4A4A]">Pay with Visa, Master Card and other debit or credit card</div>
                            </div>
                        </div>
                        <img className="w-14 h-full grayscale" src="https://pohseng.com/shop/image/catalog/payment-method-visa-512.png"></img>
                    </div>
                    <div className={visible}>
                        <div className="flex flex-col items-center justify-center w-full pt-8">
                            <div className="font-[AwanZaman] font-semibold text-[#4A4A4A]">Accepted Cards</div>
                            <div className="flex">
                                <img className="w-14 h-full grayscale" src="https://pohseng.com/shop/image/catalog/payment-method-visa-512.png"></img>
                                <img className="w-14 h-full grayscale" src="https://pohseng.com/shop/image/catalog/payment-method-visa-512.png"></img>
                                <img className="w-14 h-full grayscale" src="https://pohseng.com/shop/image/catalog/payment-method-visa-512.png"></img>
                                <img className="w-14 h-full grayscale" src="https://pohseng.com/shop/image/catalog/payment-method-visa-512.png"></img>
                                <img className="w-14 h-full grayscale" src="https://pohseng.com/shop/image/catalog/payment-method-visa-512.png"></img>
                            </div>
                        </div>
                        <div className="flex flex-col lg:grid grid-cols-2 gap-x-8 gap-y-4 p-8 w-full">
                            <div className="flex flex-col items-start">
                                <label style={{ color: invalidName ? 'red' : '#7C7F7F' }} htmlFor="name" className="font-[AwanZaman] font-semibold pl-2 pb-2">*{invalidName ? "Name on card is required" : "Name on Card"}</label>
                                <input placeholder="Enter name on card" style={{ borderColor: invalidName ? 'red' : null }} value={name} onChange={checkName} type="text" id="name" className="font-[AwanZaman] font-semibold border-[1px] border-solid border-[#c5c5c5] text-xl w-full py-2 px-4 placeholder:font-semibold placeholder:text-[#9D9D9D]"></input>
                            </div>
                            <div className="flex flex-col items-start">
                                <label style={{ color: invalidCard ? 'red' : '#7C7F7F' }} htmlFor="card" className="font-[AwanZaman] font-semibold pl-2 pb-2">*{invalidCard ? invalidCardMessage : "Card Number"}</label>
                                <input placeholder="Enter card number" max="19" style={{ borderColor: invalidCard ? 'red' : null }} value={card} onChange={checkCard} type="number" id="card" className="font-[AwanZaman] font-semibold border-[1px] border-solid border-[#c5c5c5] text-xl w-full py-2 px-4 placeholder:font-semibold placeholder:text-[#9D9D9D]"></input>
                            </div>
                            <div className="flex flex-col items-start">
                                <label style={{ color: invalidDate ? 'red' : '#7C7F7F' }} htmlFor="date" className="font-[AwanZaman] font-semibold pl-2 pb-2">*{invalidDate ? "Expiry date is required" : "Expiry Date"}</label>
                                <input style={{ borderColor: invalidDate ? 'red' : null }} onBlur={checkDate} type="date" id="date" className="font-[AwanZaman] font-semibold border-[1px] border-solid border-[#c5c5c5] text-xl w-full py-2 px-4 placeholder:font-semibold placeholder:text-[#9D9D9D]"></input>
                            </div>
                            <div className="flex flex-col items-start">
                                <label style={{ color: invalidCCV ? 'red' : '#7C7F7F' }} htmlFor="CCV" className="font-[AwanZaman] font-semibold pl-2 pb-2">*{invalidCCV ? invalidCCVMessage : "CCV"}</label>
                                <input max="4" placeholder="****" style={{ borderColor: invalidCCV ? 'red' : null }} value={CCV} onChange={checkCCV} type="number" id="CCV" className="font-[AwanZaman] font-semibold border-[1px] border-solid border-[#c5c5c5] text-xl w-full py-2 px-4 placeholder:font-semibold placeholder:text-[#9D9D9D]"></input>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => {setIsClicked("Paypal");setVisible(hiddenClass)}} style={{opacity : isClicked=="Paypal" ? 1 : null}} className="flex justify-between opacity-50 hover:opacity-100 duration-300 cursor-pointer px-4 py-8 w-full bg-[#F1F1F1] border-t-[0.1px] border-t-[#c5c5c5]">
                        <div className="flex items-center">
                            <div style={{backgroundColor : isClicked=="Paypal" ? "black" : "white",borderColor : isClicked=="Paypal" ? "black" : "#CACACA" }} className="w-7 h-7 rounded-full border-[0.1px] mr-2"><FontAwesomeIcon style={{color : isClicked=="Paypal" ? "white" : "#E4E4E4"}} className="pt-[0.4rem]" icon={faCheck}></FontAwesomeIcon></div>
                            <div className="flex flex-col items-start">
                                <div className="font-[AwanZaman] font-semibold text-xl">PayPal</div>
                                <div className="font-[AwanZaman] font-semibold text-[#4A4A4A]">Pay easily, fast and secure with PayPal.</div>
                            </div>
                        </div>
                        <img className="w-14 h-full grayscale" src="https://darkroomhiddensecrets.com/wp-content/uploads/2022/05/PayPalCard-600x450.png"></img>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-[90%] xl:w-3/4 2xl:w-1/2">
                <div className="flex items-center self-end">
                    <span className="font-[AwanZaman] font-semibold text-[#4A4A4A] pr-4">Total:</span>
                    <div className="text-3xl font-[FallingSkyRegular] my-4">${Math.floor(total) == total ? total + ".00" : total.toFixed(2)}</div>
                </div>
            </div>
            <div className="flex justify-between w-[90%] xl:w-3/4 2xl:w-[52%] my-4">
                <Link to="/checkout/step2" className="text-lg font-[FallingSkyRegular] text-[#909190] py-4 px-4 bg-[#F2F2F2] border-[0.1px] border-[#c5c5c5] hover:bg-white duration-300 mb-3"><FontAwesomeIcon className="pr-2" icon={faArrowLeft} />Go Back</Link>
                <button className="text-lg flex items-center font-[FallingSkyRegular] text-white py-4 px-4 bg-black border-[0.1px] border-black hover:bg-[#2A2A2A] hover:border-[#2A2A2A] duration-300 mb-3"><FontAwesomeIcon className="pr-2" icon={faCheck}></FontAwesomeIcon>Confirm</button>
            </div>
        </div>
    );
}
export default CheckoutStep3;