import React from "react";
import ProductsView from "../../Components/Previews/ProductsView";
import { useDispatch } from "react-redux";
import { closeBasket, updateClickable } from "../../Redux/BasketSlice";
import ShopPreview from "../../Components/Previews/ShopPreview";
function Recommended(){
    const dispatch = useDispatch();
    dispatch(closeBasket(false));
    dispatch(updateClickable(true));
    window.scrollTo({
        top: 0
    });
    return(
        <div className="flex flex-col justify-center items-center pt-16 sm:px-24">
            <ShopPreview></ShopPreview>
            <ProductsView Recommended={true}></ProductsView>
        </div>
    );
}
export default Recommended;