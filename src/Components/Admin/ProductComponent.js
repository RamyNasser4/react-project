import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
function ProductComponent(props){
    return(
        <>
           <div className="text-left border-[0.1px] px-2 py-3">{props.id}</div>
           <div className="text-left border-[0.1px] px-2 py-3">{props.name}</div>
           <div className="text-left border-[0.1px] px-2 py-3">${props.price}</div>
           <div className="text-left border-[0.1px] px-2 py-3">{props.collection}</div>
           <div className="flex text-left border-[0.1px] px-2 py-3 items-center justify-around"><Link to={`/admin/product/edit/${props.id}`} className=" bg-blue-600 rounded-md cursor-pointer px-2 py-1"><FontAwesomeIcon className="text-white" icon={faPen} /></Link><div className="bg-red-600 rounded-md cursor-pointer px-2 py-1"><FontAwesomeIcon className="text-white" icon={faTrash} /></div></div>
        </>
    );
}
export default ProductComponent;