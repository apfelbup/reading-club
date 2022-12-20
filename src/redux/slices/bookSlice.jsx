import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState ={
    items:[]
}

export const bookSlice = createSlice({
    name:'books',
    initialState,
    reducers:{
        addItem(state, action){
            const findItem = state.items.find((obj)=> obj.id === action.payload.id);
            if(!findItem){
                state.items.push({...action.payload});
            }
        },
        removeItem(state, action){
            state.items =  state.items.filter(obj=>obj.id!==action.payload);
        }
    }

})

export const {addItem, removeItem} = bookSlice.actions;
export default bookSlice.reducer;