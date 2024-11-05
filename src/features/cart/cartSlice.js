import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //cart:[]
  pizzaId: 12,
  name: "Mediterranean",
  quantity: 2,
  unitePrice: 16,
  totalPrice: 32,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //payload = newItem
      state.cart.push(action.payload);
    },

    deleteItem(state, action) {
      // payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },

    increaseQuantityItem(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizza === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitePrice;
    },

    decreaseQuantityItem(state, action) {
      // payload = pizzaId
      const item = state.cart.find((item) => item.pizza === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.unitePrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseQuantityItem,
  decreaseQuantityItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
