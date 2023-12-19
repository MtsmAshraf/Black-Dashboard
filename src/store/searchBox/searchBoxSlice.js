import { createSlice } from "@reduxjs/toolkit";
const initialState = { value: false }


const searchBoxSlice = createSlice({
    name: 'searchBox',
    initialState, // means initialState: initialState,
    reducers: {
        toggleSearch: (state) => {
            state.value = !state.value;
        }
    }, 
  })
  
export const { toggleSearch } = searchBoxSlice.actions;
export default searchBoxSlice.reducer;