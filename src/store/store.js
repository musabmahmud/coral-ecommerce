import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";
import { productApi } from "../features/productsApi";

const store = configureStore({
    reducer: {
        products: productReducer,
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware)
});

export default store