import { createAsyncThunk } from "@reduxjs/toolkit";


export const postLogin = createAsyncThunk('users/postLogin', async (credentials) => {

    console.log(credentials.email );

    const loginFetch = await fetch(`https://paprika-api.herokuapp.com/users/login`, {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
        }),
     
    });   
    const userData = await loginFetch.json();
    if (loginFetch.status === 200) {
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
        state.userToken = action.payload.token;
    }
};

export const onPostLoginRejected = (state) => {
    state.userIsLoggedIn = false;
    state.user = null;
}