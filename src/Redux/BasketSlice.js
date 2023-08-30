import { createSlice } from "@reduxjs/toolkit";

export const BasketSlice = createSlice({
    name : 'Basket',
    initialState : {
        visible : false
    },
    reducers : {
        controlBasket : (state) =>{
            state.visible = !state.visible;
        },
        closeBasket : (state,action) =>{
            state.visible = action.payload
        }
    }
});
export const {controlBasket,closeBasket} = BasketSlice.actions;
export default BasketSlice.reducer;