import React from "react";
import HomePreview from "./HomePreview";
import ProductsView from "./ProductsView";
import { useDispatch } from "react-redux";
import { closeBasket, updateClickable } from "./Redux/BasketSlice";
import Cookies from "js-cookie";
function Home() {
    const dispatch = useDispatch();
    dispatch(closeBasket(false));
    dispatch(updateClickable(true));
    console.log(Cookies.get('_auth'));
    return (
        <div className="flex flex-col justify-center items-center pt-16 sm:px-24">
            <HomePreview></HomePreview>
            <ProductsView link="/Featured" section="Featured Products"></ProductsView>
            <ProductsView link="/Recommended" section="Recommended Products"></ProductsView>
        </div>
    );
}
export default Home;