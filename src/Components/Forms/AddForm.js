import React, { useEffect, useRef, useState } from "react";
import { useAuthHeader } from "react-auth-kit";
import axios from "../../axios";
import MultipleSelect from "../Admin/multiselect";
import { useNavigate } from "react-router-dom";
function AddForm(props){
    const [colors,setColors] = useState([]);
    const [color, setColorName] = React.useState([]);
    const [name,setName] = useState("");
    const [invalidName,setInvalidName] = useState(false);
    const [imageFile,setImageFile] = useState(null);
    const imageInput = useRef();
    const [invalidImage,setInvalidImage] = useState(false);
    const [collection,setCollection] = useState("");
    const [invalidCollection,setInvalidCollection] = useState(false);
    const [price,setPrice] = useState("");
    const [invalidPrice,setInvalidPrice] = useState(false);
    const [details,setDetails] = useState("");
    const [invalidDetails,setInvalidDetails] = useState(false);
    const authheader = useAuthHeader();
    const navigate = useNavigate();
    useEffect(()=>{
        try{
            axios.get("http://127.0.0.1:8000/api/colors",{
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-type": "Application/json",
                    Authorization: `Bearer ${authheader()}`,
                    'Accept': "application/json"
                }
            }).then(res => {
                setColors(res.data.colors);
            })
        }catch(err){
            console.log(err);
        }
    },[])
    const checkName = (e) => {
        setName(e.target.value);
        if (e.target.value == "") {
            setInvalidName(true);
        } else {
            setInvalidName(false);
        }
    }
    const checkImage = (e) => {
        console.log(e.target.files.length);
        if(e.target.files.length){
            setImageFile(e.target.files[0]);
        }else{
            setInvalidImage(true);
        }
    }
    const checkCollection = (e) => {
        setCollection(e.target.value);
        if (e.target.value == "") {
            setInvalidCollection(true);
        } else {
            setInvalidCollection(false);
        }
    }
    const checkPrice = (e) => {
        setPrice(e.target.value);
        if (e.target.value == "") {
            setInvalidPrice(true);
        } else {
            setInvalidPrice(false);
        }
    }
    const checkDetails = (e) => {
        setDetails(e.target.value);
        if (e.target.value == "") {
            setInvalidDetails(true);
        } else {
            setInvalidDetails(false);
        }
    }
    const handleSubmit = () =>{
        console.log(imageFile);
        if(name!="" && imageFile && collection!="" && price!="" && details!=""){
            try{
                axios.post("http://127.0.0.1:8000/api/newproduct",{name : name,image : imageFile,collection_name : collection,price : price,details : details,colors : color},{
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Content-type": "multipart/form-data",
                        Authorization: `Bearer ${authheader()}`,
                        'Accept': "application/json"
                    }
                }).then(res => {
                    console.log(res);
                    navigate("/admin/products");
                })
            }catch(err){
                console.log(err);
            }
        }
    }
    return(
        <div style={props.style} className="flex flex-col items-start 2xl:w-1/3">
            <div className="font-[MaiseeMedium] text-4xl my-5">New Product</div>
            <label style={{ color: invalidName ? 'red' : '#7C7F7F' }} htmlFor="name" className="font-[AwanZaman] text-xl font-semibold pl-2 pb-2">{invalidName ? "A name is required" : "Product Name"}</label>
            <input style={{borderColor : invalidName ? 'red' : null}} onChange={checkName} id="name" type="text" placeholder="Enter your product name" className="font-[AwanZaman] text-xl font-semibold border-[1px] border-solid border-[#c5c5c5] w-full py-[0.40rem] px-4 mb-5 placeholder:font-semibold placeholder:text-[#9D9D9D]"></input>
            <label style={{ color: invalidImage ? 'red' : '#7C7F7F' }} htmlFor="image" className="font-[AwanZaman] text-xl font-semibold pl-2 pb-2">{invalidImage ? "An image is required" : "Product Image"}</label>
            <input ref={imageInput} onInput={checkImage} className="mb-5 file:bg-black file:border-[0.1px] file:text-white file:py-4 file:px-3 file:mr-10 file:font-[AwanZaman] file:font-semibold file:text-xl" id="image" type="file" ></input>
            <label style={{ color: invalidCollection ? 'red' : '#7C7F7F' }} htmlFor="collection" className="font-[AwanZaman] text-xl font-semibold pl-2 pb-2">{invalidCollection ? "A collection is required" : "Product Collection"}</label>
            <input style={{borderColor : invalidCollection ? 'red' : null}} onChange={checkCollection} id="collection" type="text" placeholder="Enter your product collection" className="font-[AwanZaman] text-xl font-semibold border-[1px] border-solid border-[#c5c5c5] w-full py-[0.40rem] px-4 mb-5 placeholder:font-semibold placeholder:text-[#9D9D9D]"></input>
            <label style={{ color: invalidPrice ? 'red' : '#7C7F7F' }} htmlFor="price" className="font-[AwanZaman] text-xl font-semibold pl-2 pb-2">{invalidPrice ? "A price is required" : "Product Price"}</label>
            <input style={{borderColor : invalidPrice ? 'red' : null}} onChange={checkPrice} id="price" type="number" placeholder="Enter your product price" className="font-[AwanZaman] text-xl font-semibold border-[1px] border-solid border-[#c5c5c5] w-full py-[0.40rem] px-4 mb-5 placeholder:font-semibold placeholder:text-[#9D9D9D]"></input>
            <label style={{ color: invalidDetails ? 'red' : '#7C7F7F' }} htmlFor="details" className="font-[AwanZaman] text-xl font-semibold pl-2 pb-2">{invalidDetails ? "Product details are required" : "Product Details"}</label>
            <textarea style={{borderColor : invalidDetails ? 'red' : null}} onChange={checkDetails} id="details" maxLength={255} type="text" placeholder="Enter your product details" className="font-[AwanZaman] text-xl font-semibold border-[1px] min-h-[3rem] max-h-[7rem] border-solid border-[#c5c5c5] w-full py-[0.40rem] px-4 mb-5 placeholder:font-semibold placeholder:text-[#9D9D9D]"></textarea>
            <label htmlFor="colors" className="font-[AwanZaman] text-xl font-semibold pl-2 pb-2">Product Colors</label>
            <MultipleSelect colors={colors} color={color} setColorName={setColorName}></MultipleSelect>
            <button onClick={handleSubmit} className="py-4 px-6 text-white bg-black hover:bg-[#1E1E1E] duration-300 font-medium font-[FallingSkyRegular] text-base my-5">Add Product</button>
        </div>
    );
}
export default AddForm;