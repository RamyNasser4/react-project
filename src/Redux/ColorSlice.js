import { createSlice } from "@reduxjs/toolkit";

export const ColorSlice = createSlice({
    name: 'color',
    initialState : {
        selectedColor : "",
        selectedColorHex : ""
    },
    reducers : {
        updateColor : (state,action) =>{
            state.selectedColor = action.payload.color;
            state.selectedColorHex = action.payload.hex;
        }
    }
});
export const {updateColor} = ColorSlice.actions;
export default ColorSlice.reducer;