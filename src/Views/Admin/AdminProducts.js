import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useState } from "react";
import AddForm from "../../Components/Forms/AddForm";
function AdminProducts() {
    const [active,setActive] = useState("addProduct");
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
                                        {true ? <> <div className="font-[MaiseeMedium] text-4xl text-left my-5">Products</div>
                                            <div className="w-1/2 flex justify-between items-center my-5">
                                                <div className="flex relative bottom-[-2px]">
                                                    <div onClick={() => { setActive("addProduct") }} style={active == "addProduct" ? { color: "#F9F9F9", backgroundColor: "#2A2A2A"} : null} className="font-[AwanZaman] mx-3 font-semibold text-white border-b-transparent border-b-[1px] border-b-solid hover:bg-[#2A2A2A] bg-black duration-300 cursor-pointer text-xl px-3 py-4">Add product</div>
                                                    <div onClick={() => { setActive("editProduct") }} style={active == "editProduct" ? { color: "#F9F9F9", backgroundColor: "#2A2A2A"} : null} className="font-[AwanZaman] mx-3 font-semibold text-white hover:bg-[#2A2A2A] bg-black duration-300 cursor-pointer text-xl px-3 py-4">Edit product</div>
                                                    <div onClick={() => { setActive("deleteProduct") }} style={active == "deleteProduct" ? { color: "#F9F9F9", backgroundColor: "#2A2A2A"} : null} className="font-[AwanZaman] mx-3 font-semibold text-white hover:bg-[#2A2A2A] bg-black duration-300 cursor-pointer text-xl px-3 py-4">Delete product</div>
                                                </div>
                                            </div>
                                            <AddForm style={active!="addProduct" ? {display : "none"} : null}></AddForm></> : <div className="flex justify-center items-center w-full h-full">{/* <FontAwesomeIcon className="text-4xl" icon={faSpinner} spin></FontAwesomeIcon> */}</div>}
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
export default AdminProducts;