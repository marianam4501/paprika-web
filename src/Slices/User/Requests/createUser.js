import { createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk('usuarios/createUser', async (user) => {
    const createUserFetch = await fetch(`https://paprika-api.herokuapp.com/users/login`, {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            password: user.password,  

        }),
    });
    const userData = await createUserFetch.json();
    if (createUserFetch.status === 200) {
        return userData;
    } else {
        return {
            error: true,
            message: userData.error.message,
        }
    }
});

export const onPostLoginFullfiled = (state, action) => {
    if (action.payload.error) {
        state.userIsLoggedIn = false;
        state.user = null;
        state.errorMessage = action.payload.message;
    } else {
        state.userIsLoggedIn = true;
        state.user = action.payload;
    }
};

export const onPostLoginRejected = (state) => {
    state.userIsLoggedIn = false;
    state.user = null;
}