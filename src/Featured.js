import React from "react";
import ShopPreview from "./ShopPreview";
import ProductsView from "./ProductsView";
function Featured() {
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