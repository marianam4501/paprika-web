import { createSlice } from "@reduxjs/toolkit";
import { userReducers } from "./Reducers";
import { onPostLoginFullfiled, onPostLoginRejected, postLogin } from "./Requests/postLogin";

const userSlice = createSlice({
    name: 'recipe',
    initialState: {
        user: null,
        userIsLoggedIn: false,
        errorMessage: "",
        users: null,
    },
    reducers: userReducers,
    extraReducers(builder) {
        builder
            .addCase(postLogin.fulfilled, onPostLoginFullfiled)
            .addCase(postLogin.rejected, onPostLoginRejected)
    }
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
