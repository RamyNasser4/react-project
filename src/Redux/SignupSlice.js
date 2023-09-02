import { createSlice } from "@reduxjs/toolkit";

export const SignupSlice = createSlice({
    name : 'Signup',
    initialState : {
        name : "",
        email : "",
        password : "",
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
        }  
    }
});
export const {updateName,updateEmail,updatePassword} = SignupSlice.actions;
export default SignupSlice.reducer;