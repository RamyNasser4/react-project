import React from "react";
import { Component } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
class ProductCard extends Component{
    constructor(props){
        super(props);
    }
    state = {
        classes : classNames({ 
            'duration-200':true,
            'scale-95':false,
            'scale-90':true
        })
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
    render(){
        return(
            <>
            <Link to="/Product" className="w-fit border-2" onMouseEnter={this.HandleHoverin} onMouseLeave={this.HandleHoverout}>
                <div className="bg-[#F1F1F1] w-fit">
                    <img src={this.props.imgsrc} className={this.state.classes}></img>
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