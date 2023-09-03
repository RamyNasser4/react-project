import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { Link, NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { controlBasket } from "./Redux/BasketSlice";
import Cookies from "js-cookie";
import ProfileDropdown from "./ProfileDropdown";
class Header extends Component {
    constructor(props){
        super(props);
    }
    state = {
        Headeractive: false
    }
    classes = classNames({
        'bg-white': true,
        'flex-col': true,
        'items-start': true,
        'duration-100': true,
        'overflow-hidden' :true,
        'leading-none': true,
        'invisible' : true,
        'p-0': true,
        'h-0' : true,
        'flex': false,
    });
    active = classNames({
        'bg-white': true,
        'flex-col': true,
        'items-start': true,
        'duration-1000': true,
        'overflow-hidden' :true,
        'leading-none': true,
        'p-4' : true,
        'h-fit' : true,
        'flex': true,
    });
    navclasses = classNames({
        'text-xl': true,
         'font-[AwanZaman]' : true,
         'text-white': true
    });
    navactive = classNames({
        'text-xl': true,
         'font-[AwanZaman]' : true
    });
    onClickBar = () => {
        if (this.state.Headeractive) {
            this.setState({ Headeractive: false });
        } else {
            this.setState({ Headeractive: true });
        }
    }
    onClickBag = () =>{
        const { dispatch } = this.props;                
        dispatch(controlBasket());
    }
    render() {
        return (
            <div className="w-[100%] flex flex-col fixed z-10">
                <div className="w-[100%] px-8 py-2 flex justify-between bg-white ">
                    <div className="w-[30%] flex justify-between items-center align-middle">
                        <a className="text-4xl mt- py-2 px-3 font-[AwanZaman]">Logo</a>
                        <NavLink exact to="/" className="text-lg py-2 px-3 hover:bg-[#F5F5F5] duration-300 font-[AwanZaman] hidden sm:block">Home</NavLink>
                        <NavLink to="/Shop" className="text-lg py-2 px-3 hover:bg-[#F5F5F5] duration-300 font-[AwanZaman] hidden sm:block">Shop</NavLink>
                        <NavLink to="/Featured" className="text-lg py-2 px-3 hover:bg-[#F5F5F5] duration-300 font-[AwanZaman] hidden sm:block">Featured</NavLink>
                        <NavLink to="/Recommended" className="text-lg py-2 px-3 hover:bg-[#F5F5F5] duration-300 font-[AwanZaman] hidden sm:block">Recommended</NavLink>
                    </div>
                    <div className=" lg:w-[20%] xl:w-[16%] 2xl:w-[13%] flex justify-between items-center">
                        <FontAwesomeIcon icon={faBagShopping} onClick={this.onClickBag} className="text-2xl" />
                        <FontAwesomeIcon icon={faBars} className="text-2xl lg:hidden px-4" onClick={this.onClickBar} />
                        {Cookies.get('_auth') ?<ProfileDropdown></ProfileDropdown>  :<><Link className="text-lg font-[AwanZaman] text-white py-1 px-4 bg-black border-2 border-black hidden lg:block cursor-pointer" to="/Signup">Sign up</Link>
                        <Link className="text-lg font-[AwanZaman] text-[#907F7D] py-1 px-4 bg-[#F2F2F2] border-2 hidden lg:block cursor-pointer" to="/Signin">Sign in</Link></>}
                    </div>
                </div>
                <div className={this.state.Headeractive ? this.active : this.classes}>
                    <NavLink to="/" className={this.state.Headeractive ? this.navactive : this.navclasses}>Home</NavLink>
                    <NavLink to="/Signin" className={this.state.Headeractive ? this.navactive : this.navclasses}>Sign in</NavLink>
                    <NavLink to="/Signup" className={this.state.Headeractive ? this.navactive : this.navclasses}>Sign up</NavLink>
                    <NavLink to="/Shop" className={this.state.Headeractive ? this.navactive : this.navclasses}>Shop</NavLink>
                    <NavLink to="/Featured" className={this.state.Headeractive ? this.navactive : this.navclasses}>Featured</NavLink>
                    <NavLink to="/Recommended" className={this.state.Headeractive ? this.navactive : this.navclasses}>Recommended</NavLink>
                </div>
            </div>

        );
    }

}
export default connect()(Header);