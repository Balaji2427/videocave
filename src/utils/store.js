import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import categorySlice from "./categorySlice";
import searchSlice from "./searchSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice,
        categories: categorySlice,
    },
});


export default store;