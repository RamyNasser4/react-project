import React from "react";
import AuthCard from "./AuthCard";
import { useDispatch } from "react-redux";
import { updateClickable } from "./Redux/BasketSlice";
function Signup() {
    const dispatch = useDispatch();
    dispatch(updateClickable(false));
    return (
        <div className="py-[15vh] w-full flex justify-center">
            <AuthCard signin={false} title="Sign up to website"></AuthCard>
        </div>
    );
}
export default Signup;