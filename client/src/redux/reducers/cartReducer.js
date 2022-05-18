import * as actionTypes from "../constants/cart.constatnt";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;
      const isExist = state.cartItems.find((product) => product.id === item.id);
      if (isExist) return;
      return { ...state, cartItems: [...state.cartItems, item] };
    case actionTypes.REMOVE_FROM_CART:
      return { ...state, cartItems: state.cartItems.filter(product => product._id !== action.payload) };
    default:
      return state;
  }
};
