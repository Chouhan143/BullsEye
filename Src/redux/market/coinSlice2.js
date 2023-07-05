import { createSlice } from "@reduxjs/toolkit";
const initialState =[];
const coinSlice2 = createSlice({
    name:'card2',
    initialState,
    reducers: {
        addCardItem(state,action){
            state.push(action.payload);
        },
        removeCartItem(state,action){
            return state.filter((item,index) => index !== action,payload);
        }
    }
})

export const {addCardItem,removeCartItem} = coinSlice2.actions;
export default coinSlice2.reducer;