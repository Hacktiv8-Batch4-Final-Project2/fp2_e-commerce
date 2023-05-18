import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    isLoading: false,
}

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        // console.log(response.data);
        return response.data;
    } catch (error) {
        throw Error(error);
    }
});

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false;
            console.log("Error", action.error.message);
        })
    },
});

export default productSlice.reducer;