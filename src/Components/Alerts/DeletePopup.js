import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { togglePopup } from "../../Redux/DeleteSlice";
import axios from "../../axios";
import { useAuthHeader } from "react-auth-kit";
function DeletePopup() {
    const visible = useSelector(state => state.Delete.visible);
    const id = useSelector(state => state.Delete.id);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authheader = useAuthHeader();
    const handleClick = () => {
        document.body.style.overflow = "";
        dispatch(togglePopup());
    }
    const handleDelete = () => {
        try {
            axios.delete(`http://127.0.0.1:8000/api/deleteproduct/${id}`,{
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-type": "multipart/form-data",
                    Authorization: `Bearer ${authheader()}`,
                    'Accept': "application/json"
                }
            }).then(res => {
                document.body.style.overflow = "";
                dispatch(togglePopup(null));
                navigate('/admin/products');
            });
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div style={visible ? { opacity: 1, zIndex: 60 } : { opacity: 0, zIndex: -5 }} className="flex justify-center items-center fixed w-screen h-screen bg-[rgb(255,255,255,0.75)] duration-300">
            <div style={visible ? { transform: "scale(1)" } : { transform: "scale(0)" }} className="flex flex-col justify-center items-center p-5 shadow-xl bg-white h-60 rounded-md border-2 duration-700">
                <div className="font-[AwanZaman] text-[#4A4A4A] text-2xl font-semibold mb-10">Are you sure you want to delete this product?</div>
                <div className="flex justify-between items-center">
                    <button onClick={handleClick} className="text-lg font-[AwanZaman] text-[#907F7D] py-2 px-4 bg-[#F2F2F2] hover:bg-[#E1E1E1] cursor-pointer duration-300 border-[0.1px] mr-10">Back to products</button>
                    <Link onClick={handleDelete} className="flex items-center text-xl font-[AwanZaman] text-white py-2 px-4 bg-red-600 hover:bg-red-500 hover:border-red-500 cursor-pointer duration-300 border-[0.1px] border-red-600" to="/Signin">Delete</Link>
                </div>
            </div>
        </div>
    );
}
export default DeletePopup;