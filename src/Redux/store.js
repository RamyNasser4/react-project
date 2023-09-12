import { configureStore } from '@reduxjs/toolkit';
import ImageSlice from './ImageSlice';
import ColorSlice from './ColorSlice';
import BasketSlice from './BasketSlice';
import SizeSlice from './SizeSlice';
import AlertSlice from './AlertSlice';
import SignupSlice from './SignupSlice';
import SigninSlice from './SigninSlice';
import AuthSlice from './AuthSlice';
import PopupSlice from './PopupSlice';

const store = configureStore({
    reducer : {
        Signup : SignupSlice,
        Signin : SigninSlice,
        Auth : AuthSlice,
        Image : ImageSlice,
        Color : ColorSlice,
        Size : SizeSlice,
        Basket : BasketSlice,
        Alert : AlertSlice,
        Popup : PopupSlice
    }
})
export default store;