import { createSlice } from "@reduxjs/toolkit";
import { userReducers } from "./Reducers";
import { onPostLoginFullfiled, onPostLoginRejected, postLogin } from "./Requests/postLogin";
import { onPostCreateUserFullfiled ,  onPostCreateUserRejected, createUser } from "./Requests/createUser";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        userIsLoggedIn: false,
        errorMessage: "",
    },
    reducers: userReducers,
    extraReducers(builder) {
        builder
            .addCase(postLogin.fulfilled, onPostLoginFullfiled)
            .addCase(postLogin.rejected, onPostLoginRejected)
            .addCase(createUser.fulfilled, onPostCreateUserFullfiled)
            .addCase(createUser.rejected, onPostCreateUserRejected)
    }
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
