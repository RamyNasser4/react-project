import React from "react";
import ShopCard from "./ShopCard";
function Shop(){
    return(
        <div className="grid gap-3 grid-cols-[repeat(auto-fit,minmax(160px,1fr))] py-[15vh] px-28">
            <ShopCard Name="Kulangot" desc="Salt" price="$67.00" imgsrc="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYIZuxWur1W4fAT6z3ejk?alt=media&token=7dca264f-c345-4cfc-93a8-60217a53f66a"></ShopCard>
            <ShopCard Name="Tiktilaok Manok" desc="Bomb" price="$78.00" imgsrc="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FbS1hHdO7NvbR1yN5ZPlR?alt=media&token=809a3249-f83d-4aec-b134-34a65ce2ce10"></ShopCard>
            <ShopCard Name="Very Nice" desc="Salt malaat" price="$79.00" imgsrc="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FLIu8tS4yHSU28Xi8BXCj?alt=media&token=31e796ad-dbd6-4e4f-a8a9-192f5158684a"></ShopCard>
            <ShopCard Name="Quake Overload" desc="Yezyow" price="$80.00" imgsrc="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FcLGc3mcbZrK3Tl3yJ3xW?alt=media&token=44f74e92-f2ca-4af3-82f6-7a3bcace7f7a"></ShopCard>
            <ShopCard Name="Kutu" desc="Bomb" price="$129.00" imgsrc="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2Fc0cvo2QXFMX1wO7EpvQC?alt=media&token=7115b501-723c-4fd3-9c00-e709ad38bd8a"></ShopCard>
            <ShopCard Name="Tuluk" desc="Black Kibal" price="$142.00" imgsrc="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FJzaakhGgN8w2AU2My470?alt=media&token=92c7e2f7-77b4-416c-b415-5842418c3dc0"></ShopCard>
            <ShopCard Name="Balakubak" desc="Betsin Malaat" price="$170.00" imgsrc="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYZ7LM3vZjWbIIJH2tgEb?alt=media&token=5e722063-a792-4502-9f6e-c3df1581aa9c"></ShopCard>
            <ShopCard Name="Pitaklan" desc="Black Kibal" price="$174.00" imgsrc="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FaubOenOJu42CNp4zXTLX?alt=media&token=1d5fd281-b9cc-499b-94a5-225273b1eabc"></ShopCard>
            <ShopCard Name="Burnikk" desc="Bomb" price="$240.00" imgsrc="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2F7l3FMZqY8JdfssalDgx2?alt=media&token=be15689c-e12c-4829-9d78-32395ef1e3f7"></ShopCard>
            <ShopCard Name="Sipon Malapot" desc="salt" price="$250.00" imgsrc="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYjDAQSbkSZlartelhFyV?alt=media&token=9b0bdd5e-eb91-4d99-a52f-298c12879fa3"></ShopCard>
            <ShopCard Name="Buldit" desc="Salt Malaat" price="$250.00" imgsrc="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYVPdTsyxJybMCsdKpXhq?alt=media&token=23d7673c-a0bf-4dcb-89f1-8482446b56be"></ShopCard>
            <ShopCard Name="Kibal Batal" desc="Kibal Black" price="$674.00" imgsrc="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540"></ShopCard>
        </div>
    );
}
export default Shop;