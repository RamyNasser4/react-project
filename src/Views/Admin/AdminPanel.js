import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import axios from "../../axios";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
function AdminPanel() {
    const [Loaded, setLoaded] = useState(false);
    const [userCount,setUserCount] = useState(0);
    const [productCount,setProductCount] = useState(0);
    useEffect(() => {
        const token = Cookies.get("_auth");
        try {
            axios.get("http://127.0.0.1:8000/api/usercount",{
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-type": "Application/json",
                    Authorization: `Bearer ${token}`,
                    'Accept': "application/json"
                }
            }).then(res => {
                setUserCount(res.data);
            })
        } catch (err) {
            console.log(err);
        }
        try {
            axios.get("http://127.0.0.1:8000/api/productcount",{
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-type": "Application/json",
                    Authorization: `Bearer ${token}`,
                    'Accept': "application/json"
                }
            }).then(res => {
                setProductCount(res.data);
                setLoaded(true);
            })
        } catch (err) {
            console.log(err);
        }
    },[])
    return (
        <>
            {/*  <!-- component -->
            <!-- This is an example component --> */}
            <div>
                <div class="flex overflow-hidden bg-white pt-16">
                    <Sidebar></Sidebar>
                    <div class="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
                    <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
                        <main>
                            <div class="py-6 px-4">
                                <div class="w-full ">
                                    <div class="bg-white w-full h-[calc(100vh-78px-2rem)] shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                                        {Loaded ?<> <div className="font-[MaiseeMedium] text-4xl text-left my-5 font-black">Website Dashboard</div>
                                        <div className="flex flex-col justify-between items-start w-1/2">
                                            <div className="flex flex-col items-start my-5">
                                                <div className="font-[FallingSkyRegular] text-3xl font-semibold ">Number of Products</div>
                                                <div className="font-[FallingSkyRegular] text-3xl mt-5 ">{productCount}</div>
                                            </div>
                                            <div className="flex flex-col items-start my-5">
                                                <div className="font-[FallingSkyRegular] text-3xl font-semibold ">Number of Users</div>
                                                <div className="font-[FallingSkyRegular] text-3xl mt-5 ">{userCount}</div>
                                            </div>
                                        </div></> : <div className="flex justify-center items-center w-full h-full"><FontAwesomeIcon className="text-4xl" icon={faSpinner} spin></FontAwesomeIcon></div>}
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <script async defer src="https://buttons.github.io/buttons.js"></script>
                <script src="https://demo.themesberg.com/windster/app.bundle.js"></script>
            </div>
        </>
    );
}
export default AdminPanel;