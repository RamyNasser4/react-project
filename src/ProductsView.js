import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import axios from "axios";
function ProductsView(props) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        if (props.section == "Recommended Products" || props.Recommended) {
            axios.get("http://127.0.0.1:8000/api/products/recommended").then(res => {
                setProducts(res.data);
            })
        }else{
            axios.get("http://127.0.0.1:8000/api/products/featured").then(res => {
                setProducts(res.data);
            })
        }
    }, []);
    return (
        <div className="w-full px-14 py-10 mt-20">
            {props.Featured || props.Recommended ? null : <div className="flex justify-between w-full items-center mb-8">
                <h1 className="font-[MaiseeMedium] text-3xl max-w-[50%] text-left">{props.section}</h1>
                <Link className="font-[TyfoonSans] text-lg underline" to={props.link}>See all</Link>
            </div>}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-8 w-full">
                {props.Featured || props.Recommended ? products.map((item) => {
                    const imgs = item.image.split(',');
                    return <ProductCard Name={item.name} desc={item.collection_name} price={`$${item.price}`} imgsrc={imgs[0]} key={item.id} id={item.id}></ProductCard>
                }) : products.slice(0,6).map((item) => {
                    const imgs = item.image.split(',');
                    return <ProductCard Name={item.name} desc={item.collection_name} price={`$${item.price}`} imgsrc={imgs[0]} key={item.id} id={item.id}></ProductCard>
                })}
            </div>
        </div>
    );
}
export default ProductsView;