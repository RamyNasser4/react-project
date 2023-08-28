import {createSlice} from '@reduxjs/toolkit';
export const ImageSlice = createSlice({
    name : 'image',
    initialState : {
        selectedImage : ""
    },
    reducers : {
        updateImage : (state,action) =>{
            state.selectedImage = action.payload;
        }
    }
});
export const {updateImage} = ImageSlice.actions
export default ImageSlice.reducer;