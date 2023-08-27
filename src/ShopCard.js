import classNames from "classnames";
import React, { Component } from "react";
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
            'bg-[#F1F1F1]': true,
            'flex': true,
            'justify-center': true,
            'items-center': true,
            'w-fit': true,
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
        buttoncontent : null
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
                'bg-[#F1F1F1]': true,
                'flex': true,
                'justify-center': true,
                'items-center': true,
                'w-fit': true,
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
                'h-24' : true,
                'transition-[height]' : true,
                'bg-[#F1F1F1]': true,
                'flex': true,
                'justify-center': true,
                'items-center': true,
                'w-fit': true
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
    shouldComponentUpdate(nextProps,nextState){
        if(nextState.normalimg === this.state.normalimg){
            return false;
        }else{
            return true;
        }
    }
    render() {
        return (
            <>
                <a className="w-fit border-[0.1px] h-60 flex flex-col overflow-y-hidden duration-1000" onMouseEnter={this.HandleHoverin} onMouseLeave={this.HandleHoverout}>
                    <div className={this.state.normalimgcontainer}>
                        <img className={this.state.normalimg} src={this.props.imgsrc}></img>
                    </div>
                    <div className="flex justify-around items-center flex-col p-3 grow">
                        <div className="font-[MaiseeMedium] text-xs font-semibold">{this.props.Name}</div>
                        <div className="font-[GlasgowItalic] text-[#BCBCBC] text-xs font-semibold mb-6">{this.props.desc}</div>
                        <div className="font-[MaiseeMedium] text-sm font-semibold">{this.props.price}</div>
                    </div>
                    <div className={this.state.normalbutton}>
                        Add to basket
                    </div>
                </a>
            </>
        );
    }

}
export default ShopCard;