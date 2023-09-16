import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useState } from "react";
import ProductComponent from "../../Components/Admin/ProductComponent";
import { faArrowLeft, faPlus, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function AdminProducts() {
    const [Loaded, setLoaded] = useState(false);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/products").then(res => {
            setProducts(res.data.products);
            setLoaded(true);
        });
    }, []);
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
                                    <div class="bg-white w-full shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                                        {Loaded ? <><div className="w-full flex justify-between items-center"><div className="font-[MaiseeMedium] text-4xl text-left my-5">Products</div><Link to="/admin/dashboard" className="lg:hidden text-left">
                                            <FontAwesomeIcon icon={faArrowLeft} />
                                            <span className="font-[AwanZaman] text-2xl pl-2">Back to Dashboard</span>
                                        </Link></div>
                                            <Link to="/admin/newproduct" className="flex justify-end items-center px-4 py-2">
                                                <div className="cursor-pointer font-[AwanZaman] font-semibold text-xl flex items-center"><FontAwesomeIcon className="pr-2" icon={faPlus} />Add new product</div>
                                            </Link>
                                            <div className="w-full grid grid-cols-5">
                                                <div className="text-left border-[0.1px] px-2 py-3">ID</div>
                                                <div className="text-left border-[0.1px] px-2 py-3">Name</div>
                                                <div className="text-left border-[0.1px] px-2 py-3">Price</div>
                                                <div className="text-left border-[0.1px] px-2 py-3">Collection name</div>
                                                <div className="text-left border-[0.1px] px-2 py-3">Actions</div>
                                                {products.map((item) => {
                                                    return <ProductComponent name={item.name} collection={item.collection_name} price={item.price} key={item.id} id={item.id}></ProductComponent>
                                                })}
                                            </div> </> : <div className="flex justify-center items-center w-full h-[calc(100vh-78px-2rem)]"><FontAwesomeIcon className="text-4xl" icon={faSpinner} spin></FontAwesomeIcon></div>}
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