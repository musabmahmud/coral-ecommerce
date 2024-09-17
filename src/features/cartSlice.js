import { createSlice } from "@reduxjs/toolkit";


const cartAvail = localStorage.getItem("cartItems");

const initialState = {
    cartItems: cartAvail ? JSON.parse(cartAvail) : [],
    cartQuantity: 0,
    cartTotal: 0,
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);

            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity = action.payload.cartQuantity;
            }
            else {
                state.cartItems.push(action.payload);
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
    }
})

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;