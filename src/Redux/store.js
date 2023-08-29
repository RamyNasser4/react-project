import { configureStore } from '@reduxjs/toolkit';
import ImageSlice from './ImageSlice';
import ColorSlice from './ColorSlice';

const store = configureStore({
    reducer : {
        Image : ImageSlice,
        Color : ColorSlice
    }
})
export default store;