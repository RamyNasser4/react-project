import { createSlice } from "@reduxjs/toolkit";

export const SizeSlice = createSlice({
    name : 'Size',
    initialState : {
        selectedSize : "28mm"
    },
    reducers : {
        updateSize : (state,action) =>{
            state.selectedSize = action.payload;
        }
    }
});
export const {updateSize} = SizeSlice.actions;
export default SizeSlice.reducer;