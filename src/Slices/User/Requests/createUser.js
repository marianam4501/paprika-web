import { createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk('users/createUser', async (user,photo) => {
    /*
    const form = new FormData();
    form.append('file', photo);
    const uploadFetch = await fetch('https://paprika-api.herokuapp.com/upload', {
        method: 'POST',
        body: form,
    }); 
    const uploadData = await uploadFetch.json();
    user.profile_picture = uploadData.url;
    */
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
            profile_picture: "https://ci0137.s3.amazonaws.com/paprika/nathan.jpg", 
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
    } else {
        state.userIsLoggedIn = true;
        state.user = action.payload;
    }
};

export const onPostCreateUserRejected = (state) => {
    state.userIsLoggedIn = false;
    state.user = null;
}