import { createSlice } from "@reduxjs/toolkit";

export const SigninSlice = createSlice({
    name : 'Signin',
    initialState : {
        email : "",
        password : ""
    },
    reducers : {
        IupdateEmail : (state,action) =>{
            state.email = action.payload;
        },
        IupdatePassword : (state,action) => {
            state.password = action.payload;
        }
    }
})
export const {IupdateEmail,IupdatePassword} = SigninSlice.actions;
export default SigninSlice.reducer;