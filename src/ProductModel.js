import React from "react";
function ProductModel(props){
    return(
        <div className="flex justify-center items-center w-full max-w-[160px] min-h-[100px] h-full lg:h-[100px] border-x-[0.1px] md:border-y-[0.1px] border-solid border-[#c5c5c5] mb-1">
            <img src={props.imgsrc} className="box-content"></img>
        </div>
    );
}
export default ProductModel;