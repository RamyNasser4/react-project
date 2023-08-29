import React from "react";
import { Component } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
class ProductCard extends Component{
    constructor(props){
        super(props);
    }
    state = {
        classes : classNames({ 
            'duration-200':true,
            'scale-95':false,
            'scale-90':true
        }),
        isPicLoaded : false
    }
    HandleHoverin = () =>{
        this.setState({classes : classNames({ 
            'duration-200':true,
            'scale-95':true,
            'scale-90':false
        })});
    }
    HandleHoverout = () =>{
        this.setState({classes : classNames({ 
            'duration-200':true,
            'scale-95':false,
            'scale-90':true
        })});
    }
    HandleLoad = () =>{
        this.setState({isPicLoaded : true});
        console.log(this.state);
    }
    render(){
        return(
            <>
            <Link to={`/Product/${this.props.id}`} className="w-full border-2" onMouseEnter={this.HandleHoverin} onMouseLeave={this.HandleHoverout}>
                <div className="bg-[#F1F1F1] flex justify-center items-center w-full min-h-[247px]">
                    {this.state.isPicLoaded ? null : <FontAwesomeIcon className="text-3xl" icon={faSpinner} spin />}
                    <img onLoad={this.HandleLoad} src={this.props.imgsrc} className={this.state.classes}></img>
                </div>
                <div className="flex items-start flex-col p-5">
                    <div className="font-[MaiseeMedium] text-2xl">{this.props.Name}</div>
                    <div className="font-[GlasgowItalic] text-[#818181] font-medium">{this.props.desc}</div>
                </div>
            </Link>
            </>
        );
    }
}
export default ProductCard;