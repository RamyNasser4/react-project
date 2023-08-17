import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
function HomePreview() {
    return (
        <div className="flex bg-[#F3F3F3]">
            <div className="flex flex-col justify-between items-start p-10">
                <h1 className="font-[AwanZaman] text-6xl w-1/2">
                    <strong>See</strong> everything with <strong>Clarity</strong>
                </h1>
                <p className="font-[AwanZaman] text-xl text-[#4A4A4A] text-left">Buying eyewear should leave you happy and good-looking, with money in your pocket. Glasses, sunglasses, and contacts—we’ve got your eyes covered.</p>
                <a className="py-3 px-4 bg-black font-bold font-[AwanZaman] text-xl">
                    <span className="pr-2 text-white">Shop Now</span>
                    <FontAwesomeIcon icon={faArrowRight} className="text-white" />
                </a>
            </div>
            <img src="https://salinaka-ecommerce.web.app/images/banner-girl.789f1fa6f451ad26c5039fcbc049ace7.png" className="w-1/2 h-1/2" ></img>
        </div>

    );
}
export default HomePreview;