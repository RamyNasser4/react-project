import React from "react";
import HomePreview from "./HomePreview";
import ProductsView from "./ProductsView";
function Home(){
return(
    <div className="flex flex-col justify-center items-center pt-16 sm:px-24">
        <HomePreview></HomePreview>
        <ProductsView link="/Featured" section="Featured Products"></ProductsView>
        <ProductsView link="/Recommended" section="Recommended Products"></ProductsView>
    </div>
);
}
export default Home;