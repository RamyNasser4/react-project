import { createSlice } from "@reduxjs/toolkit";

export const BasketSlice = createSlice({
    name : 'Basket',
    initialState : {
        visible : false,
        products : [],
        total : 0
    },
    reducers : {
        controlBasket : (state) =>{
            state.visible = !state.visible;
        },
        closeBasket : (state,action) =>{
            state.visible = action.payload
        },
        addtoBasket : (state,action) =>{
            state.products.push(action.payload);
            state.total += +(action.payload.price);
        },
        RemoveFromBasket : (state,action) => {
            state.total -= state.products[action.payload].quantity *( +(state.products[action.payload].price));
            state.products = state.products.filter(item => item!=state.products[action.payload])
        },
        clearBasket : (state) =>{
            state.products = [];
            state.total = 0;
        },
        IncQuantity : (state,action) => {
            state.products[action.payload].quantity++;
            state.total += +(state.products[action.payload].price);
        },
        DecQuantity : (state,action) =>{
            state.products[action.payload].quantity--;
            state.total -= +(state.products[action.payload].price);
        }

    }
});
export const {controlBasket,closeBasket,addtoBasket,RemoveFromBasket,clearBasket,IncQuantity,DecQuantity} = BasketSlice.actions;
export default BasketSlice.reducer;