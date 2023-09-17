import React from "react";
import HomePreview from "../../Components/Previews/HomePreview";
import ProductsView from "../../Components/Previews/ProductsView";
import { useDispatch } from "react-redux";
import { closeBasket, updateClickable } from "../../Redux/BasketSlice";
function Home() {
    const dispatch = useDispatch();
    dispatch(closeBasket(false));
    dispatch(updateClickable(true));
    return (
        <div className="flex flex-col justify-center items-center pt-16 sm:px-24">
            <HomePreview></HomePreview>
            <ProductsView link="/Featured" section="Featured Products"></ProductsView>
            <ProductsView link="/Recommended" section="Recommended Products"></ProductsView>
        </div>
    );
}
export default Home;