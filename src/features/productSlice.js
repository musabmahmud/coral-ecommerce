import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async (id = null, { rejectWithValue }) => {
        try {
            const response = await axios.get(`/products.json`)
            return response.data;
        }
        catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)

const initialState = {
    items: [],
    status: null,
    error: null,
    loading: 'idle'
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(productsFetch.fulfilled, (state, action) => {
            // Add user to the state array
            state.status = "success";
            state.items = action.payload;
        });
        builder.addCase(productsFetch.pending, (state, action) => {
            // Add user to the state array
            state.status = "pending"
        });
        builder.addCase(productsFetch.rejected, (state, action) => {
            // Add user to the state array
            state.status = "rejected"
        });
    }

})

export default productsSlice.reducer