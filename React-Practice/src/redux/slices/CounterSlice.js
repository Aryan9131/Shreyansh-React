import { createSlice } from "@reduxjs/toolkit";
const initialState={
    counter:0
}
const CounterSlice=createSlice({
    initialState,
    name :'Counter',
    reducers:{
        increment:function(state, action){
            console.log('increment action called !');
            state.counter++;
        },
        decrement:function(state, action){
            console.log("decrement action called !");
            state.counter--;
        },
    }
})

export const {increment, decrement} = CounterSlice.actions;
export default CounterSlice.reducer