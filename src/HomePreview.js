import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
function HomePreview() {
    return (
        <div data-id id="View" className="flex bg-[#F3F3F3] w-full h-[30rem] sm:h-[25rem]">
            <div className="flex flex-col justify-between items-start p-10 md:w-1/2">
                <h1 className="font-[AwanZaman] text-6xl min-w-[20rem] w-1/2 text-left mt-8">
                    <strong>See</strong> everything with <strong>Clarity</strong>
                </h1>
                <p className="font-[AwanZaman] text-xl text-[#4A4A4A] text-left overflow-clip max-h-40">Buying eyewear should leave you happy and good-looking, with money in your pocket. Glasses, sunglasses, and contacts—we’ve got your eyes covered.</p>
                <Link to="/Shop" className="py-3 px-4 bg-black hover:bg-[#1E1E1E] duration-300 font-bold font-[AwanZaman] text-xl">
                    <span className="pr-2 text-white">Shop Now</span>
                    <FontAwesomeIcon icon={faArrowRight} className="text-white" />
                </Link>
            </div>
            <img className="box-content max-w-2xl w-1/2 hidden md:block" src="https://salinaka-ecommerce.web.app/images/banner-girl.789f1fa6f451ad26c5039fcbc049ace7.png" ></img>
        </div>

    );
}
export default HomePreview;