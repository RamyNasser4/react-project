import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
var cookie;
try {
    if (Cookies.get("_auth")) {
        cookie = true;
    } else {
        cookie = false;
    }
} catch (err) {
    console.log(err);
}
export const AuthSlice = createSlice({
    name: 'Auth',
    initialState: {
        authenticated: cookie
    },
    reducers: {
        updateAuth: (state) => {
            state.authenticated = !state.authenticated;
        }
    }
});
export const { updateAuth } = AuthSlice.actions;
export default AuthSlice.reducer;