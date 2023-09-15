import React from "react";
function AddForm(props){
    console.log(props.style)
    return(
        <div style={props.style} className="flex flex-col items-start 2xl:w-1/3">
            <div className="font-[MaiseeMedium] text-4xl my-5">New Product</div>
            <label htmlFor="name" className="font-[AwanZaman] text-xl font-semibold pl-2 pb-2">Product Name</label>
            <input id="name" type="text" placeholder="Enter your product name" className="font-[AwanZaman] font-semibold border-[1px] border-solid border-[#c5c5c5] w-full py-[0.40rem] px-4 mb-5 placeholder:font-semibold placeholder:text-[#9D9D9D]"></input>
            <label htmlFor="image" className="font-[AwanZaman] text-xl font-semibold pl-2 pb-2">Product Image</label>
            <input id="image" type="file" ></input>
        </div>
    );
}
export default AddForm;