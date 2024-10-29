import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (!existingItem) {
        state.cartItems.push(action.payload);
        Swal.fire({
          icon: "success",
          title: "Book added to the Cart",
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        Swal.fire({
            title: "Already Added",
            text: "Click on 'OK' to Continue",
            icon: "warning",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "OK"
          })
      }
    },
    removeFromCart: (state, action) => {
        state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id)
    },
    clearCart: (state) => {
        state.cartItems = []
    }
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
