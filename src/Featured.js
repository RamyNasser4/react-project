import React from "react";
import ShopPreview from "./ShopPreview";
import ProductsView from "./ProductsView";
import { useDispatch } from "react-redux";
import { closeBasket, updateClickable } from "./Redux/BasketSlice";
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