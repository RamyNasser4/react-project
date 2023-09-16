import { createSlice } from "@reduxjs/toolkit";

export const DeleteSlice = createSlice({
    name : 'Delete',
    initialState : {
        visible : false,
        id : null
    },
    reducers : {
        togglePopup : (state,action) =>{
            state.visible = !state.visible;
            state.id = action.payload;
        }   
    }
});
export const {togglePopup} = DeleteSlice.actions;
export default DeleteSlice.reducer;