import { createSlice } from "@reduxjs/toolkit";

export const BasketSlice = createSlice({
    name : 'Basket',
    initialState : {
        visible : false
    },
    reducers : {
        controlBasket : (state) =>{
            state.visible = !state.visible;
        }
    }
});
export const {controlBasket} = BasketSlice.actions;
export default BasketSlice.reducer;