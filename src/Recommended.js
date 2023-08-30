import React from "react";
import ShopPreview from "./ShopPreview";
import ProductsView from "./ProductsView";
function Recommended(){
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