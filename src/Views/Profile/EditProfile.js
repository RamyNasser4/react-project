import { faArrowLeft, faCheck, faPenToSquare, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import { Link } from "react-router-dom";
import { useAuthUser } from "react-auth-kit";
import { useDispatch } from "react-redux";
import { toggleAlert, updateContent } from "../../Redux/AlertSlice";
var InitialName, Initialemail, Initialaddress, Initialphone;
function EditProfile() {
    const navigate = useNavigate();
    const auth = useAuthUser();
    const dispatch = useDispatch();
    const [Loaded, setLoaded] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [profileImgUrl, setProfileImgUrl] = useState("");
    const [profileImgFile, setProfileImgFile] = useState(null);
    const [coverImgUrl, setCoverImgUrl] = useState("");
    const [coverImgFile, setCoverImgFile] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [invalidName, setInvalidName] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [isPicLoaded, setIsPicLoaded] = useState(false);
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
                    /* setUser(res.data); */
                    setName(res.data.name);
                    InitialName = res.data.name;
                    setEmail(res.data.email);
                    Initialemail = res.data.email;
                    setAddress(res.data.address);
                    Initialaddress = res.data.address;
                    setPhone(res.data.phone_number.split("+")[1]);
                    Initialphone = res.data.phone_number.split("+")[1];
                    try {
                        axios.get(`http://127.0.0.1:8000/api/user/profile_img/${res.data.profile_img}`, {
                            headers: {
                                "Access-Control-Allow-Origin": "*",
                                Authorization: `Bearer ${token}`,
                                'Accept': "image/png,image/jpeg"
                            }
                        }).then(response => {
                            console.log(response);
                            setProfileImgUrl("data:image/png;base64," + response.data);
                        })
                    } catch (err) {
                        console.log(err);
                    }
                    try {
                        axios.get(`http://127.0.0.1:8000/api/user/cover_img/${res.data.cover_img}`, {
                            headers: {
                                "Access-Control-Allow-Origin": "*",
                                Authorization: `Bearer ${token}`,
                                'Accept': "image/png,image/jpeg"
                            }
                        }).then(response => {
                            console.log(response);
                            setCoverImgUrl("data:image/png;base64," + response.data);
                        })
                    } catch (err) {
                        console.log(err);
                    }
                    setLoaded(true);
                })
            } catch (err) {

            }
        }
        getData();
    }, [id]);
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
    const onSubmit = async () => {
        if (name != InitialName || email != Initialemail || address != Initialaddress || phone != Initialphone || profileImgFile || coverImgFile || !invalidName || !invalidEmail) {
            setIsSubmitting(true);
            const token = Cookies.get("_auth");
            try {
                axios.post(`http://127.0.0.1:8000/api/user/${id}/edit`, { name: name, email: email, address: address, phone_number: phone, profile_img: profileImgFile, cover_img: coverImgFile }, {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Content-type": "multipart/form-data",
                        Authorization: `Bearer ${token}`,
                        'Accept': "application/json"
                    }
                }).then(res => {
                    console.log(res);
                    navigate("/user");
                    dispatch(updateContent("Profile updated successfully"));
                    dispatch(toggleAlert());
                    setTimeout(() => { dispatch(toggleAlert()) }, 2000);
                })
            } catch (err) {
                console.log(err);
            }
        }
    }
    const HandleLoad = () => {
        /* setIsPicLoaded(true); */
    }
    return (
        <div className="flex flex-col justify-center items-center w-full py-40 lg:px-24">
            <div className="flex flex-col items-start w-[85%] xl:w-1/2 2xl:w-2/5" style={isSubmitting ? { filter: "opacity(0.5)" } : null}>
                <div className="font-[FallingSkyRegular] text-xl font-normal self-center py-4">Edit Account Details</div>
                {Loaded ? <>
                    <img style={{opacity: isPicLoaded ? null : 0}} onLoad={HandleLoad} className="h-40 w-full" src={coverImgUrl}></img>
                    {isPicLoaded ? null : <div className="h-40 w-[85vw] lg:w-[calc(85vw-11rem)] xl:w-[calc((100vw-12rem)*0.5)] 2xl:w-[calc((100vw-12rem)*0.4)] absolute top-[calc(13.75rem)] flex justify-center items-center bg-[#F2F2F2]"><FontAwesomeIcon className="text-3xl" icon={faSpinner} spin></FontAwesomeIcon></div>}
                    <div className="flex justify-between items-center px-2 relative bottom-12 w-full">
                        <div className="flex">
                            <img style={{opacity: isPicLoaded ? null : 0}} onLoad={HandleLoad} className="box-content object-cover w-[100px] h-[100px] rounded-full border-2 border-white" src={profileImgUrl}></img>
                            {isPicLoaded ? null : <div className="w-[100px] h-[100px] border-2 border-white absolute rounded-full flex justify-center items-center bg-[#F2F2F2]"><FontAwesomeIcon className="text-2xl" icon={faSpinner} spin></FontAwesomeIcon></div>}
                            <label htmlFor="profile"><FontAwesomeIcon icon={faPenToSquare} className="text-sm absolute bottom-0 left-20 rounded-full font-[FallingSkyRegular] text-white py-2 px-2 bg-black border-2 border-black "></FontAwesomeIcon></label>
                            <input type="file" accept="image/x-png,image/jpeg" onInput={(e) => { if (e.target.files.length) { setProfileImgUrl(URL.createObjectURL(e.target.files[0])); setProfileImgFile(e.target.files[0]); } }} id="profile" className="hidden"></input>
                        </div>
                        <label htmlFor="cover"><FontAwesomeIcon icon={faPenToSquare} className="text-sm rounded-full font-[FallingSkyRegular] text-white py-2 px-2 bg-black border-2 border-black mb-3"></FontAwesomeIcon></label>
                        <input type="file" accept="image/x-png,image/jpeg" onInput={(e) => { if (e.target.files.length) { setCoverImgUrl(URL.createObjectURL(e.target.files[0])); setCoverImgFile(e.target.files[0]); } }} id="cover" className="hidden"></input>
                    </div>
                    <label style={{ color: invalidName ? 'red' : '#7C7F7F' }} htmlFor="name" className="font-[AwanZaman] font-semibold pl-2 pb-2">*{invalidName ? "Full Name is required" : "Full Name"}</label>
                    <input style={{borderColor : invalidName ? 'red' : null}} value={name} onChange={checkName} type="text" id="name" className="font-[AwanZaman] font-semibold border-[1px] border-solid border-[#c5c5c5] text-xl w-full py-2 px-4 mb-5 placeholder:font-semibold placeholder:text-[#9D9D9D]"></input>
                    <label style={{ color: invalidEmail ? 'red' : '#7C7F7F' }} htmlFor="email" className="font-[AwanZaman] font-semibold pl-2 pb-2">*{invalidEmail ? "Email is required" : "Email"}</label>
                    <input style={{borderColor : invalidEmail ? 'red' : null}} value={email} onChange={checkEmail} type="email" id="email" className="font-[AwanZaman] font-semibold border-[1px] border-solid border-[#c5c5c5] text-xl w-full py-2 px-4 mb-5 placeholder:font-semibold placeholder:text-[#9D9D9D]"></input>
                    <label htmlFor="address" className="text-[#7C7F7F] font-[AwanZaman] font-semibold pl-2 pb-2">Address (Will be used for checkout)</label>
                    <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" id="address" className="font-[AwanZaman] font-semibold border-[1px] border-solid border-[#c5c5c5] text-xl w-full py-2 px-4 mb-5 placeholder:font-semibold placeholder:text-[#9D9D9D]"></input>
                    <label htmlFor="phone" className="text-[#7C7F7F] font-[AwanZaman] font-semibold pl-2 pb-2">Phone number (Will be used for checkout)</label>
                    <PhoneInput onChange={(e) => setPhone(e)} containerStyle={{ display: "flex", width: "100%", marginBottom: "1.25rem" }} inputStyle={{ flexGrow: 1, height: "3rem", borderRadius: 0 }} className="w-full text-[#7C7F7F] font-[AwanZaman] font-semibold" country={"eg"} id="phone" value={phone} />
                    <div className="flex justify-between items-center w-full">
                        <Link to="/user" className="text-lg flex items-center font-[FallingSkyRegular] text-[#909190] py-4 px-4 bg-[#F2F2F2] border-[0.1px] border-[#c5c5c5] hover:bg-white duration-300 mb-3"><FontAwesomeIcon icon={faArrowLeft} className="pr-2"></FontAwesomeIcon>Back to Profile</Link>
                        <button onClick={onSubmit} className="text-lg flex items-center font-[FallingSkyRegular] text-white py-4 px-4 bg-black border-[0.1px] hover:bg-[#2A2A2A] hover:border-[#2A2A2A] duration-300 border-black mb-3">{isSubmitting ? <FontAwesomeIcon className="text-2xl" icon={faSpinner} spin></FontAwesomeIcon> : <FontAwesomeIcon icon={faCheck} className="pr-2"></FontAwesomeIcon>}<span className="ml-2">Update Profile</span></button>
                    </div>
                </>
                    : <div className="w-full h-[calc(75vh-20rem)] flex justify-center items-center"><FontAwesomeIcon className="text-3xl" icon={faSpinner} spin></FontAwesomeIcon></div>}
            </div>
        </div>
    );
}
export default EditProfile;