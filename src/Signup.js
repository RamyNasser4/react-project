import React from "react";
import AuthCard from "./AuthCard";
function Signup() {
    return (
        <div className="py-[15vh] w-full flex justify-center">
            <AuthCard signin={false} title="Sign up to website"></AuthCard>
        </div>
    );
}
export default Signup;