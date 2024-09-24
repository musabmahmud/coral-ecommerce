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
        removeFromCart(state, action) {
            const nextCartItems = state.cartItems.filter(
                item => item.id !== action.payload.id
            )
            state.cartItems = nextCartItems;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        cartQuantityIncrement(state, action) {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity = action.payload.cartQuantity;
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            }
        },
        cartQuantityDecrement(state, action) {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity = action.payload.cartQuantity;
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            }
        },
        clearCart(state, action) {
            state.cartItems = []
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        getTotal(state, action) {
            state.cartItems.reduce(() => { }, {
                total: 0,
                quantity: 0, 
            })
        }
    }
})

export const { addToCart, removeFromCart, cartQuantityIncrement, cartQuantityDecrement, clearCart } = cartSlice.actions;

export default cartSlice.reducer;