import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user:null,
        userIsLoggedIn: false,
        },
    reducers:{
        login: (state,action) =>{
            state.userIsLoggedIn = true;
            state.user  = action.payload.user;
            state.user = {
                id:1,
                name: 'César',
                email:'cesar.lopezurena@ucr.ac.cr'
            }
        },
        logOut:(state) => {
            state.userIsLoggedIn = false;
            state.user = null; 
        },
    },

});

 export const {login,logOut} = userSlice.actions;

 export default userSlice.reducer;