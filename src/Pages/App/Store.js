import {configureStore} from "@reduxjs/toolkit"
import useReducer  from "../../Slices/userSlice"

export default configureStore({
    reducer:{
        user:useReducer,
    },

});
