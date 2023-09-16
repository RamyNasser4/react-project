import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { togglePopup } from "../../Redux/DeleteSlice";
function ProductComponent(props){
    const dispatch = useDispatch();
    const handleDelete = () =>{
        dispatch(togglePopup(props.id));
        document.body.style.overflow = "hidden";
    }
    return(
        <>
           <div className="text-left border-[0.1px] px-2 py-3">{props.id}</div>
           <div className="text-left border-[0.1px] px-2 py-3">{props.name}</div>
           <div className="text-left border-[0.1px] px-2 py-3">${props.price}</div>
           <div className="text-left border-[0.1px] px-2 py-3">{props.collection}</div>
           <div className="flex text-left border-[0.1px] px-2 py-3 items-center justify-around"><Link to={`/admin/product/edit/${props.id}`} className=" bg-blue-600 rounded-md cursor-pointer px-2 py-1"><FontAwesomeIcon className="text-white" icon={faPen} /></Link><div onClick={handleDelete} className="bg-red-600 rounded-md cursor-pointer px-2 py-1"><FontAwesomeIcon className="text-white" icon={faTrash} /></div></div>
        </>
    );
}
export default ProductComponent;