import React, { useEffect, useState } from "react";
import ProductsView from "./ProductsView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link,useParams } from "react-router-dom";
import ProductModel from "./ProductModel";
import ColorOption from "./ColorOption";
import axios from "axios";
function ProductDetails() {
    const [product,setProduct] = useState([]);
    let {id} = useParams();
    useEffect(() =>{
        axios.get(`http://127.0.0.1:8000/api/products/${id}`).then(res =>{
            setProduct(res.data);
            console.log(product);
        });
    },[id]);
    return (
        <div className="flex flex-col justify-center items-center pt-16 sm:px-24">
            <div className="flex flex-col w-full px-14 py-10">
                <Link to="/Shop" className="self-start p-5">
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span className="font-[AwanZaman] text-2xl pl-2">Back to Shop</span>
                </Link>
                <div className="flex border-[0.1px] border-solid border-[#c5c5c5] flex-wrap">
                    <div className="flex w-full lg:flex-col lg:w-[160px] border-b-[0.1px] lg:border-r-[0.1px] border-solid border-[#c5c5c5] p-[0.6rem]">
                        {/* <ProductModel imgsrc="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7"></ProductModel>
                        <ProductModel imgsrc="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7"></ProductModel> */}
                        <ProductModel imgsrc={product.image}></ProductModel>
                    </div>
                    <div className="flex justify-center items-center w-full lg:w-auto bg-[#F8F8F8]">
                        <img className="box-content" src={product.image}></img>
                    </div>
                    <div className="flex  flex-col py-5 px-8 items-start w-full lg:w-2/5">
                        <br></br>
                        <h6 className="font-[AwanZaman] font-semibold text-base text-[#818181]">{product.collection_name}</h6>
                        <h1 className="font-[MaiseeMedium] text-4xl mb-4">{product.name}</h1>
                        <p className="text-left font-[AwanZaman] font-semibold text-[#4A4A4A] mt-2">{product.details}</p>
                        <hr className="w-full my-5" />
                        <form className="flex flex-col w-full items-start">
                            <label htmlFor="lens" className="font-[AwanZaman] font-semibold text-sm text-[#818181] tracking-wider mb-4">Lens Width and Frame Size</label>
                            <select id="lens" className="w-full px-3 py-2 border-[0.1px] border-solid border-[#c5c5c5] rounded-md mb-4">
                                <option>28mm</option>
                                <option>36mm</option>
                                <option>42mm</option>
                            </select>
                            <label htmlFor="color" className="font-[AwanZaman] font-semibold text-sm text-[#818181] tracking-wider">Choose Color</label>
                            <div className="flex justify-between w-2/3 my-4 relative">
                                <ColorOption></ColorOption>
                                <ColorOption></ColorOption>
                                <ColorOption></ColorOption>
                                <ColorOption></ColorOption>
                                <ColorOption></ColorOption>
                                <ColorOption></ColorOption>
                                <ColorOption></ColorOption>
                            </div>
                            <h1 className="font-[MaiseeMedium] text-4xl my-5">${product.price}</h1>
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