import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react"
import { useAuthUser } from "react-auth-kit";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
function Profile() {
    const auth = useAuthUser();
    const [Loaded, setLoaded] = useState(false);
    const [isPicLoaded, setIsPicLoaded] = useState(false);
    const [profileImgUrl, setProfileImgUrl] = useState("");
    const [coverImgUrl, setCoverImgUrl] = useState("");
    const [user, setUser] = useState("");
    let id  = auth().id;
    const [active, setActive] = useState("Account");
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
                    setUser(res.data);
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
                    console.log(res.data);
                    setLoaded(true);
                })
            } catch (err) {

            }
        }
        getData();
    }, [id]);
    const HandleLoad = () => {
        setIsPicLoaded(true);
    }
    return (
        <div className="flex flex-col justify-center items-center py-40 sm:px-24">
            {Loaded ? <> <div className="flex w-1/2 bg-[#F2F2F2] border-[0.1px] border-[#c5c5c5]" >
                <div className="flex relative bottom-[-2px]">
                    <div onClick={() => { setActive("Account") }} style={active == "Account" ? { color: "#4A4A4A", backgroundColor: "white", borderBottom: "1px solid white" } : null} className="font-[AwanZaman] font-semibold text-[#818381] border-b-transparent border-b-[1px] border-b-solid hover:bg-[#F9F9F9] duration-300 cursor-pointer ml-8 text-xl px-3 py-4">Account</div>
                    <div onClick={() => { setActive("My Wish List") }} style={active == "My Wish List" ? { color: "#4A4A4A", backgroundColor: "white", borderBottom: "1px white" } : null} className="font-[AwanZaman] font-semibold text-[#818381] hover:bg-[#F9F9F9] duration-300 cursor-pointer text-xl px-3 py-4">My Wish List</div>
                    <div onClick={() => { setActive("My Orders") }} style={active == "My Orders" ? { color: "#4A4A4A", backgroundColor: "white", borderBottom: "1px white" } : null} className="font-[AwanZaman] font-semibold text-[#818381] hover:bg-[#F9F9F9] duration-300 cursor-pointer text-xl px-3 py-4">My Orders</div>
                </div>
            </div>
                {active == "Account" ? <div className="flex border-[0.1px] border-[#c5c5c5] flex-col p-4 bg-white w-1/2 items-start pb-20">
                    <img onLoad={HandleLoad} className="h-40 w-full" src={coverImgUrl}></img>
                    {isPicLoaded ? null : <div className="h-40 w-[50vw] sm:w-[calc(((100vw-12rem)*0.5)-2.5rem)] absolute top-[calc(14.75rem+4px)] flex justify-center items-center bg-[#F2F2F2]"><FontAwesomeIcon className="text-3xl" icon={faSpinner} spin></FontAwesomeIcon></div>}
                    <div className="flex justify-between items-center px-2 relative bottom-12 w-full">
                        <img onLoad={HandleLoad} className="box-content object-cover w-[100px] h-[100px] rounded-full border-2 border-white" src={profileImgUrl}></img>
                        {isPicLoaded ? null : <div className="w-[100px] h-[100px] absolute rounded-full flex justify-center items-center bg-[#F2F2F2]"><FontAwesomeIcon className="text-2xl" icon={faSpinner} spin></FontAwesomeIcon></div>}
                        <Link to={`/user/edit`} className="text-sm font-[FallingSkyRegular] text-white py-[0.7rem] px-4 bg-black border-2 border-black mb-3">Edit Account</Link>
                    </div>
                    <div className="flex flex-col items-start w-full px-5">
                        <div className="font-[AwanZaman] text-4xl my-4 text-[#1A1A1A]">{user.name}</div>
                        <p className="font-[AwanZaman] text-lg text-[#6D6C6D]">Email</p>
                        <p className="font-[FallingSkyRegular] text-base text-[#1A1A30] my-4">{user.email}</p>
                        <p className="font-[AwanZaman] text-lg text-[#6D6C6D]">Address</p>
                        <p className="font-[FallingSkyRegular] text-base text-[#818381] my-4"><i>{user.address}</i></p>
                        <p className="font-[AwanZaman] text-lg text-[#6D6C6D]">Mobile</p>
                        <p className="font-[FallingSkyRegular] text-base text-[#818381] my-4"><i>{user.phone_number}</i></p>
                        <p className="font-[AwanZaman] text-lg text-[#6D6C6D]">Date Joined</p>
                        <p className="font-[FallingSkyRegular] text-base text-[#1A1A30] my-4">{user.created_at.split("T")[0]}</p>
                    </div>
                </div> : active == "My Wish List" ? <div className="flex justify-center items-center border-[0.1px] border-[#c5c5c5] p-5 w-1/2">
                    <div className="flex justify-center items-center w-full h-full bg-[#F2F2F2] min-h-[calc(80vh-2.5rem)]">
                        <div className="flex flex-col ">
                            <div className="font-[AwanZaman] font-semibold mb-6 text-2xl">My Wish List</div>
                            <div className="font-[AwanZaman] font-semibold text-[#818181]">You don't have a wish list</div>
                        </div>
                    </div>
                </div> : <div className="flex justify-center items-center border-[0.1px] border-[#c5c5c5] p-5 w-1/2">
                    <div className="flex justify-center items-center w-full h-full bg-[#F2F2F2] min-h-[calc(80vh-2.5rem)]">
                        <div className="flex flex-col ">
                            <div className="font-[AwanZaman] font-semibold mb-6 text-2xl">My Orders</div>
                            <div className="font-[AwanZaman] font-semibold text-[#818181]">You don't have any orders</div>
                        </div>
                    </div>
                </div>} </> : <div className="w-full h-[calc(75vh-20rem)] flex justify-center items-center"><FontAwesomeIcon className="text-3xl" icon={faSpinner} spin></FontAwesomeIcon></div>}
        </div >

    );
}
export default Profile;