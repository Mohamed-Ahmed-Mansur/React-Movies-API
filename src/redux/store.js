import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";
import favoriteReducer from "./slices/fav";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        favorite: favoriteReducer
    }
});
export default store;