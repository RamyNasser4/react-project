import React from "react";
import { useDispatch } from "react-redux";
import ShopPreview from "../../Components/Previews/ShopPreview";
import ProductsView from "../../Components/Previews/ProductsView";
import { closeBasket, updateClickable } from "../../Redux/BasketSlice";
function Featured() {
    const dispatch = useDispatch();
    dispatch(closeBasket(false));
    dispatch(updateClickable(true));
    window.scrollTo({
        top: 0
    });
    return (
        <div className="flex flex-col justify-center items-center pt-16 sm:px-24">
            <ShopPreview Featured={true}></ShopPreview>
            <ProductsView Featured={true}></ProductsView>
        </div>
    );
}
export default Featured;