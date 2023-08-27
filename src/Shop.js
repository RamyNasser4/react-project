import React, { Component, useEffect, useState } from "react";
import ShopCard from "./ShopCard";
import axios from "axios";
function Shop(){
    const [products,setProducts] = useState([]);
    useEffect(() =>{
        axios.get("http://127.0.0.1:8000/api/products").then(res => {
            setProducts(res.data);
            console.log(products);
        });
    },[]);
        return (
            <div className="grid gap-3 grid-cols-[repeat(auto-fit,minmax(160px,1fr))] py-[15vh] px-28">
                {products.map((item) => {
                    return <ShopCard Name={item.name} desc={item.collection_name} price={`$${item.price}`} imgsrc={item.image} key={item.id}></ShopCard>
                })}
            </div>
        );
    }

/* } */
export default Shop;