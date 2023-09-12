import { createSlice } from "@reduxjs/toolkit";

export const PopupSlice = createSlice({
    name : 'Popup',
    initialState : {
        visible : false
    },
    reducers : {
        togglePopup : (state) =>{
            state.visible = !state.visible;
        }   
    }
});
export const {togglePopup} = PopupSlice.actions;
export default PopupSlice.reducer;