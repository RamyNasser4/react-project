import { createSlice } from "@reduxjs/toolkit";

export const AlertSlice = createSlice({
    name : 'Alert',
    initialState : {
        visible : false,
        alertcontent : ""
    },
    reducers : {
        toggleAlert : (state) =>{
            state.visible = !state.visible;
        },
        updateContent : (state,action) => {
            state.alertcontent = action.payload;
        }
    }
});
export const {toggleAlert,updateContent} = AlertSlice.actions;
export default AlertSlice.reducer; 
