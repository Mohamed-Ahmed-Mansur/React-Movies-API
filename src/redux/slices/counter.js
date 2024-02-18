import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {counter:0},
    reducers: {
        changeCounter: (state,action) =>{
            state.counter += action.payload;
        },
        incrementCounter: (state) =>{
            state.counter++;
        },
        decrementCounter: (state) =>{
            state.counter--;
        },
    }
});

export const { changeCounter, incrementCounter, decrementCounter } = counterSlice.actions;
export default counterSlice.reducer;