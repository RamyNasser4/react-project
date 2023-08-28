import React from "react";
import {useDispatch} from 'react-redux';
import { updateImage } from "./Redux/ImageSlice";
function ProductModel(props){
    const dispatch = useDispatch();
    const handleClick = () =>{
        dispatch(updateImage(props.imgsrc));
    }
    return(
        <div onClick={handleClick} className="flex cursor-pointer justify-center items-center w-full max-w-[160px] min-h-[100px] h-full lg:h-[100px] border-x-[0.1px] md:border-y-[0.1px] border-solid border-[#c5c5c5] mb-1">
            <img src={props.imgsrc} className="box-content"></img>
        </div>
    );
}
export default ProductModel;