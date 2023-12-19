import { createSlice } from "@reduxjs/toolkit";
const initialState = { value: false }


const sideBarSlice = createSlice({
    name: 'sideBar',
    initialState, // means initialState: initialState,
    reducers: {
        toggle: (state) => {
            state.value = !state.value;
        }
    }, 
  })
  
export const { toggle } = sideBarSlice.actions;
export default sideBarSlice.reducer;