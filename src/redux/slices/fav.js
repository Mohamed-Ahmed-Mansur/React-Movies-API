import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: "favorite",
    initialState: {favorite:[]},
    reducers: {
        pushItem(state, action) {
            return {
              ...state,
              favorite: [...state.favorite, action.payload]
            };
        },
        removeItem(state, action) {
            return {
                ...state,
                favorite: state.favorite.filter(item => item !== action.payload)
            };
        }
    }
});

export const { pushItem, removeItem } = favoriteSlice.actions;
export default favoriteSlice.reducer;