import { createSlice } from "@reduxjs/toolkit";

export const AlertSlice = createSlice({
    name : 'Alert',
    initialState : {
        visible : false
    },
    reducers : {
        toggleAlert : (state) =>{
            state.visible = !state.visible;
        }
    }
});
export const {toggleAlert} = AlertSlice.actions;
export default AlertSlice.reducer; 
