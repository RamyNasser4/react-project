import { createSlice } from "@reduxjs/toolkit";

export const SigninSlice = createSlice({
    name : 'Signin',
    initialState : {
        email : "",
        password : "",
        valid : false
    },
    reducers : {
        IupdateEmail : (state,action) =>{
            state.email = action.payload;
        },
        IupdatePassword : (state,action) => {
            state.password = action.payload;
        },
        IupdateValid : (state,action) =>{
            state.valid = action.payload;
        }  
    }
})
export const {IupdateEmail,IupdatePassword,IupdateValid} = SigninSlice.actions;
export default SigninSlice.reducer;