import React from "react";
import ProductsView from "./ProductsView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ProductModel from "./ProductModel";
import ColorOption from "./ColorOption";
function ProductDetails() {
    return (
        <div className="flex flex-col justify-center items-center pt-16 sm:px-24">
            <div className="flex flex-col w-full px-14 py-10">
                <Link to="/Shop" className="self-start p-5">
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span className="font-[AwanZaman] text-2xl pl-2">Back to Shop</span>
                </Link>
                <div className="flex border-[0.1px] border-solid border-[#c5c5c5]">
                    <div className="flex flex-col w-[160px] border-r-[0.1px] border-solid border-[#c5c5c5]">
                        <ProductModel imgsrc="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7"></ProductModel>
                        <ProductModel imgsrc="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7"></ProductModel>
                    </div>
                    <div className="flex justify-center items-center bg-[#F8F8F8]">
                        <img className="box-content" src="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7"></img>
                    </div>
                    <div className="flex flex-col py-5 px-8 items-start w-2/5">
                        <br></br>
                        <h6 className="font-[AwanZaman] font-semibold text-base text-[#818181]">Bomb</h6>
                        <h1 className="font-[MaiseeMedium] text-4xl mb-4">Burnikk</h1>
                        <p className="text-left font-[AwanZaman] font-semibold text-[#4A4A4A] mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat similique dicta nulla praesentium deserunt. Corporis repellendus deleniti dolores eligendi.</p>
                        <hr className="w-full my-5" />
                        <form className="flex flex-col w-full items-start">
                            <label for="lens" className="font-[AwanZaman] font-semibold text-sm text-[#818181] tracking-wider mb-4">Lens Width and Frame Size</label>
                            <select id="lens" className="w-full px-3 py-2 border-[0.1px] border-solid border-[#c5c5c5] rounded-md mb-4">
                                <option>28mm</option>
                                <option>36mm</option>
                                <option>42mm</option>
                            </select>
                            <label for="color" className="font-[AwanZaman] font-semibold text-sm text-[#818181] tracking-wider">Choose Color</label>
                            <div className="flex justify-between w-2/3 my-4 relative">
                                <ColorOption></ColorOption>
                                <ColorOption></ColorOption>
                                <ColorOption></ColorOption>
                                <ColorOption></ColorOption>
                                <ColorOption></ColorOption>
                                <ColorOption></ColorOption>
                                <ColorOption></ColorOption>
                            </div>
                            <h1 className="font-[MaiseeMedium] text-4xl my-5">$240.00</h1>
                            <Link className="text-lg font-[AwanZaman] text-white py-1 px-4 bg-black border-2 border-black hidden lg:block mb-3" to="">Add to Basket</Link>
                        </form>
                    </div>
                </div>
            </div>
            <ProductsView link="/Recommended" section="Recommended Products"></ProductsView>
        </div>
    );
}
export default ProductDetails;