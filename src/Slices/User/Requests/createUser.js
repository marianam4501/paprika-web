import { createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk('users/createUser', async (user) => {
    const createUserFetch = await fetch(`https://paprika-api.herokuapp.com/users/`, {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            password: user.password, 
            profile_picture: user.value
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

export const onPostCreateUserFullfiled = (state, action) => {
    if (action.payload.error) {
        state.userIsLoggedIn = false;
        state.user = null;
        state.errorMessage = action.payload.message;
        state.success = false;
    } else {
        state.userIsLoggedIn = false;
        state.user = action.payload;
        state.success = true;
    }
};

export const onPostCreateUserRejected = (state) => {
    state.userIsLoggedIn = false;
    state.user = null;
    state.success = false;
}