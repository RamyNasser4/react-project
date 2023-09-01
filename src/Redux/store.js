import { configureStore } from '@reduxjs/toolkit';
import ImageSlice from './ImageSlice';
import ColorSlice from './ColorSlice';
import BasketSlice from './BasketSlice';
import SizeSlice from './SizeSlice';

const store = configureStore({
    reducer : {
        Image : ImageSlice,
        Color : ColorSlice,
        Size : SizeSlice,
        Basket : BasketSlice
    }
})
export default store;