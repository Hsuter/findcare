import { configureStore } from "@reduxjs/toolkit";
import  authReducer from "../features/authSlice";
import { loadUser,getUser } from "../features/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  }, 
});

store.dispatch(loadUser(null));


export default store;