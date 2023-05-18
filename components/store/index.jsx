import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import productReducer from "./reducers/Product";

export const store = configureStore({
    reducer: {
        products: productReducer,
    },
});

const makeStore = () => store;
export const wrapper = createWrapper(makeStore);