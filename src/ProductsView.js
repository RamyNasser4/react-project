import React from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
function ProductsView(props) {
    return (
        <div className="w-full px-14 py-10 mt-20">
            {props.Featured || props.Recommended ? null :<div className="flex justify-between w-full items-center mb-8">
                <h1 className="font-[MaiseeMedium] text-3xl max-w-[50%] text-left">{props.section}</h1>
                <Link className="font-[TyfoonSans] text-lg underline" to={props.link}>See all</Link>
            </div>}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-8 w-full">
                <ProductCard Name="Burnikk" desc="Bomb" imgsrc="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7"></ProductCard>
                <ProductCard Name="Kibal Batal" desc="Kibal black" imgsrc="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540"></ProductCard>
                <ProductCard Name="Very Nice" desc="Salt maalat" imgsrc="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a"></ProductCard>
                <ProductCard Name="Buldit" desc="Salt maalat" imgsrc="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYVPdTsyxJybMCsdKpXhq?alt=media&token=23d7673c-a0bf-4dcb-89f1-8482446b56be"></ProductCard>
                <ProductCard Name="Balakubak" desc="Betsin Malaat" imgsrc="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYZ7LM3vZjWbIIJH2tgEb?alt=media&token=5e722063-a792-4502-9f6e-c3df1581aa9c"></ProductCard>
                <ProductCard Name="Tiktilaok Manok" desc="Bomb" imgsrc="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FbS1hHdO7NvbR1yN5ZPlR?alt=media&token=809a3249-f83d-4aec-b134-34a65ce2ce10"></ProductCard>
                {props.Featured ? <><ProductCard Name="Kutu" desc="Bomb" imgsrc="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2Fc0cvo2QXFMX1wO7EpvQC?alt=media&token=7115b501-723c-4fd3-9c00-e709ad38bd8a"></ProductCard>
                <ProductCard Name="Quake Overload" desc="Yezyow" imgsrc="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FcLGc3mcbZrK3Tl3yJ3xW?alt=media&token=44f74e92-f2ca-4af3-82f6-7a3bcace7f7a"></ProductCard></> : null}
            </div>
        </div>
    );
}
export default ProductsView;