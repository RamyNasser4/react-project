import React from "react";
function ProductModel(props){
    return(
        <div className="flex justify-center items-center w-full h-[100px] border-y-[0.1px] border-solid border-[#c5c5c5] mb-1">
            <img src={props.imgsrc} className="box-content"></img>
        </div>
    );
}
export default ProductModel;