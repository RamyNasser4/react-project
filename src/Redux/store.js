import { configureStore } from '@reduxjs/toolkit';
import ImageSlice from './ImageSlice';
import ColorSlice from './ColorSlice';
import BasketSlice from './BasketSlice';

const store = configureStore({
    reducer : {
        Image : ImageSlice,
        Color : ColorSlice,
        Basket : BasketSlice
    }
})
export default store;