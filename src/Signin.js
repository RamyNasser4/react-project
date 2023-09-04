import React from "react";
import AuthCard from "./AuthCard";
import { useDispatch } from "react-redux";
import { updateClickable } from "./Redux/BasketSlice";
function Signin() {
    const dispatch = useDispatch();
    dispatch(updateClickable(false));
    return (
        <div className="py-[15vh] w-full flex justify-center">
          <AuthCard signin={true} title="Sign in to website"></AuthCard>
        </div>
    );
}
export default Signin;