import { createSlice } from "@reduxjs/toolkit";

export const SignupSlice = createSlice({
    name : 'Signup',
    initialState : {
        name : "",
        email : "",
        password : "",
        valid : false
    },
    reducers : {
        updateName : (state,action) => {
            state.name = action.payload;
        },
        updateEmail : (state,action) => {
            state.email = action.payload;
        },
        updatePassword : (state,action) => {
            state.password = action.payload;
        },
        updateValid : (state,action) =>{
            state.valid = action.payload;
        }  
    }
});
export const {updateName,updateEmail,updatePassword,updateValid} = SignupSlice.actions;
export default SignupSlice.reducer;