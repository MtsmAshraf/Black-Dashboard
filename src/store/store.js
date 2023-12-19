import {configureStore} from '@reduxjs/toolkit';
import sidebarReducer from "./sidebar/sideBarSlice";
import searchBoxReducer from "./searchBox/searchBoxSlice";

const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        searchBox: searchBoxReducer,
    },
})

export default store;