import { configureStore } from '@reduxjs/toolkit';
import ImageSlice from './ImageSlice';

const store = configureStore({
    reducer : {
        Image : ImageSlice
    }
})
export default store;