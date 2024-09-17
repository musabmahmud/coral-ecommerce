import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";
import { productApi } from "../features/productsApi";
import cartReducer from "../features/cartSlice";

const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware)
});

export default store