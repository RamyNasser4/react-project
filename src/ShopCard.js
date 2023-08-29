import classNames from "classnames";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
class ShopCard extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        normalimg: classNames({
            'duration-500' : true,
            'ease-in-out' : true,
            'scale-[0.8]': true,
            'scale-[0.6]': false
        }),
        normalimgcontainer: classNames({
            'overflow-y-hidden' : true,
            'duration-500' : true,
            'transition-[height]' : true,
            'overflow-x-hidden' : true,
            'bg-[#F1F1F1]': true,
            'flex': true,
            'justify-center': true,
            'items-center': true,
            'w-full': true,
            'h-24' : true
        }),
        normalbutton: classNames({
            'translate-y-6' : true,
            'duration-100': true,
            'font-[AwanZaman]': true,
            'font-semibold': true,
            'text-white': true,
            'bg-black': true,
            'flex': true,
            'justify-center': true,
            'items-center': true
        }),
        buttoncontent : null,
        isPicLoaded : false
    }
    HandleHoverin = () =>{
        this.setState({
            normalimg: classNames({
                'duration-500' : true,
                'ease-in-out' : true,
                'scale-75': false,
                'scale-[0.55]': true
            }),
            normalimgcontainer: classNames({
                'overflow-y-hidden' : true,
                'duration-500' : true,
                'transition-[height]' : true,
                'overflow-x-hidden' : true,
                'bg-[#F1F1F1]': true,
                'flex': true,
                'justify-center': true,
                'items-center': true,
                'w-full': true,
                'h-[4.5rem]' : true
                /* 'animate-[heightopen_0.6s_ease-in-out_forwards]' : true */
                
            }),
            normalbutton: classNames({
                'duration-200': true,
                'font-[AwanZaman]': true,
                'font-semibold': true,
                'text-white': true,
                'bg-black': true,
                'flex': true,
                'justify-center': true,
                'items-center': true,
                'grow' : true
            }),
        });
        setTimeout(() => {
            this.setState({
                buttoncontent :"Add to basket"
            })
        }, 300);
    }
    HandleHoverout = () =>{
        this.setState({
            normalimg: classNames({
                'duration-500' : true,
                'ease-in-out' : true,
                'scale-[0.8]': true,
                'scale-[0.6]': false
            }),
            normalimgcontainer: classNames({
                'overflow-y-hidden' : true,
                'duration-500' : true,
                'overflow-x-hidden' : true,
                'h-24' : true,
                'transition-[height]' : true,
                'bg-[#F1F1F1]': true,
                'flex': true,
                'justify-center': true,
                'items-center': true,
                'w-full': true
            }),
            normalbutton: classNames({
                'translate-y-6' : true,
                'duration-100': true,
                'font-[AwanZaman]': true,
                'font-semibold': true,
                'text-white': true,
                'bg-black': true,
                'flex': true,
                'justify-center': true,
                'items-center': true
            }),
        });
        setTimeout(() => {
            this.setState({
                buttoncontent :null
            })
        }, 50);
    }
    HandleLoad = () =>{
        this.setState({isPicLoaded : true});
        console.log(this.state);
    }
    render() {
        return (
            <>
                <a className="w-full border-[0.1px] h-60 flex flex-col overflow-y-hidden duration-1000" onMouseEnter={this.HandleHoverin} onMouseLeave={this.HandleHoverout}>
                    <Link to={`/Product/${this.props.id}`} className={this.state.normalimgcontainer}>
                        {this.state.isPicLoaded ? null : <FontAwesomeIcon icon={faSpinner} spin />}
                        <img onLoad={this.HandleLoad} className={this.state.normalimg} src={this.props.imgsrc}></img>
                    </Link>
                    <Link to={`/Product/${this.props.id}`} className="flex justify-around items-center flex-col p-3 grow">
                        <div className="font-[MaiseeMedium] text-xs font-semibold">{this.props.Name}</div>
                        <div className="font-[GlasgowItalic] text-[#BCBCBC] text-xs font-semibold mb-6">{this.props.desc}</div>
                        <div className="font-[MaiseeMedium] text-sm font-semibold">{this.props.price}</div>
                    </Link>
                    <div className={this.state.normalbutton}>
                        Add to basket
                    </div>
                </a>
            </>
        );
    }

}
export default ShopCard;