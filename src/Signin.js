import React from "react";
import AuthCard from "./AuthCard";
function Signin() {
    return (
        <div className="py-[15vh] w-full flex justify-center">
          <AuthCard signin={true} title="Sign in to website"></AuthCard>
        </div>
    );
}
export default Signin;