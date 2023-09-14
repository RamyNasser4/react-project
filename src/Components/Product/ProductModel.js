import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import { updateImage } from "../../Redux/ImageSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
function ProductModel(props){
    const [isPicLoaded,setIsPicLoaded] = useState(false);
    const dispatch = useDispatch();
    const handleClick = () =>{
        dispatch(updateImage(props.imgsrc));
    }
    const HandleLoad = () =>{
        setIsPicLoaded(true);
        console.log(isPicLoaded);
    }
    return(
        <div onClick={handleClick} className="flex cursor-pointer justify-center items-center w-full max-w-[160px] min-h-[100px] h-full lg:h-[100px] border-x-[0.1px] md:border-y-[0.1px] border-solid border-[#c5c5c5] mb-1">
            {isPicLoaded ? null : <FontAwesomeIcon icon={faSpinner} spin />}
            <img onLoad={HandleLoad} src={props.imgsrc} className="box-content"></img>
        </div>
    );
}
export default ProductModel;